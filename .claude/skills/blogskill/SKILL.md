---
name: blogskill
description: Run the CallForges daily blog plan. Monday to Friday, 3 or 4 posts go live, the next ones in the queue in _blog/plan.md. The queue holds 50 topics, each written five ways (A how it works, B set it up in CallForges, C a problem and its fix, D one market, E rules, costs and buying), mixed so each day's posts are different kinds and topics. Use when someone says "blogskill", "today's blogs", "write today's posts", "next posts", or asks which posts are next.
---

# CallForges daily blogs

The plan: the 50 topics our buyers ask about most, each written five ways (A to E). That is 250 posts, in one
queue. **Monday to Friday, take the next 4 posts (3 on a busy day); nothing on weekends.** At 4 a day the queue
lasts about 13 weeks. The queue is ordered so any 3 or 4 posts in a row are different kinds and different topics.
This skill decides what to write today and runs the day. How to write each post (format, facts,
numbers, covers, checklist, publishing) is the **callforges-blog** skill: load it too and follow it for every post.

## The five kinds

| Kind | The post | Title shape | Example |
|---|---|---|---|
| A | What it is and how it works | "What is X?", "How does X work?" | What is 10DLC registration? |
| B | How to set it up in CallForges | "How to set up X" | How to set up a phone menu (IVR) for your business |
| C | A problem people complain about, and the fix | the complaint as people type it | Why are my business texts not being delivered? |
| D | X for one industry | "X for <industry>" | AI receptionist for dental clinics |
| E | Rules, costs and buying | "Is X legal?", "How much does X cost?", "What to look for in X" | How much does an AI receptionist cost? |

- **A** is the topic's main post. It defines the terms and shows how it works (a figure fits well here). It ends with how
  CallForges does it.
- **B** is steps in CallForges with the app's exact labels in **bold**, taken from the row's **Facts from** files, and a
  link to the help article. If no file has the labels, ask Sunit or Sonali for them (or a screenshot) before writing.
- **C** opens with the complaint in the words people use (see the row's evidence links). It gives the causes, most
  likely first, then the fix for each, then how CallForges prevents or fixes it. Never blame the reader.
- **D** is about one market only (law firms, dental practices, clinics, real estate, insurance, home services and
  so on). It shows how that market's calls and texts go wrong today: missed calls, after-hours calls, slow lead
  follow-up, no-shows, hours lost dialing. Then it shows how CallForges fixes each one: the AI voice agent, the
  dialer, call workflows, SMS, recording.
  - It names the rules that market lives by, with official links.
  - `_blog/research/markets.md` has each market's pains, rules and evidence.
  - Examples are "for example" scenes, never customers.
  - Never claim a certification (HIPAA, SOC 2, PCI) unless the site states it.
- **E** has three possible shapes:
  - **Rules:** link the official source and end with "This is general information, not legal advice."
  - **Costs:** CallForges prices only as `pricing.html` states them; any other price only as a range from a source
    you link, never a named company.
  - **Buying:** a checklist of what to look for, with CallForges' honest answer to each item.

## Each day

1. **Pull and load.** Run `git pull`, read `blog-instructions/README.md` (the context and rules), then load the
   callforges-blog skill.
2. **Find today's posts.** No posts on Saturday or Sunday. In `_blog/plan.md` → "Queue", take the first 4 rows whose
   Status is `todo` (3 if Sunit or Sonali says so). Each row has the kind, the topic, the title, the slug, Facts from
   and evidence links.
3. **Claim them** so Sunit and Sonali never write the same posts:
   - Set their Status to `writing (<your name>)`.
   - Commit only `_blog/plan.md`, then push. Ask first; this push changes no page on the site.
   - If the pull shows rows already claimed, take the next `todo` rows.
4. **Read before writing.** For each post, read its evidence links and its Facts from files. Every fact source is
   in this repo: `help:<slug>` is `_help/src/articles/<slug>.html`, `kb:<file>` is `_blog/facts/<file>` (the app's
   own help-assistant entries), page names are the site's pages. Never look for the app's code. If a fact isn't in
   these files, ask Sunit or Sonali. A post marked `ask` waits
   for the labels; write the others meanwhile.
5. **Write the posts.**
   - If you can start subagents, give each one its own post: the row, its kind's rule above, the callforges-blog
     skill, and the live posts it should link to.
   - Then read every post yourself against the callforges-blog checklist.
   - Use the topic's area as the cover kicker: Voice agents, SMS, Messaging, Workflows, Calling, or Numbers.
6. **Link the topic together.**
   - Each new post links to its topic's posts that are already live, the A post first.
   - Then add the new post to the "Read next:" line of those earlier posts.
7. **Build, preview, publish.** Build and preview all of today's posts, then ask before pushing. A push to `main` publishes the
   site.
8. **Close the day.**
   - Set each post's Status to `live: <date>`.
   - Write one LinkedIn post per blog for the founder's own profile.
   - Report the live links.

## Rules that matter most

- **Byline:** every post is by "CallForges team". No person's name, no bio.
- **Only what is live.** Voice agents (inbound and outbound), SMS, the team inbox, call workflows, the power and
  parallel dialers, recording, AI notes, CRM logging, numbers and porting are live. Branded calling is "coming soon"
  only. The full live and not-live lists are in `blog-instructions/README.md`. Anything else: check the site and help
  center first.
- **No names:** no competitor or vendor name, ever. Not even the products the research looked at; say "the carrier".
  A CRM we connect to may be named, as the help center does.
- **Prices** only as `pricing.html` states them.
- **Order:** don't reorder the queue or swap posts yourself. If a post can't be written (the feature changed, or the facts
  are missing), say so and ask Sunit or Sonali what goes in its place.

## Where the plan came from

`_blog/research/*.md` holds the research behind the 50 topics, one file per area: what people ask on Reddit,
LinkedIn and Google, with links. Each file also lists more post ideas than the plan uses. Use them when a post needs
the reader's real questions, or when a post is swapped out.
