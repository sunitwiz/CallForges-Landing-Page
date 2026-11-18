Surface: app
# In the app: campaign and lead statuses (written from the app's own screens, 31 October 2026)

## Campaign statuses: Draft, In progress, Paused, Completed and Ended
URL: https://callforges.com/campaigns#statuses
Ask: What do the campaign statuses Draft, In progress, Paused, Completed and Ended mean?
- Draft: created, nothing dialed yet. Start Campaign begins dialing.
- In progress (the Active tab of the list): started. It dials whenever someone has a dialing session open on it.
- Paused: no new calls. A call already on the line finishes, and Resume carries on from the next lead not yet called. A campaign also pauses when you choose Pause and edit, when the tab is closed, reloaded or left idle, when your credits run out, or when the campaign's number is deleted.
- Completed: every lead is settled and the campaign finished by itself. It can't be started again. The header adds "All contacts dialed", "All contacts settled" (some leads were skipped or blocked) or "Nothing to dial". A running campaign whose leads are all settled shows "Nothing left to dial" with Close out, which completes it.
- Ended: someone clicked Stop or End session. Leads not called yet become Skipped, and an ended campaign can't be started again.
- Not started (Progress column): no lead has been worked yet.

## Campaign lead statuses: Pending, Ringing, In progress, Completed and Voicemail
URL: https://callforges.com/campaigns#lead-statuses
Ask: What do the lead statuses Pending, Ringing and Completed mean?
Each lead in a campaign's lead list shows one status, and the Status filter lists the ones the campaign has:
- Pending: waiting for its turn.
- Ringing: being dialed now.
- In progress: the lead answered and the call is live.
- Completed: the lead answered and the call has ended.
- Voicemail: the call reached a voicemail box and no message was left.
- Voicemail dropped: a recorded message was left on the voicemail, from the parallel dialer's automatic drop or the Drop voicemail button.

## Campaign lead statuses: No answer, Cancelled, Skipped, Do not call, Out of timezone and Insufficient credits
URL: https://callforges.com/campaigns#lead-not-reached
Ask: What does Out of timezone mean on a lead?
- No answer: it rang and nobody picked up. Busy: the line was busy. Failed: the call could not be connected.
- Cancelled: the call was cut before the lead was reached, for example because another lead answered first in the parallel dialer, the campaign was stopped, or you chose Pause now. "N re-dials left" under it means the lead will be called again.
- Cancelled by user: you hung up before the lead answered; it is not called again.
- Skipped: never called, because the campaign was stopped first, the contact was deleted, it had no number to call, or it reached the limit of attempts.
- Do not call: the number is on your Do Not Call list and the campaign follows it. The row is greyed out and never dialed.
- Out of timezone: the lead's turn came outside their local calling hours, so it was skipped and is not called again in this campaign. Start campaigns during your leads' hours.
- Insufficient credits: the call was refused for billing, because the destination isn't covered or your workspace ran out of credits (which also pauses the campaign).
- Deleted (a tag beside the name): the contact was deleted.

## Campaign dialing sessions: Power, Parallel and the session strip
URL: https://callforges.com/campaigns#session
Ask: What do READY, NOT DIALING and Wrapping up mean on a campaign?
Power calls one lead at a time; Parallel rings several leads at once and connects you to the first who answers. The strip on a campaign page shows:
- READY: a draft ready to start. PAUSED: paused, with Resume and Stop. NOT DIALING: the campaign is running but nobody is dialing it in this tab (for example after a reload); click Resume dialing.
- Power Dialing… or Parallel Dialing…: calling now. Parallel shows how many lines are ringing; the first pickup wins and the other lines are released.
- Connecting…: your own line is connecting before any lead rings (parallel).
- Connected: the lead is on the line.
- Wrapping up…: the call ended and a countdown runs before the next call ("Next call in N secs", with +10s, Skip Cooldown and Log outcome). It waits while the post-call form is open, and with auto-advance off it shows Dial next.
- Pausing…: you chose Pause after this round; the ringing lines finish first. Pause now cuts them at once.
