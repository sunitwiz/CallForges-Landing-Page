# Messaging: topic bank (researched 2026-11-18)

Not published. 36 topics in 5 phases. The demand ran out well before 100: autocomplete for team-inbox phrases mostly
returns email inboxes (Outlook, Gmail) or social tools (Instagram, WhatsApp), and many seeds returned nothing (see
"Sources checked"). The `#` column is the planned day: phase 1 is days 1 to 20, phase 2 days 21 to 40, and so on. A
phase's unused days stay open. Within a phase, rows run strongest demand first.

This bank covers the shared Inbox and working conversations. Two other banks sit next to it:

- `workflows.md` owns missed-call text back: what it is, how to set it up, the contractors post, its cost and whether
  it's legal (its rows 7, 29, 77, 82, 93). It also owns the after-hours call line posts.
- `sms.md` owns texting itself: registration, delivery, opt-outs and the rules.

Here, missed calls appear only for what is said in the text, the UK case and troubleshooting.

Link labels: `ac: <phrase>` is a Google autocomplete call for that phrase in the US, and `gb: <phrase>` the same in the
UK. The demand cell quotes suggestions it returned. "see topics.md #N" means the post is already planned there, so it
is not a new post. Facts-from codes follow topics.md: `help:<slug>` is `_help/src/articles/<slug>.html`, `kb:<file>`
is a file in the app's `internal/supportknowledge/`, `intent:sms/<file>` is `docs/intent/sms_service/<file>.md` in the
app repo, and `ask` means confirm the exact screen labels with the owner first. The Dashboard's Messaging tab has no
help article yet, so every row that uses it says `ask`.

## What people ask

- **How fast should we reply?** "speed to lead" returns statistics, study, harvard study, real estate and ai;
  "first response time" returns customer service, kpi, formula and meaning. [ac: speed to lead][],
  [ac: first response time][], [ac: average response time to text][]
- **What to send when the business is closed:** "after hours text message examples", "business auto reply text
  message", "out of office text message template". [ac: after hours text message][],
  [ac: auto reply text message business][], [ac: out of office text message][]
- **What to text after a missed call:** "missed call auto reply message" and "missed call auto reply via sms". In the
  UK, people ask "why do i get a text message after a missed call". [ac: missed call auto reply][],
  [gb: missed call text back uk][], [LinkedIn][li-mctb-pratt]
- **Whether texting clients is professional, and what the rules are:** "business texting etiquette", "business
  texting rules", "texting clients policy". [ac: business texting etiquette][], [Quora][qa-unprofessional],
  [ac: texting clients][]
- **Who on the team answers a new text:** "shared team sms inbox". People also ask how to assign chats in other
  messaging tools. [ac: shared sms inbox][], [ac: how to assign conversations][], [G2][g2-shared-inbox]
- **Clients and tenants texting at all hours:** "clients texting after hours"; landlords ask whether tenants should
  text at all. [ac: texting clients][], [BiggerPockets][bp-tenant-texts], [BiggerPockets][bp-tenants-email-text]
- **Ready-made words:** "canned responses examples", "what is a canned reply", "text message signature examples",
  "professional text message examples for business". [ac: canned responses examples][],
  [ac: text message signature][], [ac: text message templates for business][]
- **Staff texting customers from their own phones:** "What's the law about employees texting customers?" and how
  techs can text from the main number. [Quora][qa-employees-law], [Quora][qa-field-techs]

## Sources checked

- **Same research run as `sms.md`, with the same limits:**
  - Reddit is blocked (WebFetch refused, direct requests 403, and the search crawler may not access reddit.com).
  - LinkedIn worked through a domain filter, with snippets only.
  - Fetching G2 got 403.
  - The shared WebSearch budget ran out after about 35 searches. Research stopped there instead of working around it.
- **Google autocomplete: about 40 US seeds and 2 UK seeds for this pillar.**
  - "shared inbox", "shared inbox best practices", "shared inbox vs" and "what is a shared inbox" return email
    (Outlook, Gmail, distribution lists).
  - "saved replies" returns Instagram, Facebook, WhatsApp and GitHub. "team inbox" returns other help-desk tools,
    plus "team inbox management" and "team inbox pricing".
  - "conversation assignment", "close conversation" and "round robin text" return other meanings (school
    assignments, Slack, a writing exercise).
  - These seeds returned nothing:
    - "shared inbox for text messages", "away message for business text", "text message auto reply examples"
    - "text message templates for customer service", "how to respond to a customer text", "how to text customers
      professionally"
    - "missed call text message examples", "missed call text back template", "text message follow up after call"
    - "text message response rate"
  - That's why the bank stops at 36.
- **Quora, BiggerPockets, Dentaltown, YouTube: worked** through domain-filtered searches. Titles and snippets only.
- **Vendor help centres and blogs:** they fill the results for "shared inbox" and "auto reply". None is linked,
  because their URLs carry vendor names.
- **Speed-to-lead studies:** the figures people quote come from a study autocomplete calls the "harvard study". It
  wasn't opened here, so find and link the original before writing rows 1 and 81.

## Topics

### Kind A: What it is and how it works

| # | Title (search phrase) | Slug | Demand | Evidence links | CallForges angle | Facts from | Legal |
|---|---|---|---|---|---|---|---|
| 1 | What is speed to lead? | speed-to-lead | high: "speed to lead" (meaning, statistics, real estate, study, harvard study, ai, reddit) | [ac: speed to lead][] [ac: speed to lead statistics][] | A new text lands unread; the assignment rules hand it to someone at once, and their bell rings; Avg first reply shows how fast the team answers | help:who-gets-a-new-sms-conversation, ask (Dashboard Messaging tab) | — |
| 2 | First response time: what it is and how to measure it | first-response-time | high: "first response time" (customer service, kpi, formula, meaning, frt), "average first response time", "median first response time" | [ac: first response time][] [ac: average first response time][] | Avg first reply and Avg reply on the Dashboard's Messaging tab | ask, help:the-messaging-inbox, kb:app_messaging.md | — |
| 3 | What is a reasonable response time for a text? | reasonable-text-response-time | med-high: "average reply time text", "normal text response time", "what is a reasonable response time for text", "text message response time etiquette" | [ac: average response time to text][] [ac: sms response time][] | The assignee's bell; the unread count and blue dot on each conversation | help:the-messaging-inbox | — |
| 4 | Business texting etiquette: is it professional to text clients? | business-texting-etiquette | med-high: "business texting etiquette", "business texting rules", "text messaging etiquette for business", "text messaging etiquette rules"; Quora asks whether texting clients is unprofessional | [ac: business texting etiquette][] [ac: text message etiquette for business][] [Quora][qa-unprofessional] | Texts from the business number, a signature on each, saved replies | help:sms-signatures-and-saved-replies | — |
| 5 | Text message signature examples for business | text-message-signature-examples | med: "text message signature examples", "text message signature ideas" | [ac: text message signature][] | Signatures per user, per number, or per user on a number, up to 160 characters and counted in the text's length | help:sms-signatures-and-saved-replies | — |
| 6 | Canned responses: what they are, with examples for texts | canned-responses-for-texts | med: "canned responses meaning", "canned responses examples", "canned responses sample", "what is a canned reply" | [ac: canned responses][] [ac: canned responses examples][] [ac: saved replies][] | Saved replies, picked from the message box | help:sms-signatures-and-saved-replies | — |
| 7 | Why customers prefer texting a business | why-customers-text-businesses | med: Quora on how businesses use texts for customer service and why; "businesses texting customers" | [Quora][qa-customer-service] [Quora][qa-advantages] [ac: texting customers][] | Customers text the same number they call | help:send-and-receive-sms | — |
| 8 | Team texting vs group texting: what's the difference? | team-texting-vs-group-texting | med: "team text messaging" returns only "group text messaging" (app, service, platforms, software), so the two get mixed up | [ac: team text messaging][] [ac: shared sms inbox][] | One conversation per contact and number, shared by the team. Group texts aren't sent, and the post says so | help:the-messaging-inbox | — |
| 9 | Round robin or first response: ways to share incoming texts | round-robin-vs-first-response-texts | low: "round robin text" returns its meaning only; people ask how to assign chats in other messaging tools | [ac: round robin text][] [ac: how to assign conversations][] | Remain assigned, First response and Round robin, plus three switches (assign to whoever starts it, unassign on close, unassign on opt-out) | help:who-gets-a-new-sms-conversation | — |
| 10 | Open, closed and archived conversations: what each one means | open-closed-archived-conversations | low: a guess; "close conversation" returns other chat tools | [ac: close conversation][] | Close, reopen, archive; a new text reopens a closed or archived conversation | help:the-messaging-inbox | — |

### Kind B: How to set it up in CallForges

| # | Title (search phrase) | Slug | Demand | Evidence links | CallForges angle | Facts from | Legal |
|---|---|---|---|---|---|---|---|
| 21 | Shared team inbox for SMS: how to run one | see topics.md #57 (shared-sms-inbox) | med: "shared team sms inbox", "what is sms inbox"; "shared inbox best practices", "ways to manage a shared inbox" (email-led); a G2 category exists | [ac: shared sms inbox][] [ac: shared inbox best practices][] [G2][g2-shared-inbox] | Messages → Inbox, assignment, bulk actions on up to 100 conversations | help:the-messaging-inbox, help:who-gets-a-new-sms-conversation | — |
| 22 | Out-of-hours text replies for small businesses | see topics.md #59 (out-of-hours-text-reply) | high: "after hours text message", "out of hours text message", "after business hours text message", "office hours auto reply", "sms auto reply" | [ac: after hours text message][] [ac: business hours auto reply][] [ac: sms auto reply][] | Opening hours and a time zone per number, a reply of up to 320 characters, sent at most once in 24 hours per contact | help:sms-out-of-hours-reply | — |
| 23 | Auto reply text message examples for business | auto-reply-text-message-examples | high: "business auto reply text message", "best auto reply text message for business", "auto reply message example for business", "out of office text message template", "after hours auto reply template" | [ac: auto reply text message business][] [ac: out of office text message][] [ac: business hours auto reply][] | Ready-to-use replies for the out-of-hours reply, each under 320 characters, with the number's signature | help:sms-out-of-hours-reply | — |
| 24 | Texting after a missed call: a follow-up playbook | see topics.md #58 (text-after-missed-call) | high: "missed call auto reply message", "missed call text message", "missed call auto reply via sms"; UK: "why do i get a text message after a missed call" | [ac: missed call auto reply][] [ac: missed call text][] [gb: missed call text back uk][] | The workflow's Send SMS step on the Unanswered path, with Insert field; replies land in the Inbox. workflows.md rows 7 and 29 cover the setup | kb:app_workflow_texts | — |
| 25 | How to create saved replies for texts | create-saved-replies | med: "saved replies" is known from social tools (Instagram, Facebook, WhatsApp); "canned responses examples" | [ac: saved replies][] [ac: canned responses examples][] | Settings → Messaging settings → Saved replies | help:sms-signatures-and-saved-replies | — |
| 26 | How to add a text signature for each user or number | add-text-signature | med: "text message signature" (examples, iphone, android) | [ac: text message signature][] | A signature for a user, a number, or a user on a number; the most specific one wins | help:sms-signatures-and-saved-replies | — |
| 27 | How to track your team's text response times | track-text-response-times | med: "first response time kpi", "first response time formula", "average first response time" | [ac: first response time][] [ac: average first response time][] | Dashboard → Messaging: Avg first reply, Avg reply, Reply rate, busy hours, a row per user | ask (no help article yet), help:the-messaging-inbox, kb:app_messaging.md | — |
| 28 | How to assign text conversations automatically | assign-text-conversations-automatically | low-med: "how to assign conversation in messenger", "in meta business suite", "how to assign chat in whatsapp business" show the job in other tools | [ac: how to assign conversations][] | Remain assigned, First response or Round robin; the assignee's bell rings | help:who-gets-a-new-sms-conversation | — |

### Kind C: A problem and its fix

| # | Title (search phrase) | Slug | Demand | Evidence links | CallForges angle | Facts from | Legal |
|---|---|---|---|---|---|---|---|
| 41 | Slow replies are losing leads: how to answer texts faster | slow-replies-losing-leads | med-high: "speed to lead study", "speed to lead harvard study"; a Dentaltown post on the cost of poor front-desk communication | [ac: speed to lead][] [Dentaltown][dt-front-desk] | Assignment rules, the bell, the unread count, the Avg first reply tile | help:who-gets-a-new-sms-conversation, ask | — |
| 42 | Customer texts stuck on staff's personal phones | customer-texts-on-personal-phones | med: Quora asks what the law says about employees texting customers, and how techs can text from the main number | [Quora][qa-employees-law] [Quora][qa-field-techs] | One business number for the team, every conversation kept, roles decide who sees which numbers | help:the-messaging-inbox | — |
| 43 | Clients texting after hours: how to set boundaries | clients-texting-after-hours | med: "clients texting after hours"; a landlord thread on a tenant who texts nonstop | [ac: texting clients][] [BiggerPockets][bp-tenant-texts] [BiggerPockets][bp-tenants-email-text] | The out-of-hours reply with opening hours; schedule your answer for the morning | help:sms-out-of-hours-reply, help:send-and-receive-sms#schedule-a-text | — |
| 44 | Customers don't reply to your texts | customers-dont-reply-to-texts | med: "sms response rate", "cold sms reply rate"; candidates search "recruiter not texting back" from the other side | [ac: sms reply rate][] [ac: recruiter texting][] | The Reply rate tile and the Without replies filter; a local number, and the sender's name in the signature | ask (Dashboard labels), help:the-messaging-inbox | — |
| 45 | Two people answered the same text, or nobody did | double-replies-or-no-reply | low: a guess; no search phrase found; the front-desk post describes the problem | [Dentaltown][dt-front-desk] | One assignee per conversation, and the bell rings for them | help:who-gets-a-new-sms-conversation | — |
| 46 | Missed call text not sending: the usual reasons | missed-call-text-not-sending | low: many people set it up ("missed call text back automation", setup videos); no troubleshooting phrase found | [ac: missed call text back][] [YouTube][yt-mctb-setup] | The call's journey shows Scheduled, Sent or Failed. Common causes: a hidden caller number, an opted-out contact, no credits, or a number that can't text | kb:app_workflow_texts | — |

### Kind D: One market

| # | Title (search phrase) | Slug | Demand | Evidence links | CallForges angle | Facts from | Legal |
|---|---|---|---|---|---|---|---|
| 61 | Speed to lead in real estate: answering a new lead's text first | real-estate-speed-to-lead | high: "speed to lead real estate"; investors compare texting with calling for leads | [ac: speed to lead][] [BiggerPockets][bp-cold-vs-text] | Round robin or First response hands each new text to an agent, and their bell rings | help:who-gets-a-new-sms-conversation | — |
| 62 | Support teams: how to handle customer texts well | support-team-customer-texts | med: "customer service response time standards", "customer support response time"; Quora on texts for customer service | [ac: customer service response time][] [Quora][qa-customer-service] | Shared Inbox, assignment, saved replies, close and reopen | help:the-messaging-inbox, help:sms-signatures-and-saved-replies | — |
| 63 | Tenant texts for property managers: one shared line for maintenance requests | tenant-text-line-property-managers | med: landlord threads on how tenants submit maintenance requests and whether they should text | [BiggerPockets][bp-maintenance-requests] [BiggerPockets][bp-tenants-email-text] [BiggerPockets][bp-tenant-texts] | One number for tenants; the photos they send arrive; the out-of-hours reply. workflows.md row 66 covers the after-hours call line | help:the-messaging-inbox, kb:app_messaging (pictures) | — |
| 64 | Dental front desk: handling patient texts as a team | dental-front-desk-texts | med: Dentaltown posts on front-desk communication and phone systems; "dental office texting service" | [Dentaltown][dt-front-desk] [Dentaltown][dt-phone-systems] [ac: dental office texting][] | A shared Inbox for the front desk; scheduled reminders. No HIPAA claim | help:the-messaging-inbox, ask | — |
| 65 | Missed call text back in the UK: which number can text | missed-call-text-back-uk | med (UK): "missed call text back uk", "missed call text back service uk" | [gb: missed call text back uk][] | UK local numbers are Call only, so the text goes from a UK mobile number ("Send SMS from" a fixed number) | kb:app_workflow_texts, kb:app_statuses_numbers | — |
| 66 | Sales teams: working text conversations with leads | sales-team-text-conversations | low-med: "texting leads", "cold sms reply rate"; investors ask whether calls or texts bring more leads | [ac: texting leads][] [BiggerPockets][bp-cold-vs-text] | Texts and calls from the same number; the With replies filter; round robin | help:the-messaging-inbox | legal: [47 CFR 64.1200][ecfr-64-1200] |

### Kind E: Rules, costs and buying

| # | Title (search phrase) | Slug | Demand | Evidence links | CallForges angle | Facts from | Legal |
|---|---|---|---|---|---|---|---|
| 81 | Speed to lead statistics: what the studies say | speed-to-lead-statistics | high: "speed to lead statistics", "speed to lead data", "speed to lead facts", "speed to lead study", "speed to lead harvard study" | [ac: speed to lead statistics][] [ac: speed to lead][] | Your own figure: the Avg first reply tile | ask | — (cite the study itself in the post; not opened here) |
| 82 | Customer service response time standards | customer-service-response-time-standards | med-high: "customer service response time standards", "customer support response time", "customer service turnaround time" | [ac: customer service response time][] | Avg first reply and Avg reply, with a row per user | ask, help:the-messaging-inbox, kb:app_messaging.md | — |
| 83 | How to choose a shared inbox for team texting: a buyer's checklist | choose-a-shared-texting-inbox | med: "team inbox pricing", "team inbox management", "shared sms inbox"; a G2 category exists. No vendor names | [ac: team inbox][] [ac: shared sms inbox][] [G2][g2-shared-inbox] | The Inbox is included on every plan; texts are billed per message; roles decide who sees which numbers | pricing, help:the-messaging-inbox | — |
| 84 | Team texting metrics to track | team-texting-metrics | med: "first response time kpi", "sms response rate", "sms opt out rate benchmark" | [ac: first response time][] [ac: sms reply rate][] [ac: sms opt out][] | The Messaging tab: Conversations, Texts sent and received, Delivered, Avg first reply, Avg reply, Reply rate, Opted out | ask, help:the-messaging-inbox, kb:app_messaging.md | — |
| 85 | Employee texting policy: rules for staff who text customers | employee-texting-policy | med: "texting clients policy", "texting laws for business"; Quora on the law about employees texting customers | [ac: texting clients][] [ac: can a business text you without permission][] [Quora][qa-employees-law] | Work numbers, not personal phones; every text kept; a STOP honoured from every number | help:the-messaging-inbox, help:sms-opt-outs-stop-and-start | legal: [47 CFR 64.1200][ecfr-64-1200], [CTIA][ctia-2023] |
| 86 | Auto-replies and the rules: can you answer a text automatically? | auto-reply-text-rules | low: "auto reply to text messages", "sms auto reply"; the rules question is a guess | [ac: auto reply text message business][] [ac: sms auto reply][] | The out-of-hours reply answers a text the contact sent, at most once in 24 hours | help:sms-out-of-hours-reply | legal: [CTIA][ctia-2023], [47 CFR 64.1200][ecfr-64-1200] |

## Dropped

- Missed-call text back basics, setup, the contractors post, its cost and whether it's legal: `workflows.md` rows 7, 29, 77, 82 and 93 own them.
- A missed-call text back ROI calculator ("missed call text back roi calculator"): `workflows.md` row 82 covers the cost, and no calculator tool exists.
- Texting after an answered call, and delaying a text with the Schedule rule step: workflow steps for the workflows bank. No search demand found.
- Auto-close after a set time: removed from the product (SMS-D62).
- Internal notes, tags, @mentions, typing or collision indicators, SLA timers: not built.
- Read and unread per user: read state is shared by the team, not kept per user.
- Texts logged to a CRM: not built. The CRM sync logs calls only.
- WhatsApp, Messenger or Instagram in the team inbox ("team inbox whatsapp", "saved replies instagram"): not offered.
- Shared email inboxes (Outlook and Gmail shared mailboxes): email, not CallForges.
- Group texting and church group texts ("group text messaging for churches"): group and bulk sends aren't built.
- AI drafts in the message box: open PR #401, not live. Ask AI can prepare a text for the user to confirm, but no search demand was found for it.
- After-call follow-ups: open PR #356, not live.
- Law-firm and recruiter inbox posts: folded into `sms.md` rows 65 and 64, so one search phrase doesn't get two posts.
- An inbox per client for agencies: folded into `sms.md` row 71 and `workflows.md` row 79.
- Therapists and clients texting after hours ("clients texting after hours therapy"): clinical; CallForges makes no HIPAA claim.
- A chatbot to screen maintenance requests (BiggerPockets): no chatbot answers texts.
- Ecommerce order texts: they need automated and bulk sends, which aren't built.

<!-- link definitions -->

<!-- autocomplete calls -->
[ac: after hours text message]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=after+hours+text+message
[ac: auto reply text message business]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=auto+reply+text+message+business
[ac: average first response time]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=average+first+response+time
[ac: average response time to text]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=average+response+time+to+text
[ac: business hours auto reply]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=business+hours+auto+reply
[ac: business texting etiquette]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=business+texting+etiquette
[ac: can a business text you without permission]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=can+a+business+text+you+without+permission
[ac: canned responses examples]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=canned+responses+examples
[ac: canned responses]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=canned+responses
[ac: close conversation]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=close+conversation
[ac: customer service response time]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=customer+service+response+time
[ac: dental office texting]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=dental+office+texting
[ac: first response time]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=first+response+time
[ac: how to assign conversations]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=how+to+assign+conversations
[ac: missed call auto reply]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=missed+call+auto+reply
[ac: missed call text back]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=missed+call+text+back
[ac: missed call text]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=missed+call+text
[ac: out of office text message]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=out+of+office+text+message
[ac: recruiter texting]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=recruiter+texting
[ac: round robin text]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=round+robin+text
[ac: saved replies]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=saved+replies
[ac: shared inbox best practices]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=shared+inbox+best+practices
[ac: shared sms inbox]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=shared+sms+inbox
[ac: sms auto reply]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+auto+reply
[ac: sms opt out]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+opt+out
[ac: sms reply rate]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+reply+rate
[ac: sms response time]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sms+response+time
[ac: speed to lead statistics]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=speed+to+lead+statistics
[ac: speed to lead]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=speed+to+lead
[ac: team inbox]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=team+inbox
[ac: team text messaging]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=team+text+messaging
[ac: text message etiquette for business]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=text+message+etiquette+for+business
[ac: text message signature]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=text+message+signature
[ac: text message templates for business]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=text+message+templates+for+business
[ac: texting clients]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=texting+clients
[ac: texting customers]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=texting+customers
[ac: texting leads]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=texting+leads
[gb: missed call text back uk]: https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=gb&q=missed+call+text+back+uk

<!-- named sources -->
[bp-cold-vs-text]: https://www.biggerpockets.com/forums/93/topics/1236139-cold-calling-vs-text-marketing-which-gets-more-leads
[bp-maintenance-requests]: https://www.biggerpockets.com/forums/899/topics/1060114-how-do-your-tenants-submit-maintenance-request
[bp-tenant-texts]: https://www.biggerpockets.com/forums/52/topics/1055295-tenant-texts-continuously-and-need-help
[bp-tenants-email-text]: https://www.biggerpockets.com/forums/899/topics/1247599-should-tenants-email-or-text-property-managers-about-issues
[ctia-2023]: https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf
[dt-front-desk]: https://www.dentaltown.com/channel/post/22858/the-hidden-cost-of-poor-front-desk-communication
[dt-phone-systems]: https://www.dentaltown.com/channel/post/24147/revolutionizing-front-office-teams-productivity-with-new-advanced-phone-systems
[ecfr-64-1200]: https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200
[g2-shared-inbox]: https://www.g2.com/categories/shared-inbox
[li-mctb-pratt]: https://www.linkedin.com/pulse/dont-miss-call-win-client-power-missed-text-back-stephanie-pratt-dmlxe
[qa-advantages]: https://www.quora.com/What-are-the-advantages-of-using-business-SMS-for-communication-and-customer-engagement
[qa-customer-service]: https://www.quora.com/How-are-businesses-using-text-messaging-for-customer-service-related-purposes
[qa-employees-law]: https://www.quora.com/Whats-the-law-about-employees-texting-customers
[qa-field-techs]: https://www.quora.com/I-have-a-business-and-I-want-my-field-techs-to-send-texts-to-customers-when-they-are-on-their-way-and-have-the-text-appear-as-though-it-came-from-the-main-business-number-How-can-you-send-texts-and-have-it-display-a-different-phone-number
[qa-unprofessional]: https://www.quora.com/Is-it-unprofessional-for-a-business-to-use-texting-as-a-means-of-communication-with-its-clients
[yt-mctb-setup]: https://www.youtube.com/watch?v=HXgkxiQ1f4I
