# CallForges website

The source of callforges.com: the marketing pages, the legal pages, the help center (`/help`) and the blog (`/blog`). Plain HTML
and CSS with one generator for the help center and the blog. The app (app.callforges.com) is a separate, private repo.

## How a change goes live

- Edit `main`, commit, push. GitHub Pages republishes in 1–2 minutes and callforges.com serves it. This repo has no
  branches or pull requests: a push to `main` is the release.
- Nothing in the app changes when this repo changes.
- A 502 in the first minute after a push is Pages still republishing. Reload.
- To preview locally with the real `/help` URLs: `node _help/tools/preview.js . 5198`, then open
  http://127.0.0.1:5198/. The AI chat answers a sample there.

## What is where

| URL | File |
|---|---|
| `/`, `/pricing.html`, `/auto-dialer.html`, `/ai-agent.html`, `/compare.html`, `/contact.html`, `/fair-usage.html`, `/security.html`, `/terms.html`, `/privacy.html`, `/404.html` | the repo root, shared styles in `site.css` |
| `/help` | `help.html`, written by `_help/build.py` |
| `/help/collections/<slug>` | `help/collections/<slug>.html`, written by `_help/build.py` |
| `/help/articles/<slug>` | `help/articles/<slug>.html`, written by `_help/build.py` |
| help files | `help/help.css`, `help/search.js`, `help/assistant.js`, `help/img/*.png` |
| `/blog` | `blog.html`, written by `_help/build.py` |
| `/blog/<slug>` | `blog/<slug>.html`, written by `_help/build.py` from `_blog/src/<slug>.html` |

Only top-level files, `/help/…` and `/blog/…` are served. A file in any other folder (`/docs/x.html`) is not: that URL
goes to the app and shows its 404. Inside help and blog pages every link and file is root-absolute (`/site.css`, not
`site.css`).

## Help center articles

- An article's source is `_help/src/articles/<slug>.html`. The CRM articles come from `_help/src/<crm>.html`.
- Never edit `help/articles/`, `help/collections/`, `help.html` or the `/help` lines of `sitemap.xml` by hand.
  `python3 _help/build.py` writes them.
- An article starts with a comment holding `collection:`, `title:`, `desc:` (160 characters at most) and `order:`, then a
  `<p class="lead">` and 3 to 7 `<h2 id="…">` sections. Allowed inside: `p`, `p class="note"`, `ul`/`ol`/`li`, `strong`,
  `em`, `a`, `code`, `h3`, `table`. `<figure data-shot="<file>.png">caption</figure>` adds a screenshot from `help/img/`.
- Collections are the `COLLECTIONS` list in `build.py`. A collection's box shows once it has an article, and its
  description covers only the articles it has.
- `build.py` stops on a missing field, an unknown collection, a missing screenshot or a link to an article that does not
  exist. It takes the menu and footer from `fair-usage.html`, so rerun it after changing the menu, footer or logo.
- Write only what is live in the app, with the app's own labels. Leave out anything the app shows as "Coming soon".
- Screenshots use sample data only (user "Ana Ruiz", workspace "Acme", 555-01xx numbers), never a real call or number. They
  are taken at 2×, cropped to the card, at most 1600 px wide, with an orange (`#ff7a2e`) outline and a numbered badge on the
  control each step names. The capture tool is `_help/tools/shots`; `_help/tools/README.md` explains it. It needs the
  app's frontend running in sample-data mode.

## Blog posts

- A post's source is `_blog/src/<slug>.html`; the file name is the URL (`/blog/<slug>`). Never edit `blog.html`,
  `blog/` or the `/blog` lines of `sitemap.xml` by hand: `python3 _help/build.py` writes them, newest post first.
- Blog agents start at `blog-instructions/README.md`: the context, the rules and the daily routine.
- How to write one, step by step: the `callforges-blog` skill (`.claude/skills/callforges-blog/SKILL.md`).
- What to write each weekday: the `blogskill` skill (`.claude/skills/blogskill/SKILL.md`). It takes the next 3 or 4
  posts from the queue in `_blog/plan.md`, which was built from the research in `_blog/research/`.
- A post starts with a comment holding `title:` (the words people search for), `desc:` (160 characters at most),
  and `date:` (`YYYY-MM-DD`), then a `<p class="lead">` that answers the title in one or two sentences, a `<div class="takeaways">` box, then 4 to 7 `<h2 id="…">` sections.
- Each post has a cover, `blog/img/<slug>.png` (`python3 _blog/tools/make_cover.py <slug>`): the picture LinkedIn shows.
  A figure is `<figure data-img="<name>.png">caption</figure>` with the PNG in `blog/img/`, made from HTML by
  `_blog/tools/render_png.py`. Allowed inside: the same tags as a help article. The build adds the title, the byline, the
  contents box, a table's sideways scroll on phones, "More from the blog" and the "Start Free Trial" box.
- Links inside a post are root-absolute (`/pricing.html`, `/help/articles/<slug>`, `/blog/<slug>`); the build stops on
  a link to a post or help article that does not exist. Outside links take `target="_blank" rel="noopener"`.
- The rules below hold for posts too: no vendor names, compare with any competitor and CallForges always comes out the best (`blog-instructions/README.md` section 6), prices only as
  `pricing.html` states them, and only what is live in the app. A number about the industry links its public source.
- After pushing a post, share it on LinkedIn from a founder's profile with the link.

## Rules

1. **Logo.** The menu and footer show the flame mark with the word "CallForges". The icon files never change with a
   design update: `callforge-mark.png`, `logo.png`, `favicon.ico`, `favicon.svg`, `favicon-96.png`,
   `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `og-image.png`, and the name in
   `site.webmanifest`. If an icon file ever does change, bump its `?v=` on every page and in `_help/build.py`, or
   returning visitors keep the old one.
2. **No vendor names.** Page copy never names the companies we buy services from (the phone carrier, payments, AI).
   It says "the carrier". CRMs we integrate with are named on purpose; any competitor may be compared, and CallForges always comes out the best.
3. **Prices, limits and numbers** are stated only as `pricing.html`, `fair-usage.html` and `terms.html` state them.
4. **Links into the app** are `https://app.callforges.com/login` and `https://app.callforges.com/signup`.
5. **A design from elsewhere is applied as edits, never as a replacement.** A zip, a Lovable project or a mock is built
   on an older copy of the site. Add and change files from it, never delete. Then check that these survived: the Help link
   in the menu and "Help Center" in the footer, the integration articles (the CRM marketplace listings link to them),
   the logo files, and the filled legal text in `privacy.html` and `terms.html`.
6. **Never publish a template blank** such as `[Registered address]`. This prints nothing before a push:
   `python3 -c "import re,glob;[print(f,m) for f in glob.glob('*.html')+glob.glob('help/**/*.html',recursive=True)+glob.glob('blog/*.html') for m in set(re.findall(r'\[[A-Za-z][A-Za-z /,.\'-]{2,60}\]',re.sub(r'<[^>]+>',' ',re.sub(r'(?s)<script.*?</script>|<style.*?</style>','',open(f).read()))))]"`
7. **The AI chat lives inside the `/help` page**, under the question box. Never a pop-up on the website.
8. **No `CNAME` file.** callforges.com reaches this repo through our own server, not through a Pages custom domain. A
   `CNAME` file breaks the site.

## Before each push

- `python3 _help/build.py` passes.
- The blank check in rule 6 prints nothing.
- Every local link and image opens.
- At 1280 px and 390 px wide, `/`, `/help`, a collection, an article, `/blog`, a post and the 404 have no sideways
  scroll, and the flame logo shows.
- After the push, the changed pages open on callforges.com.

## What the website's security settings allow

callforges.com sends a security policy that the browser enforces:

- **Inline scripts.** Only the inline `<script>` blocks already on the site run, each allowed by its exact text. Change
  the text of one, or add a new one, and the live site silently skips it. Put new code in a `.js` file in this repo:
  those always run. JSON-LD blocks (`<script type="application/ld+json">`) are data and are fine to edit.
- **Images and other files** load only from this site. An image hot-linked from another domain does not show: add the
  file to the repo.
- **Fonts and styles** may come from Google Fonts, and inline styles are fine. A script from any outside domain other
  than the one three.js loads from is blocked.

## What needs the app side

Ask the repo owner for these. They change the server or the app repo:

- an inline script added or changed (its allowlist entry), or a new outside domain;
- a page under a new folder, outside `/help/`, `/blog/` and the top level;
- the AI help chat learning a new or changed article: `python3 _help/tools/articles_to_knowledge.py _help/src/articles
  <out-dir>` writes its knowledge files, which go into the app repo.

## Lovable and other builders

Lovable cannot edit this repo: it only syncs with a repo it creates itself, and it builds React apps. Use it for mocks
if you like, and bring the result here as edits (rule 5).
