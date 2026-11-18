# SMS (business texting): topic bank (researched 2026-11-18)

Not published. 82 topics in 5 phases. The `#` column is the planned day: phase 1 is days 1 to 20, phase 2 days 21 to
40, and so on. A phase with fewer than 20 rows leaves its last days open, because the demand found ran out there (see
"Sources checked"). Within a phase, rows run strongest demand first.

Link labels: `ac: <phrase>` is a Google autocomplete call for that phrase in the US, and `gb: <phrase>` the same in the
UK. The demand cell quotes suggestions it returned. "see topics.md #N" means the post is already planned there, so it
is not a new post. Facts-from codes follow topics.md: `help:<slug>` is `_help/src/articles/<slug>.html`, `kb:<file>`
is a file in the app's `internal/supportknowledge/`, `intent:sms/<file>` is `docs/intent/sms_service/<file>.md` in the
app repo, and `ask` means confirm the exact screen labels with the owner first. In the Legal column, "legal (industry
rules)" marks a carrier-industry source (CTIA, The Campaign Registry), which is not a law.

Two product facts shape this bank. A text goes to one contact at a time (no bulk texting yet), and sent texts carry no
pictures (pictures contacts send do arrive). Every row below sells only what is live.

## What people ask

- **"Why was my 10DLC campaign declined?"** Registrations fail and people don't know what to change. Autocomplete for
  "10dlc campaign rejected" and "a2p 10dlc rejected" returned nothing, so the demand shows up in threads and videos
  instead. [Reddit r/VOIP][rd-voip-declined], [Reddit r/VOIP][rd-voip-tcr], [LinkedIn][li-10dlc-changes]
- **What the carrier's error codes mean:** 30007 (filtered), 30034 (unregistered number), 21610 (the contact replied
  STOP). 30007 and 30034 each autocomplete next to a sales platform's name. [ac: error 30007][],
  [ac: error 30034][], [LinkedIn][li-unregistered]
- **What 10DLC and A2P are, and whether a small business needs them.** "what is 10dlc" returns registration,
  compliance, campaign, number, verification and brand registration. [ac: what is 10dlc][], [Quora][qa-10dlc],
  [LinkedIn][li-a2p-explained]
- **The wording that gets approved:** opt-in language, a privacy policy, terms and conditions. Each one autocompletes
  to "template" or "example". [ac: sms opt out language][], [ac: 10dlc privacy policy][], [ac: sms terms and conditions][]
- **"Can I text this person?"** TCPA consent, quiet hours by state, and "is it illegal to text a customer without
  permission". Investors ask whether to scrub lists before texting. [ac: tcpa text message][],
  [ac: is it legal to text customers][], [BiggerPockets][bp-scrub]
- **Why texts don't arrive:** to one person, to a landline, between the UK and the US. [ac: why are my texts not delivering][],
  [ac: can you text a landline][], [gb: texting from uk to usa][]
- **Ready-made scripts for a trade:** real estate, life insurance, car sales, appointment reminders.
  [ac: real estate text message][], [ac: text message for insurance][], [ac: text message reminders for appointments][]
- **UK and Europe:** the PECR soft opt-in, GDPR, and sender IDs. [gb: sms soft opt in][], [ac: sms gdpr][],
  [gb: uk sms sender id][]
- **Real estate texters weigh texting against calling,** and look for a cheap, reliable way to text sellers.
  [BiggerPockets][bp-sellers], [BiggerPockets][bp-vm-or-blast], [BiggerPockets][bp-cold-vs-text]

## Sources checked

- **Reddit: blocked.** WebFetch on `old.reddit.com/.../search.json` was refused ("unable to fetch"). Direct requests
  got 403 or 302. A WebSearch limited to reddit.com was refused, because the search crawler may not access reddit.com.
  `site:reddit.com` queries returned almost no threads. Two r/VOIP threads showed up through mirror pages in the
  results. They are cited by their reddit.com address and were not opened.
- **LinkedIn: worked with a domain filter.** The `site:linkedin.com/posts` operator was ignored, but a linkedin.com
  domain filter worked. Only the snippets were read.
- **Google autocomplete: worked.** About 100 US seed phrases and 15 UK (`gl=gb`) seed phrases for texting. Each `ac:`
  or `gb:` link reruns that call.
  - Seeds that returned nothing, a sign of thin demand: "10dlc campaign rejected", "a2p 10dlc rejected",
    "10dlc brand rejected", "sms carrier violation", "sms short code vs 10dlc", "sms link shortener blocked",
    "law firm texting", "property management texting", "hvac texting", "sms marketing rules uk", "pecr text message",
    "two way sms uk".
  - Seeds that returned someone else's topic: "error 30003", "30005" and "30006" (games and devices), and
    "10dlc low volume".
- **Quora, YouTube, BiggerPockets, Dentaltown, ABA: worked** through domain-filtered searches. Titles and snippets only.
- **G2: refused.** The G2 shared-inbox category showed up in results, but fetching it got 403.
- **Vendor help centres and blogs fill most results for 10DLC and error codes.** They confirm that a problem is common.
  None is linked, because their URLs carry vendor names.
- **Official sources:**
  - FCC 24-24 (revoking consent) and DA 26-12 (the cross-channel "revoke all" part waived to 31 January 2027).
  - FCC 23-107 in the Federal Register (texts and the Do Not Call registry).
  - eCFR 47 CFR 64.1200, and 47 U.S.C. 227 (on govinfo and Cornell LII).
  - The CTIA Messaging Principles (May 2023 PDF).
  - The Campaign Registry: its resources page, CSP user guide (July 2026), vetting page and spam-text pages.
  - The ICO's PECR guidance, PECR regulation 22, the Data (Use and Access) Act 2025, and the ICO's January 2026 fines
    notice.
  - EUR-Lex (GDPR, ePrivacy Directive), Germany's UWG §7, the CNIL, and Florida 501.059.
  - fcc.gov and ico.org.uk HTML pages refuse automated fetches (403), but the same pages appear in search results.
- **The search budget ran out.** The session's shared WebSearch budget was used up after about 35 searches, against
  the 60 to 90 planned. The research stopped there instead of working around the limit. That is why phases 2 to 5 hold
  fewer than 20 rows, and the industries phase is the thinnest.
- **Before writing a legal post,** check the FCC docket for the "revoke all" date (DA 26-12 set 31 January 2027).
  Link each state's statute in the post itself.

## Topics

### Kind A: What it is and how it works

| # | Title (search phrase) | Slug | Demand | Evidence links | CallForges angle | Facts from | Legal |
|---|---|---|---|---|---|---|---|
| 1 | What is 10DLC? | see topics.md #52 (what-is-a2p-10dlc) | high: "what is 10dlc" returns registration, compliance, campaign, number, verification; Quora asks "I'm really confused. What is 10 DLC?" | [ac: what is 10dlc][] [ac: 10dlc][] [Quora][qa-10dlc] [LinkedIn][li-a2p-explained] | Texting registration inside the Compliance center | help:register-for-sms-in-the-us, kb:app_messaging | legal (industry rules): [TCR][tcr-resources] |
| 2 | What is business texting? | what-is-business-texting | high: "business texting" returns app, platforms, service, software, laws, etiquette, number; "two way texting for business" | [ac: business texting][] [ac: business text messaging][] [ac: two way texting][] [Quora][qa-what-business-texting] | Two-way texts from your own numbers, in one shared Inbox | help:get-started-with-sms, help:send-and-receive-sms | — |
| 3 | MMS vs SMS: what's the difference for a business? | mms-vs-sms-for-business | high: 10 suggestions ("vs rcs", "group text", "meaning") | [ac: mms vs sms][] | Pictures contacts send arrive in the Inbox; the SMS and MMS chips show which numbers take them. Sending pictures isn't live, and the post says so | kb:app_messaging (pictures), kb:app_statuses_numbers | — |
| 4 | What is a 10DLC campaign? | what-is-a-10dlc-campaign | high: "10dlc campaign", "10dlc sms campaign", "what is 10dlc campaign" | [ac: what is 10dlc][] [ac: 10dlc][] [YouTube][yt-a2p-steps] | Add campaign: use case, numbers, samples, consent, description, review; up to 5 campaigns, each number in one | help:register-for-sms-in-the-us, kb:app_messaging | legal (industry rules): [TCR user guide][tcr-csp-guide] |
| 5 | How long can a text message be? SMS length | see topics.md #56 (sms-length-explained) | high: "sms character limit" (counter, calculator, uk) and "sms segment" (calculator, counter, length) | [ac: sms character limit][] [ac: sms segment][] | The counter under the message box; 160, or 70 with an emoji; up to 10 parts | help:sms-length-and-sending-rules | — |
| 6 | What is 10DLC brand registration? | what-is-10dlc-brand-registration | high: "what is 10dlc brand registration", "what is a2p brand registration", "10dlc brand" | [ac: what is 10dlc][] [ac: what is a2p][] [YouTube][yt-brand-step1] | The brand is registered from your approved Business profile, once per workspace | help:register-for-sms-in-the-us, kb:app_messaging (fees), kb:app_compliance | legal (industry rules): [TCR][tcr-resources] |
| 7 | What does SMS opt-in mean? | what-is-sms-opt-in | high: "sms consent meaning", "sms opt in meaning", "what does sms opt in mean", "what is sms opt in" | [ac: sms consent][] [ac: text message opt in form][] [ac: sms opt out][] | The campaign's User consent step | kb:app_messaging (campaign steps) | legal: [CTIA][ctia-2023], [47 CFR 64.1200][ecfr-64-1200] |
| 8 | RCS vs SMS: what it means for business texts | rcs-vs-sms-for-business | high: 10 suggestions; weak fit, kept as a learn post | [ac: rcs vs sms][] | Texts go out as SMS from your number, which every phone reads. RCS isn't sent, and the post says so | kb:app_messaging | — |
| 9 | Can you text a landline? | can-you-text-a-landline | high: "can you text a landline (number, uk, canada)", "if you text a landline what happens", "can you text a home phone" | [ac: can you text a landline][] | A text to a landline shows Not delivered with the reason. Landline numbers can't send texts (UK and Australian local numbers are Call only) | help:send-and-receive-sms#delivery-status, kb:app_statuses_numbers | — |
| 10 | SMS vs email: when to text and when to email | sms-vs-email | high: "sms vs email" (marketing, statistics, open rates) | [ac: sms vs email][] [LinkedIn][li-recruit-vs-email] | Two-way texts land in a shared Inbox, replies included | help:send-and-receive-sms, help:the-messaging-inbox | — |
| 11 | What does "Reply STOP to opt out" mean? | see topics.md #55 (sms-opt-outs-stop-start) | med-high: "sms opt out meaning", "sms opt out message example", "sms opt out requirements" | [ac: sms opt out][] | STOP, START, HELP and the list of opted-out contacts | help:sms-opt-outs-stop-and-start | legal: [FCC 24-24][fcc-24-24], [CTIA][ctia-2023] |
| 12 | Can customers text your business number? | can-customers-text-your-business-number | med: "can you text a business number", "how to get a business text number"; Quora asks how field techs can text from the main business number | [ac: how to text from a business number][] [Quora][qa-field-techs] | A number's card says Call + SMS when it can text; a ported number texts by the same rules | help:buy-a-phone-number, help:port-your-number, kb:app_messaging (countries) | — |
| 13 | A2P vs P2P texting: what counts as business texting | a2p-vs-p2p-texting | med: "what is a2p" (messaging, sms, registration); investors ask how texting rules apply to them | [ac: what is a2p][] [BiggerPockets][bp-scrub] | US business texts from a local number go through registration | help:register-for-sms-in-the-us | legal: [47 CFR 64.1200][ecfr-64-1200], [CTIA][ctia-2023] |
| 14 | 10DLC brand vetting: what it is and when you need it | 10dlc-brand-vetting | med: "10dlc vetting", "10dlc brand vetting", "10dlc campaign vetting" | [ac: 10dlc vetting][] [TCR vetting][tcr-vetting] | One question on the first campaign: under or over 2,000 texts a day | kb:app_messaging (vetting) | legal (industry rules): [TCR][tcr-vetting] |
| 15 | Text message delivery status: sent vs delivered vs not delivered | text-delivery-status-explained | med: "text message not delivered meaning", "not delivered yet", "recipient may be offline" (asked by consumers; the phrasing fits) | [ac: text messages not delivering][] | Sending, Sent, Delivered, Not delivered with the reason, Not confirmed yet, Try again | help:send-and-receive-sms#delivery-status | — |
| 16 | Short code vs long code vs toll-free: which number to text from | short-code-vs-long-code-vs-toll-free | med: "short code vs long code sms", "short code or long code sms", "toll free number vs 10dlc" | [ac: short code vs long code][] [ac: toll free vs 10dlc][] | Local and mobile numbers text. Toll-free numbers and short codes aren't offered, and the post says so | kb:app_messaging (which numbers), help:sms-to-other-countries, kb:app_messaging.md | legal (industry rules): [CTIA][ctia-2023] |
| 17 | What is a local SMS number? | what-is-a-local-sms-number | med: "local text number", "local sms number", "texting local number out country", "what is a text message number" | [ac: local number texting][] | Registered US local numbers, and mobile numbers in about 30 countries, text | help:buy-a-phone-number, help:get-started-with-sms | — |
| 18 | What is an SMS sender ID? | what-is-sms-sender-id | med: "what is sender id in sms", "what is sender id registration"; UK searchers ask about the "uk sms sender id registry" | [ac: what is sender id][] [gb: uk sms sender id][] | Texts come from your number, so contacts can reply. Named sender IDs aren't offered | kb:app_messaging (other countries) | — |
| 19 | What is SHAFT? Content carriers won't carry | what-is-shaft-sms | low-med: "shaft sms", "shaft rules sms" | [ac: shaft sms][] [CTIA][ctia-2023] | The campaign form asks you to accept the content carriers don't allow | kb:app_messaging (campaign steps) | legal (industry rules): [CTIA][ctia-2023] |
| 20 | What is The Campaign Registry? | what-is-the-campaign-registry | low-med: the registry's own LinkedIn explainer; named in 10DLC threads | [LinkedIn][li-tcr-hub] [Reddit r/VOIP][rd-voip-tcr] | CallForges submits the brand and campaign for you | help:register-for-sms-in-the-us | legal (industry rules): [TCR][tcr-resources] |

### Kind B: How to set it up in CallForges

| # | Title (search phrase) | Slug | Demand | Evidence links | CallForges angle | Facts from | Legal |
|---|---|---|---|---|---|---|---|
| 21 | How to set up business texting in the US | see topics.md #53 (business-texting-setup-us) | high: "a2p 10dlc registration for sms", "a2p 10dlc registration required", "10dlc registration process"; many step-by-step videos | [ac: a2p 10dlc][] [YouTube][yt-a2p-fast] [YouTube][yt-a2p-first] | Business profile, then Add campaign, then text from Messages | help:register-for-sms-in-the-us, help:get-started-with-sms | legal (industry rules): [TCR][tcr-resources] |
| 22 | 10DLC registration form: what to enter in each field | 10dlc-registration-form | high: "10dlc registration" (form, process, requirements); "how to successfully complete the 10DLC registration" videos | [ac: 10dlc registration][] [YouTube][yt-10dlc-complete] [YouTube][yt-a2p-steps] | The campaign form's five steps, saved as you type, with the fees on Review | help:register-for-sms-in-the-us, kb:app_messaging | legal (industry rules): [TCR user guide][tcr-csp-guide] |
| 23 | SMS opt-in language examples | sms-opt-in-language-examples | high: "sms opt in language examples", "standard sms opt in language", "sms opt in message examples" | [ac: sms opt out language][] [ac: sms opt in examples][] | The User consent step, 40 to 2,048 characters | kb:app_messaging (campaign steps) | legal: [CTIA][ctia-2023], [47 CFR 64.1200][ecfr-64-1200] |
| 24 | SMS privacy policy for 10DLC: what it must say | 10dlc-privacy-policy | high: "10dlc privacy policy" (template, requirements, example), "sms privacy policy" (template, generator, for website) | [ac: 10dlc privacy policy][] [ac: sms privacy policy][] | Carriers read your website when they review the campaign | ask (whether the form takes a privacy policy link) | legal (industry rules): [CTIA][ctia-2023] |
| 25 | SMS terms and conditions template | sms-terms-and-conditions | high: "sms terms and conditions" (template, example, generator, requirements) | [ac: sms terms and conditions][] [LinkedIn][li-text-tcs] | The same campaign review | ask | legal (industry rules): [CTIA][ctia-2023] |
| 26 | SMS opt-in checkbox and form examples | sms-opt-in-checkbox | high: "sms consent checkbox", "sms consent form example", "sms opt in checkbox", "text message opt in form template" | [ac: sms consent][] [ac: sms opt in checkbox][] [ac: text message opt in form][] | Describe the form and its web address in User consent | kb:app_messaging (campaign steps) | legal: [CTIA][ctia-2023], [47 CFR 64.1200][ecfr-64-1200] |
| 27 | How to text from a business number | how-to-text-from-a-business-number | high: the exact phrase autocompletes, with "can you text a business number" | [ac: how to text from a business number][] [Quora][qa-field-techs] | New message, pick the contact, send from a number you may call from | help:send-and-receive-sms | — |
| 28 | How to get a business text number | how-to-get-a-business-text-number | med-high: "how to get a business text number", "business texting number" | [ac: how to text from a business number][] [ac: business texting][] | Buy number: each card says Call only or Call + SMS | help:buy-a-phone-number | — |
| 29 | How to send texts from a UK number | send-texts-from-a-uk-number | med-high (UK): "send sms from uk number", "send text from uk number"; "business text messaging uk" (US) | [gb: send sms from uk number][] [ac: business text messaging][] | UK mobile numbers text two-way with no registration | help:sms-to-other-countries, help:buy-a-phone-number, kb:app_statuses_numbers | — |
| 30 | How to text international customers from your business number | see topics.md #60 (text-international-customers) | med (UK): "texting from uk to usa", "can i text from uk to usa", "how to text us number from uk phone", "how to send sms to uk number from india" | [gb: texting from uk to usa][] [gb: text from us number to uk][] [gb: send sms from uk number][] | Text from a number in the contact's country | help:sms-to-other-countries | — |
| 31 | How to schedule a text message | schedule-a-text-message | med: "can you send a text at a later time" | [ac: can you text after 9pm][] | Schedule, beside Send, takes a time 2 minutes to a year ahead; the Scheduled tab lists them | help:send-and-receive-sms#schedule-a-text | — |
| 32 | How to text from your computer for business | text-from-computer-for-business | med: "text from computer for business", "how to text from computer" | [ac: text from computer business][] | Messages runs in the browser; Expand gives a larger box; Ctrl or ⌘ + Enter sends | help:send-and-receive-sms, kb:app_messaging (labels) | — |
| 33 | 10DLC sample messages that get approved | 10dlc-sample-messages | med: "get your A2P 10DLC SMS campaign approved" videos; no autocomplete was run for the phrase | [YouTube][yt-a2p-approved] [YouTube][yt-a2p-crm2] [LinkedIn][li-10dlc-changes] | Sample messages: 2 to 5 texts, 20 to 1,024 characters, the business name and "Reply STOP to opt out" | kb:app_messaging (campaign steps) | legal (industry rules): [CTIA][ctia-2023] |
| 34 | Texts from customers: how inbound texts reach your team | receive-texts-from-customers | med: "businesses texting customers", "texting app for customers"; Quora asks how businesses use texts for service | [ac: texting customers][] [Quora][qa-customer-service] | An inbound text lands unread in the contact's conversation; a closed one reopens | help:send-and-receive-sms#replies | — |
| 35 | How to choose a 10DLC use case: customer care, marketing or mixed | choose-a-10dlc-use-case | low-med: "10dlc campaign", "10dlc requirements" | [ac: 10dlc][] [TCR user guide][tcr-csp-guide] | The use case list shows each one's fees; Mixed takes 2 to 5 sub use cases | kb:app_messaging (campaign steps, fees) | legal (industry rules): [TCR user guide][tcr-csp-guide] |
| 36 | How to write a 10DLC campaign description | 10dlc-campaign-description | low-med: "what is 10dlc sms campaign" | [ac: what is 10dlc][] [LinkedIn][li-10dlc-changes] | The Description step: what you text, to whom and why, 40 to 4,096 characters | kb:app_messaging (campaign steps) | legal (industry rules): [TCR user guide][tcr-csp-guide] |
| 37 | How to add numbers to a texting campaign | add-numbers-to-a-texting-campaign | low: "10dlc number" | [ac: 10dlc][] | View unregistered numbers, a number's chips, a refused number added again | kb:app_messaging (refused numbers) | — |
| 38 | How to text from a number you port in | text-from-a-ported-number | low: a guess; Quora asks about texting from the main business number | [Quora][qa-field-techs] | A ported number texts by the same rules as a bought one; a US one joins a campaign | help:port-your-number, kb:app_messaging (countries) | — |

### Kind C: A problem and its fix

| # | Title (search phrase) | Slug | Demand | Evidence links | CallForges angle | Facts from | Legal |
|---|---|---|---|---|---|---|---|
| 41 | 10DLC campaign rejected: why and how to fix it | 10dlc-campaign-rejected | high: r/VOIP threads ("SMS campaign declined", "TCR registration is killing me"); "approved first try" videos; LinkedIn posts on campaign changes | [Reddit r/VOIP][rd-voip-declined] [Reddit r/VOIP][rd-voip-tcr] [YouTube][yt-a2p-crm2] [LinkedIn][li-10dlc-changes] | The carriers' reason in red, the fields outlined, Fix and resubmit (15 credits each time) | help:register-for-sms-in-the-us#statuses, kb:app_messaging | legal (industry rules): [CTIA][ctia-2023], [TCR user guide][tcr-csp-guide] |
| 42 | Error 30007: text filtered by the carrier | error-30007-message-filtered | high: "error 30007" autocompletes next to a sales platform's name, and "30007 error code"; many help centres answer it | [ac: error 30007][] [TCR: spam texts][tcr-spam] | Not delivered, with the reason under the text | help:send-and-receive-sms#delivery-status, ask (the exact reason text) | legal (industry rules): [CTIA][ctia-2023] |
| 43 | Why are my business texts not delivering? | business-texts-not-delivering | high: "why are my texts not delivering" (to some people, to one person, but calls go through) | [ac: why are my texts not delivering][] [ac: text messages not delivering][] | A status under every text, the reason, and Try again once | help:send-and-receive-sms#delivery-status | — |
| 44 | Error 30034: texts blocked from an unregistered number | error-30034-unregistered-number | high: "error 30034" autocompletes next to a sales platform's name, and "30034 error code"; LinkedIn posts on what happens to unregistered traffic | [ac: error 30034][] [LinkedIn][li-unregistered] [LinkedIn][li-reg-required] | A US number texts only from an approved campaign, and the Inbox says why a number can't | help:sms-to-other-countries, kb:app_messaging.md, kb:app_messaging | legal (industry rules): [TCR][tcr-resources] |
| 45 | 10DLC rejected for opt-in or consent: how to fix it | 10dlc-rejected-opt-in | med: "sms opt in requirements", "tcpa text message opt-in requirements"; r/VOIP decline threads | [ac: sms opt in checkbox][] [ac: tcpa text message][] [Reddit r/VOIP][rd-voip-declined] [YouTube][yt-a2p-crm1] | Rewrite the User consent step, then resubmit | kb:app_messaging (campaign steps, statuses) | legal: [CTIA][ctia-2023], [47 CFR 64.1200][ecfr-64-1200] |
| 46 | Texts not delivering to one number | texts-not-delivering-to-one-number | med-high: "to one number", "to one person", "to only one person" | [ac: text messages not delivering][] [ac: why are my texts not delivering][] | The reason under the text: phone off, a landline, a number that no longer exists, a contact who replied STOP | help:send-and-receive-sms#delivery-status | — |
| 47 | Error 21610: the contact replied STOP | error-21610-stop | med: "error 21610", "21610 error code" | [ac: error 21610][] | The Opted out label, START, and the opted-out list | help:sms-opt-outs-stop-and-start | legal: [FCC 24-24][fcc-24-24] |
| 48 | Real estate texts blocked or campaign not approved | real-estate-texts-blocked | med: investor threads on texting sellers and scrubbing lists; "wholesaling real estate text message scripts" | [BiggerPockets][bp-sellers] [BiggerPockets][bp-vm-or-blast] [BiggerPockets][bp-scrub] [ac: real estate text message][] | A consent-based campaign. The post says plainly that carriers block texts to cold seller lists | kb:app_messaging | legal: [FCC 23-107][fcc-23-107], [47 CFR 64.1200][ecfr-64-1200] |
| 49 | Can't text from a UK landline or local number | uk-landline-number-cant-text | med (UK): "can you text a landline uk" | [ac: can you text a landline][] | UK local numbers are Call only; a UK mobile number texts | kb:app_statuses_numbers | — |
| 50 | Texts to the UK from a US number never arrive | texts-to-uk-from-us-number | med (UK): "text from us to uk", "how to text a uk number from us iphone" | [gb: text from us number to uk][] | UK carriers refuse texts from foreign numbers (Not delivered); text from a UK mobile number instead | kb:app_messaging (other countries) | — |
| 51 | Daily texting limit: 2,000 texts a day without vetting | 10dlc-daily-limit | low-med: "10dlc throughput", "10dlc vetting" | [ac: 10dlc throughput][] [ac: 10dlc vetting][] | The volume question on the first campaign; vetting is 41.5 credits once | kb:app_messaging (vetting) | legal (industry rules): [TCR][tcr-vetting] |
| 52 | 10DLC brand rejected: the name or tax ID doesn't match | 10dlc-brand-rejected | low-med: brand registration videos; "10dlc brand rejected" returned no suggestions | [YouTube][yt-brand-step1] [LinkedIn][li-what-10dlc] | The Business profile's red fields, then Fix and resubmit | kb:app_compliance (business profile statuses), help:register-for-sms-in-the-us | legal (industry rules): [TCR][tcr-resources] |
| 53 | Links in texts getting filtered | links-in-texts-filtered | low: "sms link shortener blocked" returned nothing; CTIA covers URL shorteners | [CTIA][ctia-2023] | The samples step asks whether your texts contain links | kb:app_messaging (campaign steps) | legal (industry rules): [CTIA][ctia-2023] |
| 54 | Contact abroad sees a code instead of your number | contact-sees-code-not-your-number | low: a guess; no search demand found | [gb: send sms from uk number][] | Text them from a number in their country | kb:app_messaging (other countries) | — |
| 55 | "Not confirmed yet" on a text: what to do | text-not-confirmed-yet | low: "text message not delivered yet" is the nearest phrase | [ac: text messages not delivering][] | Never sent twice; it settles within about 10 minutes | kb:app_messaging (status) | — |
| 56 | Toll-free number can't send texts | toll-free-number-cant-text | low: "toll free number vs 10dlc" | [ac: toll free vs 10dlc][] | Toll-free numbers can't text here; use a local number | help:sms-to-other-countries, kb:app_messaging.md | — |

### Kind D: One market

| # | Title (search phrase) | Slug | Demand | Evidence links | CallForges angle | Facts from | Legal |
|---|---|---|---|---|---|---|---|
| 61 | Real estate text message scripts | real-estate-text-message-scripts | high: "real estate text message scripts", "real estate follow up text message", "real estate agent text messages" | [ac: real estate text message][] [BiggerPockets][bp-text-marketing] | Saved replies, signatures, scheduled follow-ups | help:sms-signatures-and-saved-replies, help:send-and-receive-sms | legal: [47 CFR 64.1200][ecfr-64-1200] |
| 62 | Appointment reminder text examples | appointment-reminder-text-examples | high: "text message reminders for medical appointments", "appointment reminder text example", "how to send appointment reminders via text" | [ac: text message reminders for appointments][] | Schedule the reminder when you book, up to a year ahead. There's no calendar sync and no HIPAA claim, and the post says so | help:send-and-receive-sms#schedule-a-text, ask | — |
| 63 | Text message templates for car sales | car-sales-text-templates | med-high: "text message templates for car sales", "for car dealerships" (not on the industry list, but the demand is strong) | [ac: text message templates][] | Saved replies | help:sms-signatures-and-saved-replies | legal: [47 CFR 64.1200][ecfr-64-1200] |
| 64 | Texting candidates: a recruiter's guide | texting-candidates-recruiters | med-high: many recruiter guides on LinkedIn; candidates ask "is it normal for recruiters to text you", "can you text a recruiter" | [LinkedIn][li-recruit-guide] [LinkedIn][li-recruit-dos] [LinkedIn][li-recruit-holbrook] [ac: recruiter texting][] | Text from a work number, not a personal phone; schedule interview reminders; one shared Inbox for the team | help:send-and-receive-sms, help:the-messaging-inbox | legal: [47 CFR 64.1200][ecfr-64-1200] |
| 65 | Texting clients as a lawyer: ethics and good practice | lawyers-texting-clients | med-high: "lawyers texting clients", "texting clients policy"; ABA guidance pieces | [ac: texting clients][] [ABA][aba-texting-clients] [ABA][aba-how-text] | Every text kept per contact and number; roles decide who sees which numbers | help:the-messaging-inbox | legal: ABA Model Rules 1.4 and 1.6, via [ABA][aba-texting-clients] |
| 66 | Life insurance text message scripts | life-insurance-text-scripts | med: "text message script for life insurance"; an insurance texting legal review on LinkedIn | [ac: text message for insurance][] [LinkedIn][li-insurance-legal] | Saved replies, a consent-based campaign | help:sms-signatures-and-saved-replies, kb:app_messaging | legal: [47 CFR 64.1200][ecfr-64-1200], [FCC 23-107][fcc-23-107] |
| 67 | Text message templates for property managers | property-manager-text-templates | med: landlord threads on whether tenants should text, and on tenant messaging | [BiggerPockets][bp-tenants-email-text] [BiggerPockets][bp-tenant-blog] [BiggerPockets][bp-rent-msg] | Saved replies; the photos tenants send arrive in the Inbox | help:sms-signatures-and-saved-replies, kb:app_messaging (pictures) | — |
| 68 | Dental office texting: what patients want | dental-office-texting | med: "dental office texting service"; front-desk posts | [ac: dental office texting][] [Dentaltown][dt-front-desk] [LinkedIn][li-2way-patients] | Two-way texts from the office number. No HIPAA claim | help:send-and-receive-sms, ask | — |
| 69 | Texting mortgage leads and borrowers: what's allowed | mortgage-texting-rules | med: posts on texting best practice in consumer lending, and on borrowers flooded after applying | [LinkedIn][li-lending] [LinkedIn][li-mortgage-spam] | An Account notifications campaign, and consent | kb:app_messaging | legal: [FCC 23-107][fcc-23-107], [47 CFR 64.1200][ecfr-64-1200] |
| 70 | "On my way" texts for home service techs | on-my-way-texts-home-services | med: Quora asks how techs text customers from the main business number | [Quora][qa-field-techs] | Every user texts from the shared business number, each with their own signature | help:sms-signatures-and-saved-replies, help:the-messaging-inbox | — |
| 71 | 10DLC for agencies: registering each client | 10dlc-for-agencies | med: A2P videos made for agency platforms; the registry's own posts | [YouTube][yt-a2p-crm3] [LinkedIn][li-tcr-hub] [ac: a2p 10dlc][] | One workspace per client, each with its own Business profile and campaigns | ask (workspace switcher), help:register-for-sms-in-the-us | legal (industry rules): [TCR][tcr-resources] |
| 72 | Texting B2B prospects: rules for SaaS sales teams | texting-b2b-prospects | low-med: "cold sms reply rate", "texting leads" | [ac: sms reply rate][] [ac: texting leads][] | Two-way texts after a call. Consent still applies to US cell phones, and UK company numbers are treated differently | help:send-and-receive-sms | legal: [47 CFR 64.1200][ecfr-64-1200], [ICO B2B][ico-b2b] |

### Kind E: Rules, costs and buying

| # | Title (search phrase) | Slug | Demand | Evidence links | CallForges angle | Facts from | Legal |
|---|---|---|---|---|---|---|---|
| 81 | TCPA text message rules | tcpa-text-message-rules | high: "tcpa text message" (requirements, rules, compliance, consent requirements, marketing) | [ac: tcpa text message][] [BiggerPockets][bp-cold-laws] | Opt-outs honoured from every number; consent described in the campaign | help:sms-opt-outs-stop-and-start | legal: [47 U.S.C. 227][usc-227], [47 CFR 64.1200][ecfr-64-1200], [FCC 23-107][fcc-23-107] |
| 82 | Can a business text you without permission? | can-a-business-text-without-permission | high: the exact phrase; "is it illegal to text a customer without permission", "texting laws for business", "texting customers laws" | [ac: can a business text you without permission][] [ac: is it legal to text customers][] [Quora][qa-employees-law] | A STOP opts a contact out of the whole workspace | help:sms-opt-outs-stop-and-start | legal: [47 CFR 64.1200][ecfr-64-1200], [CTIA][ctia-2023] |
| 83 | SMS quiet hours by state | see topics.md #61 (sms-quiet-hours) | high: "sms quiet hours" (by state, law, us, uk), "texas sms quiet hours" | [ac: sms quiet hours][] [ac: can you text after 9pm][] | Schedule texts for the contact's daytime. CallForges doesn't hold texts at night, and the post says so | help:sms-length-and-sending-rules#quiet-hours | legal: [47 CFR 64.1200(c)(1)][ecfr-64-1200]; each state's statute linked in the post |
| 84 | FCC opt-out rules for texts: revoking consent by any reasonable means | fcc-text-opt-out-rules | high: "text message opt out requirements", "sms opt out requirements" | [ac: sms opt out][] [ac: tcpa text message][] | STOP, UNSUBSCRIBE and similar words opt a contact out of every number | help:sms-opt-outs-stop-and-start | legal: [FCC 24-24][fcc-24-24], [DA 26-12][fcc-da-26-12] |
| 85 | 10DLC compliance checklist | 10dlc-compliance-checklist | high: "10dlc compliance", "a2p 10dlc compliance requirements", "10dlc requirements" | [ac: 10dlc][] [ac: a2p 10dlc][] | The campaign form asks for each item on the list | kb:app_messaging (campaign steps) | legal (industry rules): [CTIA][ctia-2023], [TCR user guide][tcr-csp-guide] |
| 86 | How to choose a business texting service: a buyer's checklist | choose-a-business-texting-service | high: "business texting" (service, platforms, software, app); the "Best text message marketing apps?" thread. No vendor names | [ac: business texting][] [BiggerPockets][bp-apps] | Two-way texts, a shared Inbox, registration in the app, billing per text | index, pricing, help:get-started-with-sms | — |
| 87 | SMS marketing rules in the UK: PECR, consent and the soft opt-in | uk-sms-marketing-rules-pecr | high (UK): "soft opt in sms", "pecr sms", "uk sms regulations", "uk sms guidelines", "sms marketing uk". Covers B2B texting under PECR too | [gb: sms soft opt in][] [ac: pecr sms][] [ac: sms uk regulations][] [ac: sms marketing uk][] | UK mobile numbers text two-way, and STOP is honoured | help:sms-opt-outs-stop-and-start, help:sms-to-other-countries | legal: [ICO][ico-email-mktg], [ICO B2B][ico-b2b], [PECR reg 22][pecr-reg22], [Data (Use and Access) Act 2025][duaa-2025], [ICO fines 2026][ico-fines-2026] |
| 88 | State texting laws: Florida's mini-TCPA and others | state-texting-laws-mini-tcpa | med-high: "text message marketing laws" (rules, regulations), "is sms marketing legal", "sms quiet hours by state" | [ac: text message marketing laws][] [ac: sms quiet hours][] | — | — | legal: [Florida 501.059][fl-501059]; other states linked in the post |
| 89 | 10DLC registration fees and how long approval takes | see topics.md #54 (10dlc-registration-fees) | med-high: "10dlc registration cost", "how much does 10dlc cost", "10dlc approval time" | [ac: 10dlc registration][] [ac: how much does 10dlc cost][] [ac: 10dlc approval time][] | — | help:register-for-sms-in-the-us#fees | legal (industry rules): [TCR][tcr-resources] |
| 90 | GDPR and SMS marketing in Europe | gdpr-sms-marketing | med-high: "sms gdpr", "gdpr sms marketing" (both locales). Covers country rules too, such as France's hours and Germany's UWG | [ac: sms gdpr][] [gb: sms gdpr][] | Two-way texts from numbers in about 30 countries | help:sms-to-other-countries | legal: [GDPR][eu-gdpr], [ePrivacy Directive][eu-eprivacy], [Germany UWG §7][de-uwg7], [CNIL][fr-cnil] |
| 91 | How much does business texting cost? | business-texting-cost | med-high: "sms marketing cost", "cost of text from uk to usa"; an investor thread on the most cost-effective option | [ac: sms marketing uk][] [gb: texting from uk to usa][] [BiggerPockets][bp-cost] | Each text paid from credits at the rate of the country it reaches; a long text counts its parts; registration fees on top | pricing, kb:app_messaging (cost, fees) | — |
| 92 | Do Not Call rules for text messages | do-not-call-rules-for-texts | med-high: the "Scrubbing for SMS marketing?" thread; the FCC put texts under the DNC registry | [BiggerPockets][bp-scrub] [FCC 23-107][fcc-23-107] | — | — | legal: [FCC 23-107][fcc-23-107], [47 CFR 64.1200][ecfr-64-1200] |
| 93 | TCPA texting fines: what a text without consent can cost | tcpa-texting-fines | med-high: "tcpa text message lawsuit", "tcpa text message settlement" | [ac: tcpa text message][] [LinkedIn][li-insurance-legal] | — | — | legal: [47 U.S.C. 227][usc-227] ([Cornell LII][usc-227-cornell]) |
| 94 | TCPA exemptions for texts: informational vs marketing | tcpa-text-exemptions | med: "tcpa text message exemptions" | [ac: tcpa text message][] | Use cases: Account notifications vs Marketing | kb:app_messaging (campaign steps) | legal: [47 CFR 64.1200][ecfr-64-1200] |
| 95 | SMS vs email open rates: what the numbers really say | sms-vs-email-open-rates | med: "sms open rate vs email", "average sms open rate", "can you track sms open rate", "sms vs email open rates" | [ac: sms open rate][] [ac: sms vs email][] | The Delivered and Reply rate tiles. Texts have no open tracking, and the post says so | ask (Dashboard Messaging tab labels) | — |
| 96 | SMS opt-out rate benchmark | sms-opt-out-rate-benchmark | med: "sms opt out rate benchmark" | [ac: sms opt out][] | The Opted out tile, next to Texts sent | ask (Dashboard labels), help:the-messaging-inbox, kb:app_messaging.md | — (find a public benchmark source before writing) |

## Dropped

- Mass texting, bulk SMS and SMS blasts: high demand ("mass texting service", "app", "for business", "for nonprofits"), but a text goes to one contact at a time.
- Sending MMS, picture texts and group MMS: sent texts are text only. Only incoming pictures arrive.
- Toll-free texting and toll-free verification: not offered.
- Short code texting: not offered.
- 10DLC for sole proprietors ("a2p 10dlc sole proprietor"): CallForges refuses sole-proprietor brands before any carrier call (SMS-D8).
- 10DLC for public companies: public-company brands aren't built.
- Low-volume 10DLC ("10dlc low volume"): the seed returned unrelated suggestions. The fee row in topics.md #54 covers it.
- Texting from Indian, Malaysian or Singapore numbers: their carrier registration isn't offered.
- UK alphanumeric sender IDs ("uk sms sender id registry"): texts always come from a number. Row 18 covers only the learn side.
- Automatic quiet hours (holding texts at night): not built. topics.md #61 covers the rules.
- HIPAA-compliant texting for clinics, and therapists texting clients ("texting clients as a therapist"): CallForges makes no HIPAA claim and has no BAA.
- Keyword opt-in lists ("text JOIN to …") and text-to-join: not built. The campaign form only lists optional opt-in keywords.
- SMS drip sequences and SMS marketing campaigns: not built. Only a call workflow sends automatic texts.
- Texts logged to a CRM: not built. The CRM sync logs calls only.
- RCS and WhatsApp business messaging: not offered. Row 8 is a learn post only.
- Emoji and AI Assist in the composer: open PR #401, not live.
- After-call follow-ups: open PR #356, not live.
- Wholesaling cold-text scripts ("wholesaling real estate text message scripts"): these are for texting cold seller lists without consent.
- An SMS segment calculator tool page: no such tool exists. Folded into topics.md #56.
- Other carrier error codes (30003, 30005, 30006): autocomplete returns games and devices, not texting.
- Solar, ecommerce order texts and nonprofit texting: no usable evidence found before the search budget ran out. Ecommerce and nonprofits would also need bulk texting.

<!-- link definitions -->

<!-- autocomplete calls -->
[ac: 10dlc approval time]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=10dlc+approval+time
[ac: 10dlc privacy policy]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=10dlc+privacy+policy
[ac: 10dlc registration]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=10dlc+registration
[ac: 10dlc throughput]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=10dlc+throughput
[ac: 10dlc vetting]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=10dlc+vetting
[ac: 10dlc]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=10dlc
[ac: a2p 10dlc]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=a2p+10dlc
[ac: business text messaging]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=business+text+messaging
[ac: business texting]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=business+texting
[ac: can a business text you without permission]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=can+a+business+text+you+without+permission
[ac: can you text a landline]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=can+you+text+a+landline
[ac: can you text after 9pm]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=can+you+text+after+9pm
[ac: dental office texting]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=dental+office+texting
[ac: error 21610]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=error+21610
[ac: error 30007]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=error+30007
[ac: error 30034]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=error+30034
[ac: how much does 10dlc cost]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=how+much+does+10dlc+cost
[ac: how to text from a business number]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=how+to+text+from+a+business+number
[ac: is it legal to text customers]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=is+it+legal+to+text+customers
[ac: local number texting]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=local+number+texting
[ac: mms vs sms]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=mms+vs+sms
[ac: pecr sms]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=pecr+sms
[ac: rcs vs sms]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=rcs+vs+sms
[ac: real estate text message]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=real+estate+text+message
[ac: recruiter texting]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=recruiter+texting
[ac: shaft sms]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=shaft+sms
[ac: short code vs long code]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=short+code+vs+long+code
[ac: sms character limit]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+character+limit
[ac: sms consent]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+consent
[ac: sms gdpr]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+gdpr
[ac: sms marketing uk]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+marketing+uk
[ac: sms open rate]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+open+rate
[ac: sms opt in checkbox]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+opt+in+checkbox
[ac: sms opt in examples]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+opt+in+examples
[ac: sms opt out language]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+opt+out+language
[ac: sms opt out]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+opt+out
[ac: sms privacy policy]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+privacy+policy
[ac: sms quiet hours]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+quiet+hours
[ac: sms reply rate]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+reply+rate
[ac: sms segment]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+segment
[ac: sms terms and conditions]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+terms+and+conditions
[ac: sms uk regulations]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+uk+regulations
[ac: sms vs email]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+vs+email
[ac: tcpa text message]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=tcpa+text+message
[ac: text from computer business]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=text+from+computer+business
[ac: text message for insurance]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=text+message+for+insurance
[ac: text message marketing laws]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=text+message+marketing+laws
[ac: text message opt in form]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=text+message+opt+in+form
[ac: text message reminders for appointments]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=text+message+reminders+for+appointments
[ac: text message templates]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=text+message+templates
[ac: text messages not delivering]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=text+messages+not+delivering
[ac: texting clients]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=texting+clients
[ac: texting customers]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=texting+customers
[ac: texting leads]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=texting+leads
[ac: toll free vs 10dlc]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=toll+free+vs+10dlc
[ac: two way texting]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=two+way+texting
[ac: what is 10dlc]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=what+is+10dlc
[ac: what is a2p]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=what+is+a2p
[ac: what is sender id]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=what+is+sender+id
[ac: why are my texts not delivering]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=why+are+my+texts+not+delivering
[gb: send sms from uk number]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=gb&q=send+sms+from+uk+number
[gb: sms gdpr]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=gb&q=sms+gdpr
[gb: sms soft opt in]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=gb&q=sms+soft+opt+in
[gb: text from us number to uk]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=gb&q=text+from+us+number+to+uk
[gb: texting from uk to usa]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=gb&q=texting+from+uk+to+usa
[gb: uk sms sender id]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=gb&q=uk+sms+sender+id

<!-- named sources -->
[aba-how-text]: https://www.americanbar.org/groups/young_lawyers/resources/tyl/practice-management/how-text-your-client-and-other-lowtech-things-lawyer-needs-know/
[aba-texting-clients]: https://www.americanbar.org/groups/litigation/resources/newsletters/ethics-professionalism/considerations-communicating-clients-text-message/
[bp-apps]: https://www.biggerpockets.com/forums/898/topics/845342-best-text-message-marketing-apps
[bp-cold-laws]: https://www.biggerpockets.com/forums/926/topics/1129272-cold-calling-laws
[bp-cold-vs-text]: https://www.biggerpockets.com/forums/93/topics/1236139-cold-calling-vs-text-marketing-which-gets-more-leads
[bp-cost]: https://www.biggerpockets.com/forums/93/topics/1150215-what-is-the-most-cost-effective-and-reliable-sms-marketing
[bp-rent-msg]: https://www.biggerpockets.com/forums/899/topics/1233348-would-you-try-this-rent-collection-and-tenant-messaging-without-apps
[bp-scrub]: https://www.biggerpockets.com/forums/898/topics/859113-scrubbing-for-sms-marketing
[bp-sellers]: https://www.biggerpockets.com/forums/93/topics/863948-texting-potential-sellers
[bp-tenant-blog]: https://www.biggerpockets.com/blog/whats-communicate-tenants-textemailphone
[bp-tenants-email-text]: https://www.biggerpockets.com/forums/899/topics/1247599-should-tenants-email-or-text-property-managers-about-issues
[bp-text-marketing]: https://www.biggerpockets.com/forums/93/topics/669145-text-message-marketing
[bp-vm-or-blast]: https://www.biggerpockets.com/forums/898/topics/811307-voicemail-drops-or-text-message-blasting-that-is-the-question
[ctia-2023]: https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf
[de-uwg7]: https://www.gesetze-im-internet.de/uwg_2004/__7.html
[dt-front-desk]: https://www.dentaltown.com/channel/post/22858/the-hidden-cost-of-poor-front-desk-communication
[duaa-2025]: https://www.legislation.gov.uk/ukpga/2025/18/contents
[ecfr-64-1200]: https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200
[eu-eprivacy]: https://eur-lex.europa.eu/eli/dir/2002/58/oj
[eu-gdpr]: https://eur-lex.europa.eu/eli/reg/2016/679/oj
[fcc-23-107]: https://www.govinfo.gov/content/pkg/FR-2024-01-26/html/2023-28832.htm
[fcc-24-24]: https://docs.fcc.gov/public/attachments/FCC-24-24A1.pdf
[fcc-da-26-12]: https://docs.fcc.gov/public/attachments/DA-26-12A1.pdf
[fl-501059]: https://www.flsenate.gov/Laws/Statutes/2024/501.059
[fr-cnil]: https://www.cnil.fr/fr/la-prospection-commerciale-par-sms-mms
[ico-b2b]: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/business-to-business-marketing/
[ico-email-mktg]: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/
[ico-fines-2026]: https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/01/fines-of-225-000-for-nuisance-marketing-messages/
[li-10dlc-changes]: https://www.linkedin.com/pulse/10-dlc-changes-sms-campaigns-bradley-cooper
[li-2way-patients]: https://www.linkedin.com/pulse/2-way-texting-connect-patients-faster-mconsent
[li-a2p-explained]: https://www.linkedin.com/posts/rebecca-shultz_a2p-10dlc-explained-activity-7080596658660470784-IjOJ
[li-insurance-legal]: https://www.linkedin.com/pulse/insurance-text-marketing-legal-review-patricia-berry
[li-lending]: https://www.linkedin.com/pulse/5-text-messaging-best-practices-consumer-lending-solutionsbytext
[li-mortgage-spam]: https://www.linkedin.com/pulse/how-stop-receiving-many-spam-calls-after-applying-mortgage-marroni-4wfqe
[li-recruit-dos]: https://www.linkedin.com/pulse/dos-donts-text-recruiting-brian-thompson
[li-recruit-guide]: https://www.linkedin.com/pulse/recruiters-guide-text-messaging-candidates-christian-de-pape
[li-recruit-holbrook]: https://www.linkedin.com/pulse/text-message-recruiting-jaxon-holbrook
[li-recruit-vs-email]: https://www.linkedin.com/pulse/recruiting-sms-whatsapp-simply-short-texts-vs-emails-eugeniu-girla
[li-reg-required]: https://www.linkedin.com/posts/stacyspear_us-a2p-10dlc-messaging-registration-required-activity-7064621412627423234--zWu
[li-tcr-hub]: https://www.linkedin.com/posts/thecampaignregistry_the-campaign-registry-is-the-central-hub-activity-7165761134799659009-99nl
[li-text-tcs]: https://www.linkedin.com/pulse/dont-forget-those-pesky-text-terms-conditions-ts-cs-andersen-esq-
[li-unregistered]: https://www.linkedin.com/posts/henryskull_what-happens-to-unregistered-10dlc-traffic-activity-7042595856679632896-dhti
[li-what-10dlc]: https://www.linkedin.com/pulse/what-10dlc-signalmash
[pecr-reg22]: https://www.legislation.gov.uk/uksi/2003/2426/regulation/22
[qa-10dlc]: https://www.quora.com/Im-really-confused-What-is-10-DLC
[qa-customer-service]: https://www.quora.com/How-are-businesses-using-text-messaging-for-customer-service-related-purposes
[qa-employees-law]: https://www.quora.com/Whats-the-law-about-employees-texting-customers
[qa-field-techs]: https://www.quora.com/I-have-a-business-and-I-want-my-field-techs-to-send-texts-to-customers-when-they-are-on-their-way-and-have-the-text-appear-as-though-it-came-from-the-main-business-number-How-can-you-send-texts-and-have-it-display-a-different-phone-number
[qa-what-business-texting]: https://www.quora.com/What-is-business-text-messaging
[rd-voip-declined]: https://www.reddit.com/r/VOIP/comments/1fuoc55/grasshopper_sms_campaign_declined/
[rd-voip-tcr]: https://www.reddit.com/r/VOIP/comments/1jjkgew/tcr_registration_is_killing_me/
[tcr-csp-guide]: https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Jul_2026_v2.pdf
[tcr-resources]: https://www.campaignregistry.com/resources/
[tcr-spam]: https://www.campaignregistry.com/why-are-you-receiving-spam-text-messages/
[tcr-vetting]: https://www.campaignregistry.com/participating-companies/vetting/
[usc-227-cornell]: https://www.law.cornell.edu/uscode/text/47/227
[usc-227]: https://www.govinfo.gov/app/details/USCODE-2023-title47/USCODE-2023-title47-chap5-subchapII-partI-sec227
[yt-10dlc-complete]: https://www.youtube.com/watch?v=sXucWNL8U1M
[yt-a2p-approved]: https://www.youtube.com/watch?v=wpj7_7cz4Kk
[yt-a2p-crm1]: https://www.youtube.com/watch?v=PbamFp-Wha0
[yt-a2p-crm2]: https://www.youtube.com/watch?v=qwiPRQ5NzGA
[yt-a2p-crm3]: https://www.youtube.com/watch?v=0TQk1lnXcAE
[yt-a2p-fast]: https://www.youtube.com/watch?v=ttmM4fmBHDU
[yt-a2p-first]: https://www.youtube.com/watch?v=IUXJbMD7Qz4
[yt-a2p-steps]: https://www.youtube.com/watch?v=j1dP2l-jC5A
[yt-brand-step1]: https://www.youtube.com/watch?v=UwdoxywelQ4
