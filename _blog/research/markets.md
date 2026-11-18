# Markets: who CallForges is for (researched 2026-11-18)

This file feeds the **D posts** (one industry each). It ranks 25 markets by **demand** (people search and post
about "AI receptionist for X", "answering service for X", "dialer for X", "missed calls X") and **fit** (a small
or mid-sized business in that market can sign up for CallForges and get value this week).

How to read this file:

- **ac** links are Google autocomplete for the phrase shown (US English unless marked **ac gb**, which is UK
  English). The Demand cells quote the suggestions. A phrase with no suggestions is reported as "0".
- **see voice-agents #N**, **see workflows #N**, **see calling #N**, **see numbers-and-trust #N** and **see
  sms #N** point to a Phase 4 (or Phase 5) row in the sibling files in this folder. Write that post once, from
  that row. The D-post titles below are new unless they say "see".
- **Facts from** uses the sibling files' codes: `kb:<file>` is an entry in the app's
  `internal/supportknowledge/` folder; `ask: outbound voice agent` means the outbound AI agent ships today
  (2026-11-18) and has no knowledge entry yet, so its exact behaviour comes from the owner before a post goes out.
- Some official sites (hhs.gov, fcc.gov, consumerfinance.gov, sec.gov, ico.org.uk, americanbar.org) refuse our
  fetcher with 403. The links are real pages found through search; open them in a browser. eCFR links were
  checked and load.
- Not legal advice: every rules line names the official source and who it applies to. No post gives a verdict
  on whether a reader's own calls are lawful.

What a D post may sell (live, from `kb:` files and the landing pages):

- **AI voice agent, inbound** (`kb:ai_agent`, `ai-agent.html`): answers when routing sends it a call, 24/7, only
  from the docs you give it, in 30+ languages; says it is an automated assistant at the start of every call; the
  caller can reach a person or leave a message at any point; books a **callback** instead of guessing; $0.12 a
  minute, 100 pooled minutes per user on Business, 250 on Scale. **Outbound** (calls leads back, reminders) is
  treated as live from today: `ask: outbound voice agent` for specifics.
- **Dialer** (`kb:auto_dialer`, `kb:help_how_the_parallel_dialer_works`): power and parallel modes, voicemail
  drop, calling windows in each contact's local time, retry rules, local caller ID (Business and Scale), every
  call recorded. Campaigns start with a paid plan, not the trial.
- **Workflows** (`kb:help_build_a_call_workflow`, `kb:app_workflow_texts`): time and date rules, ring users or
  teams (all, in order, idle, round robin), IVR menu, forward, voicemail, queue, post-call survey, and a **Send
  SMS** step (missed-call text back, after-voicemail text). IVR and queue callbacks are Business and up
  (`kb:pricing`).
- **SMS and inbox** (`kb:app_messaging`): one-to-one texts, scheduled texts, saved replies, out-of-hours reply,
  STOP handling, round robin assignment. US texting needs 10DLC registration, not in the trial.
- **Recording, transcripts, AI summaries** (`kb:pricing`, `kb:terms`): recording on all plans, transcripts in 30+
  languages billed per minute, AI summaries on Business and up (English calls).
- **CRM logging** (`kb:crm_hubspot`, `kb:crm_pipedrive`, `kb:crm_attio`, `kb:crm_highlevel`, `kb:crm_clio`) on
  Business and up. Clio adds a phone call on the contact and its one open matter, plus optional time entries.
- **Numbers and caller ID** (`kb:overview`, `kb:app_compliance`): local US, UK, Canada and Australia numbers (50+
  more countries), porting ($10 a US number), SHAKEN/STIR, caller ID name, number reputation, branded calling.

Never sell (not live or not stated anywhere): HIPAA compliance or a business associate agreement (BAA); booking
into a calendar or a booking system (say "takes the details and schedules a callback"); checking the national
Do Not Call Registry (the reader scrubs lists before upload); Salesforce or Zoho; scorecards or sentiment; bulk
SMS ("Not yet: each text goes to one contact", `kb:app_messaging`); quiet hours for texts; white label.

## Ranking

| Rank | Market | Demand (high/med/low + why) | Fit (high/med/low + why) | Main CallForges use (AI agent / dialer / workflows / SMS) | Rules that matter |
|---|---|---|---|---|---|
| 1 | Law firms (personal injury, immigration, family) | high: "ai legal receptionist" (10 suggestions), "best ai answering service for law firms", "after hours answering service for law firms", "personal injury intake software", "clio phone integration"; a 2024 secret shop found 40% of firms answered | high: Clio logs every call to the matter with time entries; the agent takes intake at night in the caller's language | AI agent (after hours, multilingual intake) + workflows + Clio logging; dialer only for callbacks | ABA Formal Opinion 512, Model Rule 7.3 (no live solicitation), Rule 1.6, recording consent, SRA (UK) |
| 2 | Home services: HVAC, plumbing, electrical | high: "hvac answering service" (10, incl. "hvac ai answering service"), "ai receptionist for plumbers", "hvac missed call text back", "ai receptionist for electricians", UK "ai receptionist for tradesmen" | high: one number, an after-hours agent and a missed-call text are set up in a day | AI agent (after hours) + workflows (on-call forward, missed-call text) + SMS | TCPA for texts and outbound AI calls, FCC 2024 AI-voice ruling, recording consent |
| 3 | Real estate agents and teams | high: "dialer for real estate" family, "power dialer for real estate", "ai calling agent for real estate", "ai appointment setter for real estate", "real estate texting platforms"; 47% of online inquiries ignored | high: power and parallel dialer, local numbers, after-hours sign calls, HubSpot/Pipedrive/HighLevel/Attio | Dialer + AI agent (speed to lead) + SMS | TCPA and DNC (the app does not scrub the registry), TSR, FCC AI ruling, NAR guidance, Florida FTSA |
| 4 | Insurance agencies | high: "dialer for insurance agents" (10), "ai dialer for insurance agents", "ai receptionist for insurance agents", "ai appointment setter for insurance", "aged insurance leads" (10) | high: dialer for aged leads, every call recorded, caller ID registration | Dialer + AI agent (service line after hours) + recording | TCPA, FCC AI ruling, CMS rule to record Medicare sales calls (42 CFR 422.2274), state telemarketing |
| 5 | Property management | high: "ai receptionist for property management", "property management after hours answering service", "property management maintenance answering service", "ai voice agents for property management" | high: an after-hours maintenance line with emergency forwarding is a workflow plus the agent | AI agent (maintenance triage) + workflows + SMS inbox | Fair Housing Act (answer everyone the same), TCPA for texts and AI reminders, recording consent |
| 6 | Veterinary clinics | med-high: "ai receptionist for veterinary clinics", "veterinary ai answering service", "veterinary after hours answering service", "veterinary phone system", UK "ai receptionist for vets" | high: healthcare-like phone pain without HIPAA (animal records are not covered) | AI agent + IVR (pharmacy, appointments, emergency forward) + SMS | State veterinary record confidentiality, TCPA for reminders, recording consent |
| 7 | SaaS SDR teams | high: "b2b cold calling" (10), "sdr cold calling" (tips, script, ai), "cold calling saas", "parallel dialer for hubspot", "power dialer for hubspot" | high: parallel dialer, HubSpot/Pipedrive/Attio logging, numbers in 56 countries and territories | Parallel and power dialer + CRM logging + AI agent on the sales line | TCPA (B2B cell phones), FCC AI ruling, UK PECR and CTPS, EU AI Act Art. 50 disclosure |
| 8 | Roofing and contractors | med: "ai receptionist for roofing companies", "roofing appointment setting script", "storm damage roofing leads", "ai receptionist for contractors", "missed call text back for contractors" | high: overflow agent for storm surges, parallel dialer for setters, HighLevel tags | AI agent (overflow) + dialer + missed-call text | TCPA and DNC, lead-buyer liability, FCC AI ruling, Florida FTSA |
| 9 | UK estate and letting agents | med: ac gb "ai receptionist for estate agents"; one study found 93.8% of evening calls to agents reached nobody | high: UK numbers, UK texting works on trial, after-hours viewing and valuation requests | AI agent (evenings, weekends) + workflows per branch + dialer for valuations | PECR live calls, TPS and CTPS, Ofcom persistent misuse, UK GDPR for recordings |
| 10 | Auto repair shops | med: "ai receptionist for auto repair shop", "for mechanics", "for garages", "auto repair answering service"; a 320-point HN thread | high: simple inbound plus "your car is ready" texts | AI agent + workflows + SMS | TCPA for texts, recording consent |
| 11 | Funeral homes | med: "answering service for funeral homes" and "for funeral directors" (US and UK), "ai answering service for funeral homes" | high: on-call forwarding plus an agent that answers price questions from the price list | Workflows (forward first calls to the on-call director) + AI agent (price questions, fallback) | FTC Funeral Rule: give prices by phone (16 CFR 453.2), recording consent |
| 12 | Mortgage brokers and loan officers | med: "mortgage leads for loan officers", "mortgage dialer", "mortgage protection dialer", "are mortgage trigger leads now illegal" | med-high: speed-to-lead callbacks and past-client dialing; no loan software integration | AI agent (outbound callback) + power dialer + SMS | TCPA and DNC, FCC AI ruling, trigger leads ban, GLBA Safeguards Rule |
| 13 | Med spas and salons | med: "ai receptionist for med spas", "for salons" (hair, nail, beauty), "for massage and spas", "salon no show policy" (10) | med: salons high; med spas must check HIPAA; the agent cannot book into a booking system | AI agent + missed-call text + reminder texts | HIPAA if the med spa is a covered entity, TCPA for texts and AI reminders, California recording consent |
| 14 | Auto dealerships | med-high: "ai receptionist for car dealerships", "ai bdc for car dealerships", "car dealership bdc" (10), "car dealership phone system"; 19% of 8M dealer calls went unanswered or were abandoned | med: independents fit; franchised dealers live in dealer CRMs we do not connect to | AI agent (service overflow) + BDC dialer + IVR | FTC Safeguards Rule, TCPA (text suits), FCC AI ruling, recording consent |
| 15 | Recruiting and staffing | med: "staffing agency cold calling script", "ai calling agent for recruitment", "ai phone screening software", "recruiter cold calling script" | med-high: parallel dialer and texting for candidates; no ATS integration | Dialer + SMS + AI agent on the job line | TCPA (recruiting calls), FCC AI ruling, EEOC selection guidelines, EU AI Act (hiring AI is high-risk) |
| 16 | Dental practices | high: "ai receptionist for dental" (10), "dental phone systems" (10, incl. "dental ai phone system"), "dental texting software", UK "ai dental receptionist uk" | low (US) until a BAA exists; med (UK and Ireland, DPA on request) | AI agent + workflows + SMS, outside the US for now | HIPAA BAA (a recording or transcript host is a business associate), HHS reminder FAQ, UK GDPR Art. 9 |
| 17 | Accounting and CPA firms | med-low: "ai receptionist for accountants", "for accounting firms"; tax-season call surge in trade press | high: IVR, date rules for deadlines, agent answers "what documents do I need" | AI agent + workflows + SMS reminders | FTC Safeguards Rule (tax preparers), IRS Publication 4557, TCPA for texts |
| 18 | Logistics and trucking dispatch | med: "dialer for truck dispatching" (top "dialer for t" suggestion), "freight broker cold calling script", "ai voice agent for logistics" | med-high: dispatch services cold call owner-operators all day | Power and parallel dialer + after-hours dispatch line | TCPA (owner-operators' cell phones), FCC AI ruling, recording consent |
| 19 | Marketing agencies | med: "white label ai receptionist for agencies", "ai receptionist software for agencies", "power dialer for ghl", "missed call text back ghl" | med: one workspace and one HighLevel sub-account per client; no white label or agency billing | Dialer + HighLevel logging + AI agent per client | TCPA (liability for calls made for clients), FCC AI ruling, 10DLC per client |
| 20 | Solar | med: "solar appointment setting" (10, incl. call center and script), "solar leads" (10) | med-low: the dialer fits setters, but solar is a top TCPA target and the app does not scrub DNC | Dialer + AI agent (inbound ad callers) + recording | TCPA, TSR, FCC AI ruling, Florida FTSA, state AG actions |
| 21 | Medical clinics and private practices | high: "ai receptionist for medical office" (2nd suggestion of all), "hipaa compliant ai receptionist", "hipaa compliant answering service", "after hours answering services for medical offices" | low (US): needs a BAA we do not offer; med for UK private clinics | AI agent + workflows, UK private clinics only for now | HIPAA BAA and cloud guidance, TCPA healthcare exemption, UK GDPR Art. 9 |
| 22 | Nonprofits and fundraising | med: "donor thank you calls", "donation calls", "phonathon", "answering service for nonprofits" | med: power dialer for thank-you calls; seats per caller cost more than volunteers expect | Power dialer + recording + CRM logging | TCPA (nonprofits' own calls are outside DNC, not outside consent), TSR for paid fundraisers, PECR (UK) |
| 23 | Higher education admissions | low-med: "admissions call center", "enrollment call center agent", "ai voice agent for education"; 44% of inquiries unanswered | med-low: career schools and online programs fit; universities buy enterprise systems | AI agent (multilingual FAQs) + dialer for inquiry follow-up | TCPA, FCC AI ruling, FERPA (covers enrolled students, not applicants), GDPR for international applicants |
| 24 | Debt collection | med: "collections dialer", "fdcpa how many calls per day", "ai voice agents for debt collection" | low: Reg F's per-debt call caps and disclosures are not built in | Recording + calling windows only | Reg F (7 calls in 7 days, hours, mini-Miranda), TCPA, FCC AI ruling |
| 25 | Hospitals | low-med: "ai receptionist for hospitals" (4), "ai voice agent for healthcare"; the rest is job searches | low: enterprise contact centers, EHR scheduling, a BAA and a security review | None today; a hospital foundation's donor line fits the nonprofit section | HIPAA BAA and cloud guidance |

## Markets

### 1. Law firms (personal injury, immigration, family)

Sibling rows: see voice-agents #65, #70; see workflows #67, #68; see calling #75, #80; see numbers-and-trust #70;
see sms #65.

**The pains:**

- Firms don't pick up. Clio's 2024 secret shop of law firms: 40% answered the phone (56% in 2019), and about a
  quarter of firms that missed the call called back.
  [Above the Law](https://abovethelaw.com/2024/10/law-firms-failing-at-the-single-most-basic-lawyering-task/) ·
  [2Civility](https://www.2civility.org/2024-clio-legal-trends-report-fixing-the-first-impression-problem-for-law-firms/)
- About one in five law-firm calls comes after hours, two in three qualified callers hang up with no next step,
  and firms without a next step after hours convert 7% (analysis of 3.2 million calls).
  [LawNext](https://www.lawnext.com/2026/10/new-data-from-3-2-million-law-firm-calls-reveals-what-converts-callers-into-clients.html)
- Slow intake loses the client to the next firm on the list; the ABA's own practice-management writers say so.
  [ABA Law Technology Today](https://www.americanbar.org/groups/law_practice/resources/law-technology-today/2026/slow-intake-hinders-growth-but-not-if-firms-use-ai/) ·
  [ABA Law Practice](https://www.americanbar.org/groups/law_practice/resources/law-practice-magazine/2025/march-april-2025/laws-new-first-impression-transforming-client-intake/)
- Many immigration and personal-injury callers want to speak Spanish or another language, and want a lawyer now
  ("immigration lawyer call now"); an English-only front desk that closes at 5pm loses them.
  [ac "immigration lawyer call"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=immigration+lawyer+calls)
- Phone time goes unbilled when calls aren't logged to the matter.
  [Clio timekeeping help](https://help.clio.com/hc/articles/50852535786139-Clio-Timekeeping)

**How CallForges helps:**

- AI agent: answers nights, weekends and overflow, says it is automated, takes name, number, case type and what
  happened, in the caller's language (30+), and schedules a callback; hands to the on-call attorney when asked.
  (Facts from: `kb:ai_agent`)
- Dialer: the morning callback list as a power-dialer session with voicemail drop. Not for cold calls to
  prospective clients (Rule 7.3). (Facts from: `kb:auto_dialer`)
- Workflows: business hours, IVR "1 new case, 2 existing client", ring the intake team round robin, after hours
  to the agent or voicemail, a Send SMS on the missed-call path. (Facts from: `kb:help_build_a_call_workflow`,
  `kb:app_workflow_texts`)
- SMS: two-way texts with clients from the firm's number, saved replies, out-of-hours reply. (Facts from:
  `kb:app_messaging`)
- Recording and CRM: every call becomes a Clio phone call on the contact, and on their matter when they have
  exactly one open matter; a time entry per call and the recording saved in Clio are switches you turn on; Move to
  a matter fixes the rest. (Facts from: `kb:crm_clio`)

**Rules:**

- ABA Formal Opinion 512 (July 2024): generative AI tools engage competence, confidentiality (Rule 1.6),
  communication and supervision duties. [ABA Formal Opinion 512](https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf) ·
  [summary](https://natlawreview.com/article/american-bar-association-issues-formal-opinion-use-generative-ai-tools)
- Model Rule 7.3 bars live person-to-person solicitation of prospective clients for money; outbound AI calls and
  the dialer are for people who asked to be called.
  [ABA Rule 7.3](https://www.americanbar.org/groups/professional%5Fresponsibility/publications/model%5Frules%5Fof%5Fprofessional%5Fconduct/rule%5F7%5F3%5Fdirect%5Fcontact%5Fwith%5Fprospective%5Fclients/) ·
  [NC State Bar Rule 7.3](https://www.ncbar.gov/for-lawyers/ethics/rules-of-professional-conduct/rule-73-direct-contact-with-potential-clients/)
- Recording consent: federal one-party rule and all-party states such as California.
  [18 U.S.C. 2511](https://www.law.cornell.edu/uscode/text/18/2511) ·
  [Cal. Penal Code 632](https://www.law.cornell.edu/regulations/california/Cal-Penal-Code-632)
- UK solicitors: confidentiality under the SRA Code. [SRA Code of Conduct](https://www.sra.org.uk/solicitors/standards-regulations/code-conduct-solicitors/)
- EU: people must be told they are talking to an AI system. [EU AI Act Art. 50](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| Best AI receptionist for law firms: what to check before you buy | best-ai-receptionist-for-law-firms | [ac "ai receptionist for law firms"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+law+firms) · [ac "answering service for law firm"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=answering+service+for+law+firm) | AI receptionist |
| Law firm missed calls: what the secret shop found and how to fix it | law-firm-missed-calls | [Above the Law](https://abovethelaw.com/2024/10/law-firms-failing-at-the-single-most-basic-lawyering-task/) · [LawNext](https://www.lawnext.com/2026/10/new-data-from-3-2-million-law-firm-calls-reveals-what-converts-callers-into-clients.html) | missed calls |
| Personal injury intake at 2am without breaking Rule 7.3 | personal-injury-intake-after-hours | [ac "personal injury intake"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=personal+injury+intake) · [ABA Rule 7.3](https://www.americanbar.org/groups/professional%5Fresponsibility/publications/model%5Frules%5Fof%5Fprofessional%5Fconduct/rule%5F7%5F3%5Fdirect%5Fcontact%5Fwith%5Fprospective%5Fclients/) | AI receptionist |
| Immigration law firm intake in Spanish and other languages, day and night | immigration-law-firm-multilingual-intake | [ac "immigration lawyer call"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=immigration+lawyer+calls) · [ac "immigration law firm"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=immigration+law+firm) | AI receptionist |
| Clio phone integration: every call and time entry on the matter (see calling #75) | clio-phone-integration | [ac "clio phone"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=clio+phone) | CRM logging |
| Family law intake questions: what to ask and what to record | family-law-intake-questions | [ac "family law intake"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=family+law+intake) | call recording |

### 2. Home services: HVAC, plumbing, electrical

Also covers pest control, lawn care, cleaning, appliance repair and handyman firms (each has its own "ai
receptionist for" suggestion). Sibling rows: see voice-agents #66, #67; see workflows #65, #73, #77; see
numbers-and-trust #80; see sms #70.

**The pains:**

- A missed call is a lost job: the next company on the search page answers. Trade press now covers owners
  switching to voice agents for it.
  [ACHR News: missed calls, lost jobs](https://www.achrnews.com/articles/166287-missed-calls-lost-jobs-why-hvac-companies-are-adopting-voice-ai-agents) ·
  [ACHR News: virtual operators](https://www.achrnews.com/articles/163947-how-virtual-operators-are-transforming-daily-operations-for-residential-hvac-businesses)
- Night and weekend emergencies (no heat, a burst pipe) fall on an on-call tech; owners argue about response
  times and who answers.
  [HVAC-Talk: after-hours service](https://hvac-talk.com/vbb/threads/460122-After-Hours-Service) ·
  [HVAC-Talk: on-call response time](https://www.hvac-talk.com/threads/on-call-expected-response-time.322462/)
- Techs on a job can't pick up, so "missed call text back" is searched by trade:
  [ac "hvac missed calls"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=hvac+missed+calls) ·
  [ac "missed call text back for"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=missed+call+text+back+for)
- Customers want "on my way" texts from the main business number, not a tech's mobile.
  [Quora](https://www.quora.com/I-have-a-business-and-I-want-my-field-techs-to-send-texts-to-customers-when-they-are-on-their-way-and-have-the-text-appear-as-though-it-came-from-the-main-business-number-How-can-y)

**How CallForges helps:**

- AI agent: picks up after hours and on overflow, answers service area, call-out fee and hours from your docs,
  takes the address and the problem, schedules a callback, transfers a real emergency to the on-call tech.
  Outbound: calls web-form leads back and sends maintenance reminders. (Facts from: `kb:ai_agent`;
  `ask: outbound voice agent`)
- Workflows: Time rule for after hours, Ring the on-call team, Forward to the on-call mobile, Voicemail, and a
  Send SMS on the Unanswered path as the missed-call text back. (Facts from: `kb:help_build_a_call_workflow`,
  `kb:app_workflow_texts`)
- SMS: a shared inbox for the office, round robin assignment, out-of-hours reply, scheduled texts. US numbers
  need 10DLC registration. (Facts from: `kb:app_messaging`)
- Dialer: a power-dialer block for estimate follow-ups and maintenance-plan renewals. (Facts from:
  `kb:auto_dialer`)
- Recording and CRM: every call recorded; HighLevel logging with outcome tags that can start a HighLevel
  follow-up. Field-service software is not connected. (Facts from: `kb:crm_highlevel`)

**Rules:**

- Texts and outbound calls to cell phones: TCPA consent rules. [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200)
- An AI voice is an "artificial or prerecorded voice" under the TCPA (FCC, February 2024): outbound AI calls need
  the matching consent. [FCC declaratory ruling FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)
- Recording consent: [18 U.S.C. 2511](https://www.law.cornell.edu/uscode/text/18/2511) ·
  [Cal. Penal Code 632](https://www.law.cornell.edu/regulations/california/Cal-Penal-Code-632)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| HVAC answering service or AI receptionist: who takes the 2am no-heat call | hvac-answering-service-vs-ai-receptionist | [ac "hvac answering service"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=hvac+answering+service) · [ACHR News](https://www.achrnews.com/articles/166287-missed-calls-lost-jobs-why-hvac-companies-are-adopting-voice-ai-agents) | AI receptionist |
| Missed call text back for plumbers and HVAC companies | missed-call-text-back-plumbers-hvac | [ac "missed call text back for"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=missed+call+text+back+for) · [ac "hvac missed calls"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=hvac+missed+calls) | missed calls |
| Electrician answering service: on-call routing that doesn't wake the whole team | electrician-answering-service | [ac "electrician answering service"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=electrician+answering+service) · [HVAC-Talk](https://www.hvac-talk.com/threads/on-call-expected-response-time.322462/) | phone menu |
| AI receptionist for pest control and lawn care companies | ai-receptionist-pest-control-lawn-care | [ac "ai receptionist for pest control"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+pest+control) · [ac "ai receptionist for landscaping"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+landscaping) | AI receptionist |
| AI receptionist for tradesmen (UK): plumbers, electricians and builders | ai-receptionist-for-tradesmen-uk | [ac gb "ai receptionist for tradesmen"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en-GB&gl=gb&q=ai+receptionist+for+tradesmen) | AI receptionist |
| HVAC maintenance plan renewals: a power dialer and text setup | hvac-maintenance-plan-renewal-calls | [ac "hvac leads"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=hvac+leads) (demand low) | power dialer |

### 3. Real estate agents and teams

Sibling rows: see voice-agents #64; see calling #61, #63, #64, #68, #72, #73; see workflows #70, #75; see
numbers-and-trust #62, #63, #65, #67, #71; see sms #61.

**The pains:**

- Online inquiries go unanswered: in a 2024 secret shop of brokerage websites, 47% of inquiries got no reply and
  the median reply took 39 minutes.
  [Mike DelPrete](https://www.mikedp.com/articles/2024/8/13/secret-shopping-47-of-online-property-inquiries-are-ignored) ·
  [HousingWire](https://www.housingwire.com/articles/almost-half-of-listing-inquiries-dont-receive-a-response-from-an-agent-delprete)
- Leads go cold in minutes, so "speed to lead real estate" is its own search.
  [Inman](https://www.inman.com/2022/03/09/you-cant-afford-to-wait-6-tips-for-instant-lead-gratification/) ·
  [ac "speed to lead"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=speed+to+lead)
- Prospecting calls (expireds, FSBOs, circle prospecting) get numbers flagged as spam.
  [BiggerPockets: numbers flagged](https://biggerpockets.com/forums/93/topics/959362-have-your-outbound-cold-call-numbers-been-flagged-as-spam)
- Agents are unsure what the Do Not Call rules allow for expireds and FSBOs.
  [NAR: telemarketing and cold calling](https://www.nar.realtor/telemarketing-cold-calling)

**How CallForges helps:**

- Dialer: power mode for expireds and circle prospecting, parallel mode for big lists, voicemail drop, local
  caller ID, calling windows in each contact's time zone, retry rules. The reader scrubs DNC before upload.
  (Facts from: `kb:auto_dialer`, `kb:help_how_the_parallel_dialer_works`)
- AI agent: answers sign calls and listing questions at night from the listing sheet, takes the buyer's details,
  schedules a callback. Outbound: calls new web leads back in a minute, with consent. (Facts from: `kb:ai_agent`;
  `ask: outbound voice agent`)
- Workflows: Ring in round robin across the team; Send SMS after a missed call. (Facts from:
  `kb:help_build_a_call_workflow`, `kb:app_workflow_texts`)
- SMS: one-to-one texts, scheduled texts, saved replies. No bulk blasts. (Facts from: `kb:app_messaging`)
- CRM and caller ID: HubSpot, Pipedrive, HighLevel or Attio logging; SHAKEN/STIR, caller ID name and number
  reputation. The CRM most teams use is not connected; say so. (Facts from: `kb:crm_hubspot`,
  `kb:crm_highlevel`, `kb:app_compliance`)

**Rules:**

- TCPA, including the national DNC rules: [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200)
- Telemarketing Sales Rule: [16 CFR 310.4](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-310/section-310.4)
- AI-voice calls need consent: [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)
- NAR's guidance for agents: [NAR](https://www.nar.realtor/telemarketing-cold-calling)
- State mini-TCPA laws, for example Florida: [Fla. Stat. 501.059](https://www.flsenate.gov/Laws/Statutes/2024/501.059)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| Speed to lead in real estate: call every inquiry in a minute | speed-to-lead-real-estate | [ac "real estate speed to lead"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=real+estate+speed+to+lead) · [Mike DelPrete](https://www.mikedp.com/articles/2024/8/13/secret-shopping-47-of-online-property-inquiries-are-ignored) | AI voice agent |
| AI receptionist for real estate agents: sign calls and listing questions at night | ai-receptionist-for-real-estate-agents | [ac "ai receptionist for real estate"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+real+estate) | AI receptionist |
| Parallel dialer for real estate: when it beats a power dialer | parallel-dialer-for-real-estate | [ac "power dialer for real estate"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=power+dialer+for+real+estate) | parallel dialer |
| Real estate lead follow-up schedule: calls and texts for the first 30 days | real-estate-lead-follow-up-schedule | [ac "real estate lead follow up"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=real+estate+lead+follow+up) | business texting |
| Can an AI call your real estate leads? Consent after the FCC ruling | ai-calls-real-estate-leads-consent | [ac "ai calling agent for"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+calling+agent+for) · [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf) | AI voice agent |

### 4. Insurance agencies

P&C, life, final expense and Medicare agents. Sibling rows: see voice-agents #69; see calling #62, #76; see
workflows #71; see numbers-and-trust #66, #68; see sms #66.

**The pains:**

- Agents work purchased and aged leads and ask each other which dialer to buy.
  [insurance-forums: dialer recommendation](https://www.insurance-forums.com/community/threads/dialer-recommendation.94743) ·
  [insurance-forums: which dialer](https://www.insurance-forums.com/community/threads/which-phone-dialers-auto-predictive-dialer-would-you-suggest.93253/page-3)
- Their numbers get labelled "Scam Likely".
  [insurance-forums: number flagged as spam](https://www.insurance-forums.com/community/threads/need-help-number-getting-flagged-as-spam.111115/post-1463492)
- Clients expect help outside office hours, and small agencies debate whether they can offer it.
  [IA Magazine: is 24/7 service necessary](https://www.iamagazine.com/2018/05/01/point-counterpoint-is-24-7-service-necessary/)
- Medicare agents must record every marketing, sales and enrollment call.
  [CMS agent and broker guidelines](https://www.cms.gov/files/document/cy2025-agent-broker-training-testing-guidelines.pdf)

**How CallForges helps:**

- Dialer: parallel mode for aged leads, power mode for renewals and cross-sell, voicemail drop, local caller ID,
  retry rules. (Facts from: `kb:auto_dialer`)
- AI agent: answers the service line after hours (claims number, ID card and payment questions from your docs),
  takes messages, schedules a callback; it does not quote or bind. Outbound: calls new quote requests back with
  consent. (Facts from: `kb:ai_agent`; `ask: outbound voice agent`)
- Workflows: IVR "1 new quote, 2 service, 3 claims", round robin to producers. (Facts from:
  `kb:help_build_a_call_workflow`)
- Recording: every call recorded on all plans. A Medicare agent checks the retention period against CMS's rule
  before treating CallForges as the archive. (Facts from: `kb:auto_dialer`)
- Caller ID: SHAKEN/STIR, caller ID name, number reputation and branded calling. (Facts from: `kb:app_compliance`)

**Rules:**

- TCPA and DNC: [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200);
  the FCC's one-to-one consent rule was vacated in January 2025:
  [Eleventh Circuit summary](https://www.mofo.com/resources/insights/250130-eleventh-circuit-vacates-fcc-s-tcpa-one-to-one-consent-rule)
- AI-voice calls: [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)
- Medicare: third-party marketing organizations record marketing, sales and enrollment calls in full.
  [42 CFR 422.2274](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-422/subpart-V/section-422.2274)
- Telemarketing Sales Rule: [16 CFR 310.4](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-310/section-310.4)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| Parallel dialer for aged insurance leads | parallel-dialer-aged-insurance-leads | [ac "aged insurance leads"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=aged+insurance+leads) · [insurance-forums](https://www.insurance-forums.com/community/threads/dialer-recommendation.94743) | parallel dialer |
| AI receptionist for insurance agencies: service calls after hours (see voice-agents #69) | ai-receptionist-insurance-agency | [ac "ai receptionist for insurance"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+insurance) | AI receptionist |
| Medicare call recording rules for agents and TPMOs | medicare-call-recording-rules | [42 CFR 422.2274](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-422/subpart-V/section-422.2274) · [ac "medicare dialer"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=medicare+dialer) | call recording |
| AI appointment setter for insurance agents: what the FCC allows | ai-appointment-setter-insurance | [ac "ai appointment setter for"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+appointment+setter+for) · [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf) | AI voice agent |
| Final expense telesales: dialer settings that keep your number clean | final-expense-dialer-settings | [ac "final expense dialer"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=final+expense+dialer) · [insurance-forums](https://www.insurance-forums.com/community/threads/final-expense-telesales-tips.101595/post-1345607) | power dialer |

### 5. Property management

Sibling rows: see voice-agents #68; see workflows #66; see sms #67.

**The pains:**

- After-hours maintenance calls need sorting: a flood can't wait, a dripping tap can. Landlords ask whether an
  after-hours call center works.
  [BiggerPockets: after-hours call center](https://www.biggerpockets.com/forums/52/topics/756172-after-hours-call-center-for-property-managment-is-it-effective) ·
  [BiggerPockets: after-hours maintenance requests](https://www.biggerpockets.com/forums/52/topics/96958-after-hours-maintenance-request)
- Managers end up on call around the clock.
  [Quora](https://www.quora.com/Are-property-managers-expected-to-be-on-call-to-handle-tenant-demands)
- Tenants want to text, and managers debate texting versus e-mail for issues.
  [BiggerPockets: should tenants text or e-mail](https://www.biggerpockets.com/forums/899/topics/1247599-should-tenants-email-or-text-property-managers-about-issues)
- Searches name the job directly:
  [ac "property management after hours"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=property+management+after+hours)

**How CallForges helps:**

- AI agent: answers the maintenance line after hours from your emergency policy, takes the unit and the issue,
  transfers a true emergency to the on-call manager, and turns the rest into a morning callback. (Facts from:
  `kb:ai_agent`)
- Workflows: Time rule, IVR "1 emergency maintenance, 2 leasing, 3 rent", ring the on-call team, forward to the
  on-call mobile, Send SMS to confirm the request was logged. (Facts from: `kb:help_build_a_call_workflow`,
  `kb:app_workflow_texts`)
- SMS: a shared inbox per property number, round robin, out-of-hours reply, STOP handled. (Facts from:
  `kb:app_messaging`)
- Recording and transcripts: a record of what the tenant reported and when. (Facts from: `kb:pricing`)
- Outbound AI reminders (rent due, inspection tomorrow): `ask: outbound voice agent`.

**Rules:**

- Fair Housing Act: give every caller the same answers about availability and terms.
  [DOJ: Fair Housing Act](https://www.justice.gov/crt/fair-housing-act-1)
- Texts and AI-voice reminder calls to tenants' cell phones: [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200) ·
  [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)
- Recording consent: [Cal. Penal Code 632](https://www.law.cornell.edu/regulations/california/Cal-Penal-Code-632)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| Property management after-hours answering service: AI or a call center? (see workflows #66) | property-management-after-hours-answering | [ac "property management answering service"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=property+management+answering+service) · [BiggerPockets](https://www.biggerpockets.com/forums/52/topics/756172-after-hours-call-center-for-property-managment-is-it-effective) | AI receptionist |
| Emergency maintenance line: what counts as an emergency and who gets the call | emergency-maintenance-line | [ac "property management after hours"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=property+management+after+hours) · [BiggerPockets](https://www.biggerpockets.com/forums/52/topics/96958-after-hours-maintenance-request) | phone menu |
| AI voice agent for leasing inquiries: showings, pets and parking at 9pm | ai-voice-agent-leasing-inquiries | [ac "ai voice agent for p"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+voice+agent+for+p) | AI receptionist |
| Rent reminder calls and texts: what's allowed | rent-reminder-calls-texts | [BiggerPockets: tenant messaging](https://www.biggerpockets.com/forums/899/topics/1233348-would-you-try-this-rent-collection-and-tenant-messaging-without-apps) · [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf) | business texting |

### 6. Veterinary clinics

Sibling rows: see voice-agents #72 (names veterinary clinics among its completions).

**The pains:**

- The phone rings all day while one or two people also check patients in and out; trade press calls it a
  six-figure problem. [Today's Veterinary Business](https://todaysveterinarybusiness.com/the-six-figure-problem-with-your-phone-system/)
- After hours, owners call with emergencies and need to be pointed to an emergency hospital.
  [ac "veterinary after hours"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=veterinary+after+hours)
- Clinics already search for an AI answer:
  [ac "veterinary answering service"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=veterinary+answering+service) ·
  [ac gb "ai receptionist for vets"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en-GB&gl=gb&q=ai+receptionist+for+vets)
- Record confidentiality is a state-law and professional duty, not HIPAA.
  [VIN: confidentiality of veterinary records](https://www.vin.com/doc/?id=9974579)

**How CallForges helps:**

- AI agent: answers hours, vaccine schedules, prices and refill-request questions from your docs; after hours it
  gives the emergency hospital's number and takes a message; schedules a callback. (Facts from: `kb:ai_agent`)
- Workflows: IVR "1 appointments, 2 pharmacy, 3 emergency" with Forward to the emergency hospital; Queue with
  callbacks on Business. (Facts from: `kb:help_build_a_call_workflow`, `kb:pricing`)
- SMS: two-way texts, out-of-hours reply, a scheduled reminder per client (no bulk). (Facts from:
  `kb:app_messaging`)
- Recording and transcripts for "what did the vet say on the phone". (Facts from: `kb:pricing`)
- Outbound AI vaccine reminders: `ask: outbound voice agent`.

**Rules:**

- HIPAA covers health plans, clearinghouses and providers of human health care; a veterinary practice is not a
  covered entity. [45 CFR 160.103](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-160/subpart-A/section-160.103)
- State veterinary practice acts and the profession's duty of confidentiality apply instead.
  [VIN](https://www.vin.com/doc/?id=9974579)
- Reminder texts and AI-voice calls follow the TCPA: [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200) ·
  [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| AI receptionist for veterinary clinics | ai-receptionist-veterinary-clinics | [ac "ai receptionist for veterinary"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+veterinary) · [Today's Veterinary Business](https://todaysveterinarybusiness.com/the-six-figure-problem-with-your-phone-system/) | AI receptionist |
| Veterinary after-hours answering: send emergencies to the ER, take the rest | veterinary-after-hours-answering | [ac "veterinary answering service"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=veterinary+answering+service) | phone menu |
| Vet clinic phone system: menus, queues and callbacks | vet-clinic-phone-system | [ac "veterinary phone system"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=veterinary+phone+system) | phone menu |
| Does HIPAA apply to vets? Pet records, recordings and AI notes | hipaa-for-veterinarians | [VIN](https://www.vin.com/doc/?id=9974579) · [45 CFR 160.103](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-160/subpart-A/section-160.103) | call recording |
| Vaccine reminder calls and texts for vet clinics | vet-reminder-calls-texts | [ac "veterinary after hours"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=veterinary+after+hours) (demand indirect; see sms #62) | business texting |

### 7. SaaS SDR teams

Sibling rows: see voice-agents #74; see calling #65; see workflows #74, #80; see numbers-and-trust #61, #72,
#73; see sms #72.

**The pains:**

- Low connect rates: one 2025 benchmark puts a single dial's connect rate at about 10%.
  [Belkins benchmarks](https://belkins.io/blog/cold-calling-benchmarks)
- Calling the US from the UK or EU connects worse without a local number.
  [RevGenius thread](https://community.revgenius.com/x/chat-sales/lr5drsbsdh1r/low-call-connect-rate-from-uk-to-us-tips-and-data)
- Reps want their calls and notes in the CRM without typing them:
  [ac "power dialer for"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=power+dialer+for) ·
  [ac "parallel dialer for"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=parallel+dialer+for)
- SDRs search for how to cold call at all:
  [ac "sdr cold calling"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sdr+cold+calling)

**How CallForges helps:**

- Dialer: parallel mode rings several contacts and connects the first to answer; power mode for account lists;
  voicemail drop; local caller ID with numbers in 56 countries and territories; calling windows. (Facts from: `kb:auto_dialer`,
  `kb:help_how_the_parallel_dialer_works`)
- CRM: HubSpot, Pipedrive and Attio logging with the recording link, transcript and AI summary. (Facts from:
  `kb:crm_hubspot`, `kb:crm_pipedrive`, `kb:crm_attio`)
- AI agent: answers the sales line out of hours, qualifies from your docs, schedules a callback. Outbound: calls
  demo requests back in a minute. (Facts from: `kb:ai_agent`; `ask: outbound voice agent`)
- Workflows: sales versus support menu, routing by country or language (Business). (Facts from:
  `kb:help_build_a_call_workflow`, `kb:pricing`)
- Numbers: local US, UK and Australian numbers; caller ID registration. (Facts from: `kb:overview`,
  `kb:app_compliance`)

**Rules:**

- B2B calls to cell phones are still TCPA calls: [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200)
- AI-voice calls: [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)
- UK B2B calls: PECR and the Corporate TPS.
  [ICO: business-to-business marketing](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/business-to-business-marketing/)
- EU: tell people they are talking to an AI. [EU AI Act Art. 50](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| Parallel dialer for SDR teams: when it beats a power dialer | parallel-dialer-for-sdr-teams | [ac "parallel dialer for"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=parallel+dialer+for) · [Belkins](https://belkins.io/blog/cold-calling-benchmarks) | parallel dialer |
| Power dialer for HubSpot: log every call, recording and summary | power-dialer-for-hubspot | [ac "power dialer for"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=power+dialer+for) | power dialer |
| SaaS cold calling: connect rates and how many dials a day | saas-cold-calling-connect-rates | [ac "cold calling saas"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=cold+calling+saas) · [Belkins](https://belkins.io/blog/cold-calling-benchmarks) | power dialer |
| Demo request callbacks in under a minute | demo-request-callback | [ac "speed to lead"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=speed+to+lead) | AI voice agent |
| SDR cold calling tips from 10,000 recorded calls: what to listen for | sdr-cold-calling-tips-recordings | [ac "sdr cold calling"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=sdr+cold+calling) | call recording |

### 8. Roofing and contractors

Roofers, general contractors, remodelers and construction firms. Sibling rows: see voice-agents #73; see
workflows #77.

**The pains:**

- After a storm the phones flood, and the first contractor to respond often wins the job.
  [RoofersCoffeeShop: first to respond, first to win](https://www.rooferscoffeeshop.com/post/first-to-respond-first-to-win)
- Owners on a roof or job site miss calls; trade videos teach the missed-call text back.
  [YouTube](https://www.youtube.com/shorts/lDe6wzpGcFo) ·
  [ac "missed call text back for contractors"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=missed+call+text+back+for+contractors)
- Appointment setters call storm and inspection leads all day:
  [ac "roofing appointment setting"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=roofing+appointment+setting) ·
  [ac "storm damage leads"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=storm+damage+leads)
- Bought leads carry legal risk for the buyer too: AGs sue the company and its telemarketer.
  [Arizona AG](https://www.azag.gov/press-release/attorney-general-mayes-sues-residential-solar-installation-company-and-telemarketer)

**How CallForges helps:**

- AI agent: overflow and after hours in storm season, takes the address and the damage, schedules an inspection
  callback. Outbound: calls form leads back with consent. (Facts from: `kb:ai_agent`; `ask: outbound voice agent`)
- Dialer: parallel mode for setters on storm lists, calling windows, voicemail drop, retry rules. (Facts from:
  `kb:auto_dialer`)
- Workflows: a Queue for overflow, Send SMS as the missed-call text back. (Facts from:
  `kb:help_build_a_call_workflow`, `kb:app_workflow_texts`)
- CRM: HighLevel logging with outcome tags (`callforges-missed`) and a follow-up task on a missed call. (Facts
  from: `kb:crm_highlevel`)
- Numbers: a local number for each service area. (Facts from: `kb:overview`)

**Rules:**

- TCPA and DNC: [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200);
  Telemarketing Sales Rule: [16 CFR 310.4](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-310/section-310.4)
- AI-voice calls: [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)
- Florida (a storm market) has its own telemarketing act: [Fla. Stat. 501.059](https://www.flsenate.gov/Laws/Statutes/2024/501.059)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| Storm season phone plan for roofers | storm-season-phone-plan-roofers | [ac "storm damage leads"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=storm+damage+leads) · [RoofersCoffeeShop](https://www.rooferscoffeeshop.com/post/first-to-respond-first-to-win) | phone menu |
| Roofing appointment setting: script and dialer setup | roofing-appointment-setting | [ac "roofing appointment setting"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=roofing+appointment+setting) | power dialer |
| AI receptionist for contractors and remodelers | ai-receptionist-for-contractors | [ac "ai receptionist for c"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+c) | AI receptionist |
| Buying roofing leads: who's liable for the calls | roofing-leads-call-liability | [ac "roofing leads"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=roofing+leads) · [Arizona AG](https://www.azag.gov/press-release/attorney-general-mayes-sues-residential-solar-installation-company-and-telemarketer) | power dialer |

### 9. UK estate and letting agents

Added: the evidence for after-hours pain is strong, and UK numbers and UK texting work on the trial. Sibling rows:
see workflows #72, #76; see numbers-and-trust #73.

**The pains:**

- Evening calls reach nobody: one study found 93.8% of evening calls to UK agents went unanswered.
  [Property Industry Eye](https://propertyindustryeye.com/agents-miss-94-of-evening-calls-study-finds/)
- Missed calls were estimated to cost agents about £119m a year.
  [Estate Agent Today](https://old.estateagenttoday.co.uk/breaking-news/2022/6/estate-agents-down-119m-a-year-from-missed-calls)
- Agents search for the fix by name:
  [ac gb "ai receptionist for estate agents"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en-GB&gl=gb&q=ai+receptionist+for+estate+agents)

**How CallForges helps:**

- Numbers: UK local numbers, or port the branch's own number. (Facts from: `kb:overview`, `kb:pricing`)
- AI agent: evenings and weekends, viewing and valuation requests, answers from the property details, schedules
  a callback, in the caller's language. (Facts from: `kb:ai_agent`)
- Workflows: sales, lettings and maintenance menu; a Time rule per branch; round robin to negotiators. (Facts
  from: `kb:help_build_a_call_workflow`)
- Dialer: power dialer for valuation follow-ups and applicant calls, after TPS screening. (Facts from:
  `kb:auto_dialer`)
- SMS: UK numbers text without US registration, on the trial too. (Facts from: `kb:app_messaging`)

**Rules:**

- PECR live marketing calls and the TPS: [ICO: telephone marketing](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/telephone-marketing/) ·
  [PECR regulation 21](https://www.legislation.gov.uk/uksi/2003/2426/regulation/21)
- Ofcom's persistent misuse rules (abandoned and silent calls): [Ofcom](https://www.ofcom.org.uk/phones-and-broadband/unwanted-calls-and-messages/persistent_misuse)
- Recording calls is processing personal data under UK GDPR: give notice.
  [ICO: monitoring workers, call recording](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/employment/monitoring-workers/specific-data-protection-considerations-for-different-ways-or-methods-of-monitoring-workers)
- PECR fines rose with the Data (Use and Access) Act 2025: [legislation.gov.uk](https://www.legislation.gov.uk/ukpga/2025/18/contents)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| AI receptionist for estate agents | ai-receptionist-for-estate-agents | [ac gb "ai receptionist for estate agents"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en-GB&gl=gb&q=ai+receptionist+for+estate+agents) · [Property Industry Eye](https://propertyindustryeye.com/agents-miss-94-of-evening-calls-study-finds/) | AI receptionist |
| Estate agents miss 94% of evening calls: a phone plan that answers them | estate-agents-evening-calls | [Property Industry Eye](https://propertyindustryeye.com/agents-miss-94-of-evening-calls-study-finds/) | missed calls |
| Letting agent out-of-hours maintenance line | letting-agent-out-of-hours-line | [Property Industry Eye](https://propertyindustryeye.com/agents-miss-94-of-evening-calls-study-finds/) · [ac "property management after hours"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=property+management+after+hours) ("out of hours") | phone menu |
| Can estate agents cold call? TPS, PECR and valuation calls | can-estate-agents-cold-call | [ac "agency cold calling"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=agency+cold+calling) · [ICO](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/telephone-marketing/) | power dialer |

### 10. Auto repair shops

Added: strong community discussion and a simple setup. Sibling rows: see voice-agents #71.

**The pains:**

- Mechanics under a car can't answer, and a 320-point Hacker News thread about an AI receptionist for a mechanic
  shop is owners and drivers arguing whether callers hang up on a bot.
  [Hacker News](https://news.ycombinator.com/item?id=47487536)
- "Is my car ready?" and "how much for brakes?" calls interrupt the work.
  [ac "auto repair answering service"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=auto+repair+answering+service)
- Shops search for the fix by name, in the US and the UK:
  [ac "ai receptionist for a"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+a) ·
  [ac "ai receptionist for g"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+g)

**How CallForges helps:**

- AI agent: answers hours, services and price ranges from your docs, takes the vehicle and the problem,
  schedules a callback; it says up front that it is automated, which the HN thread asks for. (Facts from:
  `kb:ai_agent`)
- Workflows: ring the front desk, then the agent or voicemail; Send SMS after a missed call. (Facts from:
  `kb:help_build_a_call_workflow`, `kb:app_workflow_texts`)
- SMS: "your car is ready" texts one by one, saved replies. (Facts from: `kb:app_messaging`)
- Outbound AI service reminders: `ask: outbound voice agent`.

**Rules:**

- Texts and AI-voice reminders: [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200) ·
  [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)
- Recording consent: [Cal. Penal Code 632](https://www.law.cornell.edu/regulations/california/Cal-Penal-Code-632)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| AI receptionist for auto repair shops (see voice-agents #71) | ai-receptionist-for-auto-repair | [ac "ai receptionist for auto repair"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+auto+repair) · [HN](https://news.ycombinator.com/item?id=47487536) | AI receptionist |
| Auto repair shop missed calls: a phone setup for a two-bay shop | auto-repair-shop-missed-calls | [ac "auto repair answering service"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=auto+repair+answering+service) | missed calls |
| Will customers hang up on an AI receptionist? What the mechanics said | will-customers-hang-up-on-ai-receptionist | [HN](https://news.ycombinator.com/item?id=47487536) | AI receptionist |
| AI receptionist for garages (UK) | ai-receptionist-for-garages | [ac "ai receptionist for g"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+g) | AI receptionist |
| Texting customers when the car is ready | auto-repair-texting-customers | [HN](https://news.ycombinator.com/item?id=47487536) (demand indirect) | business texting |

### 11. Funeral homes

Added: autocomplete demand is strong in the US and the UK, and the first-call problem fits workflows exactly.

**The pains:**

- First calls (a death has occurred) come at any hour and must reach the on-call director:
  [ac "answering service for funeral homes"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=answering+service+for+funeral+homes) ·
  [ac gb "answering service for"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en-GB&gl=gb&q=answering+service+for)
- Families and shoppers call for prices, and the FTC requires funeral homes to answer price questions by phone.
  [16 CFR 453.2](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-453/section-453.2)
- Directors look at AI options already:
  [ac "funeral home answering service"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=funeral+home+answering+service)

**How CallForges helps:**

- Workflows: after hours, Forward to the on-call director's mobile first; if unanswered, the agent or voicemail
  takes the caller's name and number, the name of the deceased and where they are. (Facts from:
  `kb:help_build_a_call_workflow`)
- AI agent: answers price and service questions from the General Price List you upload, any hour, and hands to a
  person whenever asked. Do not put it first on a first call. (Facts from: `kb:ai_agent`)
- Recording and transcripts: a record of first-call details for the director. (Facts from: `kb:pricing`)

**Rules:**

- FTC Funeral Rule: give accurate price information to anyone who asks by phone.
  [16 CFR 453.2](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-453/section-453.2)
- Recording consent: [18 U.S.C. 2511](https://www.law.cornell.edu/uscode/text/18/2511) ·
  [Cal. Penal Code 632](https://www.law.cornell.edu/regulations/california/Cal-Penal-Code-632)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| Answering service for funeral homes: first calls at 3am | answering-service-for-funeral-homes | [ac "answering service for funeral homes"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=answering+service+for+funeral+homes) | phone menu |
| Funeral Rule price questions by phone: what to tell callers | funeral-rule-phone-price-questions | [16 CFR 453.2](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-453/section-453.2) | AI receptionist |
| AI answering for funeral homes: when a person must take the call | ai-answering-for-funeral-homes | [ac "funeral home answering service"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=funeral+home+answering+service) | AI receptionist |
| On-call forwarding for a small funeral home | funeral-home-on-call-forwarding | [ac "answering service for funeral homes"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=answering+service+for+funeral+homes) | phone menu |

### 12. Mortgage brokers and loan officers

Sibling rows: see voice-agents #77; see calling #69; see numbers-and-trust #64; see sms #69.

**The pains:**

- Speed of response is the best predictor of winning an internet lead (a 130-lender study); trade press says the
  same. [National Mortgage Professional](https://nationalmortgageprofessional.com/blog/speed-response-mortgage-leads-130-lender-study) ·
  [National Mortgage News](https://www.nationalmortgagenews.com/opinion/what-ive-learned-about-online-mortgage-leads)
- The trigger-leads ban changed how LOs reach applicants.
  [NAMB](https://www.namb.org/understanding-the-trigger-leads-ban)
- Borrowers are flooded with calls after applying, so a careful first call stands out.
  [LinkedIn](https://www.linkedin.com/pulse/how-stop-receiving-many-spam-calls-after-applying-mortgage-marroni-4wfqe)
- LOs prospect past clients and realtor partners by phone.
  [Scotsman Guide](https://www.scotsmanguide.com/residential/staring-at-the-phone-wont-win-you-any-business)

**How CallForges helps:**

- AI agent outbound: calls a new web lead back in a minute, asks the first questions, schedules the LO's
  callback; inbound after hours. (Facts from: `ask: outbound voice agent`; `kb:ai_agent`)
- Dialer: power dialer for past clients and realtor partners, voicemail drop. (Facts from: `kb:auto_dialer`)
- SMS: one-to-one follow-ups and scheduled texts. (Facts from: `kb:app_messaging`)
- Recording and CRM: AI summary to HubSpot, Pipedrive or HighLevel; loan software is not connected. (Facts from:
  `kb:crm_hubspot`)
- Caller ID registration so the call is not labelled spam. (Facts from: `kb:app_compliance`)

**Rules:**

- TCPA and DNC: [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200);
  AI-voice calls: [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)
- Trigger leads: [NAMB on the ban](https://www.namb.org/understanding-the-trigger-leads-ban)
- Customer information safeguards (GLBA): [16 CFR 314](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-314)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| Mortgage speed to lead: calling internet leads in minutes | mortgage-speed-to-lead | [National Mortgage Professional](https://nationalmortgageprofessional.com/blog/speed-response-mortgage-leads-130-lender-study) · [ac "mortgage leads"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=mortgage+leads) | AI voice agent |
| Mortgage dialer: calling past clients and realtor partners | mortgage-dialer | [ac "mortgage dialer"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=mortgage+dialer) | power dialer |
| Mortgage protection leads: a dialer and texting setup | mortgage-protection-dialer | [ac "mortgage dialer"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=mortgage+dialer) | parallel dialer |
| After-hours mortgage leads: who calls them back at 9pm | after-hours-mortgage-leads | [National Mortgage News](https://www.nationalmortgagenews.com/opinion/what-ive-learned-about-online-mortgage-leads) | AI voice agent |

### 13. Med spas and salons

Med spas, hair, nail and beauty salons, massage, barbers, dog groomers. Sibling rows: see voice-agents #72; see
workflows #78.

**The pains:**

- Stylists and injectors are with a client for an hour at a time and can't pick up:
  [ac "ai receptionist for salons"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+salons) ·
  [ac "ai receptionist for a"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+a) ("massage and spas")
- No-shows: "salon no show policy" and "no show fee" fill the suggestions.
  [ac "salon no show"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=salon+no+show)
- Med spas pay for ad leads and need to call them fast:
  [ac "med spa leads"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=med+spa+leads)
- A med spa that bills insurance electronically is a HIPAA covered entity; many cash-only ones are not, and few
  owners know which they are.
  [45 CFR 160.103](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-160/subpart-A/section-160.103)

**How CallForges helps:**

- AI agent: answers services, prices and prep questions, takes the booking request and schedules a callback; it
  does not book into the salon's booking system. (Facts from: `kb:ai_agent`)
- Workflows: ring the front desk, then the agent; Send SMS after a missed call with your booking link. (Facts
  from: `kb:app_workflow_texts`)
- SMS: confirmation and reminder texts, one per client or scheduled; out-of-hours reply. (Facts from:
  `kb:app_messaging`)
- Dialer: a power-dialer block for med spa ad leads. (Facts from: `kb:auto_dialer`)
- Outbound AI reminders: `ask: outbound voice agent`.

**Rules:**

- HIPAA applies only if the business is a covered entity: [45 CFR 160.103](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-160/subpart-A/section-160.103);
  a covered med spa needs a BAA from any vendor that stores recordings or transcripts:
  [HHS cloud guidance](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html)
- Texts and AI-voice reminders: [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200) ·
  [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)
- Recording consent: [Cal. Penal Code 632](https://www.law.cornell.edu/regulations/california/Cal-Penal-Code-632)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| Salon no-show policy: reminder texts and calls that work | salon-no-show-policy-reminders | [ac "salon no show"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=salon+no+show) | business texting |
| Missed calls at the salon: a phone setup for stylists with clients | salon-missed-calls | [ac "ai receptionist for salons"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+salons) | missed calls |
| Med spa lead follow-up: calling ad leads in minutes | med-spa-lead-follow-up | [ac "med spa leads"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=med+spa+leads) | power dialer |
| Is a med spa covered by HIPAA? Calls, texts and recordings | med-spa-hipaa-calls | [45 CFR 160.103](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-160/subpart-A/section-160.103) | call recording |
| AI receptionist for dog groomers | ai-receptionist-dog-grooming | [ac "ai receptionist for d"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+d) | AI receptionist |

### 14. Auto dealerships

Sibling rows: see numbers-and-trust #76; see sms #63.

**The pains:**

- Dealers miss calls: in one study of 8 million calls, 19% went unanswered or were abandoned.
  [WardsAuto](https://wardsauto.com/dealers/dealerships-flub-lots-of-phone-calls) ·
  [Auto Dealer Today](https://www.autodealertodaymagazine.com/news/dealers-failing-to-capture-customers-over-the-phone-marchex-reports)
- Service departments are worse, with phone leads lost by the thousand.
  [CBT News](https://www.cbtnews.com/dealership-losing-thousands-phone-leads/)
- BDCs and "AI BDC" are searched heavily:
  [ac "ai bdc"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+bdc) ·
  [ac "car dealership bdc"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=car+dealership+bdc)
- Outgoing click-to-call is marked as spam.
  [DealerRefresh](https://forum.dealerrefresh.com/threads/outgoing-calls-using-click-to-call-are-being-marked-as-spam.7436/latest)

**How CallForges helps:**

- AI agent: service-department overflow and after hours, answers hours and recall questions from your docs,
  takes the service request, schedules a callback (no scheduler integration). (Facts from: `kb:ai_agent`)
- Dialer: BDC power and parallel sessions for internet leads and service reminders. (Facts from:
  `kb:auto_dialer`)
- Workflows: sales, service and parts menu; queue with callbacks (Business); round robin. (Facts from:
  `kb:help_build_a_call_workflow`, `kb:pricing`)
- Caller ID: SHAKEN/STIR, caller ID name and branded calling for the spam label. (Facts from: `kb:app_compliance`)
- Fit note: franchised dealers run on dealer CRMs we do not connect to; independents on HubSpot or HighLevel fit.

**Rules:**

- Dealers are financial institutions under the FTC Safeguards Rule: [16 CFR 314](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-314)
- Texts and AI calls: [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200) ·
  [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)
- Recording consent: [Cal. Penal Code 632](https://www.law.cornell.edu/regulations/california/Cal-Penal-Code-632)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| AI receptionist for car dealerships: the service line after hours | ai-receptionist-car-dealerships | [ac "ai receptionist for c"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+c) · [CBT News](https://www.cbtnews.com/dealership-losing-thousands-phone-leads/) | AI receptionist |
| AI BDC for dealerships: what it can and can't do | ai-bdc-for-dealerships | [ac "ai bdc"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+bdc) | AI voice agent |
| Car dealership phone system: sales, service and parts routing | car-dealership-phone-system | [ac "car dealership phone system"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=car+dealership+phone+system) · [WardsAuto](https://wardsauto.com/dealers/dealerships-flub-lots-of-phone-calls) | phone menu |
| Dealership BDC dialer: calling internet leads in minutes | dealership-bdc-dialer | [ac "car dealership bdc"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=car+dealership+bdc) | power dialer |

### 15. Recruiting and staffing

Sibling rows: see voice-agents #76; see calling #71; see numbers-and-trust #78; see sms #64.

**The pains:**

- Getting candidates on the phone is hard; recruiters write guides on texting first.
  [LinkedIn: a recruiter's guide to texting](https://www.linkedin.com/pulse/recruiters-guide-text-messaging-candidates-christian-de-pape)
- High-volume screening calls are moving to voice agents.
  [3Sixty Insights](https://3sixtyinsights.com/moving-beyond-ai-hype-how-voice-screening-agents-are-reshaping-talent-acquisition/) ·
  [ac "ai phone screening"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+phone+screening)
- Agencies cold call hiring managers for business:
  [ac "agency cold calling"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=agency+cold+calling) ("staffing agency cold calling script")
- Recruiters are unsure whether DNC rules apply to them; a court said recruiting calls are not telephone
  solicitations. [National Law Review](https://natlawreview.com/article/defense-win-court-dismisses-tcpa-class-action-recruitment-calls-are-not-telephone)

**How CallForges helps:**

- Dialer: parallel mode for candidate lists, power mode for client development, voicemail drop. (Facts from:
  `kb:auto_dialer`)
- SMS: one-to-one candidate texts, scheduled texts, saved replies, round robin inbox. No bulk. (Facts from:
  `kb:app_messaging`)
- AI agent: answers the job line (pay, shifts, locations from your docs), takes the candidate's details,
  schedules a callback. It must not decide on candidates: the Terms bar decisions with significant effects
  without human review. (Facts from: `kb:ai_agent`, `kb:terms`)
- Recording and CRM: transcripts as screening notes; HubSpot, Pipedrive or Attio. No ATS integration. (Facts
  from: `kb:pricing`, `kb:crm_hubspot`)

**Rules:**

- TCPA: [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200);
  AI-voice calls: [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)
- Selection procedures and adverse impact: [29 CFR 1607](https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XIV/part-1607)
- EU: AI used in hiring is high-risk, and candidates must be told they talk to an AI.
  [EU AI Act Art. 50](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| Recruiter dialer: calling candidates without burning your number | recruiter-dialer | [National Law Review](https://natlawreview.com/article/defense-win-court-dismisses-tcpa-class-action-recruitment-calls-are-not-telephone) (demand low: "dialer for recruiters" has no suggestions) | parallel dialer |
| Staffing agency cold calling script for hiring managers | staffing-agency-cold-calling-script | [ac "agency cold calling"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=agency+cold+calling) | power dialer |
| AI phone screening for recruiters: what to automate and what not to | ai-phone-screening-recruiters | [ac "ai phone screening"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+phone+screening) · [3Sixty Insights](https://3sixtyinsights.com/moving-beyond-ai-hype-how-voice-screening-agents-are-reshaping-talent-acquisition/) | AI voice agent |
| AI calling agent for recruitment: the rules in the US and EU | ai-calling-agent-recruitment-rules | [ac "ai calling agent for"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+calling+agent+for) · [EU AI Act Art. 50](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50) | AI voice agent |
| Staffing agency job line: answering candidate calls after hours | staffing-job-line-after-hours | [3Sixty Insights](https://3sixtyinsights.com/moving-beyond-ai-hype-how-voice-screening-agents-are-reshaping-talent-acquisition/) (demand low) | AI receptionist |

### 16. Dental practices

Demand is among the highest of any market, but a US dental office is a HIPAA covered entity and any vendor that
stores its call recordings, voicemails or transcripts is a business associate. CallForges states no BAA, so US
posts teach the problem and what to check, and sell only outside the US for now. Sibling rows: see voice-agents
#62; see workflows #61, #62; see sms #62, #68.

**The pains:**

- Practices miss 30% to 38% of calls during business hours, many of them new patients.
  [Dental Economics](https://www.dentaleconomics.com/practice/article/55385634/the-economics-of-missed-calls-quantifying-revenue-loss-in-dental-practices) ·
  [Dentaltown](https://www.dentaltown.com/blog/post/24030/the-average-dental-practice-still-misses-30-new-patient-calls-equaling-3000-8000-monthly)
- One missed new-patient call is worth thousands over the patient's life.
  [Dentaltown: the $2,500 phone call](https://www.dentaltown.com/magazine/article/9945/the-2500-phone-call-most-practices-miss)
- The front desk juggles patients in the chair and the phone.
  [Dentaltown: front desk communication](https://www.dentaltown.com/channel/post/22858/the-hidden-cost-of-poor-front-desk-communication)
- No-shows: [ac "dental no show"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=dental+no+show)
- UK and Irish practices search too:
  [ac gb "ai receptionist uk"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en-GB&gl=gb&q=ai+receptionist+uk) ("ai dental receptionist uk")

**How CallForges helps (UK and Ireland now; US only once a BAA exists):**

- AI agent: after hours, hours, location, emergency guidance from your docs, a callback for the morning.
  (Facts from: `kb:ai_agent`)
- Workflows: ring the front desk, queue, overflow to the agent; Time and Date rules for holidays. (Facts from:
  `kb:help_build_a_call_workflow`)
- SMS: reminders one by one or scheduled; out-of-hours reply. (Facts from: `kb:app_messaging`)
- Recording and transcripts are health data: a Data Processing Addendum is available on request. (Facts from:
  `kb:terms`)

**Rules:**

- A vendor that stores PHI (recordings, transcripts) is a business associate, even if encrypted, and needs a BAA.
  [HHS: business associates](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html) ·
  [HHS: cloud computing](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html)
- Appointment reminders are allowed without authorization:
  [HHS FAQ 286](https://www.hhs.gov/hipaa/for-professionals/faq/286/are-appointment-reminders-allowed-under-hipaa-without-authorization/index.html);
  leaving messages: [HHS FAQ 198](https://www.hhs.gov/hipaa/for-professionals/faq/198/may-health-care-providers-leave-messages/index.html)
- UK: health data is special category data. [UK GDPR Art. 9](https://www.legislation.gov.uk/eur/2016/679/article/9)
- Emergency care guidance: [ADA](https://www.ada.org/resources/practice/practice-management/emergency-treatment)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| Dental practice missed calls: what 30% costs and how to cut it | dental-practice-missed-calls | [Dental Economics](https://www.dentaleconomics.com/practice/article/55385634/the-economics-of-missed-calls-quantifying-revenue-loss-in-dental-practices) · [ac "dental phone system"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=dental+phone+system) | missed calls |
| Does an AI receptionist need a BAA? HIPAA for dental phones | ai-receptionist-baa-dental | [ac "hipaa compliant ai receptionist"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=hipaa+compliant+ai+receptionist) · [HHS cloud guidance](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html) | AI receptionist |
| AI dental receptionist in the UK and Ireland | ai-dental-receptionist-uk | [ac gb "ai receptionist uk"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en-GB&gl=gb&q=ai+receptionist+uk) · [ac "ai receptionist for dental"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+dental) | AI receptionist |
| Dental no-show policy: reminder calls and texts | dental-no-show-policy | [ac "dental no show"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=dental+no+show) · [HHS FAQ 286](https://www.hhs.gov/hipaa/for-professionals/faq/286/are-appointment-reminders-allowed-under-hipaa-without-authorization/index.html) | business texting |

### 17. Accounting and CPA firms

**The pains:**

- Tax season brings a surge of calls about documents and status while partners are on deadlines; the AICPA's
  journal runs survival tips every year.
  [Journal of Accountancy: surviving busy season](https://www.journalofaccountancy.com/newsletters/2020/feb/tips-surviving-busy-season.html) ·
  [Journal of Accountancy: what CPAs learned](https://www.journalofaccountancy.com/newsletters/2019/apr/what-cpas-learned-difficult-busy-seasons.html)
- Firms search for an AI answer:
  [ac "ai receptionist for accountants"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+accountants)
- Taxpayer data on calls must be protected.
  [IRS Publication 4557](https://www.irs.gov/pub/irs-pdf/p4557.pdf)

**How CallForges helps:**

- AI agent: answers "what documents do I need", deadlines, fees and portal questions from your docs, takes a
  message, schedules a callback. (Facts from: `kb:ai_agent`)
- Workflows: IVR "1 tax prep, 2 bookkeeping, 3 billing", Date rules for extended deadline hours, Queue with
  callbacks (Business). (Facts from: `kb:help_build_a_call_workflow`, `kb:pricing`)
- SMS: "we still need your 1099" texts, scheduled. (Facts from: `kb:app_messaging`)
- Dialer: a power-dialer block for extension and onboarding calls. (Facts from: `kb:auto_dialer`)

**Rules:**

- Tax preparers are financial institutions under the FTC Safeguards Rule: [16 CFR 314](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-314)
- IRS guidance on safeguarding taxpayer data: [Publication 4557](https://www.irs.gov/pub/irs-pdf/p4557.pdf)
- Texts: [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| AI receptionist for accounting firms: tax season calls | ai-receptionist-for-accounting-firms | [ac "ai receptionist for accountants"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+accountants) | AI receptionist |
| Tax season phone plan for a CPA firm | cpa-tax-season-phone-plan | [Journal of Accountancy](https://www.journalofaccountancy.com/newsletters/2020/feb/tips-surviving-busy-season.html) | phone menu |
| Can an AI agent talk to clients about their taxes? The Safeguards Rule and Pub 4557 | ai-agent-tax-client-data | [IRS Publication 4557](https://www.irs.gov/pub/irs-pdf/p4557.pdf) | AI receptionist |
| Texting clients for missing tax documents | texting-clients-tax-documents | [Journal of Accountancy](https://www.journalofaccountancy.com/newsletters/2019/apr/what-cpas-learned-difficult-busy-seasons.html) (demand low) | business texting |

### 18. Logistics and trucking dispatch

Sibling rows: see calling #78.

**The pains:**

- Dispatch services sign owner-operators by cold calling, 50 to 100 calls a day in training communities.
  [Skool: how to cold call carriers](https://www.skool.com/gill22/how-to-cold-call-carriers-effectively-what-actually-works)
- Small carriers and brokers prospect shippers by phone and e-mail.
  [FreightWaves](https://www.freightwaves.com/news/crafting-a-shipper-outreach-strategy-that-works)
- "Dialer for truck dispatching" is the top "dialer for t" suggestion:
  [ac "dialer for t"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=dialer+for+t)
- Drivers call at night with load and breakdown problems:
  [ac "dispatch answering service"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=dispatch+answering+service)

**How CallForges helps:**

- Dialer: power and parallel sessions for carrier and shipper lists, local numbers, voicemail drop. (Facts from:
  `kb:auto_dialer`)
- AI agent: an after-hours line that takes the load number and the issue and transfers urgent calls to the
  on-call dispatcher. (Facts from: `kb:ai_agent`)
- Workflows: Forward to the on-call dispatcher; Queue for busy hours. (Facts from: `kb:help_build_a_call_workflow`)
- SMS: one-to-one texts with drivers. (Facts from: `kb:app_messaging`)
- CRM: HubSpot or Pipedrive logging. (Facts from: `kb:crm_hubspot`, `kb:crm_pipedrive`)

**Rules:**

- Owner-operators' numbers are often cell phones: TCPA applies. [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200)
- AI-voice calls: [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)
- Recording consent: [18 U.S.C. 2511](https://www.law.cornell.edu/uscode/text/18/2511)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| Dialer for truck dispatching: calling owner-operators | dialer-for-truck-dispatching | [ac "dialer for truck dispatching"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=dialer+for+truck+dispatching) · [Skool](https://www.skool.com/gill22/how-to-cold-call-carriers-effectively-what-actually-works) | power dialer |
| After-hours dispatch line: driver calls at night | after-hours-dispatch-line | [ac "dispatch answering service"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=dispatch+answering+service) | phone menu |
| AI voice agent for logistics: what it can answer | ai-voice-agent-for-logistics | [ac "ai voice agent for l"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+voice+agent+for+l) | AI voice agent |
| How many calls should a truck dispatcher make a day? | truck-dispatcher-calls-per-day | [Skool](https://www.skool.com/gill22/how-to-cold-call-carriers-effectively-what-actually-works) · [FreightWaves](https://www.freightwaves.com/news/crafting-a-shipper-outreach-strategy-that-works) | power dialer |

### 19. Marketing agencies

Sibling rows: see voice-agents #75; see calling #74, #79; see workflows #79; see sms #71.

**The pains:**

- Agencies want AI receptionists and missed-call text back to run for local clients:
  [ac "ai receptionist for agencies"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+agencies) ·
  [ac "white label ai receptionist"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=white+label+ai+receptionist)
- HighLevel users ask for a power dialer:
  [HighLevel Ideas](https://ideas.gohighlevel.com/lcphonesystem/p/ability-to-choose-power-dialer-phone-numbers) ·
  [ac "dialer for g"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=dialer+for+g)
- Texting needs 10DLC registration for each client.
  [YouTube: A2P for agencies](https://www.youtube.com/watch?v=0TQk1lnXcAE)
- An agency calling for clients shares the legal risk.
  [Arizona AG](https://www.azag.gov/press-release/attorney-general-mayes-sues-residential-solar-installation-company-and-telemarketer)

**How CallForges helps:**

- CRM: one CallForges workspace per client, each connected to that client's HighLevel sub-account; outcome tags
  start HighLevel workflows. (Facts from: `kb:crm_highlevel`)
- Dialer: power and parallel sessions for appointment setting. (Facts from: `kb:auto_dialer`)
- AI agent and workflows: an after-hours agent and a missed-call text per client line. (Facts from:
  `kb:ai_agent`, `kb:app_workflow_texts`)
- Fit note: no white label and no agency billing; posts say so.

**Rules:**

- TCPA and the TSR reach the business that has calls made for it: [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200) ·
  [16 CFR 310.3](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-310/section-310.3)
- AI-voice calls: [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| HighLevel power dialer: call from CallForges, log to HighLevel (see calling #79) | highlevel-power-dialer | [ac "power dialer for"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=power+dialer+for) ("for ghl", "for go high level") | power dialer |
| Missed call text back for HighLevel agencies | missed-call-text-back-highlevel | [ac "missed call text back"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=missed+call+text+back) ("ghl") | business texting |
| Running an AI receptionist for clients without white label | ai-receptionist-for-agency-clients | [ac "ai receptionist for agencies"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+agencies) | AI receptionist |
| Appointment setting agency: dialer setup and who's liable | appointment-setting-agency-dialer | [ac "appointment setting agency"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=appointment+setting+agency) · [Arizona AG](https://www.azag.gov/press-release/attorney-general-mayes-sues-residential-solar-installation-company-and-telemarketer) | power dialer |

### 20. Solar

Ranks low on fit: the dialer works for appointment setters, but solar is among the most-sued TCPA industries, and
the app does not check the national DNC registry. Sibling rows: see voice-agents #78; see calling #70; see
numbers-and-trust #69, #74.

**The pains:**

- Setters dial bought leads all day:
  [ac "solar appointment setting"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=solar+appointment+setting) ·
  [ac "solar leads"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=solar+leads)
- Installers and their telemarketers are sued and settle large class actions.
  [Arizona AG](https://www.azag.gov/press-release/attorney-general-mayes-sues-residential-solar-installation-company-and-telemarketer) ·
  [ClassAction.org: $30M settlement](https://www.classaction.org/news/up-to-30m-momentum-solar-settlement-ends-class-action-lawsuits-over-alleged-robocalls)
- Lead sellers' consent records don't hold up.
  [TCPAWorld](https://tcpaworld.com/2024/09/12/govern-yourself-accordingly-solar-lead-companys-tough-guy-routine-appears-to-backfire-as-it-is-sued-in-tcpa-class-action/)

**How CallForges helps:**

- Dialer: power and parallel sessions for consented leads, calling windows, retry rules, voicemail drop. (Facts
  from: `kb:auto_dialer`)
- AI agent: answers ad callers at night and schedules a callback; outbound callbacks only with written consent.
  (Facts from: `kb:ai_agent`; `ask: outbound voice agent`)
- Recording: keeps the call where the homeowner agreed to the appointment. (Facts from: `kb:pricing`)
- Caller ID registration. (Facts from: `kb:app_compliance`)

**Rules:**

- [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200) ·
  [16 CFR 310.4](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-310/section-310.4) ·
  [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf) ·
  [Fla. Stat. 501.059](https://www.flsenate.gov/Laws/Statutes/2024/501.059)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| Solar leads: calling them in minutes and keeping proof of consent | solar-leads-consent-calling | [ac "solar leads"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=solar+leads) · [ClassAction.org](https://www.classaction.org/news/up-to-30m-momentum-solar-settlement-ends-class-action-lawsuits-over-alleged-robocalls) | power dialer |
| Solar appointment setting call center: dialer settings | solar-call-center-dialer-settings | [ac "solar appointment setting"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=solar+appointment+setting) | parallel dialer |
| Recording solar sales calls: what to keep and for how long | recording-solar-sales-calls | [TCPAWorld](https://tcpaworld.com/2024/09/12/govern-yourself-accordingly-solar-lead-companys-tough-guy-routine-appears-to-backfire-as-it-is-sued-in-tcpa-class-action/) | call recording |
| AI receptionist for solar companies: answering ad callers at night | ai-receptionist-solar | [ac "solar appointment setting"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=solar+appointment+setting) (demand low) | AI receptionist |

### 21. Medical clinics and private practices

Includes chiropractors and physical therapists. Demand is the highest of all ("ai receptionist for medical
office" is the second suggestion for "ai receptionist for"), and searchers add "HIPAA compliant" themselves. Fit
is low in the US: patient calls, voicemails and transcripts are PHI, and CallForges states no BAA. UK private
clinics fit; NHS GP surgeries do not (see Dropped). Sibling rows: see voice-agents #63; see workflows #63, #69;
see numbers-and-trust #77; see sms #62.

**The pains:**

- Phone bottlenecks at practices are a standing topic in practice-management press.
  [Physicians Practice: unclog telephone bottlenecks](https://www.physicianspractice.com/view/unclog-telephone-bottlenecks) ·
  [Physicians Practice: phone reports](https://www.physicianspractice.com/view/phone-reports)
- After-hours coverage: [ac "after hours answering service for"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=after+hours+answering+service+for)
- Searchers ask for HIPAA compliance by name:
  [ac "hipaa compliant answering service"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=hipaa+compliant+answering+service) ·
  [ac "hipaa compliant texting"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=hipaa+compliant+texting)
- No-shows: [ac "patient no show"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=patient+no+show)

**How CallForges helps (UK private clinics now; US only once a BAA exists):**

- AI agent: hours, directions, services and prices from your docs; a callback for anything clinical. (Facts from:
  `kb:ai_agent`)
- Workflows: IVR, queue, after-hours forward to the on-call clinician. (Facts from: `kb:help_build_a_call_workflow`)
- SMS: reminders one by one or scheduled. (Facts from: `kb:app_messaging`)

**Rules:**

- [HHS: business associates](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html) ·
  [HHS: cloud computing](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html) ·
  [HHS FAQ 286: reminders](https://www.hhs.gov/hipaa/for-professionals/faq/286/are-appointment-reminders-allowed-under-hipaa-without-authorization/index.html)
- The TCPA's healthcare exemption is narrow: [National Law Review](https://natlawreview.com/article/narrow-tcpa-healthcare-exemption-upheld-dc-circuit)
- UK: [UK GDPR Art. 9](https://www.legislation.gov.uk/eur/2016/679/article/9)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| HIPAA-compliant AI receptionist: what the BAA must cover | hipaa-compliant-ai-receptionist | [ac "hipaa compliant ai receptionist"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=hipaa+compliant+ai+receptionist) · [HHS cloud guidance](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html) | AI receptionist |
| Patient no-show reminders: what HIPAA allows | patient-no-show-reminders | [ac "patient no show"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=patient+no+show) · [HHS FAQ 286](https://www.hhs.gov/hipaa/for-professionals/faq/286/are-appointment-reminders-allowed-under-hipaa-without-authorization/index.html) | business texting |
| AI receptionist for a private clinic in the UK | ai-receptionist-private-clinic-uk | [ac gb "ai receptionist for"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en-GB&gl=gb&q=ai+receptionist+for) | AI receptionist |
| AI receptionist for chiropractors: what to check first | ai-receptionist-for-chiropractors | [ac "ai receptionist for chiropractic"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+chiropractic) | AI receptionist |

### 22. Nonprofits and fundraising

Sibling rows: see calling #67 (political phone banking), #77.

**The pains:**

- Thank-you calls: a randomized study of thank-you calls to donors found no effect on later giving, so the
  calls have to be worth the donor's time.
  [USC Schaeffer Center](https://schaeffer.usc.edu/?p=6715) ·
  [ac "donor calls"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=donor+calls)
- Donors complain about repeated calls:
  [ac "nonprofit calling"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=nonprofit+calling) ("nonprofit keeps calling me")
- Universities run phonathons for alumni giving:
  [ac "phonathon"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=phonathon)

**How CallForges helps:**

- Dialer: a power-dialer block for thank-you and renewal calls with voicemail drop. (Facts from: `kb:auto_dialer`)
- Recording and CRM: notes and outcomes into HubSpot, Pipedrive or Attio. (Facts from: `kb:crm_hubspot`)
- AI agent: the donor line after hours (receipts, event details) from your docs. (Facts from: `kb:ai_agent`)
- Fit note: per-seat plans suit staff callers, not a room of volunteers.

**Rules:**

- A tax-exempt nonprofit's own calls fall outside the TCPA's "telephone solicitation" (so outside DNC), but
  autodialed and AI-voice calls to cell phones still need consent:
  [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200) ·
  [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)
- For-profit fundraisers calling for a charity follow the TSR: [16 CFR 310.4](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-310/section-310.4)
- UK charities' marketing calls follow PECR: [ICO](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/telephone-marketing/)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| Donor thank-you calls: what the research says | donor-thank-you-calls-research | [ac "donor calls"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=donor+calls) · [USC Schaeffer](https://schaeffer.usc.edu/?p=6715) | power dialer |
| Can nonprofits call numbers on the Do Not Call list? | nonprofit-do-not-call-rules | [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200) | power dialer |
| Phonathon software for alumni calling | phonathon-software | [ac "phonathon"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=phonathon) | power dialer |
| A donor line that answers at night | nonprofit-donor-line-after-hours | [ac "answering service for n"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=answering+service+for+n) ("nonprofits") | AI receptionist |

### 23. Higher education admissions

**The pains:**

- 44% of prospective-student inquiries got no response in a 2025 secret shop. [UPCEA](https://upcea.edu/secret-shopper-2025/)
- Admissions and enrollment call centers are a role people search for:
  [ac "admissions call center"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=admissions+call+center)
- International applicants call across time zones and languages:
  [ac "ai voice agent for e"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+voice+agent+for+e) ("education")

**How CallForges helps:**

- AI agent: answers programs, deadlines and fees from your docs in 30+ languages, takes the applicant's details,
  schedules a counselor callback. Outbound: calls inquiries back. (Facts from: `kb:ai_agent`;
  `ask: outbound voice agent`)
- Dialer: counselors work inquiry lists inside each contact's local calling window. (Facts from:
  `kb:auto_dialer`)
- Workflows: routing by country or language (Business). (Facts from: `kb:pricing`, `kb:overview`)
- Fit note: career schools, bootcamps and online programs fit; universities buy enterprise CRMs through procurement.

**Rules:**

- FERPA protects education records of students; records of applicants who never enroll are generally not
  education records. [34 CFR 99.3](https://www.ecfr.gov/current/title-34/subtitle-A/part-99/subpart-A/section-99.3) ·
  [studentprivacy.ed.gov](https://studentprivacy.ed.gov/ferpa) ·
  [AACRAO: Ask the FERPA Professor](https://www.aacrao.org/news/ask-the-ferpa-professor-17/)
- Schools' calls and texts follow the TCPA and the AI-voice ruling: [47 CFR 64.1200](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200) ·
  [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)
- EU applicants: [EU AI Act Art. 50](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| Admissions inquiry follow-up: calling prospective students in minutes | admissions-inquiry-follow-up | [UPCEA](https://upcea.edu/secret-shopper-2025/) | power dialer |
| AI voice agent for admissions: international applicants at night | ai-voice-agent-for-admissions | [ac "ai voice agent for e"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+voice+agent+for+e) | AI receptionist |
| Does FERPA cover applicants? Calls, recordings and AI notes | ferpa-applicants-calls | [34 CFR 99.3](https://www.ecfr.gov/current/title-34/subtitle-A/part-99/subpart-A/section-99.3) · [AACRAO](https://www.aacrao.org/news/ask-the-ferpa-professor-17/) | call recording |
| Enrollment call center setup for career schools | enrollment-call-center-setup | [ac "admissions call center"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=admissions+call+center) | power dialer |

### 24. Debt collection

Ranks low on fit: Reg F caps calls per debt (7 in 7 days, and none for 7 days after a conversation), requires
disclosures and opt-outs per channel, and limits hours. CallForges has calling windows and retry rules, but no
per-debt counter, so a collector would have to enforce Reg F outside the app. Write rules-first posts only.
Sibling rows: see calling #66.

**The pains:**

- People ask the rules more than the tools:
  [ac "fdcpa calls"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=fdcpa+calls) ·
  [ac "collections dialer"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=collections+dialer)
- AI voice agents for collections are a new search:
  [ac "ai voice agent for d"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+voice+agent+for+d)
- Consumers search for collectors who call every day:
  [ac "debt collector calls"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=debt+collector+calls)

**How CallForges helps (limited):**

- Calling windows by local time, recording on every call, retry rules (not per-debt caps). (Facts from:
  `kb:auto_dialer`)
- AI agent: an inbound line that answers office hours and payment-address questions from your docs. (Facts from:
  `kb:ai_agent`)

**Rules:**

- Call frequency: [12 CFR 1006.14](https://www.ecfr.gov/current/title-12/chapter-X/part-1006/subpart-B/section-1006.14);
  time and place: [12 CFR 1006.6](https://www.ecfr.gov/current/title-12/chapter-X/part-1006/subpart-B/section-1006.6);
  disclosures: [12 CFR 1006.18](https://www.ecfr.gov/current/title-12/chapter-X/part-1006/subpart-B/section-1006.18)
- AI-voice calls: [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)

**Candidate D posts:**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| Reg F 7-in-7: what a collections dialer must track | reg-f-7-in-7-dialer | [ac "fdcpa calls"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=fdcpa+calls) · [12 CFR 1006.14](https://www.ecfr.gov/current/title-12/chapter-X/part-1006/subpart-B/section-1006.14) | power dialer |
| Can AI voice agents make collection calls? | ai-voice-agents-debt-collection-rules | [ac "ai voice agent for d"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+voice+agent+for+d) · [FCC-24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf) | AI voice agent |
| Recording collection calls: consent and what to keep | recording-collection-calls | [12 CFR 1006.18](https://www.ecfr.gov/current/title-12/chapter-X/part-1006/subpart-B/section-1006.18) · [Cal. Penal Code 632](https://www.law.cornell.edu/regulations/california/Cal-Penal-Code-632) | call recording |
| Collection agency software for small agencies: a buyer's checklist | collection-agency-software-checklist | [ac "collection agency software"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=collection+agency+software) | power dialer |

### 25. Hospitals

Ranks last: hospitals buy enterprise contact centers tied to their scheduling systems, after a security review,
and every call is PHI that needs a BAA. CallForges offers neither the BAA nor the scheduling integration. Hold
these posts until a BAA exists; a hospital foundation's donor line is a nonprofit (#22) customer today.

**The pains (context only):**

- Patient access centers fight abandonment: one health system cut it from 13% to under 4% by centralizing
  scheduling. [Clinician.com](https://www.clinician.com/articles/63424-abandoned-calls-cut-from-13-to-under-4) ·
  [Becker's: Cleveland Clinic call center](https://www.beckershospitalreview.com/capacity-management/cleveland-clinic-s-call-center-improves-care-access.html)
- Phone systems are an overlooked part of patient experience.
  [Children's Hospital Association](https://childrenshospitals.org/news/childrens-hospitals-today/2021/02/dont-overlook-your-hospitals-phone-system)
- Searches are few and mostly jobs:
  [ac "ai receptionist for hospitals"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+hospitals) ·
  [ac "hospital call center"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=hospital+call+center)

**How CallForges helps:** not today. (Facts from: `kb:terms`, which lists no BAA; `security.html` names none.)

**Rules:**

- [HHS: business associates](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html) ·
  [HHS: cloud computing](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html) ·
  [45 CFR 164.504](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.504)

**Candidate D posts (hold until a BAA exists):**

| Title (search phrase) | Slug | Evidence | Topic |
|---|---|---|---|
| Hospital call center abandonment rate: benchmarks and fixes | hospital-call-abandonment-rate | [Clinician.com](https://www.clinician.com/articles/63424-abandoned-calls-cut-from-13-to-under-4) | phone menu |
| AI receptionist for hospitals: what the BAA must cover | ai-receptionist-for-hospitals | [ac "ai receptionist for hospitals"](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=ai+receptionist+for+hospitals) · [HHS cloud guidance](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html) | AI receptionist |
| Centralized scheduling: what a phone menu can and can't fix | centralized-scheduling-phone-menu | [Becker's](https://www.beckershospitalreview.com/capacity-management/cleveland-clinic-s-call-center-improves-care-access.html) | phone menu |
| Hospital foundation donor calls | hospital-foundation-donor-calls | [USC Schaeffer](https://schaeffer.usc.edu/?p=6715) | power dialer |

## Dropped or low-fit markets

- **Restaurants:** demand is high ("ai receptionist for restaurants", "ai phone answering for restaurants", a
  [QSR estimate](https://www.qsrmagazine.com/story/while-the-phone-rings-restaurants-are-losing-20-billion/) of
  $20 billion lost to unanswered calls), but the agent cannot take orders into a POS or book tables, and per-seat
  plans don't fit a host stand. Revisit when ordering or booking ships (see workflows #64).
- **Hotels and vacation rentals:** medium demand ("ai receptionist for hotels", "hotel reservation call center";
  [Hospitality Tech](https://hospitalitytech.com/marchex-institute-study-finds-hotel-and-cruise-industries-lose-significant-volume-customers-due)),
  but the agent cannot check availability, take a booking or take a card (PCI). A small B&B could use after-hours
  FAQs; not worth a D post yet.
- **Financial advisors:** "financial advisor cold calling" has 10 suggestions, but business texts and calls are
  books and records ([FINRA Notice 17-18](https://www.finra.org/rules-guidance/notices/17-18),
  [FINRA Rule 4511](https://www.finra.org/rules-guidance/rulebooks/finra-rules/4511),
  [SEC Rule 204-2](https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.204-2)), the SEC fined
  26 firms nearly $393 million for off-channel texting in one August 2024 round
  ([ThinkAdvisor](https://thinkadvisor.com/2024/08/14/26-firms-to-pay-nearly-393m-in-sec-texting-probe/?amp=1)),
  and CallForges does not feed a compliance archive. Telemarketing also has its own rule
  ([FINRA Rule 3230](https://www.finra.org/rules-guidance/rulebooks/finra-rules/3230)).
- **Ecommerce support:** low demand ("ai voice agent for shopify" exists, little else); stores prefer chat and
  e-mail and CallForges has no store integration (see voice-agents #79).
- **Political phone banking:** high demand ("political phone banking software", "app"), but volunteers would each
  need a seat, the work is seasonal, and AI voices in political calls carry the most risk
  ([FCC political call rules](https://www.fcc.gov/rules-political-campaign-calls-and-texts); see calling #67).
- **Home health and home care agencies:** medium demand ("home health answering service", "home care leads"), but
  home health is a HIPAA covered entity (BAA). UK domiciliary care enquiries are a possible later market
  ([Care England](https://www.careengland.org.uk/why-care-providers-are-losing-enquiries-and-what-can-be-done-about-it/)).
- **NHS GP surgeries:** demand exists (ac gb "ai receptionist for gp surgery"), but NHS procurement, clinical
  safety and patient data rules apply, and an AI GP receptionist that misheard accents made national news
  ([The Guardian](https://www.theguardian.com/society/2026/aug/20/yorkshire-rotherham-ai-gp-receptionist-cannot-understand-accent)).
- **Pharmacies, US opticians, therapists and mental health practices:** each has "ai receptionist for" demand,
  each is a HIPAA covered entity, and mental health adds the most sensitive calls. Hold with dental and medical.
- **Churches, gyms, yoga studios, car washes:** suggestions exist, but call volume and budgets are small; fold
  them into the small-business post (see voice-agents #61).
- **MSPs and IT support:** one suggestion ("ai receptionist for msp"); see voice-agents #80.
- **Towing, locksmiths and moving companies:** "towing dispatch answering service" and "moving company leads"
  exist; write them as variants of the home-services and dispatch posts, not as their own market.
