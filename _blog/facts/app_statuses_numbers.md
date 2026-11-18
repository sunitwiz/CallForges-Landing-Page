Surface: app
# In the app: what the Phone Numbers page shows (written from the app's own screens, 31 October 2026)

## Phone number statuses: the Active, Pending, Deleted and Porting tabs
URL: https://callforges.com/numbers#tabs
Ask: What do the Active, Pending, Deleted and Porting tabs on Phone Numbers mean?
A phone number has no pill of its own. Phone Numbers shows its state by the tab it is on.
- Active: the numbers your workspace owns now. You can call from them and receive calls on them.
- Pending: numbers picked in a country that needs verification, waiting for their compliance submission to be approved and then bought. See the pending number statuses.
- Deleted: numbers you deleted. They went back to the carrier, so they can't make or receive calls. The list is read-only and shows the Last owner, Deleted on and Deleted by.
- Porting: your requests to bring numbers in from another provider. See the port request statuses.
Deleting a number releases it at once, and calls and texts to it stop working. Deleting a number you ported in releases it for good.

## Phone number statuses: Incoming paused, Direct line, Recording and Free
URL: https://callforges.com/numbers#pills
Ask: What does Incoming paused mean on a number?
- Incoming paused: nobody rings for calls to this number, and callers go straight to its voicemail. Calls you make from the number are not affected. Turn it back on with the number's incoming calls switch; you see "Incoming calls paused" or "Incoming calls resumed".
- Direct line · System default (in Routing): the number runs no custom workflow. It rings the number's owner and teams, then goes to voicemail.
- Recording · Transcript: calls are recorded and transcribed. Recording: recorded only. Off: neither.
- Free (in the Monthly column): no monthly rent is charged for this number.
- "Your numbers will be released on <date>. Choose a plan to keep them.": your plan has ended (the trial expired, you cancelled, or the workspace was suspended for an unpaid invoice) and its grace runs out on that date. Then the numbers go back to the carrier; numbers you ported in are kept. If you registered numbers for texting, the line adds "and your texting registration deleted with them": your texting registration is deleted that day too, and registering again takes a new campaign review of 15 credits, non-refundable, and 1 to 3 weeks. With no number to release, it reads "Your texting registration will be deleted on <date>". Choose a plan before that date (for a suspended workspace, pay the open invoice) to keep both.

## Buy number: how to buy a phone number
URL: https://callforges.com/numbers/purchase#how-to-buy
Ask: How is a phone number bought in the app?
On Phone Numbers, click Add Number. Buy number has two steps, listed on the left.
- Number details: pick the Country, then the Number type (Local, Mobile or Toll-free), then a Region where there is one. A number is suggested; Shuffle suggests another and Choose a different number searches by digits. Save & Next goes on.
- Confirm details: name the number, choose its owner and who shares it, then Confirm & Purchase. A number with monthly rent reads Continue to payment and is paid from your credits first; a number free under your plan costs nothing.
The number is on the Active tab at once and can make and receive calls.
A country that reads "verification required" asks who will use the number first. With an approved verification for that country and number type, Confirm details buys the number as usual. With none, the steps grow to Who will use it, End user, Address, Documents and Review, and CallForges buys the number for you once the verification is approved.

## Buy number: search for a specific number by its digits
URL: https://callforges.com/numbers/purchase#choose-a-number
Ask: How is a specific number searched for in Buy number?
On Number details, under the Suggested number, click Choose a different number. Choose a number lists the numbers on sale for the country, number type and region picked, and searches them by digits: pick Contains, Starts with or Ends with and type 2 to 15 digits, such as the last four you want. Click a number to pick it; it becomes the Suggested number.
- Digits that match nothing read "No numbers match these digits." Try fewer digits, or set Region to Any to search everywhere.
- Each number shows what it can do (Call, SMS, MMS) and, when the carrier gives one, where it is based.
- Shuffle, beside the Suggested number, suggests another number without searching.
A number isn't held while you look: it is yours once you buy it, or once it is saved on a verification.

## Phone number statuses: verification when you buy a number
URL: https://callforges.com/numbers/purchase#verification
Ask: What does "verification required" mean when buying a number?
Some countries need proof of who will use a number before one can be sold. Those countries read "verification required" in the country picker:
- With an approved submission for that country and number type, pick it in the Verification required box on Confirm details and buy the number as usual. An expired one shows Expired and can't be picked. Where a submission's address must be in the number's area, it says "This submission's address is in <area>. Pick numbers from that area.".
- With none approved but one in review, Confirm details says "Verification in review" and its button is Save number: the number waits on the Pending tab and is bought once the submission is approved.
- With none approved or in review (an expired one counts as none), the steps grow to six: Number details, Who will use it, End user, Address, Documents and Review. The number is saved on the submission once Who will use it is done, so the Pending tab of Phone Numbers shows it as a Draft at once; Submit for review sends the submission. Nothing is bought or charged until the submission is approved; then the number is bought for you.
- A draft or rejected submission opens in the same steps to finish or fix.
What a submission's status means: Draft (not sent yet), Submitted (waiting for review), In review (being reviewed), Approved or Provisionally approved (you can buy numbers under it), Rejected (fix and resubmit) or Expired. Before buying, you may be asked to Verify your phone with a 6-digit code we text you.

## Buy number: Save number or Submit for review disabled by the trial, the 5-number limit or billing permission
URL: https://callforges.com/numbers/purchase#purchase-blocked
Ask: Why are Save number and Submit for review greyed out in Buy number?
When the workspace can't buy the number picked, a notice says why and the button that saves or buys it is greyed out. On a number that has to be verified, with no submission approved or in review, the notice shows on Number details and on Review, where Submit for review is greyed out; with one in review, Save number on Confirm details is. Nothing is bought or charged. The notices:
- "Add a card to buy more numbers." with "Your trial includes one free number.": a trial with no card gets only its free number.
- "The trial includes up to 5 numbers." with "Choose a plan to add more.": the trial's number limit is reached.
- "This number is paid by card when it is bought." with "Ask an owner or admin who manages billing to buy it.": a paid number needs a user who manages billing.
On the first two, Go to Billing opens it to add a card or choose a plan; a user who doesn't manage billing reads "Ask an owner or admin to set this up in Billing."

## Pending numbers: the Pending tab on Phone Numbers and each pending number status
URL: https://callforges.com/numbers#pending
Ask: What is the Pending tab on Phone Numbers, and what do its statuses mean?
A number you pick in Buy number for a country that needs verification waits on the Pending tab until its compliance submission is approved. Then CallForges buys it for you, tries once, and e-mails the person who picked it. A bought number moves to the Active tab. Numbers aren't held by the carrier while they wait. The columns are Phone number, Number type, Status, Capabilities, Requested by and Created. Clicking a row opens it: a Draft or Rejected one in Buy number, to finish or fix (the pencil, Edit); the others read-only (the eye, View).
- Draft: the submission isn't sent yet. Its number, capabilities and Requested by show as soon as the number is saved on it. A draft with no number picked shows as a row of its own, with "—" for the number.
- In review: the reviewer has it, usually for up to 3 business days.
- Rejected: the reviewer's reason shows under it; the number keeps waiting.
- Verification expired: the approval ran out before the number was bought. Verify again, or Delete.
- Buying: the submission is approved and the number is being bought now.
- Not enough balance, with Last tried and the date: Add credits, then Retry.
- Number no longer available: Choose another picks a number of the same country and type.
- Could not buy, with the reason: Retry, or Choose another.
Delete (the red bin) removes only the number, and its verification stays; on a draft with no number, it deletes the unfinished verification itself. Deleting a submission removes its pending numbers too.
The tab updates by itself when a status changes, and checks again every 10 seconds while a row is In review or Buying.
Saving a number here, or choosing another, needs your own phone number verified, as buying does: "Verify your phone number before buying a number."

## Delete a pending number: only the number is deleted, its verification stays
URL: https://callforges.com/numbers#pending-delete
Ask: Does deleting a pending number delete its verification?
No. Delete (the red bin on a Pending row) removes only the number, whether its submission is a Draft, In review or Rejected: "Only <number> is deleted and won't be bought; its verification stays as it is." The submission stays in the Compliance center, and a draft left with no number stays on the Pending tab as a row of its own, so Edit continues it. A draft row with no number is the one place the bin deletes the verification itself: "Delete this unfinished verification?", as it was never sent for review. A row that says Buying has no bin. Deleting a submission from the Compliance center removes its pending numbers too.

## Pending number says Buying: its submission can't be deleted or changed meanwhile
URL: https://callforges.com/numbers#pending-busy
Ask: Why can't I delete or change a submission while its pending number says Buying?
Once a submission is approved, its pending numbers say Buying for a minute or so. Meanwhile the submission can't be deleted, and the number can't be deleted, swapped or moved to another verification: "A number on this submission is being bought right now. Wait a moment, then try again." Nothing was changed; when the row leaves Buying you can delete the submission or change its number.

## Pending number says Verification expired: Verify again or Delete
URL: https://callforges.com/numbers#pending-expired
Ask: What does Verification expired mean on a pending number?
A verification is approved for a limited time. When that time ran out before the number was bought, the number can't be bought under it any more, and its Pending row says Verification expired: "Its verification expired before the number was bought. Verify again to buy a number, or delete this one." Nothing was bought or charged.
- Verify again opens Buy number on the same country and number type. An expired verification counts as none there, so the verification steps start again, and the number picked there waits on the new submission.
- Delete (the red bin) removes the number from the Pending tab.
In the Compliance center the same submission reads Expired, not Approved, with its own Verify again.

## Retry or Choose another on a pending number: who it is then for, a number already active, and a Retry or Delete that didn't work
URL: https://callforges.com/numbers#pending-retry
Ask: Who gets the number when someone else presses Retry on a pending number?
Retry and Choose another are for a user who may buy numbers. Whoever presses one takes the pending number over: Requested by changes to them, the purchase is made for them, and its e-mails go to them. That is how a number picked by someone who left the workspace is still completed.
- "This number is already bought. It is in your active numbers.": the purchase went through while its row was still on screen, so it can't be deleted from Pending. It is on the Active tab; delete it there to give it up.
- "That number is already active in this workspace. Choose another number.": the number picked is one the workspace already owns, so it can't be saved as a pending number.
- "This number is being bought right now. Wait a moment, then look again.": the row is Buying.
When Retry or Delete is turned down, the Pending tab reads the list again, so the row tells where it really stands.

## Pending number says Not enough balance: add credits, then Retry
URL: https://callforges.com/numbers#pending-balance
Ask: What does Not enough balance mean on a pending number?
When the submission is approved, the number's first month is paid from your credit balance, not your card: the number's full monthly price, as on Billing → Pricing, never cut to the days left. That pays one month from the day it's bought; the next renewal then bills only the days after that month, never a second month. Billing → Credit use lists it as "Phone number charge". If the balance doesn't cover it, the row says "Not enough balance to pay this number's first month. Add credits, then retry." with when it was last tried, and you get an e-mail. Nothing was bought or charged, and it isn't tried again by itself. Add credits on Billing (Top up), then press Retry on the row. A number that is free under your plan needs no balance. Later months are on your plan's renewal as usual.

## Pending number says Number no longer available: choose another number
URL: https://callforges.com/numbers#pending-unavailable
Ask: What does Number no longer available mean on a pending number?
A number waiting for its submission isn't held, so someone else can buy it first. Each waiting number is checked every day, and again just before it is bought. If it's gone, the row says "This number is no longer available. Choose another number of the same country and type." and you get an e-mail. Click Choose another and pick a new number of the same country and type: it stays on the same submission, and under an approved submission it is bought shortly after. The new number is checked with the carrier first: one that isn't on sale for that country and type is refused with "That number isn't on sale for this country and number type.", so pick another from the list; if the carrier can't be reached, nothing is changed and you can try again in a moment. Nothing is charged for a number that wasn't bought.

## Buying a number: why an Australian or UK local number says Call only, and picking a Region or city
URL: https://callforges.com/numbers/purchase#number-details
Ask: Why does an Australian local number say Call only on the purchase page?
Number details asks one thing at a time: first the Country, then the Number type, then the Region (only where there is one) and the Suggested number. Shuffle suggests another; Choose a different number opens Choose a number, which searches by digits: pick Contains, Starts with or Ends with and type 2 to 15 digits. Changing the country clears the type and the region; changing the type clears the region.
Each type card says what its numbers can do in CallForges, such as Call only: what the carrier's numbers of that type can do, less any texting CallForges doesn't offer there.
- Australia: local and toll-free numbers are Call only, because the carrier's Australian landline numbers can't text; mobile numbers can text too, pictures included.
- UK: local and toll-free numbers are Call only; mobile numbers can text too.
- US and Canada: local numbers can call and text, pictures included; toll-free numbers are Call only, because texting from toll-free numbers isn't offered.
- India, Malaysia and Singapore numbers are Call only: texting there isn't offered.
- A few mobile numbers (Sweden, Italy, Switzerland) can text but not call: the carrier's numbers there can't make calls.
The suggested number, and every number under Choose a different number, shows its own chips and, when the carrier gives one, where it is based, such as "Melbourne, Victoria, AU".
Region: for a local number in the US, Canada, Australia or the UK, pick a state, province or nation, or in Australia and the UK a city such as Melbourne or London. Any searches everywhere. A region with no numbers right now is greyed ("No numbers right now"); availability is checked once a day. Picking one suggests a number there; when none is left it reads "No numbers in <region> right now. Try another region or Any.", or, when an area code narrows it too, "No numbers match these filters right now. Try another region or area code." In Choose a number, digits that match nothing read "No numbers match these digits." In the US and Canada you can then pick an area code. Mobile and toll-free numbers have no Region, and other countries don't offer one.

## Buy number: no Number type cards for a country, and the suggested number kept when going back
URL: https://callforges.com/numbers/purchase#number-type-cards
Ask: Why does Number type have no cards after picking a country in Buy number?
Number type lists its cards (Local, Mobile, Toll-free) only once the country's own types have been read, so for a moment after picking a country there are none. A country with no number types on sale says so instead of listing cards that can't be bought: pick another country.
Leaving Number details, with Save & Next or by clicking another step, keeps the number that was on screen. Coming back brings the same number, not a new suggestion; Shuffle or Choose a different number changes it. In Choose a number the digits box takes up to 15 digits, the longest a phone number can be.

## Phone Numbers Capabilities column: Call, SMS and MMS chips, and why a number, such as a UK landline, can't text or send pictures yet
URL: https://callforges.com/numbers#capabilities
Ask: What does the Capabilities column on Phone Numbers show?
The Capabilities column shows what each number can do, as chips:
- Call: every number can call.
- SMS and MMS: shown for numbers that can text. A US local number texts once it is registered for texting (A2P 10DLC). A number in another country texts with no registration where the carrier allows it, such as a UK mobile number. Toll-free numbers, and numbers the carrier says can't text (most local landline numbers outside the US), show Call only: mobile numbers can text.
The chip's colour is the number's texting status. Indigo: registered, its campaign is approved. Grey with a clock: carriers are reviewing its campaign. Grey with an alert: not registered for texting, and US carriers block texts from it until it is in an approved campaign. Red: carriers rejected its campaign.
Click a grey or red chip to see why, with the fix: Add to campaign (an approved one), Register now (when no campaign is approved yet), Register business (when the Business profile isn't approved), or the campaign's own page to continue a draft, fix a rejection or see its status. Calls work as usual whatever the chips say. A number with an indigo chip sends and receives texts in Messages.

## Phone Numbers columns: Caller verification, reputation and caller ID name, and a number's Compliance section
URL: https://callforges.com/numbers#registrations
Ask: What do the Caller verification, Phone number reputation and Caller ID name columns mean?
The last three columns on Phone Numbers show each number on Caller verification (SHAKEN/STIR), Phone number reputation and Caller ID name (CNAM). They read Approved, Pending (with the carriers, or Caller verification adding it by itself), Draft, Rejected, Not registered (not on it yet), Off (Caller verification only: you switched it off for that number), Business profile not submitted or In review (Caller verification, while the profile waits) or Not available (hover for why); Caller ID name shows the name itself once it is approved on the number. "—" marks a toll-free number ("Toll-free numbers can't be registered.") or one from another country ("Only US numbers can be registered."): only US local and mobile numbers can be registered.
Open a number and go to Compliance for one row each: Caller verification (its status, as on the Compliance center's card, and the number's own switch, on by default: it adds the number by itself once your business profile is approved, and switching it off takes the number off and keeps it off), Caller ID name (the name the number shows; Register to add it to a name, Remove to take it off its name; to put it on another name, remove it, then add it to the other) and Phone number reputation (Register, or Remove), and Branded calling (its status, "Contact support to enable this." while our team hasn't turned it on, or add it in the Compliance center). On a toll-free or non-US number every row says Not available, and one line says it can't be registered for any of them. To register instead: buy a US local or mobile number; caller verification is added by itself once your business profile is approved; then add it to Caller ID name and Phone number reputation.

## Caller name lookup: see a caller's name on incoming calls
URL: https://callforges.com/numbers#caller-name-lookup
Ask: How do I see the name of a caller who isn't a saved contact?
Caller name lookup asks the carrier for the caller's name when someone who isn't in your Contacts calls one of your numbers. Turn it on for each number: Phone Numbers, open the number, General, switch on Caller name lookup, then Save. It is off by default.
- It works for callers with a US number. A saved contact, a hidden number or a caller from outside the US is never looked up.
- The ring never waits for it: the name appears on the ring card a moment later, in grey with a "Caller ID" tag. Your own contact's name, and a connected CRM's, always come first.
- The name is kept in Call History too.
- If the number hides the caller (Mask incoming caller ID), the ring card still says "Private caller"; Call History keeps the name.
- Price: each lookup costs the price shown beside the switch ("Billed at … credits per lookup"), which is the carrier's fee times your plan's call rate. It is added to that call's cost, even when the carrier has no name for the number. A lookup the carrier couldn't answer is free.
- It comes with a paid plan, not the free trial. "Not included in the trial. Upgrade to use it.": choose a plan to use it. "Contact support to enable this.": our team has it off for your workspace; click Contact support to ask for it.
