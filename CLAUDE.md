@README.md

## Working here with Claude

- Run `git pull` before starting: more than one person edits `main`.
- A push to `main` publishes the site. Show the change in the local preview and ask before every push.
- Commit only the files the task changed (`git add <files>`), never `git add -A`.

## Blog (callforges.com/blog)

Every blog rule lives in this repo: this file, `README.md` and the two skills. Nobody needs a separate instructions
file; when a rule changes, it changes here and `git pull` brings it.

- After `git pull`, if this file, `README.md` or anything in `.claude/skills/` changed, read it again before working
  (it was loaded before the pull). A new skill folder needs a session restart.
- **What to write today:** the `blogskill` skill. Monday to Friday, the next 3 or 4 `todo` rows of `_blog/plan.md`;
  claim them first. No posts on weekends.
- **How to write a post:** the `callforges-blog` skill (format, facts, sources, cover, checklist, preview, publish).
- **Five kinds per topic:** A what it is and how it works, B how to set it up in CallForges, C a problem and its fix,
  D one market (that market's own problems and rules, never a copy with the name swapped), E rules, costs and buying.
- **Byline:** always "CallForges team". No person's name, no bio.
- **Sell, with only what is true:** write with conviction ("we believe CallForges is the best…" is fine); no
  measurable claim we can't show ("most reliable", "#1"); no invented numbers, customers or results; never name a
  competitor or a vendor ("the carrier").
- **Facts come from this repo only:** `help:<slug>` = `_help/src/articles/<slug>.html`, `kb:<file>` = `_blog/facts/<file>`
  (the app's own help-assistant answers), and the site's pages. Prices only as `pricing.html` states them. A fact
  that isn't in these files: ask, never guess.
- **Live:** AI voice agents (inbound and outbound), power and parallel dialers, voicemail drop, call workflows, SMS
  and the team inbox, recording and AI notes, CRM logging (HubSpot, Pipedrive, Attio, HighLevel, Clio), numbers,
  porting, caller ID registration, local caller ID by country.
- **Not live, never write about them** (even where `pricing.html` lists them): Salesforce, Zoho, scorecards,
  sentiment, keyword alerts, live transcription, queue callbacks, checking the national Do Not Call Registry, the AI
  agent booking appointments, HIPAA compliance. Branded calling: "coming soon" only.
- **On hold:** dental, medical and clinic posts (marked `hold` in the plan) until Sunit decides about HIPAA.
- **Quality over volume:** if a post can't be made good today, write 3 instead of 4 and say why.
- **Research** behind every topic, with links: `_blog/research/`. **Sunit only:** refresh `_blog/facts/` with
  `sh _blog/tools/sync_facts.sh` when the app changes.
