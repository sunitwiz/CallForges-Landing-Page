"""Builds the help center (help.html, help/collections, help/articles) from _help/src/<provider>.html.

Run from anywhere: python3 _help/build.py. Screenshots are read from help/img/<provider>-<view>.png;
a section whose screenshot is missing is built without one. The top-level attio.html shell gives the
site nav and footer."""
import html
import json
import os
import re
import struct

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(REPO, '_help', 'src')
SHOTS = os.path.join(REPO, 'help', 'img')
UPDATED = '22 October 2026'
SITE = 'https://callforges.com'

shell = open(os.path.join(REPO, 'fair-usage.html')).read()
body_top = shell[shell.index('<body>'):shell.index('<main id="main">')]
body_end = shell[shell.index('</main>') + len('</main>'):]


def absolutize(fragment):
    def fix(m):
        attr, val = m.group(1), m.group(2)
        if re.match(r'^(https?:|mailto:|tel:|#|/|data:)', val):
            return m.group(0)
        if val.startswith('./'):
            val = val[2:]
        return f'{attr}="/{val}"'
    return re.sub(r'\b(href|src)="([^"]*)"', fix, fragment)


body_top = absolutize(body_top)
body_end = absolutize(body_end).replace('</body>', '<script src="/help/search.js" defer></script>\n</body>')

COLLECTION = {
    'slug': 'crm-integrations',
    'title': 'CRM integrations',
    'desc': 'Connect Attio, HubSpot or Pipedrive to log every call on the right record and import contacts to call.',
}
ARTICLES = [
    {'p': 'attio', 'name': 'Attio', 'slug': 'attio-integration',
     'desc': 'Connect Attio, map users, log calls as notes or Calls records, create people for unknown numbers, import people, log past calls and disconnect.'},
    {'p': 'hubspot', 'name': 'HubSpot', 'slug': 'hubspot-integration',
     'desc': 'Connect HubSpot, map users to owners, log calls as HubSpot calls or notes, create contacts for unknown numbers, import contacts, log past calls and disconnect.'},
    {'p': 'pipedrive', 'name': 'Pipedrive', 'slug': 'pipedrive-integration',
     'desc': 'Connect Pipedrive, map users, log calls as Call activities or notes, create people for unknown numbers, import people, log past calls and disconnect.'},
]
SHOT_FOR_SECTION = {
    'connect': [('connect', '{n} before it is connected: click Connect.'), ('connection', 'The Connection tab after connecting {n}.')],
    'map-users': [('map-users', 'Map users: match each CallForges user to their {n} {m}.')],
    'logging': [('settings-workflow', 'Settings → Workflow: choose what each kind of call becomes in {n}.')],
    'unknown': [('settings-general', 'Settings → General: unknown numbers, Contacts and what each entry includes.')],
    'contacts': [('contacts', 'The Contacts tab: your {n} {r} with a phone number, ready to import.')],
    'past-calls': [('log-past-calls', 'Log past calls: pick how far back, then confirm.')],
    'activity': [('activity', 'Activity: what happened to each call in {n}.')],
    'disconnect': [('disconnect', 'The Disconnect confirmation.')],
}
MEMBER = {'attio': 'member', 'hubspot': 'owner', 'pipedrive': 'user'}
RECORDS = {'attio': 'people', 'hubspot': 'contacts', 'pipedrive': 'people'}


def png_size(path):
    with open(path, 'rb') as f:
        head = f.read(24)
    return struct.unpack('>II', head[16:24])


def head(title, desc, path, ld):
    url = SITE + path
    t, d = html.escape(title), html.escape(desc)
    return f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="theme-color" content="#0b0d12">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{t}</title>
<meta name="description" content="{d}">
<link rel="canonical" href="{url}">
<meta name="robots" content="index, follow">
<meta property="og:type" content="article">
<meta property="og:site_name" content="CallForges">
<meta property="og:title" content="{t}">
<meta property="og:description" content="{d}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{SITE}/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{t}">
<meta name="twitter:description" content="{d}">
<meta name="twitter:image" content="{SITE}/og-image.png">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="/site.css">
<link rel="stylesheet" href="/help/help.css">
<script type="application/ld+json">{json.dumps(ld, separators=(",", ":"))}</script>
</head>
'''


def band(big):
    title = '<h1>How can we help?</h1>' if big else ''
    cls = 'help-band' if big else 'help-band compact'
    return f'''<section class="{cls}"><div class="wrap">{title}
<div class="help-search" role="search">
<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><circle cx="8" cy="8" r="6" fill="none" stroke="#fff" stroke-width="1.8"/><path d="M12.5 12.5 16 16" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>
<input id="helpSearch" type="search" placeholder="Search for articles…" aria-label="Search help articles" role="combobox" aria-controls="helpResults" aria-expanded="false" aria-autocomplete="list" autocomplete="off" spellcheck="false">
<ul id="helpResults" class="help-results" role="listbox" hidden></ul>
</div></div></section>
'''


def crumbs(items):
    lis = ''.join(f'<li><a href="{u}">{html.escape(n)}</a></li>' if u else f'<li aria-current="page">{html.escape(n)}</li>' for n, u in items)
    return f'<nav class="help-crumbs" aria-label="Breadcrumb"><ol>{lis}</ol></nav>\n'


def breadcrumb_ld(items):
    return {'@type': 'BreadcrumbList', 'itemListElement': [
        {'@type': 'ListItem', 'position': i + 1, 'name': n, 'item': SITE + (u or '')} for i, (n, u) in enumerate(items)]}


def write(rel, text):
    path = os.path.join(REPO, rel)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    open(path, 'w').write(text)


STILL = '''<div class="stillhelp"><p><strong>Still need help?</strong>Write to us and a person on our team will answer.</p><a class="btn btn-primary btn-sm" href="mailto:hello@callforges.com">Email support</a></div>
'''
ICON = '<span class="ico" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b0d12" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7H6a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h3M15 7h3a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-3M8 10h8"/></svg></span>'

# /help
home_items = [('All collections', None)]
n = len(ARTICLES)
write('help.html', head('CallForges Help Center', 'Guides for CallForges: connecting your CRM, logging calls and importing contacts.', '/help',
                        {'@context': 'https://schema.org', '@graph': [breadcrumb_ld([('Home', '/'), ('Help Center', '/help')])]})
      + body_top + '<main id="main">\n' + band(True) + '<div class="help-main">\n'
      + f'<div class="collections"><a class="collection" href="/help/collections/{COLLECTION["slug"]}">{ICON}<div><h2>{COLLECTION["title"]}</h2><p>{COLLECTION["desc"]}</p><span class="count">{n} articles</span></div></a></div>\n'
      + STILL + '</div>\n</main>' + body_end)

# /help/collections/crm-integrations
c_items = [('All collections', '/help'), (COLLECTION['title'], None)]
lis = ''.join(f'<li><a href="/help/articles/{a["slug"]}"><div><strong>{a["name"]} integration</strong><span>{html.escape(a["desc"])}</span></div><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3l5 5-5 5" fill="none" stroke="#5f6677" stroke-width="1.6" stroke-linecap="round"/></svg></a></li>' for a in ARTICLES)
write(f'help/collections/{COLLECTION["slug"]}.html',
      head(f'{COLLECTION["title"]} | CallForges Help Center', COLLECTION['desc'], f'/help/collections/{COLLECTION["slug"]}',
           {'@context': 'https://schema.org', '@graph': [breadcrumb_ld([('Help Center', '/help'), (COLLECTION['title'], f'/help/collections/{COLLECTION["slug"]}')])]})
      + body_top + '<main id="main">\n' + band(False) + '<div class="help-main">\n' + crumbs(c_items)
      + f'<div class="collection-head"><h1>{COLLECTION["title"]}</h1><p>{COLLECTION["desc"]} {n} articles.</p></div>\n'
      + f'<ul class="article-list">{lis}</ul>\n' + STILL + '</div>\n</main>' + body_end)

# articles
used_images = set()
for a in ARTICLES:
    src = open(os.path.join(SRC, f'{a["p"]}.html')).read()
    lead = re.search(r'<p class="legal-meta">.*?</p>\s*<p>(.*?)</p>', src, re.S).group(1)
    body = src[src.index('<h2 id="before">'):src.index('<h2 id="help">')]
    sections = re.split(r'(?=<h2 id=")', body)
    out, toc = [], []
    for sec in sections:
        if not sec.strip():
            continue
        sid = re.match(r'<h2 id="([^"]+)">', sec).group(1)
        sec = re.sub(r'<h2 id="([^"]+)">\d+\. ', r'<h2 id="\1">', sec, count=1)
        title = re.search(r'<h2 id="[^"]+">(.*?)</h2>', sec).group(1)
        toc.append(f'<li><a href="#{sid}">{title}</a></li>')
        figs = ''
        for view, cap in SHOT_FOR_SECTION.get(sid, []):
            name = f'{a["p"]}-{view}.png'
            shot = os.path.join(SHOTS, name)
            if os.path.exists(shot):
                used_images.add(name)
                w, h = png_size(shot)
                text = cap.format(n=a['name'], m=MEMBER[a['p']], r=RECORDS[a['p']])
                figs += f'<figure><img src="/help/img/{name}" alt="{html.escape(text)}" width="{w}" height="{h}" loading="lazy" decoding="async"><figcaption>{html.escape(text)}</figcaption></figure>\n'
        out.append(sec.rstrip() + '\n' + figs)
    others = [o for o in ARTICLES if o is not a]
    rel = ''.join(f'<li><a href="/help/articles/{o["slug"]}">{o["name"]} integration<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3l5 5-5 5" fill="none" stroke="#5f6677" stroke-width="1.6" stroke-linecap="round"/></svg></a></li>' for o in others)
    path = f'/help/articles/{a["slug"]}'
    items = [('All collections', '/help'), (COLLECTION['title'], f'/help/collections/{COLLECTION["slug"]}'), (f'{a["name"]} integration', None)]
    ld = {'@context': 'https://schema.org', '@graph': [
        {'@type': 'TechArticle', 'headline': f'{a["name"]} integration', 'description': a['desc'], 'dateModified': '2026-10-22',
         'author': {'@type': 'Organization', 'name': 'CallForges'}, 'publisher': {'@type': 'Organization', 'name': 'CallForges', 'logo': {'@type': 'ImageObject', 'url': SITE + '/logo.png'}}, 'mainEntityOfPage': SITE + path},
        breadcrumb_ld([('Help Center', '/help'), (COLLECTION['title'], f'/help/collections/{COLLECTION["slug"]}'), (f'{a["name"]} integration', path)])]}
    page = (head(f'{a["name"]} integration | CallForges Help Center', a['desc'], path, ld)
            + body_top + '<main id="main">\n' + band(False) + '<div class="help-main">\n' + crumbs(items)
            + '<article class="article">\n'
            + f'<h1>{a["name"]} integration</h1>\n<p class="lead">{lead}</p>\n'
            + f'<p class="byline"><img src="/callforge-mark.png" alt="" width="28" height="28">Written by CallForges Support · Updated {UPDATED}</p>\n'
            + f'<nav class="toc" aria-label="In this article"><strong>In this article</strong><ol>{"".join(toc)}</ol></nav>\n'
            + absolutize(''.join(out))
            + f'</article>\n<section class="related" aria-labelledby="related-h"><h2 id="related-h">Related articles</h2><ul>{rel}</ul></section>\n'
            + STILL + '</div>\n</main>' + body_end)
    write(f'help/articles/{a["slug"]}.html', page)

print('images used:', sorted(used_images))
