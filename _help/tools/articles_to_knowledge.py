import html
import os
import re
import sys
from html.parser import HTMLParser

SITE = "https://callforges.com/help/articles/"
KEEP_CASE = {"CallForges", "HubSpot", "Attio", "Pipedrive"}


def text(parts):
    return re.sub(r"\s+", " ", html.unescape("".join(parts or []))).strip()


class Article(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.sections = []
        self.lead = ""
        self.bufs = []
        self.kinds = []
        self.lists = []
        self.items = []
        self.table = None
        self.in_head = False
        self.p_class = []

    def out(self, line):
        self.sections[-1]["lines"].append(line)

    def indent(self):
        return "  " * max(len(self.lists) - 1, 0)

    def open_buf(self, kind):
        self.bufs.append([])
        self.kinds.append(kind)

    def close_buf(self):
        self.kinds.pop()
        return text(self.bufs.pop())

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "h2":
            self.sections.append({"id": a.get("id", ""), "title": "", "lines": []})
            self.open_buf("h2")
        elif tag == "h3":
            self.open_buf("h3")
        elif tag == "p":
            self.p_class.append(a.get("class", ""))
            self.open_buf("p")
        elif tag in ("ol", "ul"):
            if self.items and not self.items[-1]["flushed"]:
                item = self.items[-1]
                self.out(item["prefix"] + text(self.bufs[-1]))
                self.bufs[-1].clear()
                item["flushed"] = True
            self.lists.append([tag, 0])
        elif tag == "li":
            self.lists[-1][1] += 1
            kind, n = self.lists[-1]
            marker = f"{n}." if kind == "ol" else "-"
            self.items.append({"prefix": f"{self.indent()}{marker} ", "flushed": False, "indent": self.indent() + "  "})
            self.open_buf("li")
        elif tag == "table":
            self.table = {"head": [], "rows": []}
        elif tag == "thead":
            self.in_head = True
        elif tag == "tr":
            self.row = []
        elif tag in ("td", "th"):
            self.open_buf("cell")
        elif tag == "br" and self.bufs:
            self.bufs[-1].append(" ")

    def handle_endtag(self, tag):
        if tag == "h2":
            self.sections[-1]["title"] = self.close_buf()
        elif tag == "h3":
            self.out(self.close_buf() + ":")
        elif tag == "p":
            t = self.close_buf()
            cls = self.p_class.pop()
            if cls == "lead":
                self.lead = t
            elif t:
                if self.items:
                    self.bufs[-1].append(" " + t + " ")
                else:
                    self.out(t)
        elif tag == "li":
            t = self.close_buf()
            item = self.items.pop()
            if item["flushed"]:
                if t:
                    self.out(item["indent"] + t)
            else:
                self.out(item["prefix"] + t)
        elif tag in ("ol", "ul"):
            self.lists.pop()
        elif tag in ("td", "th"):
            self.row.append(self.close_buf())
        elif tag == "tr":
            if self.in_head:
                self.table["head"] = self.row
            else:
                self.table["rows"].append(self.row)
        elif tag == "thead":
            self.in_head = False
        elif tag == "table":
            head = self.table["head"]
            for r in self.table["rows"]:
                if len(r) == 2 or not head or len(head) != len(r):
                    sep = " — " if r[0][-1:] in ".?!" else ": "
                    self.out(f"- {r[0]}{sep}" + "; ".join(r[1:]))
                else:
                    self.out(f"- {r[0]}: " + "; ".join(f"{h}: {c}" for h, c in zip(head[1:], r[1:])))
            self.table = None

    def handle_data(self, data):
        if self.bufs:
            self.bufs[-1].append(data)


def section_title(article_title, heading):
    first = heading.split(" ", 1)[0]
    if first not in KEEP_CASE and len(first) > 1 and first[1].islower():
        heading = heading[0].lower() + heading[1:]
    return f"{article_title}: {heading}"


def convert(path, out_dir):
    raw = open(path, encoding="utf-8").read()
    meta = dict(re.findall(r"^(\w+): (.*)$", raw.split("-->", 1)[0], flags=re.M))
    slug = os.path.basename(path)[:-5]
    parser = Article()
    parser.feed(raw.split("-->", 1)[1])
    lines = [f"# Help Center: {meta['title']} (from {SITE}{slug}, updated 31 October 2026)", ""]
    for i, s in enumerate(parser.sections):
        body = list(s["lines"])
        if i == 0 and parser.lead:
            body.insert(0, parser.lead)
        lines.append(f"## {section_title(meta['title'], s['title'])}")
        lines.append(f"URL: {SITE}{slug}#{s['id']}")
        lines.extend(body)
        lines.append("")
    name = "help_" + slug.replace("-", "_") + ".md"
    with open(os.path.join(out_dir, name), "w", encoding="utf-8") as f:
        f.write("\n".join(lines).rstrip() + "\n")


if __name__ == "__main__":
    src, out = sys.argv[1], sys.argv[2]
    for name in sorted(os.listdir(src)):
        if name.endswith(".html"):
            convert(os.path.join(src, name), out)
