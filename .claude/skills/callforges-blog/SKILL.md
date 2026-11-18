---
name: callforges-blog
description: Write, update or check a post on the CallForges blog (callforges.com/blog), from picking the topic to the cover image, the build, the preview and the LinkedIn post. Use whenever someone asks to write a blog post, pick the next topic, make a cover or a figure for a post, or review a post before it goes live.
---

# CallForges blog

The blog exists to bring sales teams to callforges.com who then start a free trial. A post earns that by being
the most useful, most correct answer to one question people type into Google or ask ChatGPT. Everything below
serves that. The site rules in `README.md` (no vendor names, no competitor names, prices only from
`pricing.html`, only what is live) hold for every post; this skill adds how to write one.

## 0. Before anything

1. `git pull`. Two people (Sunit and Sonali) and their agents publish here.
2. Read `blog-instructions/README.md` (what CallForges sells, what is live, how to research, the rules) and
   `README.md` → "Blog posts" and "Rules".
3. Every post is by "CallForges team": no person's name, no author line in the post. The build writes the byline.

## 1. Topic and facts

- The daily posts come from the **blogskill** skill and its plan, `_blog/plan.md`: five a day, kinds A to E. Use
  `_blog/topics.md` only when you are asked for a post outside the plan.
- One post answers one topic. Asked for several (say STIR/SHAKEN, CNAM and number reputation), write one post for
  each, never one post that covers everything. Given a theme (say reliability), also write one "why CallForges" post
  on it that links to all of them.
- Posts on one topic or theme link each other: end each with a "Read next:" line naming the others.
- The post's row (in `_blog/plan.md` or `_blog/topics.md`) says what to write. Its **Facts from** column says where
  the product facts come from; read those files first. `kb:<file>` means the labels are in the app only: ask for
  them. A row marked **ask** needs the exact app labels from Sunit or Sonali
  before writing.
- Find what readers really ask around the question: Google's "People also ask" and autocomplete, Reddit threads in
  r/sales, r/salesdevelopment and r/realtors, LinkedIn posts. Pick the 4–7 questions that matter; they become the H2s.
- A feature that is not live is left out. The one exception: a feature on the founders' roadmap list may be named
  once, marked "(coming soon)", with no date, steps or price.

## 2. Numbers and claims

- Every number names its source, the year, and links to it, next to the claim:
  `<the claim> (<a href="…" target="_blank" rel="noopener">Source name, year</a>)`.
- Prefer the primary source: a regulator (fcc.gov, ftc.gov, ofcom.org.uk, ico.org.uk), the law itself (ecfr.gov,
  legislation.gov.uk), a carrier's own page, or the study itself, never a blog that quotes it.
- A number you cannot open and check is cut, not softened ("studies show…" is not allowed either).
- Never invent a customer, a quote, a test result, a case study or "we found". If the post would need one, say what is
  missing and ask.
- Calling and recording rules: link the official source, say who the rule applies to, and end that section with
  "This is general information, not legal advice." Never say whether CallForges' own calls comply.

## 2a. Sell

Your job is to sell CallForges. Every post makes the reader want to try it: answer their question well, then show
why CallForges is the way to do it, and end with a reason to start the free trial.

- Write with conviction. A "why CallForges" post may speak like a founder with a philosophy: why calls matter, what
  we believe, why we built it this way. "We believe CallForges is the best dialer for…" is fine as a belief.
- Measurable claims need proof: never "most reliable", "#1", "highest answer rates" or a number we can't show.
- Sell with what is true: every feature, price and limit you name must be live, as the site and help center state it.
  An invented feature or result is the one thing that loses a customer we already won.
- Never name or compare competitors.

## 3. Write the post: `_blog/src/<slug>.html`

```html
<!--
title: How to stop your calls showing as "Spam Likely"
desc: One or two sentences, 160 characters at most, that answer the title.
date: 2026-11-18
kicker: Caller ID
-->
<p class="lead">The answer in one or two sentences (about 40–60 words). Someone who reads only this has their answer.</p>

<div class="takeaways"><strong>Key takeaways</strong><ul>
  <li>3 to 5 points, each true on its own.</li>
</ul></div>

<h2 id="why">Why do business calls get labeled "Spam Likely"?</h2>
<p>First one or two sentences answer the heading directly, so they still make sense if Google or ChatGPT quotes
only them. Then the detail, steps, table or example.</p>
```

- `title` is the phrase people search, at most about 60 characters. The file name is the URL: lowercase, hyphens.
- `kicker` is optional: two or three words shown above the title on the cover (default "Blog").
- The takeaways box must come straight after the lead; the build moves it above "In this post".
- 4–7 `<h2 id="…">` sections, each a question or a plain statement of what the reader gets. `<h3>` only inside one.
- Answer first, everywhere: the lead answers the title, the first sentences of each section answer its heading.
- One section shows how to do it in CallForges, with the exact labels in **bold** and a link to the help article.
- Use a table when you compare things, a numbered list for steps. An optional FAQ goes last as `<h2>` + `<h3>` questions.
- Link to 2–4 related pages: other posts (`/blog/<slug>`), help articles (`/help/articles/<slug>`), `/pricing.html`.
  The build stops on a link to a post or article that does not exist.
- Length: as long as the answer needs, usually 1,000–1,800 words. No filler sections.
- Voice: plain words, short sentences, "you". No em dashes. None of: seamless, unlock, leverage, game-changer,
  revolutionize, robust, cutting-edge, "in today's fast-paced world", "let's dive in".

## 4. Images

- **Cover, always:** `python3 _blog/tools/make_cover.py <slug>` writes `blog/img/<slug>.png` (1200×630). LinkedIn,
  X and Slack show it when the link is shared. Run it again after changing the title.
- **Figures, only when a picture explains better than text** (a flow, a before/after, a comparison). Copy
  `_blog/tools/figure-start.html` to `_blog/figures/<slug>-<name>.html`, edit it, then
  `python3 _blog/tools/render_png.py _blog/figures/<slug>-<name>.html blog/img/<slug>-<name>.png 1000 <height>`
  (it renders at 2×). Put it in the post as
  `<figure data-img="<slug>-<name>.png">A caption that says what the picture shows.</figure>`.
  Prefer a wide layout (1000px wide): a figure taller than it is wide is shown at most 480px wide. Look at the PNG
  before using it.
- No stock photos, no AI-made photos of people, no screenshots of other companies' products.

## 5. Build, check, preview

1. `python3 _help/build.py` (it checks the comment, links and images, and writes `blog.html`,
   `blog/<slug>.html` and `sitemap.xml`).
2. Check every line below. Fix anything that fails and check again. If you can start a subagent, also give it the
   built post and this list and ask it to find failures; a fresh reader finds what the writer misses.
   - [ ] The lead answers the title on its own.
   - [ ] Every H2 opens with a direct answer to itself.
   - [ ] The takeaways are true and add up to the post.
   - [ ] Every number has its source, year and a working link; nothing is invented.
   - [ ] Every product fact matches the **Facts from** files, with the app's exact labels; nothing that isn't live.
   - [ ] No competitor names and no vendor names ("the carrier"); a CRM we connect to may be named, as the help center does.
   - [ ] Prices only as `pricing.html` states them.
   - [ ] Title is the search phrase; `desc` answers it in 160 characters or fewer.
   - [ ] Cover made and looked at; every figure has a caption and is easy to read on a phone.
   - [ ] Read aloud, it sounds like a person explaining, not a brochure.
3. Preview: `node _help/tools/preview.js . 8000`, open `http://127.0.0.1:8000/blog/<slug>`, check it at phone width too.

## 6. Publish and share

1. Ask before pushing: a push to `main` publishes the site.
2. Commit only what the post changed: `git add _blog blog blog.html sitemap.xml`, then
   `git commit -m "blog: <title>"` and `git push`. Set the topic's status in `_blog/topics.md` to the date.
3. Write the LinkedIn post for a founder's own profile (Sunit's or Sonali's): a first line that names the reader's problem, 3–5 short
   lines with the answer, the link. LinkedIn shows the cover by itself. Same truth rules as the post.
4. Optional, if HyperFrames is installed: a 15–20 second square clip of the cover and the three takeaways, for LinkedIn.
