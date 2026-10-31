# Help center tools (not served: Caddy serves only top-level files and /help/…)

- `preview.js <repo> <port>` — local preview of the site with clean `/help…` URLs. It stubs the AI chat
  (`/api/v1/support/chat` answers "(Sample answer for this preview.)") because the real API only accepts
  callforges.com. Example: `node _help/tools/preview.js . 5198` → http://127.0.0.1:5198/help
- `articles_to_knowledge.py <_help/src/articles> <out-dir>` — turns each article into the AI chat's knowledge
  file `help_<slug>.md` (one entry per h2 section). Copy the output into the app repo's
  `backend/callforge_call_service/internal/supportknowledge/` in a PR, or the chat won't know a new or changed article.
- `shots/` — annotated screenshots (orange outline + numbered badge on each step's control), from the app in
  mock mode. Needs puppeteer-core and a mock-mode Vite on 127.0.0.1:5191 serving the production commit's
  `frontend/` (no `.env.local`, no backend); every request to another origin is aborted. Before capturing, change
  the mock seed in a scratch copy of the frontend: user "Ana Ruiz", workspace "Acme", phone numbers only in
  555-01xx (US) / 020 7946 (UK). Run from a folder that has puppeteer-core:
  `node run.mjs <group> [shot…]` (groups: account, billing, calls, campaigns, numbers, parallel, power, workflows);
  images go to `help/img/` (or `$HELP_IMG_DIR`). Calls are simulated in mock mode, so in-call controls that need
  a server call id (Transfer, Record, Voicemail drop) cannot be captured there.
