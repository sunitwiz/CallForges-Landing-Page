Surface: app
# In the app: the Compliance center (written from the app's own screens, 10 November 2026)

## Compliance center: Number verification and Carrier registrations
URL: https://callforges.com/compliance#overview
Ask: What is the Compliance center?
The Compliance center, in the sidebar, holds what regulators and carriers ask of your numbers. It has two parts:
- Number verification: some countries verify who a number belongs to before they will sell you one. Start one with + Add number on the Number verification card: it opens Buy number, where you pick the number first, then verify. The United States and Canada never ask.
- Carrier registrations: US carriers trust calls from registered businesses more. They are the Business profile, Caller verification (SHAKEN/STIR), Caller ID name (CNAM), Branded calling and Phone number reputation. Text messaging (A2P 10DLC), below the Business profile, registers your US numbers for texting.
None of them is needed to make calls. Only roles with Buy and release numbers can start, edit or submit one. The ⓘ beside each section's title opens Ask AI with questions about that section: click one to put it in the question box, then press Enter to send it.

## How registrations work: a diagram, flow chart or picture of each step, for calls and for texting
URL: https://callforges.com/compliance#how-registrations-work
Ask: Is there a diagram of how registrations work?
Yes. One window, How registrations work, shows every step as a flow chart, with two tabs:
- Calls: for US numbers, the Business profile (once per workspace, approved in about 1 to 2 days), then Caller verification (SHAKEN/STIR) by itself, Caller ID name, Phone number reputation and Branded calling. Registering is free; Branded calling shows its price per branded call. Then the path for numbers outside the US, with Number verification where the country asks for it.
- Messaging: the texting registration (A2P 10DLC): Add a campaign, your brand registered from your approved Business profile (a one-time fee, with business vetting added above 2,000 texts a day), the carriers' review of the campaign (usually 1 to 3 weeks, a fee per campaign and again per resubmit), then its numbers are added and can text, with a monthly fee per campaign. Each step shows its fee, the same one the campaign's Review step shows. Numbers outside the US need no campaign.
Three icons open it: beside the Compliance center title and beside Business profile (after its ⓘ), on the Calls tab, and beside Text messaging (A2P 10DLC), on the Messaging tab. Click a section's name in the chart, such as Caller ID name or Add a campaign, to close the window and go to that section of the page.

## Register a business outside the US, such as Australia (non-US address)
URL: https://callforges.com/compliance#outside-the-us
Ask: Can a business with an address outside the US, such as Australia, register?
Yes. The Country field starts on United States, but it isn't locked: pick your country, such as Australia, in the first step, where every country is listed. Enter your registration ID as issued, such as an ACN (or your ABN under Other), a UK company number or a DUNS number; the contact's phone can be in any country. Once approved, Caller verification (SHAKEN/STIR) starts by itself for your US local and mobile numbers, bought now or later. Caller ID name still needs an EIN or DUNS number, and Phone number reputation a US address, an EIN or DUNS and a US phone. You can call the US without a Business profile either way.

## Carrier registration charges: registering your business is free (no fee)
URL: https://callforges.com/compliance#cost
Ask: Is there a charge for business registration?
No. CallForges charges nothing to register: the Business profile, Caller verification (SHAKEN/STIR), Caller ID name and Phone number reputation are free, and so is fixing and resubmitting after a rejection. You pay only for your plan, your numbers and your calls, as usual. Registering numbers for texting (A2P 10DLC) is the exception: each texting campaign carries the carriers' review fee and a monthly fee, shown before you submit.

## Business profile: is registering required for outbound calls to the US?
URL: https://callforges.com/compliance#required
Ask: Do I need a Business profile to make outbound calls to the US?
No. Outbound calls to US phones work without a Business profile or any carrier registration, including on the free trial, and you can register during the trial too. Registering changes how your calls are trusted and shown, not whether they connect. Without it, calls from your US numbers are signed under SHAKEN/STIR at level B. Level A comes with an approved Business profile: Caller verification (SHAKEN/STIR) then starts by itself for your US numbers. Your business name shows only with an approved caller ID name.

## SHAKEN/STIR attestation and spam labelling without a Business profile
URL: https://callforges.com/compliance#shaken-stir
Ask: Does skipping the Business profile affect SHAKEN/STIR attestation or spam labels?
SHAKEN/STIR (or STIR/SHAKEN) is how US carriers sign a call. Level A, the highest, means the carrier knows your business and its right to the number. Without your own registration, calls from your US numbers to US phones are already signed at level B, because CallForges' own business is verified with the carrier. For level A, get your Business profile approved, in any country: caller verification then starts by itself for your US numbers, bought now or later, with nothing to fill in.
Labels such as "Spam Likely" come from the phone networks' call analytics, based on how a number is used (many calls, many short or unanswered calls, complaints), not from attestation alone. Registering lowers the risk but never guarantees a number is never labelled. Number health on the Dashboard marks a number that "May be labelled spam".

## Caller verification (SHAKEN/STIR): US numbers only, free of charge, starts by itself
URL: https://callforges.com/compliance#caller-verification
Ask: What is caller verification (SHAKEN/STIR)?
Caller verification (SHAKEN/STIR) is how US carriers sign each call to show who is calling. With your own approved Business profile, calls from your numbers are signed at level A, the highest: the carrier vouches that your business owns the number. Without it they are signed at level B.
- Which numbers: US local and mobile numbers only. Toll-free numbers and numbers from other countries are not covered, and it helps your calls to US phones. Canada has its own system, and only Canadian carriers sign Canadian numbers.
- It starts by itself within 15 minutes of your Business profile's approval, for every US number you have and for numbers you buy later. Carriers review it in about 72 hours. There is nothing to fill in.
- It is on by default. Verify my numbers automatically, in Settings → Dialer settings, stops it adding numbers for the whole workspace, and each number has its own switch to take it off; see the entries on turning it off.
- It is free: no charge to register, and calls from a verified number cost the same.
- Where to see it: the Caller verification (SHAKEN/STIR) card in the Compliance center, the Caller verification column on Phone Numbers, and each number's Compliance section.
- Rejected: the number's Compliance section adds "Contact support so our team can look at it." Use Talk to a person.

## Business profile: the steps, what each asks for (EIN, DUNS or another registration ID), and Review before you submit
URL: https://callforges.com/compliance#business-profile-steps
Ask: What does the Business profile form ask for?
Click Register now on the Business profile (Continue for a draft). The steps are on the left:
- General information: Legal business name, Street address, Country (any country), City, State or region, ZIP or postal code, exactly as on your registration documents. The postal code must belong to the state you picked.
- Business information: Business type (Sole proprietorship, Partnership, Corporation, LLC, Non-profit), Industry, Registration ID type (USA EIN or DUNS, or the ID of another country, such as an ACN, a UK company number or a VAT number), Registration number (an EIN or DUNS has 9 digits, like 12-3456789; others as issued), Regions of operation (optional: none ticked means USA and Canada), Website (https://).
- Point of contact: First name, Last name, Job position, Business title, Business email, Phone (any country, with its country code; the ⓘ beside Phone says Phone number reputation needs a US +1 number). Carriers may contact this person to verify your business.
- Review: every section read back, with Edit beside each to go back to it, then Submit for review.
The Business profile itself doesn't need an EIN: a registration ID from any country is accepted. Caller ID name needs an EIN or DUNS number, and Phone number reputation also a US address and a US phone.
Only Regions of operation says (optional); fill in everything else. Next at the bottom of each step checks that step: an empty or wrong field turns red with a line under it saying what to enter. A field carriers or our check refused is outlined in red with a red ⓘ icon beside its name: hover over it, tap it or tab to it to read why, then change the field. The form saves itself as a draft while you fill it in and when you leave, so you can stop half-way and come back later; there is no Save draft button and no Test button. Submit for review checks every field, then the carriers check it too.

## Business profile postal code or ZIP code not valid, or an address the carrier suggests
URL: https://callforges.com/compliance#postal-code
Ask: Why does the form say the postal code or ZIP code is not valid?
The postal code must fit your country and, where the state has its own codes, the state you picked: in Australia, New South Wales codes start with 1 or 2 (Sydney is 2000) and Victoria's with 3 or 8; a California ZIP code starts with 90 to 96. When you click Next or Submit for review, the field says, for example, "Enter a valid postal code for New South Wales." or "Enter a valid ZIP code for California." Check the state and the code against your registration documents.
On Submit for review, carriers check the address against postal records. A red ⓘ beside an address field saying "The carrier suggests: 1 Martin Pl, Sydney NSW 2000." (hover over it or tap it) means their records differ from what you typed there: correct it, using the suggestion if it is right, and submit again. "We couldn't verify this address against postal records" means they could not find it: enter it exactly as it appears on your registration documents. A Number verification's address gets the same postal code check, and the same messages when carriers can't find the address or suggest another.

## Business profile statuses and how long approval takes: Draft, In review, Approved and Rejected
URL: https://callforges.com/compliance#business-profile-statuses
Ask: What do the Business profile statuses mean?
The Business profile shows one status:
- Not started: click Register now.
- Draft: saved but not sent; it shows "Last saved" and the date. Click Continue to finish it.
- In review: carriers are reviewing it, and it can't be changed until they answer. Approval usually takes 24–48 hours. Statuses update automatically; Refresh status checks now, and it shows only while something is in review.
- Approved: it can't be edited, because caller ID name and number reputation build on it. To change anything, click Contact support on the Business profile or e-mail support@callforges.com.
- Rejected: a banner at the top of the Compliance center says "Your business profile wasn't approved", because every carrier registration waits on it. The carriers' reason shows in red on the Business profile, and the fields they named are outlined in red with a red ⓘ beside the name that gives the reason. Click Fix and resubmit (on the banner or the Business profile), correct them and submit again. When carriers give no reason, check that every detail matches your records.
If Submit for review says "Carriers can't accept this yet", fix the items listed, then try again. Caller ID name and each number reputation registration show their status in their own row; change them from the … (More actions) menu on the row: Edit (a draft or a rejected one) or View details, then Edit numbers (an approved caller ID name) or Add numbers (a submitted reputation registration); the menu lists only what the row can do now. The numbers on a row (for example "2 numbers") and View details list its numbers: Remove takes one off on one click, and Add numbers adds more. The bin icon on the row deletes it.

## Business profile: what happens next after approval, and what starts by itself
URL: https://callforges.com/compliance#after-approval
Ask: What happens after the Business profile is approved?
Once your Business profile is approved:
- Caller verification (SHAKEN/STIR) starts by itself within 15 minutes for every US local and mobile number in your workspace, and for numbers you buy later. Carriers review it in about 72 hours; after that, calls from those numbers are signed at level A. There is nothing to fill in.
- Caller ID name, Phone number reputation and Branded calling don't start by themselves: register each one in the Compliance center, or from a number's Compliance section, and add numbers you buy later to them.
The Caller verification (SHAKEN/STIR) card, under Carrier registrations, shows where each number stands.

## Email when approved: will I get an email about the carriers' decision
URL: https://callforges.com/compliance#decision-email
Ask: Will I get an email when the business profile is approved?
Yes. When the carriers approve or reject your Business profile, Caller ID name, Phone number reputation or Branded calling, the workspace owner gets an email for each decision, usually within minutes of it reaching CallForges. Registrations in review are checked with the carriers every 4 hours, so a decision shows even when the carriers' own update is missed, and Refresh status checks now.
- Approved: the email says what you can do next, with Open the Compliance center.
- Rejected: the email lists the carriers' reasons. For the Business profile, Fix and resubmit opens it so you can correct the fields they named and submit again; for the others, Open the Compliance center.
Only the owner gets the email; everyone with access sees the same status in the Compliance center. Caller verification (SHAKEN/STIR) starts by itself, so it sends no email.

## Just bought a US number? What to do after buying it for compliance: caller ID name and reputation
URL: https://callforges.com/compliance#new-number
Ask: I bought a new number. What do I do for SHAKEN/STIR, caller ID name and reputation?
What happens to a number you just bought or purchased, and whether you need to register it, depends on the number and on your Business profile:
- A US local or mobile number, Business profile approved: Caller verification (SHAKEN/STIR) adds it by itself within 15 minutes, and carriers review it in about 72 hours. There is nothing to do. The number starts with its caller verification switch on, and it is added only while Verify my numbers automatically is on in Settings → Dialer settings. Caller ID name and Phone number reputation don't add it by themselves: open the number on Phone Numbers, go to its Compliance section and click Register beside each, or use Edit numbers (Caller ID name) and Add numbers (Phone number reputation) in the Compliance center. Branded calling, once our team has turned it on, takes numbers in the Compliance center.
- No approved Business profile yet: the number makes and takes calls as usual, signed at level B. Register the Business profile in the Compliance center; once it is approved, caller verification adds the number by itself.
- A toll-free or non-US number: it can't be registered for caller verification, caller ID name, phone number reputation or branded calling, and it makes and takes calls as usual. To register, buy a US local or mobile number.
See where each number stands in the Caller verification, Caller ID name and Phone number reputation columns on Phone Numbers, in the number's Compliance section, or, for caller verification, on the Caller verification (SHAKEN/STIR) card in the Compliance center.

## Caller ID name (CNAM): show your business or company name on calls, add numbers, and why it needs an EIN or DUNS
URL: https://callforges.com/compliance#cnam
Ask: How do I show the business name on outgoing calls?
Caller ID name (CNAM) shows your business name on outgoing calls to US phones. Without it, the person you call sees your number, and usually its city and state. It needs an approved Business profile registered with an EIN or DUNS number: that is the carriers' own rule, because they check the name against US business records. Click Register caller ID name, then:
- Display name: up to 15 characters, using letters, numbers, spaces, periods and commas, starting with a letter. A US state name can't be used.
- Choose numbers: US local and mobile numbers only. Toll-free and non-US numbers can't show a caller ID name.
Then Save draft or Submit for review. Carriers start showing the name 48 to 72 hours after approval, on landlines, and on mobiles where the called person's carrier offers it. A workspace can have up to 5 caller ID names, each with its own numbers. Once approved a name stays as it is, and Edit numbers, in the … menu on its row, adds or removes the numbers that show it. Clicking its numbers on the row (for example "2 numbers") lists them too: Remove takes one off on one click, and Add numbers adds more. While carriers review a name, its numbers can be removed but not added. Numbers you buy later don't join a name automatically: add them with Edit numbers. To add one number, you can also open it on Phone Numbers, go to its Compliance section, click Register beside Caller ID name and choose a name.

## Two or more caller ID names: up to 5 per workspace, and switching between them
URL: https://callforges.com/compliance#several-caller-id-names
Ask: Can a workspace have two caller ID names?
Yes, more than one: a workspace can have up to 5 caller ID names, for example VIRELIX SYSTEMS on your main numbers and VIRELIX SALES on your sales team's. Each name has its own numbers, its own status and its own row in the Caller ID name section; click Register caller ID name for each further name. Each name needs its own approval, and two names can't be the same, whatever the letter case. A number shows one name at a time: it can be on only one caller ID name. To move a number to another name, remove it from its name, then add it to the other: open it on Phone Numbers, go to its Compliance section, click Remove beside Caller ID name, then click Register and choose the other name. Edit numbers on each name's row in the Compliance center does the same. Until you add it to the other name, the number shows no name. A number still on another name can't be added: remove it there first. At 5 names, Register caller ID name stays greyed with "You can have up to 5 caller ID names. Delete one to add another."

## Delete a caller ID name you no longer use
URL: https://callforges.com/compliance#delete-caller-id-name
Ask: How do I delete a caller ID name?
In the Compliance center, find the name in the Caller ID name (CNAM) section and click the bin icon (Delete) on its row. It can be deleted at any status: draft, in review, approved or rejected. The confirmation says how many numbers lose the name on their calls; a draft, which carriers never saw, just says it is deleted. Deleting takes every number off the name with the carriers, then removes the name; it can't be undone, and its numbers are free to go on another caller ID name. If the carriers can't be reached, nothing changes and you can try again. Without a caller ID name, the person you call sees your number, and usually its city and state. To take off a single number instead, click Remove beside the number in its list.

## Change a Business profile after approval: edit the name, address or contact
URL: https://callforges.com/compliance#change-approved-profile
Ask: Can the Business profile be changed after it is approved?
Not from the page: once the carriers approve a Business profile, it can't be edited. That is the carriers' rule, and caller ID name and phone number reputation build on it. A workspace has one Business profile. To change anything on it, such as the business name, the address or the point of contact, open the Business profile and click Contact support, which opens Talk to a person, or e-mail support@callforges.com. Tell us what needs updating and why; we may ask for supporting documents. Our team then submits a corrected profile in its place, and the carriers review it again. A profile In review can't be changed until the carriers answer; a Draft or Rejected one you change yourself.

## Caller ID name vs Branded calling: what's different
URL: https://callforges.com/compliance#cnam-vs-branded
Ask: How is caller ID name different from Branded calling?
- Caller ID name (CNAM) shows your business name only, on landlines and on mobiles whose carrier offers it. It is free, and you register it yourself with an approved Business profile and an EIN or DUNS number.
- Branded calling shows your business name, a logo and the reason for your call, on T-Mobile and Verizon mobile phones. It needs an approved Business profile with a US EIN and a signed letter of authorization, our team switches it on for your workspace, and each call that shows your brand adds a fee to that call.
You can have both: a phone that can't show the brand shows the caller ID name.

## Phone number reputation: register your numbers, and how long approval takes
URL: https://callforges.com/compliance#number-reputation
Ask: How do I register numbers for number reputation?
Phone number reputation registers your US numbers with the carriers so your outbound calls are less likely to be labelled as spam. It is optional and lowers the risk, but it is not a guarantee: a registered number can still be labelled. It needs an approved Business profile with a US address, an EIN or DUNS number and a US phone number for the point of contact. Click Register numbers and fill in:
- Use case, such as Outbound dialer, Lead generation, Telemarketing or Customer support. One registration per use case.
- Employees and Calls per business day, as whole numbers above 0, and Notes (optional, up to 500 characters).
- The numbers: between 1 and 100 US local and mobile numbers on no other registration. Toll-free and non-US numbers can't be registered.
Then Save draft or Submit for review. Approval may take 24 to 72 hours after submission. The carriers' basic branded calling (the business name only) needs phone number reputation; Branded calling here, with its name, logo and call reason, doesn't. View unregistered numbers lists the numbers not registered yet. Numbers you buy later don't join by themselves (only Caller verification adds them automatically): add them with Add numbers in the … menu on a registration's row, or from the number's Compliance section with Register. On an approved registration, carriers register them right away. To take a number off, click the registration's numbers (for example "3 numbers") or View details, then Remove beside the number: one click. A draft's numbers are changed in its form, with Edit.

## Phone number reputation vs SHAKEN/STIR (caller verification): what's different
URL: https://callforges.com/compliance#reputation-vs-shaken-stir
Ask: How is phone number reputation different from SHAKEN/STIR?
- Caller verification (SHAKEN/STIR) proves a call really comes from the business that owns the number, so it can't be faked. It starts by itself once your Business profile is approved.
- Phone number reputation registers your numbers, your business and why you call (use case, team size, calls a day) with the phone networks' spam labelling, so real calls are less likely to show "Spam Likely". You register it yourself.
A verified call can still be labelled spam when a number makes many short calls, so the two help in different ways, and you can have both.

## Can't register phone number reputation without a US address, an EIN or DUNS and a US contact phone
URL: https://callforges.com/compliance#reputation-needs-us-business
Ask: Why does phone number reputation need a US address?
It is the carriers' own rule for phone number reputation: the Business profile must have a US address, an EIN or DUNS number and a US phone number (+1) for the point of contact, even when the business itself is in the US. Until it does, Register numbers stays greyed and the section says which one your profile misses, for example "Your business profile's contact phone isn't a US number. Phone number reputation needs a US phone number." Caller ID name says the same when the profile has no EIN or DUNS number. While the profile is a draft or was rejected, Edit business profile opens it: put the US details on it and submit it. An approved or in-review profile can't be changed from the page, so the line offers Contact support instead, or e-mail support@callforges.com. A business without them still gets Caller verification (SHAKEN/STIR) for its US numbers, which starts by itself once the profile is approved.

## Branded calling: show your business name, logo and call reason when you call
URL: https://callforges.com/compliance#branded-calling
Ask: Can a business show its name and logo on the calls it makes?
Branded calling shows your business name, an optional logo and the reason for your call on the phone of the person you call, for calls from your US numbers. It shows on T-Mobile and Verizon mobile phones, and the logo only on recent Android phones and iPhones. Other phones see your number, or your caller ID name, as usual.
- It isn't part of any plan yet. The Branded calling card reads "Contact support to enable this." Click Contact support: it opens Talk to a person, and our team can turn it on for your workspace.
- It needs an approved Business profile registered with a US EIN. While your Business profile isn't approved and Branded calling is still off, the card says "Get your Business profile approved first, then contact support to enable this.": submit the Business profile, then contact support. Once support has turned it on, the card says "Get your Business profile approved first." until the profile is approved.
- Click Set up, then fill in: Display name (up to 32 characters, starting with a letter, no phone number), Call reason (up to 50 characters, no links), Logo (optional: an https:// link to a PNG or BMP image, 256 by 256 pixels), the signed letter of authorization (a PDF up to 5 MB) and your US local numbers. Save draft keeps it without the letter; Submit for review needs the letter.
- Carriers review it in up to 7 days, and numbers take 24–48 hours. Once approved, turn Branded calling on with its switch. A change can take up to 2 hours to show on phones.
- Price: each call that shows your brand costs the price on the card, which is the carrier's fee times your plan's call rate, added to that call's cost. You pay only when the carrier confirms the brand was shown, even if nobody answered. The call is charged as soon as it ends, without the brand fee; until the carrier confirms, at most 2 hours later, Billing → Credit use marks that call's cost Estimated, then the fee is added to the same call once. While it is on, the carrier's call-quality reports run for your workspace and are billed per minute inside each call, as in Call insights.

## Caller verification card: why a number is not verified, the Approved, Pending and Off status, and toll-free numbers
URL: https://callforges.com/compliance#carrier-registrations
Ask: Why is a number not verified?
The Caller verification (SHAKEN/STIR) card under Carrier registrations lists every US number that can be verified, with its caller verification status. Click a row to open the number's Compliance section.
- Business profile not submitted: your Business profile isn't sent yet, or was rejected. Register it, or fix and resubmit it.
- In review: your Business profile is with the carriers. The number is added by itself once it is approved.
- Pending: the number is being added, or carriers are reviewing it (about 72 hours).
- Approved: verified, so its calls are signed.
- Off: you turned caller verification off for that number.
- Rejected: the carriers refused it. Contact support with Talk to a person.
- Not registered (not on caller verification, and nothing will add it): Verify my numbers automatically is off in Settings → Dialer settings. Turn it on (the card's "Change in Settings" link), and the number is added within 15 minutes.
Not verified counts only Rejected and Not registered. A caller ID name or phone number reputation that isn't registered never makes a number not verified: those are optional. Not verified shows only the numbers counted, and All shows every one. Each row's Turn off and Turn on change that number's own switch.
Toll-free (such as 800 or 888) and non-US numbers can't be registered with US carriers, so they aren't listed ("Only for US numbers."), and their Compliance section says Not available. To register, buy a US local or mobile number.

## Turn off caller verification (STIR/SHAKEN) for one number, or turn it back on, from the card's row or the number's Compliance section
URL: https://callforges.com/compliance#turn-off-one-number
Ask: How do I turn off SHAKEN/STIR for one number?
Caller verification is on for every US number by default, including a number you just bought. To turn it off for one number, click Turn off on its row of the Caller verification (SHAKEN/STIR) card in the Compliance center, or open the number on Phone Numbers, go to its Compliance section and switch Caller verification off. The number is taken off caller verification at once (if the carriers can't be reached right now, it comes off within 15 minutes), its status reads Off, its calls are no longer signed at level A, and it is never added again by itself. It still makes and takes calls as usual.
To turn it back on, click Turn on (or switch it on in the number's Compliance section): the number is added again within 15 minutes, as long as Verify my numbers automatically is on in Settings → Dialer settings, and carriers review it in about 72 hours.
A number's own Off always wins, whatever the workspace setting. Only roles that can Assign and configure numbers can use the switch. Each change shows in Settings → Activity as Turned off (or Turned on) caller verification on the number.

## Verify my numbers automatically: stop adding numbers to caller verification for the whole workspace, in Settings → Dialer settings
URL: https://callforges.com/compliance#verify-numbers-automatically
Ask: How do I stop adding numbers to caller verification automatically?
Verify my numbers automatically, in Settings → Dialer settings, decides whether caller verification (SHAKEN/STIR) adds your US local and mobile numbers by itself once your Business profile is approved. It is on by default.
- Off: no number is added any more, including numbers you buy later. Numbers already verified stay verified, and their calls are still signed. A number that isn't on caller verification yet shows Not registered and counts as not verified on the Caller verification (SHAKEN/STIR) card.
- On: every US number whose own switch is on is added within 15 minutes.
A number's own switch, in its Compliance section or on the card, always wins: a number you turned Off is never added, whatever this setting says. The card's "Change in Settings" link opens this switch and shows whether it is on. Only the owner and admins (roles that can Change dialer settings) can change it.

## Number verification: which countries, how long review takes, a rejected submission, and deleting it
URL: https://callforges.com/compliance#number-verification
Ask: Which countries need number verification?
Some countries need to know who will use a number before one can be sold, such as the United Kingdom and New Zealand. On Buy a number, those countries say "verification required" in the country picker. The United States and Canada never ask.
- Click + Add number on the Number verification card, or pick a number in Buy number: the verification steps follow on the same page. You verify once per country and number type (local, mobile or toll-free), as a business or an individual, with a few details, a proof-of-identity document and an address; it covers every number of that type you buy there afterwards. A mobile submission doesn't cover local numbers of the same country, and a local one doesn't cover mobiles: each needs its own.
- Review usually takes up to 3 business days. Statuses update automatically; Refresh status checks now.
- Statuses: Draft (not sent yet), Submitted, In review, Approved or Provisionally approved (you can buy numbers under it), Rejected or Expired.
- A draft or rejected submission opens in Buy number at its first unfinished step; one in review or approved opens read-only.
- Rejected: to fix and resubmit, open the submission (click its row, Fix and resubmit in the … menu on its row, or Edit on its Pending row), read the reason in its Reviewer notes, fix what it names and submit again.
- To delete a submission, click the bin icon on its row.

## Start a number verification in Buy number: pick the number, then verify, charged once approved
URL: https://callforges.com/compliance#verify-while-buying
Ask: Can a number be picked before its verification is approved?
No. Pick the number in Buy number first. When its country and number type need verification and the workspace has no approved submission, the steps on the left grow from Number details to Who will use it, End user, Address, Documents and Review. The number is saved on the submission once Who will use it is done, so the Pending tab of Phone Numbers shows it as a Draft at once; Submit for review on Review sends the submission, and the number keeps waiting there. It isn't bought, held or charged while it waits. Once the submission is approved, CallForges buys it and e-mails the person who picked it: its first month is paid from the credits (a number free under the plan costs nothing). With a submission already in review, Confirm details says "Verification in review" and Save number keeps the number on the Pending tab for that submission instead.
- To start one, open Buy number from Phone Numbers (Add Number) and pick a number in a country that reads "verification required", or click + Add number on the Number verification card of the Compliance center.
- Nothing is charged to start, fill in or submit a verification, and nothing is charged when it is approved: only the number is paid for, when CallForges buys it.
- One verification is kept per country, number type and Registered as (business or individual). See changing the country, number type or Registered as.

## Change the country, type or Registered as
URL: https://callforges.com/compliance#verification-per-country-and-type
Ask: Can the country, number type or Registered as of a number verification be changed?
A verification belongs to one country, one number type and one Registered as (business or individual), and that can't be changed on it. Instead, a workspace keeps one verification for each combination, side by side. In Buy number, picking another country or number type on Number details, or another Registered as on Who will use it, opens the verification kept for that combination:
- Approved: there are no steps to fill. Confirm details buys the number under it.
- In review: its details are read-only. Confirm details says "Verification in review" and Save number keeps the number waiting on it.
- Rejected: it opens at the step to fix, with its own saved details and the Reviewer notes.
- Draft: it opens with what was saved and typed on it before.
- None yet, or only an expired one: a new, empty verification starts.
Nothing is copied from one verification to another, and nothing is deleted by choosing another: going from Business to Individual and back shows Business exactly as it was left, with its end user, address and documents.
The number picked follows you when only Registered as changes: it moves to the verification now open. Changing the country or number type picks a new number, as Number details then lists that country's numbers.
A draft started here and left with nothing on it within the hour is removed by itself. To remove any other, delete it on the Pending tab of Phone Numbers or in the Number verification list.

## Close Buy number halfway through a verification: everything typed is saved as a draft
URL: https://callforges.com/compliance#verification-draft-saved
Ask: Is a half-filled number verification lost when Buy number is closed?
No. Closing Buy number (the ✕) saves everything filled in so far and says "Saved as draft". That includes a step left half-filled: an End user or Address with fields still missing is kept exactly as typed, and nothing is discarded. Nothing is sent for review, and nothing is bought or charged.
- To carry on, open the draft from the Pending tab of Phone Numbers (click its row, or the pencil, Edit) or from the Number verification list in the Compliance center. It opens at its first unfinished step with what was typed already in place.
- A half-filled step isn't checked while it is a draft. Each field is checked when the step is completed and again on Submit for review.
- Documents are saved as soon as each file is uploaded.
A draft stays until it is sent for review or deleted. One verification is kept per country, number type and business or individual.

## Number verification Documents step: a file uploads by itself, an empty file, and a file over 5 MB
URL: https://callforges.com/compliance#verification-documents-upload
Ask: Where is the Upload button on the Documents step of a number verification?
There isn't one. On the Documents step, choose the document type, fill in its fields and choose the file: it uploads by itself as soon as the file is chosen. Accepted files are PDF, JPG or PNG, up to 5 MB each. One file can cover several requirements.
- "That file is empty. Choose the document itself.": the file has nothing in it (0 bytes), often a download that didn't finish. Choose the real document.
- "That file is just over 5 MB. The limit is 5 MB.", or the file's size and the limit: the file is too large. Export it smaller, or scan at a lower quality.
- "Only PDF, JPG or PNG files are accepted.": save or export the document as one of those.
- "The file is empty. Attach a file that has the document in it." and "The file is larger than 5 MB. Upload a smaller file." are the same two problems, said by the server.
A requirement the registered address already proves asks for no upload: it reads "Covered by your registered address".

## Number verification End user step: a phone number too short or too long for its country is refused
URL: https://callforges.com/compliance#verification-phone-number
Ask: Why is the phone number on the End user step of a number verification refused?
A phone number on the End user step must be a real, complete number of its country, in international format: + then the country code and the number, such as +442071234567. A number with too few or too many digits for its country is refused before anything is sent, because the reviewer would reject it. Check the country code and count the digits; leave out the leading 0 of the national number after the country code (+44 20…, not +44 020…). An e-mail address is checked the same way: no spaces inside it.

## Number verification says Expired: its date has passed, and Verify again
URL: https://callforges.com/compliance#verification-expired
Ask: What does Expired mean on a number verification?
A verification holds for a limited time. Expired means that date has passed: the submission reads Expired everywhere, even though it once passed review: in the Number verification list, on its own page and in Buy number, where it can't be chosen. No more numbers can be bought under it. Numbers already bought stay yours and keep working.
- Verify again, on the list or on the submission's page, opens Buy number on the same country and number type to start a new verification. An expired one counts as none, so the steps run from Who will use it to Review.
- A number that was still waiting on it reads Verification expired on the Pending tab of Phone Numbers, with its own Verify again and Delete.

## Number verification in review: no Submit again until the reviewer answers, and Check status
URL: https://callforges.com/compliance#verification-under-review
Ask: Can a number verification be submitted again while it is in review?
No. A submission sent for review, or In review, can't be changed or sent again until the reviewer answers, usually within 3 business days. In Buy number its Review step reads Under review, with the date it was sent (or since when the reviewer has had it) and no Submit, and every other step is read-only. Its page in the Compliance center reads the same. Check status looks up the latest status now. Sending it again anyway says "This verification is already under review. It can be sent again only once the reviewer answers, usually within 3 business days." If it comes back rejected, fix what the Reviewer notes name and submit again.
Before it is sent, Submit for review asks "Submit for review?" (a rejected one: "Resubmit for review?"): "Once you submit, you can't edit this submission until the reviewer answers, usually within three business days." Submit sends it; Keep editing goes back.

## Number verification Reviewer notes: what the reviewer turned down, and the step that fixes it
URL: https://callforges.com/compliance#reviewer-notes
Ask: Where does a rejected number verification say what to fix?
A rejected submission has Reviewer notes in red on Review and on the steps that hold what the reviewer turned down. The steps on the left mark those steps red, as needing attention.
- With a reason for the whole submission, the notes give that reason.
- Otherwise each document or detail the reviewer gave a reason for is listed with its reason and a Go to link to the step that fixes it. A proof of address is fixed on Address.
- "The reviewer did not leave a note." appears only when nothing carries a reason: check that every name, number and address matches your documents exactly, then resubmit.
- The ✕ (Close reviewer notes) hides the notes until the submission is opened again.

## Address in another country for a verified number: UK mobile takes any country's address, UK local a UK one
URL: https://callforges.com/compliance#verification-address
Ask: Can I use an address in another country for number verification, such as a US address for a UK mobile number?
Each country and number type has its own submission: UK mobile and UK local numbers need one each, and where the address may be is the carrier's rule for each, so the same country can differ by type. The Address step asks for the address's country and checks the postal code for that country:
- Any country: such as UK mobile and UK toll-free numbers, mobile numbers in Sweden, Italy and the Netherlands, and New Zealand local numbers. A US, Indian or any other address is accepted.
- Only the number's own country: such as UK local numbers. The Country field is fixed to it and says "Fixed by the carrier's rules for this number."
- Inside the number's area: some local numbers, such as in Germany, France, Austria, Ireland, Mexico and Japan, need an address in the city or region of the number's area code. Buy a number in the area of your address; if the carrier refuses a number for its area, the purchase says so and your payment is kept for 24 hours.
- Only outside the country: Jordan's numbers need an address abroad.
If saving says "we couldn't read where this number's address may be just now", nothing was saved: try again in a moment. To change the country of a saved address, edit the address: your documents stay attached to it. If the reviewer rejects the proof made from your address, the Documents step says "The reviewer rejected the proof made from this address." with their reason: fix the address if needed, then run Check, and a new proof is attached from it.

## No postal code to enter: Hong Kong, Panama, Grenada, Benin, the UAE and others without postal codes
URL: https://callforges.com/compliance#verification-no-postal-code
Ask: What do I enter as the postal code for a country with no postal codes, such as Hong Kong?
Some countries have no postal codes, such as Hong Kong, Panama, Grenada, Benin, the United Arab Emirates, Qatar and Jamaica. For an address in one of them, the Address step's postal code field says (optional): leave it empty and continue. Everywhere else the postal code is required, and it must fit the address's country and, where the state or province has its own codes, the one you picked.

## Number verification: the authorized representative's address (Thailand, Japan)
URL: https://callforges.com/compliance#representative-address
Ask: Why does number verification ask for the authorized representative's address?
Some business verifications ask for the address of the person who represents the business as well as the business's own address: Thailand mobile numbers and Japan local and toll-free numbers. The Address step then shows "The authorized representative's address is the same", ticked. Untick it to give the representative's own address in a card of its own, under the same country rule. The representative's documents use that address; everything else, and the numbers you buy, use the registered address. Tick the box again and Continue removes the representative's own address.

## Paying for a number refused: compliance submission expired, not approved, or more than one approved
URL: https://callforges.com/compliance#verification-before-payment
Ask: Why is paying for a number that needs verification refused?
Before you pay for a number that needs verification, CallForges checks its submission, so you never pay for a number that can't be bought:
- "This number needs an approved compliance submission for its country and type.": get one approved for that country and type first; + Add number on the Number verification card starts one.
- "That compliance submission has expired.": start a new submission for that number type.
- "That compliance submission isn't approved yet.": buy the number once it is approved.
- "More than one approved compliance submission fits this number.": choose which one to use, then buy.
- "We couldn't check this number's compliance submission with the carrier just now.": nothing was charged; try again in a moment.
If the carrier still refuses the number after you paid, the purchase says why, and your payment is kept for 24 hours for another number of the same kind.

## Carrier registration messages that need our team
URL: https://callforges.com/compliance#needs-our-team
Ask: What should I do if a registration says to contact support?
A few messages mean only our team can help, so use Talk to a person:
- "Carrier registration isn't fully set up yet. Please contact support."
- "Carrier registration isn't available on this account yet. Contact support."
- "This workspace's calling account isn't set up on its own yet, so it can't be registered with carriers. Contact support to finish setting it up."
Messages about your own details, such as "Carriers can't accept this yet" or a rejection reason, are fixed in the form itself. "We couldn't reach the carrier service" means try again in a moment; your progress is saved.
