"""Make a post's share image (what LinkedIn, X and Slack show): blog/img/<slug>.png, 1200x630.

  python3 _blog/tools/make_cover.py <slug>

Reads the title and the optional kicker (two or three words above the title; default "Blog") from the
post's comment in _blog/src/<slug>.html. Run it again after changing the title. The build uses the image
when it exists.
"""
import html
import os
import pathlib
import re
import sys

from render_png import render

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(os.path.dirname(HERE))


def main(slug):
    src = open(os.path.join(REPO, '_blog', 'src', slug + '.html')).read()
    m = re.match(r'\s*<!--(.*?)-->', src, re.S)
    meta = dict((k.strip(), v.strip()) for k, v in (ln.split(':', 1) for ln in m.group(1).strip().splitlines() if ':' in ln)) if m else {}
    title = meta['title']
    size = 76 if len(title) <= 40 else 66 if len(title) <= 62 else 56
    page = open(os.path.join(HERE, 'cover.html')).read()
    for k, v in {'logo': pathlib.Path(REPO, 'callforge-mark.png').as_uri(), 'kicker': html.escape(meta.get('kicker') or 'Blog'),
                 'title': html.escape(title), 'size': str(size)}.items():
        page = page.replace('{{' + k + '}}', v)
    tmp = os.path.join(HERE, f'.cover-{slug}.html')
    open(tmp, 'w').write(page)
    try:
        render(tmp, os.path.join(REPO, 'blog', 'img', slug + '.png'), 1200, 630, 1)
    finally:
        os.remove(tmp)
    print(f'wrote blog/img/{slug}.png')


if __name__ == '__main__':
    if len(sys.argv) != 2:
        raise SystemExit(__doc__)
    main(sys.argv[1])
