"""Builds the help center (help.html, help/collections, help/articles) from _help/src/<provider>.html.

Run from anywhere: python3 _help/build.py. Screenshots are read from help/img/<provider>-<view>.png;
a section whose screenshot is missing is built without one. An article source places its own screenshot
with <figure data-shot="<name>.png">Caption.</figure>; the build fails if help/img/<name>.png is missing. fair-usage.html gives the site nav and
footer; the help pages add an "Ask AI" link to that nav, to /help#ask. The assistant lives in /help itself
(help/assistant.js): the question box, the conversation and the "Talk to a person" form, all in the page.
It also builds the blog (blog.html, blog/<slug>.html) from _blog/src/<slug>.html, with the plain site nav."""
import html
import json
import os
import re
import struct
import subprocess

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(REPO, '_help', 'src')
SHOTS = os.path.join(REPO, 'help', 'img')
UPDATED = '22 October 2026'
SITE = 'https://callforges.com'
ASSISTANT_LIVE = True

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


SPARKLE = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l1.9 5.6L19.5 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9z"/><path d="M19 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/></svg>'
NAV_ASK = f'''<a class="nav-ask" href="/help#ask" aria-label="Ask AI">{SPARKLE}<span>Ask AI</span></a>
'''
site_top = absolutize(body_top)
body_top = absolutize(body_top).replace('<a href="/help">Help</a>', '<a href="/help" aria-current="page">Help</a>')
links_end = body_top.index('</nav>', body_top.index('class="nav-links"')) + len('</nav>\n')
body_top = body_top[:links_end] + (NAV_ASK if ASSISTANT_LIVE else '') + body_top[links_end:]
body_end = absolutize(body_end)
home_end = body_end.replace('</body>', '<script src="/help/assistant.js" defer></script>\n</body>' if ASSISTANT_LIVE else '<script src="/help/search.js" defer></script>\n</body>')

ICON_CRM = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b0d12" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7H6a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h3M15 7h3a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-3M8 10h8"/></svg>'
def ico(d):
    return f'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b0d12" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="{d}"/></svg>'


PHONE = 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2'
COLLECTIONS = [
    {'slug': 'getting-started', 'title': 'Getting started', 'icon': ico('M5 21V4M5 4h12l-2.5 4L17 12H5'),
     'desc': 'Start your free trial and make your first call.'},
    {'slug': 'making-calls', 'title': 'Making and receiving calls', 'icon': ico(PHONE),
     'desc': 'Place a call from the dialer and transfer a live call.'},
    {'slug': 'power-dialer', 'title': 'Power dialer and campaigns', 'icon': ico('M13 2L4 14h7l-1 8 9-12h-7z'),
     'desc': 'Create a campaign, then start, pause, resume or stop it.'},
    {'slug': 'parallel-dialer', 'title': 'Parallel dialer', 'icon': ico('M12 3l9 5-9 5-9-5zM3 13l9 5 9-5'),
     'desc': 'Call several leads at once and talk to the first one who answers.'},
    {'slug': 'incoming-calls', 'title': 'Incoming calls and workflows', 'icon': ico(PHONE + 'M15 3v6h6M21 3l-6 6'),
     'desc': 'Build a workflow that decides who rings when a call comes in.'},
    {'slug': 'phone-numbers', 'title': 'Phone numbers', 'icon': ico('M5 9h14M5 15h14M10 3L8 21M16 3l-2 18'),
     'desc': 'Buy a number, or port your own number to CallForges.'},
    {'slug': 'messaging', 'title': 'Messaging', 'icon': ico('M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM8 9h8M8 13h5'),
     'desc': 'Register for SMS in the US, send and receive SMS, and work your conversations in the Inbox.'},
    {'slug': 'recordings-transcripts', 'title': 'Recordings and transcripts', 'icon': ico('M3 12h2M7 8v8M11 5v14M15 9v6M19 11v2'),
     'desc': 'Call recording and consent, transcripts, AI summaries and sharing a recording.'},
    {'slug': 'contacts-lists', 'title': 'Contacts and lists', 'icon': ico('M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M20 8v6M23 11h-6'),
     'desc': 'Add and import contacts, build lists and keep a Do Not Call list.'},
    {'slug': 'team', 'title': 'Team and permissions', 'icon': ico('M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8'),
     'desc': 'Invite users to your workspace and choose their roles.'},
    {'slug': 'analytics', 'title': 'Dashboard, analytics and Live', 'icon': ico('M4 20V10M10 20V4M16 20v-7M22 20H2'),
     'desc': 'Read your numbers, watch calls live and set daily goals.'},
    {'slug': 'billing', 'title': 'Billing and plans', 'icon': ico('M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM2 10h20M6 15h4'),
     'desc': 'Plans and seats, and adding credits for calls.'},
    {'slug': 'compliance', 'title': 'Compliance center', 'icon': ico('M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4'),
     'desc': 'Verify numbers where the regulator asks, and register your business with US carriers.'},
    {'slug': 'crm-integrations', 'title': 'CRM integrations', 'icon': ICON_CRM,
     'desc': 'Connect Attio, HubSpot, Pipedrive, HighLevel or Clio to log every call on the right record.'},
    {'slug': 'ai-tools', 'title': 'AI tools (MCP)', 'icon': ico('M12 3l1.9 5.6L19.5 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9zM19 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z'),
     'desc': 'Let Claude, ChatGPT or Cursor read and work with your CallForges data, as you.'},
    {'slug': 'account-settings', 'title': 'Account and settings', 'icon': ico('M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM4.6 9a8 8 0 0 1 1.8-3.1M9 4.4a8 8 0 0 1 6 0M17.6 5.9A8 8 0 0 1 19.4 9M20 12v0M19.4 15a8 8 0 0 1-1.8 3.1M15 19.6a8 8 0 0 1-6 0M6.4 18.1A8 8 0 0 1 4.6 15M4 12v0'),
     'desc': 'Your profile, sign-in, notifications and voicemail greeting.'},
]
ARTICLES = [
    {'p': 'attio', 'name': 'Attio', 'slug': 'attio-integration', 'collection': 'crm-integrations',
     'updated': '22 November 2026', 'iso': '2026-11-22',
     'listing': ("Listed in Attio's app marketplace", 'Install CallForges straight from Attio.', 'https://attio.com/apps/call-forges'),
     'desc': 'Connect Attio, map users, log calls as notes or Calls records, create people for unknown numbers, import people, log past calls and disconnect.'},
    {'p': 'hubspot', 'name': 'HubSpot', 'slug': 'hubspot-integration', 'collection': 'crm-integrations',
     'desc': 'Connect HubSpot, map users to owners, log calls as HubSpot calls or notes, create contacts for unknown numbers, import contacts, log past calls and disconnect.'},
    {'p': 'pipedrive', 'name': 'Pipedrive', 'slug': 'pipedrive-integration', 'collection': 'crm-integrations',
     'desc': 'Connect Pipedrive, map users, log calls as Call activities or notes, create people for unknown numbers, import people, log past calls and disconnect.'},
    {'p': 'highlevel', 'name': 'HighLevel', 'slug': 'highlevel-integration', 'collection': 'crm-integrations',
     'updated': '22 November 2026', 'iso': '2026-11-22',
     'listing': ('Listed in the HighLevel Marketplace', 'Install CallForges straight from HighLevel.', 'https://marketplace.gohighlevel.com/integration/6aee33ea48e8c98116e6f4e6/versions/6aee33ea48e8c98116e6f4e6'),
     'desc': 'Connect a HighLevel sub-account, map users, log calls in conversations or as notes, tag dispositions, import contacts, log past calls and disconnect.'},
    {'p': 'clio', 'name': 'Clio', 'slug': 'clio-integration', 'collection': 'crm-integrations',
     'updated': '7 November 2026', 'iso': '2026-11-07',
     'desc': 'Connect Clio Manage, map users, log calls as phone calls on contacts and matters, add time entries, log past calls and disconnect.'},
]
for i, a in enumerate(ARTICLES):
    a.update(kind='crm', title=f'{a["name"]} integration', order=i + 1)
    a.setdefault('updated', UPDATED)
    a.setdefault('iso', '2026-10-22')


def load_articles():
    folder = os.path.join(SRC, 'articles')
    if not os.path.isdir(folder):
        return
    for name in sorted(os.listdir(folder)):
        if not name.endswith('.html'):
            continue
        src = open(os.path.join(folder, name)).read()
        m = re.match(r'\s*<!--(.*?)-->', src, re.S)
        if not m:
            raise SystemExit(f'{name}: no metadata comment')
        meta = dict((k.strip(), v.strip()) for k, v in (ln.split(':', 1) for ln in m.group(1).strip().splitlines() if ':' in ln))
        for k in ('collection', 'title', 'desc', 'order'):
            if not meta.get(k):
                raise SystemExit(f'{name}: missing {k}')
        if meta['collection'] not in {c['slug'] for c in COLLECTIONS}:
            raise SystemExit(f'{name}: unknown collection {meta["collection"]}')
        lead = re.search(r'<p class="lead">(.*?)</p>', src, re.S)
        if not lead:
            raise SystemExit(f'{name}: no <p class="lead">')
        ARTICLES.append({'kind': 'page', 'slug': name[:-5], 'collection': meta['collection'], 'title': meta['title'],
                         'desc': meta['desc'], 'order': int(meta['order']),
                         'updated': meta.get('updated', '31 October 2026'), 'iso': meta.get('iso', '2026-10-31'),
                         'lead': lead.group(1).strip(), 'body': src[lead.end():]})


load_articles()
ARTICLES.sort(key=lambda a: ([c['slug'] for c in COLLECTIONS].index(a['collection']), a['order']))

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
MEMBER = {'attio': 'member', 'hubspot': 'owner', 'pipedrive': 'user', 'highlevel': 'user', 'clio': 'user'}
RECORDS = {'attio': 'people', 'hubspot': 'contacts', 'pipedrive': 'people', 'highlevel': 'contacts', 'clio': 'contacts'}


def png_size(path):
    with open(path, 'rb') as f:
        head = f.read(24)
    return struct.unpack('>II', head[16:24])


def figure(name, text):
    w, h = png_size(os.path.join(SHOTS, name))
    return f'<figure><img src="/help/img/{name}" alt="{html.escape(text)}" width="{w}" height="{h}" loading="lazy" decoding="async"><figcaption>{html.escape(text)}</figcaption></figure>'


def shot_figures(sec, slug):
    def render(m):
        name, text = m.group(1), ' '.join(html.unescape(m.group(2)).split())
        if not os.path.exists(os.path.join(SHOTS, name)):
            raise SystemExit(f'{slug}: missing screenshot help/img/{name}')
        used_images.add(name)
        return figure(name, text)
    return re.sub(r'<figure data-shot="([^"]+)">(.*?)</figure>', render, sec, flags=re.S)


def head(title, desc, path, ld, image=None):
    url = SITE + path
    image = image or SITE + '/og-image.png'
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
<meta property="og:image" content="{image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{t}">
<meta name="twitter:description" content="{d}">
<meta name="twitter:image" content="{image}">
<link rel="icon" href="/favicon.ico?v=2" sizes="32x32">
<link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400..700&family=IBM+Plex+Mono:wght@400;500;600&display=swap">
<link rel="stylesheet" href="/site.css">
<link rel="stylesheet" href="/help/help.css">
<script type="application/ld+json">{json.dumps(ld, separators=(",", ":"))}</script>
</head>
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


STILL_HOME = '''<div class="stillhelp"><p><strong>Still need help?</strong>Write to us at hello@callforges.com and a person on our team will answer.</p><a class="btn btn-primary btn-sm" href="https://cal.com/callforges-team-0qqrr3/30min" target="_blank" rel="noopener">Book a call</a></div>
'''
STILL = '''<div class="stillhelp"><p><strong>Still need help?</strong>Ask our AI assistant. If it can't help, a person on our team will answer.</p><a class="btn btn-primary btn-sm" href="/help#ask">Ask AI</a></div>
'''
COLL = {c['slug']: c for c in COLLECTIONS}
IN_COLL = {c['slug']: [a for a in ARTICLES if a['collection'] == c['slug']] for c in COLLECTIONS}
LISTED = [c for c in COLLECTIONS if IN_COLL[c['slug']]]


def count(k):
    return f'{k} article' if k == 1 else f'{k} articles'


SUGGESTED = ['What does the free trial include?', 'How does the parallel dialer work?', 'How do I connect HubSpot?',
             'How much does CallForges cost?', 'How do I connect Attio?', 'How do I connect Pipedrive?',
             'Can I port my number to CallForges?', 'How do I buy a phone number?', 'How do I invite my team?',
             'How does the power dialer work?', 'Can I record my calls?', 'How do I transfer a call?',
             'How do I route incoming calls?', 'How are calls charged?']
SEND = '<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M9 14.5v-11M4.5 8L9 3.5 13.5 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
chips = ''.join(f'<li><button class="ask-chip" type="button">{html.escape(q)}</button></li>' for q in SUGGESTED[:4])
pool = html.escape(json.dumps(SUGGESTED))
ASK = f'''<section class="help-hero" id="ask" aria-labelledby="help-hero-h">
<div class="wrap ask">
<h1 id="help-hero-h">How can we help you?</h1>
<form class="ask-box" id="askForm">
{SPARKLE}
<input id="askInput" name="q" type="text" placeholder="Ask a question about CallForges…" aria-label="Ask a question about CallForges" autocomplete="off" maxlength="1000" enterkeyhint="send">
<button class="ask-send" type="submit" aria-label="Send">{SEND}</button>
</form>
<div class="ask-start" id="askStart">
<ul class="ask-chips" aria-label="Suggested questions" data-pool="{pool}">{chips}</ul>
</div>
<div class="ask-thread" id="askThread" aria-live="polite" aria-label="Conversation" hidden></div>
<form class="ask-person" id="askPerson" aria-labelledby="askPersonH" novalidate hidden>
<h2 id="askPersonH">Talk to a person</h2>
<p class="ask-person-lead">Leave your e-mail and a person from our team will write back.</p>
<div class="ask-row">
<div class="ask-field"><label for="askEmail">E-mail</label><input id="askEmail" name="email" type="email" autocomplete="email" placeholder="name@company.com" required><p class="ask-err" id="askEmailErr" hidden></p></div>
<div class="ask-field"><label for="askPhone">Phone <span>(optional)</span></label><input id="askPhone" name="phone" type="tel" autocomplete="tel" placeholder="+1 415 555 0134"><p class="ask-err" id="askPhoneErr" hidden></p></div>
</div>
<div class="ask-field"><label for="askQuestion">What do you need help with?</label><textarea id="askQuestion" name="question" rows="4" maxlength="2000" required></textarea><p class="ask-err" id="askQuestionErr" hidden></p></div>
<button class="btn btn-primary" type="submit">Send</button>
<p class="ask-err" id="askSendErr" role="alert" hidden></p>
</form>
</div>
</section>
'''

MAGNIFIER = '<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12.5 12.5 16 16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
INDEX = json.dumps([{'t': a['title'], 'd': a['desc'], 'c': COLL[a['collection']]['title'], 'u': f'/help/articles/{a["slug"]}'} for a in ARTICLES],
                   ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/')
HERO = f'''<section class="help-hero" aria-labelledby="help-hero-h">
<div class="wrap ask">
<h1 id="help-hero-h">How can we help you?</h1>
<form class="ask-box" id="searchForm" role="search">
{MAGNIFIER}
<input id="searchInput" name="q" type="search" placeholder="Search help articles…" aria-label="Search help articles" autocomplete="off" spellcheck="false" enterkeyhint="search" aria-controls="searchResults">
<button class="ask-send" type="submit" aria-label="Search">{SEND}</button>
</form>
<ul class="article-list search-results" id="searchResults" aria-label="Matching articles" hidden></ul>
<p class="search-empty" id="searchEmpty" role="status" hidden>No article matches that yet. <a href="mailto:hello@callforges.com">Email support</a> and a person will answer.</p>
<script type="application/json" id="helpIndex">{INDEX}</script>
</div>
</section>
'''

# /help
cards = ''.join(f'<a class="collection" href="/help/collections/{c["slug"]}"><span class="ico" aria-hidden="true">{c["icon"]}</span><h2>{c["title"]}</h2><p class="desc">{html.escape(c["desc"])}</p><span class="count">{count(len(IN_COLL[c["slug"]]))}</span></a>' for c in LISTED)
write('help.html', head('CallForges Help Center', 'Guides for CallForges: calls, the power and parallel dialers, phone numbers, workflows, your team, billing and CRM integrations.', '/help',
                        {'@context': 'https://schema.org', '@graph': [breadcrumb_ld([('Home', '/'), ('Help Center', '/help')])]})
      + body_top + '<main id="main">\n' + (ASK if ASSISTANT_LIVE else HERO) + '<div class="wrap help-home">\n'
      + f'<div class="collections">{cards}</div>\n'
      + STILL_HOME + '</div>\n</main>' + home_end)

# /help/collections/<slug>
for c in LISTED:
    arts = IN_COLL[c['slug']]
    c_items = [('All collections', '/help'), (c['title'], None)]
    lis = ''.join(f'<li><a href="/help/articles/{a["slug"]}"><div><strong>{html.escape(a["title"])}</strong><span>{html.escape(a["desc"])}</span></div><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3l5 5-5 5" fill="none" stroke="#5f6677" stroke-width="1.6" stroke-linecap="round"/></svg></a></li>' for a in arts)
    write(f'help/collections/{c["slug"]}.html',
          head(f'{c["title"]} | CallForges Help Center', c['desc'], f'/help/collections/{c["slug"]}',
               {'@context': 'https://schema.org', '@graph': [breadcrumb_ld([('Help Center', '/help'), (c['title'], f'/help/collections/{c["slug"]}')])]})
          + body_top + '<main id="main">\n' + '<div class="help-main">\n' + crumbs(c_items)
          + f'<div class="collection-head"><h1>{c["title"]}</h1><p>{c["desc"]} {count(len(arts))}.</p></div>\n'
          + f'<ul class="article-list">{lis}</ul>\n' + STILL + '</div>\n</main>' + body_end)

# articles
used_images = set()
ARROW = '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3l5 5-5 5" fill="none" stroke="#5f6677" stroke-width="1.6" stroke-linecap="round"/></svg>'
SLUGS = {a['slug'] for a in ARTICLES}


STORE_ICON = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/></svg>'


def listing_card(listing):
    if not listing:
        return ''
    title, note, url = listing
    return (f'<a class="listing" href="{html.escape(url)}"><span class="listing-icon">{STORE_ICON}</span>'
            f'<span class="listing-text"><strong>{html.escape(title)}</strong><span>{html.escape(note)}</span></span>'
            f'<span class="listing-go">View listing{ARROW}</span></a>\n')


def crm_body(a):
    src = open(os.path.join(SRC, f'{a["p"]}.html')).read()
    lead = re.search(r'<p class="legal-meta">.*?</p>\s*<p>(.*?)</p>', src, re.S).group(1)
    return lead, src[src.index('<h2 id="before">'):src.index('<h2 id="help">')]


for a in ARTICLES:
    lead, body = crm_body(a) if a['kind'] == 'crm' else (a['lead'], a['body'])
    for ref in re.findall(r'href="/help/articles/([^"#]+)', body):
        if ref not in SLUGS:
            raise SystemExit(f'{a["slug"]}: links to missing article {ref}')
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
        for view, cap in (SHOT_FOR_SECTION.get(sid, []) if a['kind'] == 'crm' else []):
            name = f'{a["p"]}-{view}.png'
            shot = os.path.join(SHOTS, name)
            if os.path.exists(shot):
                used_images.add(name)
                figs += figure(name, cap.format(n=a['name'], m=MEMBER[a['p']], r=RECORDS[a['p']])) + '\n'
        out.append(shot_figures(sec, a['slug']).rstrip() + '\n' + figs)
    c = COLL[a['collection']]
    others = [o for o in IN_COLL[a['collection']] if o is not a][:6]
    rel = ''.join(f'<li><a href="/help/articles/{o["slug"]}">{html.escape(o["title"])}{ARROW}</a></li>' for o in others)
    related = f'<section class="related" aria-labelledby="related-h"><h2 id="related-h">Related articles</h2><ul>{rel}</ul></section>\n' if rel else ''
    path = f'/help/articles/{a["slug"]}'
    items = [('All collections', '/help'), (c['title'], f'/help/collections/{c["slug"]}'), (a['title'], None)]
    ld = {'@context': 'https://schema.org', '@graph': [
        {'@type': 'TechArticle', 'headline': a['title'], 'description': a['desc'], 'dateModified': a['iso'],
         'author': {'@type': 'Organization', 'name': 'CallForges'}, 'publisher': {'@type': 'Organization', 'name': 'CallForges', 'logo': {'@type': 'ImageObject', 'url': SITE + '/logo.png'}}, 'mainEntityOfPage': SITE + path},
        breadcrumb_ld([('Help Center', '/help'), (c['title'], f'/help/collections/{c["slug"]}'), (a['title'], path)])]}
    toc_box = f'<nav class="toc" aria-label="In this article"><strong>In this article</strong><ol>{"".join(toc)}</ol></nav>\n' if len(toc) > 1 else ''
    page = (head(f'{a["title"]} | CallForges Help Center', a['desc'], path, ld)
            + body_top + '<main id="main">\n' + '<div class="help-main">\n' + crumbs(items)
            + '<article class="article">\n'
            + f'<h1>{html.escape(a["title"])}</h1>\n<p class="lead">{lead}</p>\n'
            + f'<p class="byline"><img src="/callforge-mark.png" alt="" width="28" height="28">Written by CallForges Support · Updated {a["updated"]}</p>\n'
            + listing_card(a.get('listing'))
            + toc_box
            + absolutize(''.join(out))
            + '</article>\n' + related
            + STILL + '</div>\n</main>' + body_end)
    write(f'help/articles/{a["slug"]}.html', page)

# blog: /blog and /blog/<slug>
BLOG_SRC = os.path.join(REPO, '_blog', 'src')
BLOG_IMG = os.path.join(REPO, 'blog', 'img')
MONTHS = ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')
POSTS = []
for name in sorted(os.listdir(BLOG_SRC)) if os.path.isdir(BLOG_SRC) else []:
    if not name.endswith('.html'):
        continue
    src = open(os.path.join(BLOG_SRC, name)).read()
    m = re.match(r'\s*<!--(.*?)-->', src, re.S)
    meta = dict((k.strip(), v.strip()) for k, v in (ln.split(':', 1) for ln in m.group(1).strip().splitlines() if ':' in ln)) if m else {}
    for k in ('title', 'desc', 'date'):
        if not meta.get(k):
            raise SystemExit(f'_blog/src/{name}: missing {k}')
    if len(meta['desc']) > 160:
        raise SystemExit(f'_blog/src/{name}: desc is longer than 160 characters')
    if not re.fullmatch(r'\d{4}-\d{2}-\d{2}', meta['date']):
        raise SystemExit(f'_blog/src/{name}: date must be YYYY-MM-DD')
    lead = re.search(r'<p class="lead">(.*?)</p>', src, re.S)
    if not lead:
        raise SystemExit(f'_blog/src/{name}: no <p class="lead">')
    y, mo, d = meta['date'].split('-')
    body = src[lead.end():]
    box = re.match(r'\s*(<div class="takeaways">.*?</div>)', body, re.S)
    cover = os.path.exists(os.path.join(BLOG_IMG, name[:-5] + '.png'))
    POSTS.append({'slug': name[:-5], 'title': meta['title'], 'desc': meta['desc'], 'iso': meta['date'],
                  'shown': f'{int(d)} {MONTHS[int(mo) - 1]} {y}', 'lead': lead.group(1).strip(),
                  'takeaways': box.group(1) if box else '',
                  'body': body[box.end():] if box else body,
                  'image': f'{SITE}/blog/img/{name[:-5]}.png' if cover else SITE + '/og-image.png'})


def first_committed(slug):
    try:
        out = subprocess.run(['git', 'log', '--diff-filter=A', '--format=%ct', '--', f'_blog/src/{slug}.html'],
                             cwd=REPO, capture_output=True, text=True).stdout.split()
    except OSError:
        out = []
    return int(out[-1]) if out else 1e11 + os.path.getmtime(os.path.join(BLOG_SRC, slug + '.html'))


POSTS.sort(key=lambda p: p['title'])
POSTS.sort(key=lambda p: first_committed(p['slug']), reverse=True)
POSTS.sort(key=lambda p: p['iso'], reverse=True)
POST_SLUGS = {p['slug'] for p in POSTS}
TRY = '''<div class="stillhelp"><p><strong>Try CallForges free for 14 days</strong>A free local number, 50 inbound and 50 outbound minutes. No card required to start.</p><a class="btn btn-primary btn-sm" href="https://app.callforges.com/signup">Start Free Trial</a></div>
'''
BLOG_DESC = 'Practical guides for sales teams that call: power and parallel dialers, caller ID, calling rules and more conversations per hour.'
PUBLISHER = {'@type': 'Organization', 'name': 'CallForges', 'logo': {'@type': 'ImageObject', 'url': SITE + '/logo.png'}}


def blog_figures(body, slug):
    def render(m):
        name, text = m.group(1), ' '.join(html.unescape(m.group(2)).split())
        if not os.path.exists(os.path.join(BLOG_IMG, name)):
            raise SystemExit(f'_blog/src/{slug}.html: missing image blog/img/{name}')
        if not text:
            raise SystemExit(f'_blog/src/{slug}.html: image {name} needs a caption')
        w, h = png_size(os.path.join(BLOG_IMG, name))
        tall = ' style="max-width:480px;margin-inline:auto"' if h > w else ''
        return f'<figure><img src="/blog/img/{name}" alt="{html.escape(text)}" width="{w}" height="{h}"{tall} loading="lazy" decoding="async"><figcaption>{html.escape(text)}</figcaption></figure>'
    return re.sub(r'<figure data-img="([^"]+)">(.*?)</figure>', render, body, flags=re.S)


# The /blog topic of a post: its `category:` line, else its topic's Area in _blog/plan.md, else its `kicker:`.
BLOG_TOPICS = {'calling': 'Dialers and calling', 'voice agents': 'AI voice agents', 'sms': 'Texting', 'messaging': 'Texting',
               'workflows': 'Call routing', 'numbers': 'Numbers and caller ID', 'reliability': 'Numbers and caller ID'}


def plan_areas():
    path = os.path.join(REPO, '_blog', 'plan.md')
    text = open(path).read() if os.path.exists(path) else ''
    table = text.split('## Topics')[-1].split('## Queue')[0] if '## Topics' in text else ''
    areas = {}
    for line in table.splitlines():
        cols = line.split('|')
        if len(cols) > 4:
            areas.update((slug, cols[3].strip()) for slug in re.findall(r'`([a-z0-9-]+)`', line))
    return areas


AREAS = plan_areas()
for p in POSTS:
    src = open(os.path.join(BLOG_SRC, p['slug'] + '.html')).read()
    meta = dict((k.strip(), v.strip()) for k, v in (ln.split(':', 1) for ln in src[:src.index('-->')].splitlines() if ':' in ln))
    key = meta.get('category') or AREAS.get(p['slug']) or meta.get('kicker') or ''
    p['topic'] = BLOG_TOPICS.get(key.lower(), key or 'Guides')
    p['topic_id'] = re.sub(r'[^a-z0-9]+', '-', p['topic'].lower()).strip('-')
    p['minutes'] = max(1, round(len(re.sub(r'<[^>]+>', ' ', p['body']).split()) / 220))
    p['cover'] = p['image'].replace(SITE, '')


def blog_meta(p):
    return f'<time datetime="{p["iso"]}">{p["shown"]}</time><span aria-hidden="true">·</span><span>{p["minutes"]} min read</span>'


def blog_card(p, featured):
    return (f'<li class="bc" data-topic="{p["topic_id"]}"{" data-featured hidden" if featured else ""}><a href="/blog/{p["slug"]}">'
            f'<img src="{p["cover"]}" alt="" width="1200" height="630" loading="lazy" decoding="async">'
            f'<div class="bc-body"><p class="b-topic">{html.escape(p["topic"])}</p><h3>{html.escape(p["title"])}</h3>'
            f'<p class="bc-desc">{html.escape(p["desc"])}</p><p class="b-meta">{blog_meta(p)}</p></div></a></li>')


BLOG_HERO = f'''<section class="bh" aria-labelledby="blog-h"><div class="wrap">
<p class="bh-kick">Guides for teams that call</p>
<h1 id="blog-h">The CallForges Blog</h1>
<p class="bh-lede">{BLOG_DESC}</p>
<div class="bh-cta"><a class="btn btn-primary" href="https://app.callforges.com/signup">Start Free Trial</a><span>14-day free trial · No card required</span></div>
</div></section>
'''
blog_list = ''
if POSTS:
    top = POSTS[0]
    topics = sorted({(p['topic'], p['topic_id']) for p in POSTS})
    chips = ''.join(f'<button type="button" data-topic="{i}" aria-pressed="false">{html.escape(t)}</button>' for t, i in topics)
    blog_list = (f'<section class="wrap bf-wrap" id="blogFeatured" aria-label="Latest post"><a class="bf" href="/blog/{top["slug"]}">'
                 f'<img src="{top["cover"]}" alt="" width="1200" height="630" decoding="async" fetchpriority="high">'
                 f'<div class="bf-body"><p class="b-topic">Latest · {html.escape(top["topic"])}</p><h2>{html.escape(top["title"])}</h2>'
                 f'<p class="bf-desc">{html.escape(top["desc"])}</p><p class="b-meta">{blog_meta(top)}</p></div></a></section>\n'
                 '<section class="wrap bl" aria-labelledby="blog-all-h"><h2 id="blog-all-h">Browse all posts</h2>\n'
                 f'<div class="bt" id="blogTopics" role="group" aria-label="Filter posts by topic" hidden><button type="button" data-topic="all" aria-pressed="true">All posts</button>{chips}</div>\n'
                 f'<ul class="bg" id="blogGrid">{"".join(blog_card(p, p is top) for p in POSTS)}</ul>\n'
                 '<p class="bl-status" id="blogStatus" role="status"></p>\n'
                 '<div class="bl-more"><button class="btn btn-ghost" type="button" id="blogMore" hidden>Show more posts</button></div>\n</section>\n')
BLOG_CTA = '''<section class="wrap bcta-wrap"><div class="bcta"><div><h2>Try CallForges free for 14 days</h2><p>A free local number, 50 inbound and 50 outbound minutes. No card required to start.</p></div><a class="btn btn-primary" href="https://app.callforges.com/signup">Start Free Trial</a></div></section>
'''
write('blog.html', head('CallForges Blog', BLOG_DESC, '/blog',
                        {'@context': 'https://schema.org', '@graph': [
                            {'@type': 'Blog', 'name': 'CallForges Blog', 'url': SITE + '/blog', 'publisher': PUBLISHER,
                             'blogPost': [{'@type': 'BlogPosting', 'headline': p['title'], 'url': f'{SITE}/blog/{p["slug"]}', 'datePublished': p['iso']} for p in POSTS]},
                            breadcrumb_ld([('Home', '/'), ('Blog', '/blog')])]}).replace('</head>', '<link rel="stylesheet" href="/blog.css?v=3">\n</head>')
      + site_top + '<main id="main" class="blog-home">\n' + BLOG_HERO + blog_list + BLOG_CTA + '</main>'
      + body_end.replace('</body>', '<script src="/blog.js?v=1" defer></script>\n</body>'))

for p in POSTS:
    for ref in re.findall(r'href="/blog/([^"#]+)', p['body']):
        if ref not in POST_SLUGS:
            raise SystemExit(f'_blog/src/{p["slug"]}.html: links to missing post {ref}')
    for ref in re.findall(r'href="/help/articles/([^"#]+)', p['body']):
        if ref not in SLUGS:
            raise SystemExit(f'_blog/src/{p["slug"]}.html: links to missing help article {ref}')
    body = blog_figures(re.sub(r'(<table\b.*?</table>)', r'<div class="tbl">\1</div>', p['body'], flags=re.S), p['slug'])
    toc = ''.join(f'<li><a href="#{sid}">{t}</a></li>' for sid, t in re.findall(r'<h2 id="([^"]+)">(.*?)</h2>', body))
    others = [o for o in POSTS if o is not p][:3]
    rel = ''.join(f'<li><a href="/blog/{o["slug"]}">{html.escape(o["title"])}{ARROW}</a></li>' for o in others)
    related = f'<section class="related" aria-labelledby="related-h"><h2 id="related-h">More from the blog</h2><ul>{rel}</ul></section>\n' if rel else ''
    path = f'/blog/{p["slug"]}'
    ld = {'@context': 'https://schema.org', '@graph': [
        {'@type': 'BlogPosting', 'headline': p['title'], 'description': p['desc'], 'datePublished': p['iso'], 'dateModified': p['iso'],
         'image': p['image'], 'author': {'@type': 'Organization', 'name': 'CallForges'}, 'publisher': PUBLISHER, 'mainEntityOfPage': SITE + path},
        breadcrumb_ld([('Blog', '/blog'), (p['title'], path)])]}
    write(f'blog/{p["slug"]}.html',
          head(f'{p["title"]} | CallForges', p['desc'], path, ld, p['image'])
          + site_top + '<main id="main">\n' + '<div class="help-main">\n' + crumbs([('Blog', '/blog'), (p['title'], None)])
          + '<article class="article">\n'
          + f'<h1>{html.escape(p["title"])}</h1>\n<p class="lead">{p["lead"]}</p>\n'
          + f'<p class="byline"><img src="/callforge-mark.png" alt="" width="28" height="28">CallForges team · {p["shown"]}</p>\n'
          + (p['takeaways'] + '\n' if p['takeaways'] else '')
          + (f'<nav class="toc" aria-label="In this post"><strong>In this post</strong><ol>{toc}</ol></nav>\n' if toc else '')
          + absolutize(body).strip() + '\n'
          + '</article>\n' + related
          + TRY + '</div>\n</main>' + body_end)

sm_path = os.path.join(REPO, 'sitemap.xml')
sm = [ln for ln in open(sm_path).read().splitlines() if 'callforges.com/help' not in ln and 'callforges.com/blog' not in ln]
urls = [f'  <url><loc>{SITE}/help</loc><lastmod>2026-10-31</lastmod><priority>0.6</priority></url>']
urls += [f'  <url><loc>{SITE}/help/collections/{c["slug"]}</loc><lastmod>2026-10-31</lastmod><priority>0.5</priority></url>' for c in LISTED]
urls += [f'  <url><loc>{SITE}/help/articles/{a["slug"]}</loc><lastmod>{a["iso"]}</lastmod><priority>0.5</priority></url>' for a in ARTICLES]
urls += [f'  <url><loc>{SITE}/blog</loc><lastmod>{POSTS[0]["iso"]}</lastmod><priority>0.6</priority></url>'] if POSTS else []
urls += [f'  <url><loc>{SITE}/blog/{p["slug"]}</loc><lastmod>{p["iso"]}</lastmod><priority>0.6</priority></url>' for p in POSTS]
end = sm.index('</urlset>')
open(sm_path, 'w').write('\n'.join(sm[:end] + urls + sm[end:]) + '\n')

print('images used:', sorted(used_images))
