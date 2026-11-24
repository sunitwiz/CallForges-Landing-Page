# Alternatives: phone systems and dialers (researched 2026-11-25)

Research for the "<vendor> alternatives" posts. Every price below comes from the vendor's own page, opened on
2026-11-25 (raw HTML fetched and read, including the JSON or `data-` attributes the page's own toggle uses).
Anything not seen on a vendor-owned page is marked **not verified**. No price comes from a review site or blog.

How to read the "Why people switch" bullets:
- Reddit, G2, Capterra, Software Advice and TrustRadius were all blocked (see "Could not verify" at the end), so
  the switching themes come from **Trustpilot** (all reviews and the 1-star filter) and from the vendors' own
  help and pricing pages (plain facts such as a seat minimum or a lock-in rule).
- The Trustpilot pages were read through a fetch tool that summarises the page. The dates and quotes are as it
  returned them: open the link and check a quote before you print it.
- Trustpilot reviews are unverified accounts, and the 1-star filter shows only the angriest. Use them as "what
  people say", never as fact about the vendor.

Autocomplete: `curl -s 'https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=<phrase>'`,
run 2026-11-25. Suggestions are listed verbatim, in Google's order. "(none)" means the query returned nothing.

---

## Aircall

**Pricing** ([aircall.io/pricing](https://aircall.io/pricing/), checked 2026-11-25, US)

| Plan | Annual (per license / month) | Monthly | Seat min | Dialer? | AI | Notes |
|---|---|---|---|---|---|---|
| AI Voice Agents (standalone) | $99 per month minimum | not shown | none (help article: 1 user, 1 number) | Trigger-based outbound calling by the agent | 38 languages, in-call and post-call actions | Help center calls it the "Starter AI Plan" |
| Essentials | $30 | **not verified** | 3 | No Power Dialer; "Outbound campaigns: AI Voice Agents campaigns only" | Call and voicemail transcription included; summaries, key topics, talk-to-listen, call scoring need the "AI Assist add-on" (price not shown); 50 AI Voice Agent min a month | Max 3 teams; recordings up to 1 year; analytics 6 months |
| Professional | $50 | **not verified** | 3 | **Power Dialer** (import up to 1,000 numbers, desktop and web), voicemail drop, outbound campaigns with automated retries | AI call summary, sentiment, key topics, talk-to-listen included | Smart routing, queue callback, whisper and barge, full API |
| Enterprise | Custom | Custom | 25 | As Professional | As Professional | "Unlimited global calls", HIPAA/SOC2, SSO and SCIM |

- **Monthly billing:** the page says "Save 25% by paying annually" and the FAQ says annual is "a 25% discount
  compared to monthly pricing", but the monthly figure is not on the page (the `monthly_price` field is empty).
  Do not compute one for print.
- **AI add-ons:** AI Assist Pro (real-time coaching) $49 per seat/month. AI Messaging Agents $0.15 to $0.35 per
  conversation. AI Assist (the Essentials add-on): price **not shown**.
- **AI Voice Agents minutes:** 50 a month included on every plan; pay as you go $0.29/min; bundles $250/month
  (1,000 min), $805/month (3,500 min), $1,900/month (10,000 min), "billed monthly with an annual commitment";
  over 50,000 min custom, "as low as $0.12". New accounts get 100 extra minutes at sign-up.
- **Other add-ons:** WhatsApp $10 per seat/month; Analytics+ $15 per seat/month; Aircall for Salesforce Voice
  $30 per seat/month; Number Reputation Dashboard $0.03 per check; Branded caller ID $0.08 per call/brand.
- **Calling:** inbound and internal unlimited (toll-free excluded); outbound unlimited in US and Canada (Terms of
  Use apply); international on Essentials and Professional: "Contact us for rates and bundle".
- **SMS/MMS:** all plans; 14 countries; domestic delivery only except US and Canada; unlimited inbound and 4,000
  outbound messages per user per month; per-message rates "contact us". MMS US, Canada, Australia.
- **Numbers:** 1 local or toll-free number included per plan; extra numbers $6/month each.
- **"Parallel calls" / "Unlimited simultaneous outbound calls"** are listed on all plans. That is not a parallel
  dialer (the page never uses the term for a dialer); don't present it as one.
- **Contract** ([help: Aircall plans, pricing and flexibility](https://support.aircall.io/en-gb/articles/30599733509277)):
  monthly, annual billed monthly, or annual upfront. "Most plans require a minimum of 3 licenses." On annual
  upfront, "Licenses are locked for the year and cannot be reduced mid-term"; "we do not issue pro-rated refunds
  or credits for mid-cycle deletions."
- **Starter AI Plan** ([help article](https://support.aircall.io/en-gb/articles/36572078998941)): removes the
  three-user minimum; 1 user and 1 number; extra users at Essentials rates; AI Voice Agent bundles bought through
  sales with an annual commitment.

**Why people switch**
- **Bills above the advertised price, add-ons nobody asked for.** Reviewers describe fees that doubled the bill,
  per-call charges on a campaign plan, and a quote with AI Assist licences they never requested.
  [Trustpilot (2.9, 1,105 reviews)](https://www.trustpilot.com/review/aircall.io),
  [Trustpilot 1-star](https://www.trustpilot.com/review/aircall.io?stars=1)
- **Cancellation and renewal.** 30 days' notice to cancel, annual plans that renewed before the customer acted
  with no refund, charges after cancelling or porting out. Matches the help article's no-reduction and no-refund
  rules above. [Trustpilot 1-star](https://www.trustpilot.com/review/aircall.io?stars=1)
- **Support.** The most frequent 1-star theme (about 14 of ~20 on the page): tickets closed unresolved, no answer
  on form, chat or phone. [Trustpilot 1-star](https://www.trustpilot.com/review/aircall.io?stars=1)
- **Three-seat minimum (fact, not a review theme).** Essentials and Professional need 3 licenses, so a 2-person
  team pays for 3. No Trustpilot review on the pages read named it as a complaint.
  [Aircall help](https://support.aircall.io/en-gb/articles/30599733509277)
- **Power Dialer only from Professional ($50) (fact).** [aircall.io/pricing](https://aircall.io/pricing/)
- **Call reliability.** Outbound dialing failing, dropped calls, poor audio (about 5 of the 1-star reviews).
  [Trustpilot 1-star](https://www.trustpilot.com/review/aircall.io?stars=1)
- Quote: "Charging after a valid cancellation and number port-out is unacceptable." (Trustpilot, 4 Oct 2026)

**Autocomplete**
- aircall alternatives: aircall alternatives · aircall alternatives australia · best alternatives to aircall · alternatives to airflow · alternatives to cisco · alternatives to airdna
- aircall alternative: aircall alternatives · aircall alternatives australia · aircall alternative free · aircall alternativen · best aircall alternative · cheaper alternative to aircall · what is aircall · alternatives to airflow
- aircall vs: aircall vs dialpad · aircall vs quo · aircall vs · aircall vs nextiva · aircall vs justcall · aircall vs 3cx · twilio vs aircall · aircall vs openphone · aircall vs talkdesk · aircall vs vonage
- aircall pricing: aircall pricing · aircall pricing plans · aircall pricing per month · aircall pricing australia · aircall pricing reddit · aircall pricing uk · aircall pricing per minute · aircall sms pricing · aircall io pricing · aircall dialer pricing
- aircall reddit: aircall reddit · aircall reviews reddit · aircall pricing reddit · aircall workspace reddit · aircall vs dialpad reddit · aircall vs ringcentral reddit · working at aircall reddit
- cheaper than aircall: (none)
- cheaper alternative to aircall: cheaper alternative to aircall · alternatives to aircall · alternatives to airflow · cheaper alternatives to air conditioning
- aircall alternative for small business: (none)

**Fits best:** support and sales teams of 3 or more who live in a help desk or CRM (250+ integrations) and will
pay for Professional to get the power dialer.

---

## JustCall

**Pricing** ([justcall.io/pricing](https://justcall.io/pricing/), checked 2026-11-25, US/Canada region)

| Plan | Annual (per user / month) | Monthly | Seat min | Dialer? | AI | Notes |
|---|---|---|---|---|---|---|
| Team | $29 (Black Friday $23) | $39 | 2 | No | Unlimited AI transcription minutes; AI Review Assist add-on $9/user | 500 SMS segments/user (US & Canada) |
| Pro | $49 (Black Friday $37) | $69 | 2 | **Power dialer**, bulk SMS campaigns | As Team; AI Review Assist add-on $9/user | 1,000 SMS segments/user; queue callback, Salesforce CTI |
| Pro Plus | $89 (Black Friday $62) | $109 | 2 | Power dialer | AI Review Assist included; AI call scoring, real-time agent assist, script compliance, sentiment, SMS Co-pilot | 1,000 SMS segments/user |
| Business | Custom | Custom | 10 | As Pro Plus | As Pro Plus | "Unlimited calling & SMS", SSO, HIPAA |
| SalesPro | Custom ("Request a Quote", "SAVE 37%") | Custom | 2 | **Predictive dialer (up to 10 lines)**, power and dynamic dialer | Call transcription and summary, live transcription, AI coaching, objection handling | AI voice agent is an add-on |

- **Black Friday:** the page's own script sets US annual sale prices Team $23, Pro $37, Pro Plus $62, live from
  10 Nov 2026 until 30 Nov 2026 (ends 1 Dec 05:00 UTC); "Monthly prices are unchanged". After that the list
  prices apply. Annual saving shown as "up to 29%" (list) or "up to 46%" (sale).
- **AI Review Assist add-on:** $9.00 per user: call summary, standard AI scorecards, smart chapters, topics,
  tags, sentiment, CRM logging.
- **AI Voice Agent:** add-on. The page says "Volume discounts down to $0.15/min" and the agent page says
  "Starting at $0.15/min" and "can go as low as $0.15 per minute"; first 100 minutes free; higher volume quoted
  by sales ([justcall.io/product/ai-voice-agent](https://justcall.io/product/ai-voice-agent/)). The standard
  per-minute rate is **not verified**.
- **Calling:** plan cards say "Unlimited outbound minutes" and "Unlimited inbound minutes" (Fair Usage Policy);
  the credits tab says 1,000 outbound min/user pooled on Team, Pro and Pro Plus. Includes calls within the
  chosen region (US/Canada, UK, Australia or Europe). "Excludes toll-free, premium-rate, shared service numbers,
  international calls, and call forwards." Outbound in the US/Canada region excludes UK and Australian mobiles.
- **SMS:** included segments cover the chosen region only and exclude SMS sent via workflows, bulk campaigns and
  CRM automations.
- **Transcription:** unlimited per seat, except the Team plan's UK bundle (2,000 min/agent, then $0.025/min).
- **Numbers:** two free per account (one JustCall, one SalesDialer, local or mobile); extra numbers bought in
  the app, price **not shown**. Local Number Bundles (50/100/200 numbers) exist; the prices in the page markup
  are inconsistent (struck and live figures change by region script), so **not verified**.
- **Contract:** monthly or annual. Trial 14 days, no card; 30 days to subscribe after the trial or the account
  is deleted.

**Why people switch**
- **Support hard to reach.** The top 1-star theme: passed among about ten agents over two weeks, an AI bot before
  a human, slow fixes during outages. [Trustpilot (3.8, 749 reviews)](https://www.trustpilot.com/review/justcall.io),
  [Trustpilot 1-star](https://www.trustpilot.com/review/justcall.io?stars=1)
- **Billing and credits.** Overbilling, a number billed for months after it was lost, a full year charged for a
  number used two weeks, no refunds. [Trustpilot 1-star](https://www.trustpilot.com/review/justcall.io?stars=1)
- **"Unlimited" with exclusions.** A reviewer found toll-free inbound and forwarding cost extra after signing; the
  pricing page lists those exclusions in its fair usage box. Another found the trial's call caps only after
  signup. [Trustpilot 1-star](https://www.trustpilot.com/review/justcall.io?stars=1),
  [justcall.io/pricing](https://justcall.io/pricing/)
- **Dropped calls and caller ID.** Calls dropping, numbers not routing during an outage, caller ID failing for
  months; one mortgage broker's texting never worked because of carrier restrictions.
  [Trustpilot 1-star](https://www.trustpilot.com/review/justcall.io?stars=1)
- **Two-seat minimum, dialer from Pro, AI review is $9 extra below Pro Plus (facts).**
  [justcall.io/pricing](https://justcall.io/pricing/)
- Quote: "impossible to get support if something breaks." (Trustpilot, 16 Jun 2026)

**Autocomplete**
- justcall alternatives: justcall alternatives · justcall alternatives reddit · justcall.io alternatives · alternative or alternatives
- justcall alternative: justcall alternatives · justcall alternatives reddit · justcall.io alternatives
- justcall vs: justcall vs aircall · justcall vs quo · justcall vs cloudtalk · justcall vs ringcentral · justcall vs dialpad · justcall vs kixie · justcall vs callhippo · justcall vs openphone · justcall vs · justcall vs twilio
- justcall pricing: justcall pricing · justcall pricing plans · justcall pricing per month · justcall io pricing · justcall dialer pricing · justcall sms pricing · justcall ai pricing · any.do pricing
- justcall reddit: justcall reddit · justcall reviews reddit · justcall io reddit · justcall alternatives reddit
- cheaper than justcall: (none)
- justcall alternative for small business: (none)

**Fits best:** outbound sales teams that text as much as they call, want SMS automation and, at SalesPro, a
predictive dialer; at least 2 seats, dialer from Pro.

---

## Dialpad

**Pricing** ([dialpad.com/pricing](https://www.dialpad.com/pricing/), checked 2026-11-25, USD). Dialpad now sells
four products: Resolve (AI agents), Support (contact center), Sell (outbound sales), Connect (business phone).
Annual and monthly prices read from the page's own price data (`usd.annual` / `usd.monthly`); the page shows
Annual by default.

| Product / plan | Annual (per user / month) | Monthly | Seat min | Dialer? | AI | Notes |
|---|---|---|---|---|---|---|
| Connect Standard | $15 | $27 | not shown | Not listed | Real-time transcripts, instant call summaries (AI Recaps) | Calls, meetings, messaging |
| Connect Pro | $25 | $35 | not shown | Not listed | As Standard | Key CRM integrations, 24/7 support |
| Connect Enterprise | Contact us | Contact us | not shown | Not listed | As Pro | SSO, unlimited offices |
| Sell Essentials | $39 | $49 | not shown | Not listed by name | AI transcripts, recaps, PII redaction | Unlimited domestic (US & CAN) minutes; 1-year recording retrieval |
| Sell Advanced | $59 | $70 | not shown | "Reach Booster included: local presence dialing + voicemail drop" | Live Coach (real-time assist) | Month-to-month or annual |
| Sell Premium | $79 | $95 | not shown | As Advanced | Quality Management: AI CSAT, scorecards, playbooks | Annual only |
| Support Essentials | $89 | $109 | not shown | **"Power Dialer"**, Reach Booster | Transcripts, recaps, PII redaction, sentiment | Omnichannel routing, CC analytics |
| Support Advanced | $119 | $145 | not shown | As Essentials | Live Coach, Quality Management | Month-to-month or annual |
| Support Premium | $149 | $179 | not shown | As Essentials | + Workforce Management | Annual only |
| Resolve (AI agents) | Custom pricing | — | — | — | Voice and digital AI agents | "Conversation-based pricing": a pool of AI Agent Credits, used only when the AI "retrieves information or executes a real action" |

- **Contract:** Sell and Support FAQ: "Advanced accounts are available on both month-to-month as well as annual
  plans, while Premium accounts are available on annual plans only."
- **Price may vary:** "The price you see on the website may differ from your actual price due to regional pricing
  and currency."
- **International:** Connect FAQ says calls can be placed worldwide and "international local numbers in over 50
  countries"; no rates, bundles or caps on the page.
- **Not shown on the page:** seat minimums, number prices, SMS limits, AI agent prices.

**Why people switch**
- **Support.** The most common 1-star theme: bounced between chat, phone and email; account reactivation emails
  that never came. [Trustpilot (4.1, 3,262 reviews)](https://www.trustpilot.com/review/dialpad.com),
  [Trustpilot 1-star](https://www.trustpilot.com/review/dialpad.com?stars=1)
- **Contract lock-in and renewals.** A reviewer told a yearly agreement was needed to port numbers and that it
  renews for three years; a license billed after asking to remove it before renewal; an annual bill about five
  times higher with no notice. [Trustpilot 1-star](https://www.trustpilot.com/review/dialpad.com?stars=1)
- **Cancellation and refunds.** Cancelling within three days not honoured; a refund still outstanding weeks after
  cancelling. [Trustpilot 1-star](https://www.trustpilot.com/review/dialpad.com?stars=1)
- **Extra costs.** Features oversold, a Salesforce integration at an extra £139 a month.
  [Trustpilot 1-star](https://www.trustpilot.com/review/dialpad.com?stars=1)
- **Dialer sits in a separate, pricier product (fact).** No dialer is listed on Connect; "Power Dialer" is listed
  on Support Essentials ($89); Sell lists local presence and voicemail drop from Advanced ($59).
  [dialpad.com/pricing](https://www.dialpad.com/pricing/)
- Call quality is rarely the complaint: the recent reviews read mostly praise it.
- Quote: "Horrible company with terrible support." (Trustpilot 1-star page)

**Autocomplete**
- dialpad alternatives: dialpad alternatives · dialpad alternatives reddit · dialpad alternatives free · dialpad alternatives australia · is dialpad free · how much does dialpad cost · what is dialpad
- dialpad alternative: dialpad alternatives · dialpad alternatives reddit · dialpad alternatives free · dialpad alternatives healthcare · dialpad alternatives australia · best dialpad alternative · skype dialpad alternative · is dialpad free · how much does dialpad cost · what is dialpad
- dialpad vs: dialpad vs ringcentral · dialpad vs quo · dialpad vs zoom · dialpad vs teams · dialpad vs google voice · dialpad vs vonage · dialpad vs aircall · dialpad vs five9 · dialpad vs justcall · dialpad vs zoom phone
- dialpad pricing: dialpad pricing · dialpad pricing plans · dialpad pricing australia · dialpad pricing uk · dialpad pricing canada · dialpad pricing reddit · dialpad pricing us · dialpad pricing tiers · dialpad sms pricing · dialpad voip pricing
- dialpad reddit: dialpad reddit · dialpad reddit review · dialpad alternatives reddit · dialpad philippines reddit · dialpad interview reddit · dialpad pricing reddit · dialpad ai reddit · dialpad voip reddit · dialpad sales reddit · dialpad vs ringcentral reddit
- cheaper than dialpad: (none)
- cheaper alternative to dialpad: cheaper alternative to dialpad · dialpad alternatives · cheaper alternatives to dish network · cheaper alternatives to cod · how much does dialpad cost
- dialpad alternative for small business: (none)

**Fits best:** companies that want calls, meetings and chat in one app with AI transcripts and recaps on the
base plan; sales dialing and contact center are separate, higher-priced products.

---

## Quo (formerly OpenPhone)

**Pricing** ([quo.com/pricing](https://www.quo.com/pricing), checked 2026-11-25, USD)

| Plan | Annual (per user / month) | Monthly | Seat min | Dialer? | AI | Notes |
|---|---|---|---|---|---|---|
| Starter | $15 ("Billed annually at $180") | $19 | none stated | No dialer on any plan | Sona AI agent; AI summaries and transcripts only for calls Sona handles; voicemail transcripts | Email ticket support; shared number up to 10 paid users; manual call recording |
| Business | $23 ($276/year) | $33 | none stated | No | AI call summaries and transcripts for all calls | Phone menus, call transfers, ring order, HubSpot and Salesforce, auto recording, live chat support |
| Scale | $35 ($420/year) | $47 | none stated | No | + AI call tags | Priority support, inbound phone support, dedicated onboarding |

- **Sona AI agent:** every plan includes 1,000 credits a month (1 call = 100 credits, so 10 calls; 1 text
  conversation = 50 credits). More credits: $25/mo (4,000), $49 (10,000), $99 (25,000), $199 (60,000).
  Overage per call $1.00 down to $0.45 by tier; per text conversation $0.50 down to $0.225. Calls under 15
  seconds use no credits.
- **Calling and texting:** US and Canada unlimited on all plans ("Subject to our Fair Usage Policy").
  International calls and texts are an add-on at per-minute and per-message rates, paid with credits.
- **US texting registration:** $19.50 one-time carrier review fee, then $1.50 to $3/month messaging fee.
- **Automated SMS** (API, Zapier, Make): $0.01 per outgoing text.
- **Numbers:** 1 local or toll-free per user; extra numbers $5/month each; porting free.
- **Contract:** monthly or yearly; "Cancel anytime"; cancelled plans stay active to the end of the cycle; numbers
  kept 60 days. Trial 7 days.

**Why people switch**
- **No dialer.** Quo's plans list calling, transfers, group calling and phone menus, but no power or auto
  dialer on any plan (fact). [quo.com/pricing](https://www.quo.com/pricing)
- **Support through bots, people on higher plans.** The top 1-star theme: chatbots and emails, no human; a
  reviewer said a human agent needed an upgrade. The pricing page lists email-only support on Starter, live chat
  from Business, phone only on Scale. [Trustpilot 1-star](https://www.trustpilot.com/review/quo.com?stars=1),
  [quo.com/pricing](https://www.quo.com/pricing)
- **Outages and failed texts.** Outbound texts failing in business hours, app errors, calls dropping after 30
  seconds; even a 4-star review warns of downtime.
  [Trustpilot (4.2, 1,155 reviews)](https://www.trustpilot.com/review/quo.com),
  [Trustpilot 1-star](https://www.trustpilot.com/review/quo.com?stars=1)
- **Accounts suspended or blocked.** An API-messaging account suspended; one blocked after about 20 calls.
  [Trustpilot 1-star](https://www.trustpilot.com/review/quo.com?stars=1)
- **Porting trouble.** Texts stopped after a number moved in; a week-long port ate a free trial.
  [Trustpilot 1-star](https://www.trustpilot.com/review/quo.com?stars=1)
- **Calls outside the US and Canada cost extra (fact).** [quo.com/pricing](https://www.quo.com/pricing)
- No review on the pages read mentioned a price increase.
- Quote: "you will get nothing but bots and emails from customer service with no solutions." (Trustpilot, 8 Sep 2026)

**Autocomplete**
- quo alternatives: quo alternatives · quo alternatives reddit · quo phone alternatives · status quo alternatives · quo openphone alternatives · best quo alternatives · quid pro quo alternatives · alternative quote meaning · alternative quotes · substitute quotes
- quo alternative: quo alternatives · quo alternative reddit · quotes alternative word · quotes alternative · status quo alternative · status quo alternative words · quo phone alternative · quo free alternative · quo openphone alternatives · best quo alternatives
- openphone alternatives: openphone alternatives · openphone alternatives reddit · openphone alternatives free · quo openphone alternatives · open source alternatives to notion · open source alternatives to google · open source office alternatives · open source alternative
- openphone alternative: openphone alternatives · openphone alternatives reddit · openphone alternatives free · quo openphone alternatives · openphone cheaper alternative · open source alternatives to google · open source alternatives to notion
- quo vs: quo vs google voice · quo vs ringcentral · quo vs grasshopper · quo vs dialpad · quo vs nextiva · quo vs twilio · quo vs · quo vs zoom phone · quo vs allo · quo vs google voice reddit
- quo phone vs: quo phone vs google voice · quo phone vs · quo phone vs ringcentral · which phone is best for call quality · which phone is higher than iphone
- openphone vs: openphone vs google voice · openphone vs grasshopper · openphone vs ringcentral · openphone vs dialpad · openphone vs · openphone vs twilio · openphone vs zoom phone · openphone vs nextiva · openphone vs aircall · openphone vs quo
- quo pricing: quo pricing · quo pricing plans · quo pricing canada · quo pricing reddit · quotes pricing · status quo pricing · quo phone pricing · status quo pricing strategy · openphone quo pricing · quo sona pricing
- openphone pricing: openphone pricing · openphone pricing plans · openphone quo pricing · openphone sms pricing · openphone sona pricing · openphone cost · is openphone free · ope cost
- quo reddit: quo reddit · quo reddit reviews · quotes reddit · quotes reddit format · quotes reddit mobile · reddit quo vadis · reddit quo vadis aida · quotes reddit funny · reddit quo phone · reddit quo beauty
- openphone reddit: openphone reddit · openphone reddit review · openphone alternatives reddit · quo openphone reddit · dialpad vs openphone reddit · grasshopper vs openphone reddit · openphone vs ringcentral reddit · open review meaning · open service meaning · open serve reviews
- cheaper than quo: cheaper than quotes · cheaper version of quooker tap · cheaper version of quooker · cheaper than therapy quotes · cheap vs quality quotes · quote vs price (none relevant)
- cheaper than openphone: (none)
- quo / openphone alternative for small business: (none)
- Note: "quo" alone collides with "quotes" and "status quo"; target "quo phone" and "openphone" in titles.

**Fits best:** small US and Canada teams that mostly text and talk from shared numbers and need no dialer.

---

## RingCentral (lighter pass)

**Pricing** ([ringcentral.com/pricing/business-phone](https://www.ringcentral.com/pricing/business-phone), checked
2026-11-25; the old plansandpricing URL redirects here). Same prices for 1-5 and 6-100 users.

| Plan | Annual (per user / month) | Monthly | Seat min | Dialer? | AI | Notes |
|---|---|---|---|---|---|---|
| RingEX Core | $20 | $30 | none stated | Not listed | AI Virtual Assistant included; AI Receptionist add-on | Unlimited domestic calling; 100 toll-free min; 25 SMS/user/month |
| RingEX Advanced | $25 | $35 | none stated | Not listed | As Core | CRM integrations, multi-site; 1,000 toll-free min; 100 SMS/user/month |
| RingEX Ultra | $35 | $45 | none stated | Not listed | As Core | 10,000 toll-free min; 200 SMS/user/month; unlimited storage |
| AI Customer Engagement Bundle | Contact us | — | — | — | AI Receptionist + AI Conversation Expert included | Coaching, call scoring, summaries |

- Add-ons: AI Receptionist "Starts at $39"; Conversational Intelligence "Starts at $60"; Call Queues Booster $35;
  Business SMS Booster $25; RingCX AI Contact Center "Starting at $65 /user" (dialer features **not verified**).
- Extra local or toll-free numbers $4.99/month; international numbers from $5.99/user/month.
- Fees: "Federal Universal Service Recovery Fee, E911 Service Fee, Compliance and Administrative Cost Recovery
  Fee, 911 Fee, and State and Local Taxes may apply." TCR fees for SMS. Phone rental "only with multi-year
  contract". Promo banner: "Don't pay until 2027. Get 6 months free today."
- Trial 14 days, up to 5 users, no SMS in trial.

**Why people switch** ([Trustpilot 1-star; TrustScore 1.8, 2,042 reviews](https://www.trustpilot.com/review/ringcentral.com?stars=1))
- Support: account managers who stop replying, holds of over an hour.
- Contracts and auto-renewal: a reviewer told he was in a five-year term when the proposal said two.
- Billing after cancellation, or for the wrong number of lines.

**Autocomplete**
- ringcentral alternatives: ringcentral alternatives · ringcentral alternatives free · ringcentral alternatives reddit · ringcentral alternatives uk · ringcentral alternatives canada · ringcentral alternatives australia · best ringcentral alternatives · is ringcentral free
- ringcentral vs: ringcentral vs nextiva · ringcentral vs quo · ringcentral vs google voice · ringcentral vs dialpad · ringcentral vs zoom · ringcentral vs vonage · ringcentral vs grasshopper · ringcentral vs teams phone · ringcentral vs zoom phone · ringcentral vs teams
- ringcentral pricing: ringcentral pricing · ringcentral pricing plans · ringcentral pricing uk · ringcentral pricing us · ringcentral pricing canada · ringcentral pricing reddit · ringcentral pricing australia · ringcentral pricing for small business · ringcentral pricing per user · ringcentral pricing india
- ringcentral reddit: ringcentral reddit · ringcentral reddit review · ringcentral reddit sysadmin · ringcentral alternatives reddit · ringcentral stock reddit · ringcentral interview reddit · ringcentral pricing reddit · ringcentral philippines reddit · ringcentral hiring reddit · ringcentral ai reddit
- cheaper than ringcentral: cheaper than ringcentral · alternatives to ringcentral · ringcentral monthly cost
- ringcentral alternative: ringcentral alternatives · ringcentral alternatives free · ringcentral alternatives reddit · ringcentral alternatives uk · ringcentral alternatives canada · ringcentral alternatives australia · ringcentral alternative caller id · best alternative to ringcentral · ringcentral cheaper alternative · is ringcentral free
- ringcentral alternative for small business: (none)

**Fits best:** businesses replacing a desk-phone PBX across sites that want phone, meetings, fax and chat from one
vendor; no dialer in RingEX.

---

## CloudTalk (lighter pass)

**Pricing** ([cloudtalk.io/pricing](https://www.cloudtalk.io/pricing/), checked 2026-11-25). The page's static
HTML shows **EUR**; a USD toggle swaps the currency symbol, so the USD figures are probably the same numbers, but
that was **not verified** on a rendered page.

| Plan | Annual (per user / month) | Monthly | Seat min | Dialer? | AI | Notes |
|---|---|---|---|---|---|---|
| Starter | €25 | €34 | 1 | Add-on | Conversation Intelligence add-on from €9 | 500 domestic outbound min/user |
| Essential | €29 | €39 | 1 | Add-on | As Starter | Up to 3,000 domestic min/user (fair use); international SMS/MMS from credit |
| Expert | €49 | €69 | 3 | Smart dialer and **AI Sales Dialer in Power mode included** | As Starter | Unlimited US & Canada or domestic EU/UK calls (fair use); WhatsApp; Salesforce |

- Dialer add-ons: AI Power Dialer €15/user (included on Expert); AI Sales Dialer, **Parallel mode, €39/user** (up
  to ten lines per rep, five by default).
- AI Receptionist: first 50 minutes free, then €99/month (200 min), €199 (500), €299 (1,000), €699 (2,500);
  rolling monthly. AI Specialist €349/month, 1,000 min, 3-month minimum. Volume "down to €0.15 a minute".
- Numbers from €6/month, one free; toll-free from €6/month; Branded Caller ID from $0.10 a call.
- "US and Canada add an 11% cost recovery fee". "Pay annually, save 3+ months (up to 30% off)". Plans "Cancel or
  change at renewal".

**Why people switch** ([Trustpilot 1-star; TrustScore 4.2, 909 reviews](https://www.trustpilot.com/review/cloudtalk.io?stars=1))
- Slow support: emails unanswered for months, repeated requests for case IDs.
- Billing and cancellation: a monthly plan followed by an annual invoice; charges after cancelling; an offboarding
  call required to cancel.
- Audio problems and bugs.

**Autocomplete**
- cloudtalk alternatives: cloudtalk alternatives · herbal alternatives waveland
- cloudtalk vs: cloudtalk vs justcall · cloudtalk vs aircall · cloudtalk vs ringcentral · cloudtalk vs dialpad · cloudtalk vs · cloudtalk vs quo · cloudtalk vs kixie · cloudtalk vs ringover · cloudtalk vs twilio · cloudtalk vs 3cx
- cloudtalk pricing: cloudtalk pricing · cloudtalk pricing plans · cloudtalk io pricing · cloudtalk sms pricing · cloudtalk dialer pricing · cloudtalk ai pricing · etisalat cloudtalk pricing · cloud campaign pricing · cloud cost tools · cloud service pricing
- cloudtalk reddit: cloudtalk reddit · cloudtalk reddit ph · cloudtalk reddit review · cloudtalk io reddit
- cheaper than cloudtalk: (none) · cloudtalk alternative for small business: (none)

**Fits best:** European and UK call teams that want local minutes bundled and can add the dialer they need.

---

## Kixie (lighter pass)

**Pricing** ([kixie.com/pricing](https://www.kixie.com/pricing/), checked 2026-11-25): three plans,
**no prices on the page**: Professional (no dialer), Single-Line PowerDialer, Multi-Line PowerDialer ("PowerDial up
to 4 lines simultaneously", AI Human Voice Detection as a premium add-on). All plans: voicemail drop, live call
coaching, IVR, call recording, "Unlimited Minutes, covers all calls in the US/Canada". Add-ons ConnectionBoost,
Conversation Intelligence, DNC: prices not shown. Trial 7 days, no card.
- Kixie's own [Facts for AI page](https://www.kixie.com/llm-info/) (last reviewed 8 Oct 2026): "per-seat prices
  are not published and are quoted per team. Any dollar figure attributed to Kixie by a third party is not from
  Kixie." **Plan prices: not verified.**
- The pricing page's FAQ data does say: "unlimited minutes plans for the US and Canada for $30/mo. per user";
  texts to US and Canada $0.011 each; first US/Canada number free, extra numbers $5.00/month. It conflicts with
  the Facts page, so don't quote the $30.

**Why people switch** ([Trustpilot; TrustScore 2.8, 106 reviews](https://www.trustpilot.com/review/kixie.com))
- Slow support (help held back during a trial, replies after three weeks); no in-app way to cancel; charges after
  stopping; numbers marked as spam.

**Autocomplete**
- kixie alternatives: kixie alternatives
- kixie vs: justcall vs kixie · kixie vs phoneburner · kixie vs wavv · kixie vs aircall · kixie vs ringcentral · kixie vs · kixie vs readymode · kixie vs books · cloudtalk vs kixie · aloware vs kixie
- kixie pricing: kixie pricing · kixie pricing plans · kixie pricing reddit · kixie pricing per month · kixie dialer pricing · kixie powercall pricing · kixie professional pricing · kixie power dialer pricing · kixie cost · how much does androids cost
- kixie reddit, cheaper than kixie, kixie alternative for small business: (none)

**Fits best:** US sales teams on HubSpot or Salesforce that want multi-line power dialing (up to 4 lines) and
will take a quote.

---

## Grasshopper (lighter pass)

**Pricing:** **not verified.** [grasshopper.com/pricing](https://grasshopper.com/pricing) answered from our
location with its region notice ("Grasshopper is available only in the USA and Canada") and redirected to
`/international-blocker`; the help site returned Access Denied. Not worked around. The only figure seen is the
page's own meta description: "pricing starting at just $14/month, billed annually".

**Why people switch** ([Trustpilot 1-star; TrustScore 3.1, 378 reviews](https://www.trustpilot.com/review/grasshopper.com?stars=1))
- Annual auto-charge with no reminder and no refund; slow or conflicting support; SMS registration that failed
  for a sole proprietor; a port that never completed.

**Autocomplete**
- grasshopper alternatives: grasshopper alternatives · grasshopper alternatives reddit · grasshopper phone alternatives · rhino grasshopper alternatives · grasshopper 3d alternatives · google grasshopper alternatives · grasshopper coding alternatives · best grasshopper alternatives · grasshopper alternative name
- grasshopper phone vs: grasshopper phone vs google voice · grasshopper phone vs ringcentral · grasshopper phone vs · grasshopper phone alternatives · what is grasshopper phone service
- grasshopper phone pricing: grasshopper phone pricing · grasshopper phone cost · grasshopper phone service pricing · grasshopper phone system pricing · what is grasshopper phone service · grasshopper phone customer service
- grasshopper phone reddit: grasshopper phone reddit · grasshopper phone service reddit · grasshopper phone reviews reddit · grasshopper phone app reddit · grasshopper business phone reddit · grasshopper phone customer service · grasshopper phone pricing · what is grasshopper phone service
- grasshopper vs / pricing / reddit (without "phone"): dominated by insects, mowers and the Rhino 3D plug-in; use "grasshopper phone".
- grasshopper phone alternatives, cheaper than grasshopper, grasshopper alternative for small business: (none)

**Fits best:** a solo owner or very small US/Canada business that wants a second business number on their mobile
(features not verified on its own page).

---

## CallForges facts for comparison

Copied only from `pricing.html`, `compare.html` and `blog-instructions/README.md` section 3.

**Plans** (pricing.html; README section 3 matches):

| Plan | Billed annually | Billed monthly | Free minutes per user a month | AI agent minutes |
|---|---|---|---|---|
| Starter | $15 per user a month | $19 | 100 | $0.12 a minute |
| Business | $29 | $39 | 500 | 100 per user, pooled, then $0.12 |
| Scale | $45 | $59 | 1,000 | 250 per user, pooled, then $0.12 |

- "No seat minimums." "Is there a seat minimum? No. Start with one seat." One plan for the whole workspace.
- Every plan has the power and parallel dialers and voicemail drop.
- Free minutes cover calls to and from the US, UK, Canada and Australia; other countries per minute. Minutes round
  up to the next full minute; unused minutes don't roll over.
- One free local US, UK, Canada or Australia number per user; extra numbers from $5 a month; toll-free from $5
  ($25 in Australia); numbers in 56 countries and territories.
- AI transcripts billed per minute (all plans); AI summaries from Business; SMS two-way, billed per message, US
  numbers register with the carriers (their own fees).
- Local caller ID: Business and Scale (matches the country, not the area code).
- Porting: $10 per US number; can start in the trial.
- Trial: 14 days, no card, 50 minutes inbound and 50 outbound, calls up to 5 minutes until a card is added; dialer
  campaigns start with a paid plan.
- Monthly plans cancel anytime; annual plans change or downgrade at renewal; upgrades and added seats prorated.
- "Save up to 26%" by paying annually.
- compare.html's 5-rep example: CallForges Business $145 a month, billed annually.

**Not live (README section 3): never write about these, even where pricing.html lists them:** Salesforce or Zoho;
scorecards, sentiment or keyword alerts; live transcription; queue callbacks; checking numbers against the national
Do Not Call Registry; the AI agent booking appointments into a calendar (it books a callback); HIPAA. Branded
calling: "coming soon" only. pricing.html still lists Salesforce, Zoho, live transcription, queue callbacks, coaching
and scorecards, keyword alerts and sentiment on Business and Scale: the posts must leave them out.

**Where compare.html ("Public list prices, September 2026") differs from today**

| Row | compare.html | Vendor page today (2026-11-25) |
|---|---|---|
| Aircall AI transcripts and summaries | "$9 / user add-on" | Transcription included on all plans; summaries included on Professional; on Essentials they need the "AI Assist add-on", price not shown. The $9 can't be confirmed. |
| Aircall AI Voice Agent | "From $0.49 / min, 50 min / license included" | $0.29/min pay as you go; bundles to about $0.19; custom "as low as $0.12"; 50 min a month "included in every plan" (the page doesn't say per license). |
| Aircall "5 reps with dialer + AI" | "~$295" (Professional $50 + AI $9) | Professional now includes AI summaries: 5 × $50 = $250 a month, annual (3-seat minimum still applies). |
| compare.html "From Aircall" copy | "no $9 per-user AI add-on" and "AI agent minutes at a quarter of the pay-as-you-go rate" | Aircall's PAYG is $0.29, so $0.12 is about 41% of it, not a quarter; the $9 add-on line no longer matches Professional. |
| JustCall starting price | $29 | Still the list price; Black Friday $23 until 30 Nov 2026. |
| JustCall AI Voice Agent | "From $0.15 / min" | $0.15 is the volume floor ("down to", "as low as"); first 100 min free; standard rate not shown. |
| JustCall 5 reps | "~$290" | Still $290 at list (5 × $49 + 5 × $9); lower during the sale. |
| Dialpad seat minimum | "1 seat, Pro plan: 3" | Not shown on the pricing page today. |
| Dialpad power/auto dialer | "Not in Standard or Pro" | Still not on Connect; "Power Dialer" is on Support Essentials ($89); Sell shows local presence + voicemail drop from Advanced ($59). |
| Dialpad international | "Add-on with 1,500-minute monthly cap" | Not on today's page. |
| Quo | $15, no minimum, no dialer, AI from Business, Sona 10 calls free, $19.50 + $1.50–$3 | Unchanged. |
| Sources line | Cites ringly.io for Aircall and Dialpad | ringly.io is a third-party site; re-source those cells from aircall.io/pricing and dialpad.com/pricing. |

---

## Could not verify

- **Reddit:** blocked. The search tool refuses `reddit.com` ("not accessible to our user agent"); earlier research
  files record the same for fetch and curl. No Reddit threads are cited; nothing was worked around.
- **G2, Capterra, Software Advice, TrustRadius:** every review page returned HTTP 403. Search-engine summaries of
  those pages were seen but not used, because the pages could not be opened.
- **LinkedIn:** a search found no post explaining a move away from these vendors.
- **Aircall:** monthly-billed prices; AI Assist (Essentials) add-on price; SMS and international rates
  ("contact us").
- **JustCall:** extra number price; Local Number Bundle prices; the AI voice agent's standard per-minute rate.
- **Dialpad:** seat minimums; number prices; SMS limits; international rates or caps; Resolve (AI agent) prices.
- **RingCentral:** whether RingCX includes a dialer, and on which tier.
- **CloudTalk:** the USD figures on a rendered page (static HTML is EUR).
- **Kixie:** every plan price (Kixie says it doesn't publish them; one FAQ line on its pricing page says $30).
- **Grasshopper:** all plans and prices (region notice; only the meta description's "$14/month, billed annually").
- **Fair usage policies** (Aircall, JustCall, Quo, CloudTalk) were not read; "unlimited" is as each pricing page
  states it, with its footnote.
