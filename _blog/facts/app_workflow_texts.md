Surface: app
# In the app: workflow texts, the Send SMS and Schedule rule steps of a call workflow (written from the app's own screens and the workflow contract, 14 November 2026)

## Text a caller automatically after a call, a missed call or a voicemail: the workflow text step
URL: https://callforges.com/workflows#send-sms
Ask: How do I send a text automatically after a call or a missed call?
Add a Send SMS step to a workflow and every caller who reaches it gets a text. In the workflow builder click + where you want the text, choose Send SMS (under SMS), and set it up on the right:
- Title: a name of up to 50 characters shown on the step. It can be left empty.
- Send SMS from: Incoming call number, so callers get the text from the number they called, or one Fixed number you pick.
- Message: up to 1,600 characters and 10 text parts (about 1,530 plain characters, or 670 when it holds a symbol outside the plain set), with Insert field for the caller's and your user's details. A longer one shows "This text is longer than 10 parts. Shorten it." and can't be published.
Where you put it decides when it goes:
- After a call that was answered: put it on the Answered path of a Ring or Queue step. It goes when the call ends, also when the caller hangs up first.
- After a missed call: put it on the Unanswered path of a Ring step, or on a Queue's Wait over path.
- After a voicemail: put it after the Voicemail step. It goes once the caller's greeting starts, not after the message.
- After a Post-call survey: put it after the survey.
- Before anything else: after another step, never as the first step straight after the trigger.
The caller's call is never held up: a Send SMS step never answers the call, the text goes out a moment later. After a Send SMS you can add only another Send SMS or a Schedule rule. Publish the workflow for it to work; a draft never sends. Editing and publishing workflows takes a role with that permission.

## Delay a text, send an SMS later or after some minutes or hours: the Schedule rule step
URL: https://callforges.com/workflows#schedule-rule
Ask: How do I delay an automatic text, to send it later?
Put a Schedule rule step in front of a Send SMS. Choose Send after, a number and Seconds, Minutes, Hours or Days. The most it takes is 3,600 seconds, 60 minutes, 24 hours or 30 days. Add several in a row if you wish, but never two Schedule rules next to each other: put a Send SMS between them. Only a Send SMS can come after a Schedule rule, so a Schedule rule with nothing after it stops you publishing ("Add a Send SMS step after ..."). It is a delay for the text, not business hours: for opening hours use a Time rule. If you edit or republish the workflow while a text is waiting, the text that waits is still sent as it was when the call came in. If you delete the workflow, every text of it still waiting is stopped and shows as not sent with the reason "the workflow was deleted"; texts already sent are not affected.

## Can't publish or attach a number to a workflow with SMS: the number can't text
URL: https://callforges.com/workflows#number-cannot-text
Ask: Why can't a workflow be published or a number attached when it says the number can't send texts?
A Send SMS step needs a number that can text. Publish and Attach numbers refuse when it can't, and name the number and the reason:
- A US number must be registered for texting first. Open the Compliance center, find Text messaging (A2P 10DLC), and add the number to an approved campaign. If a campaign is still in review wait for the carriers, if it was rejected fix it and submit again, and with no approved Business profile register your business first.
- A number from a country that can't text yet can't be used: pick another number in the Send SMS step, or take the step out.
- If Send SMS is set to Incoming call number, every number attached to the workflow must be able to text; remove the ones that can't, or choose one Fixed number that can.
- If the step says Choose the number to text from, the fixed number was deleted or never chosen.
- If it says "We couldn't check which numbers can text. Try again in a moment.", just try again; nothing was changed.
- If Send SMS shows "Not included in the trial" or "Contact support to enable this", texting is switched off for your workspace: choose a plan, or contact support.
Saving a draft always works; the check runs when you publish or attach a number. Moving a number back to the System default is never refused.

## Insert the caller's name in a workflow text: fields and the fallback when a name is missing
URL: https://callforges.com/workflows#text-fields
Ask: What fields can I use in a workflow text, and what if the name is missing?
In the Send SMS message click Insert field and pick one:
- First name, Last name, Email and Company: the caller's, when the number is one of your contacts.
- User first name and User last name: the user who answered the call.
Each inserted field has a fallback box, the words used when the field is empty: First name with the fallback "there" reads "Hi there" for a caller who isn't a contact. A field is written between double curly brackets and its fallback follows a bar, such as {{company|your company}}. A field with no value and no fallback is left blank. Names must match exactly, capitals included, so use Insert field rather than typing: a made-up field isn't a field, and Publish stops with "isn't a field we know". The fields are filled in when the text is sent. If the text is empty once they are filled in, it isn't sent.

## Did the workflow text send? See a workflow text sent, failed or waiting: the call's journey and Sent by workflow
URL: https://callforges.com/workflows#text-status
Ask: Did a workflow text send, and where is that shown?
Open the call in Call History: its journey lists a row for each Send SMS step, with the status (Scheduled for ... while it waits, Sent or Failed) and, when it failed, the reason. In Messages the text sits in the contact's conversation, labelled "Sent by workflow" and the workflow's name. A text can fail because the caller's number was hidden, the contact opted out by replying STOP, you ran out of credits, texting was switched off, or the number can't text. If the carriers' texting can't be reached the text is tried again for up to 24 hours before it fails.

## Workflow text and SMS cost and limits: does every caller get one, credits, no pictures
URL: https://callforges.com/workflows#text-cost
Ask: How much does a workflow text cost, and does every caller get one?
A workflow text is an ordinary outbound text: it costs credits like a text you send from Messages, and a caller who replied STOP isn't texted. Every call that reaches the Send SMS step sends one text: there is no limit per caller, so someone who phones five times gets five texts. A step sends one text per call. A workflow text can't carry a picture or other attachment yet, and plain text only, up to 1,600 characters. Texts waiting for a later time don't charge until they are sent.
