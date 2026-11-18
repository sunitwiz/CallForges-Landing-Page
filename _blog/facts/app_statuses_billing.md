Surface: app
# In the app: billing, invoice and credit statuses (written from the app's own screens, 31 October 2026)

## Billing statuses: Free trial and Trial ended
URL: https://callforges.com/billing#trial-status
Ask: What does the Free trial status on Billing mean?
The pill under Plan details on Billing → Overview shows your workspace's billing status.
- Free trial · N days left, ends <date>: the free trial, with no card. Calls only to and from the US, Canada, the UK and Australia, 50 outbound and 50 inbound trial minutes, and calls of up to 5 minutes each. No campaigns, no invites and no adding credits during it. Add a card or subscribe to lift the limits.
- Free trial with a card added: the trial limits are lifted, and the banner reads "Your plan starts on <date>. Your card is charged then."
- Trial ended: the trial ended without a plan. Calls can't be made, incoming calls are refused and campaigns are paused; your contacts and call history are kept. Choose a plan to carry on.
When a trial's outbound or inbound minutes are used up, only that direction stops until you choose a plan.

## Billing statuses: Active, Past due, Disabled and Cancelled
URL: https://callforges.com/billing#plan-status
Ask: What does Past due mean?
- Active: everything works. Calls use your free minutes first, then credits. If a cancellation is scheduled it still reads Active, with "Ends on <date>".
- Past due: a renewal charge failed. Calls, incoming calls and campaigns still work, but you can't invite users or buy numbers until the open invoice is paid. The banner reads "Payment failed. Pay by <date> or this workspace will be suspended." Pay within 15 days, or update your card.
- Disabled (the rest of the app says suspended): the 15 days passed without payment. Calls, campaigns and incoming calls are paused until the amount due is paid; a call already in progress is not cut. Paying turns the workspace back on by itself.
- Cancelled: the subscription ended at the end of its period. Like Trial ended, calls are stopped, incoming calls are refused and campaigns are paused. Choose a plan to carry on.

## Billing statuses: the banners and a locked workspace
URL: https://callforges.com/billing#banners
Ask: What does Suspended mean on a workspace?
- "This workspace is suspended for non-payment. Pay the amount due to turn it back on.": the payment is overdue past its 15 days. Owners and admins see Pay now; other users are asked to have the workspace owner pay. While a payment clears it reads "Payment processing. We'll unlock as soon as it clears."
- "Your trial has ended" or "Your subscription has ended. Choose a plan to keep using CallForges.": calls and campaigns are paused until an owner or admin chooses a plan.
- "Your credits are at 0. Recharge to keep calling.": see what happens when credits run out.
- "This workspace has been disabled" (contact support) and "This workspace is closed" are set by our team, not by billing.
- In the workspace switcher, Suspended means non-payment, Disabled means our team turned it off, and Closed means it was closed.

## Invoice statuses: Open, Overdue, Paid, Cancelled and Refunded
URL: https://callforges.com/billing/invoices#statuses
Ask: What do the invoice statuses on Billing → Invoices mean?
- Open: not paid yet and not past its due date.
- Overdue: unpaid and past its due date. Pay it with Pay now on the banner or the invoice.
- Paid: paid.
- Cancelled: the invoice was voided and nothing is owed, for example a trial-end charge that was never paid.
- Refunded or Partly refunded: all or part of the payment was returned.
A failed card charge leaves the invoice Open or Overdue, and the invoice page reads "We couldn't charge your card. Pay now to settle this invoice." Each payment row on an invoice reads Paid, Not charged, Pending or Refunded.

## Credit statuses: when your credits reach 0
URL: https://callforges.com/billing#credits-zero
Ask: What happens to calls when credits reach 0?
The Credits pill in the sidebar turns red at 0 or below. At 0:
- calls covered by your free minutes keep working;
- an outgoing call that needs credits is not placed: you see "You're out of credits" with Add credits (users without billing access are asked to have the workspace owner add credits);
- a running campaign stops, and its leads not called yet stay in the queue; add credits to resume it;
- incoming calls still ring, so the balance can go below 0;
- new transcripts are skipped and read "Not transcribed because your credits were at 0."
During a free trial without a card you can't add credits: the Credits menu reads "Choose a plan to add credits".

## Usage balance: a graph or chart of credit use, credits spent and minutes used
URL: https://callforges.com/billing/usage#usage-charts
Ask: Can Usage balance show credit use and minutes as a graph or chart?
Billing → Usage balance shows Paid credit use and the Allocation log as charts first. A Chart | Table switch, before the Type and Event filters, flips each one to its table of rows; the page opens on Chart.
- Paid credit use: one bar per day (per hour for Today or Yesterday, per month for longer ranges and Any time), split by type in its own colour: Outbound call, Inbound call, Outbound SMS, Transcription, AI call summary and the rest. Above the chart are the totals for the range: Spent, Topped up, Refunded and Adjusted, the last two only when not zero. Spent is the charges; Topped up is the credits you bought; Refunded is the credits given back for a charge, for example a failed call; Adjusted is the credits our team added or removed by hand. The bars and the legend show the charges per type, before any refund. The legend under it lists each type with what it cost, largest first, four to a row. Point at, tap or tab to a bar to see that day's split.
- Allocation log: the minutes your calls used per day, split into Outbound calls and Inbound calls, with Minutes added and Minutes used above it. Filter Event to Minutes added to chart the minutes put into your pool instead; with one Event picked, only its total shows.
The Type, Event and date filters apply to the chart and the table alike, and the chart covers the whole date range, not only the rows on one page. Export still downloads the rows as a CSV.

## Usage balance: which call a charge was for, open Call #60 from a credit charge
URL: https://callforges.com/billing/usage#call-charges
Ask: Which call was this credit charge for?
In the rows of Paid credit use and the Allocation log, a call is named, for example "Outbound call · Call #60" or "Call #54". If your role can see every user's calls, click Call #60 to open that call's details in Call History, even when the call is older than the last 7 days; otherwise the call number is plain text. Rows for texts, top-ups and other charges have no call and no link.
