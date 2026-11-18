Surface: app
# In the app: call statuses in Call Logs (written from the app's own screens, 31 October 2026)

## Call statuses in Call History: the All, Completed, Missed and Voicemail tabs
URL: https://callforges.com/call-logs#tabs
Ask: What do the All, Completed, Missed and Voicemail tabs in Call Logs show?
Call Logs opens the Call History page. Its tabs:
- All: every call your team placed or received.
- Completed: the call connected and the conversation ended normally.
- Missed: it never became a conversation: no answer, busy, failed or canceled, in either direction. A missed call's icon is red.
- Voicemail: an answering machine picked up, you dropped a voicemail, or a caller left one.
The More menu next to the tabs picks one status instead: Busy, No answer, Failed, Canceled, In progress or Ringing (Any status clears it).

## Call statuses in Call History: what each call status means, Connected, Completed, No answer, Busy, Failed and Canceled
URL: https://callforges.com/call-logs#outcomes
Ask: What does No answer mean in Call Logs?
The Outcome column of Call Logs shows each call's status:
- Completed: answered, then ended normally. The call page reads Connected.
- No answer: it rang and nobody picked up, including when you clicked End while it was still ringing.
- Busy: the other line was busy.
- Failed: the number couldn't be reached, the carrier refused the call, or it was never confirmed and was not answered.
- Canceled: stopped before anyone answered, for example because another contact answered first in a parallel campaign or the campaign was stopped.
- Cancelled by user: an older call (before 30 October 2026) that the user hung up while it rang; newer ones read No answer.
- Voicemail: the call is in the Voicemail tab. A Machine tag means machine detection heard an answering machine.
- In progress, Ringing or Dialing: the call is still live.
On the call page, every missed call (busy, failed, no answer or canceled) reads Missed in the header.

## How a call ended: the sentence on the call page
URL: https://callforges.com/call-logs#how-it-ended
Ask: What does "Your connection dropped" mean on a call?
The call page's Insights tab says how the call ended, and the timeline ends with the same sentence. It says You only to the call's own user; others see the teammate's name.
- "You ended the call after 3:12." You clicked End during the conversation. "You hung up while it rang." You clicked End before an answer.
- "The contact ended the call…" or "The caller ended the call…": the other side hung up.
- "Your connection dropped…": your own internet or browser line dropped. A connection code under it is for support.
- "Nobody answered. It rang for the full N s.": it reached the ring limit.
- "The contact's phone was unavailable." The phone was off or unreachable. "The contact declined the call." They rejected it.
- "The call reached its 2-hour limit." The longest a call can last.
- "You left a voicemail." Drop voicemail was used. "An answering machine picked up." or "The caller left a voicemail."
- "You transferred the call." (also after a consult, or merged with the transfer target).
A small line such as "carrier code 487" under the sentence is for our support team.

## How a call ended: when nobody was rung or a call was stopped
URL: https://callforges.com/call-logs#not-connected
Ask: Why does a call say nobody was rung?
- "The line was busy." "The number could not be reached." "The carrier ended the call." "The call never started ringing."
- "The campaign was stopped, which ended the call." "Another contact answered first, so this ring was stopped." "The contact answered, but no user was free to take the call."
- "The caller hung up before anyone answered." "The user declined the call."
- "Nobody was set to take calls on this number." "Nobody who could take the call was online." "The user wasn't available", was outside their working hours, or was on another call or wrapping up, so nobody was rung.
- "Incoming calls were paused on this number." "The call's workflow ran too many steps and was stopped." "The forward was stopped: it would have come back to this number."
- For a menu, extension or queue step: no key or a wrong key was pressed, the wait ran out, the queue was full, or "The caller asked for a callback."
- "Billing didn't allow this call." or "The trial's calling minutes ran out.": see the billing statuses.
- "We couldn't confirm yet how this call ended.": the final status has not arrived yet.

## Call direction, type and the call page's details: the Outbound or Inbound pill, Manual dial or Campaign card, the Journey
URL: https://callforges.com/call-logs#details
Ask: What do the Call type, Ring time and Answered by fields mean?
- Outbound: you placed the call. Inbound: someone called your number. The call page shows a status pill (Connected, Missed, Voicemail, No answer…) and a direction pill (Outbound in blue, Inbound in violet) on every section, its Details card lists Direction, Status and Call type, a manual dial has no Campaign card, and the Journey starts with Outbound call or Inbound call. The User column reads Placed by, Answered by, Missed by, Voicemail for or Forwarded from.
- Call type: Manual (dialed by hand) or Campaign (a Power or Parallel campaign dialed it); inbound calls show a dash. A Transferred pill means a transfer completed, and Conference means the call was merged into a three-way call. The Call type filter has Manual, Campaign, Transfer and Conference.
- Ring time: the seconds from dialing to the answer or the end.
- Answered by: Human or Machine, as machine detection heard it.
- A transfer's steps read Starting, Ringing, Consulting, Conference, Handed over, Cancelled or Failed; a failed target reads No answer, Line was busy, Could not connect, Call was cancelled or Answered but never joined the call.
- A queue callback reads Requested, Completed or Not completed with the reason.
- Other filters: Direction, Duration (Under 30s, 30s to 2m, 2 to 5m, Over 5m, or your own), Has recording, Has transcript and Not rated.

## Minimize the dialer panel during a live call, shrink it to a bar, and open it again
URL: https://callforges.com/call-logs#dialer-minimize
Ask: Can I minimize or minimise the dialer during a call?
Yes, you can minimize (minimise) it. The dialer has a minimize button (−) beside its close button. It shrinks the panel to a small bar, Dialer or Live call, so it no longer covers the page; a live call carries on while it is minimized. Hold and move the minimized dialer bar to put it anywhere on the screen; the dialer opens there and keeps that place when you change pages. When no call is live the bar also has a close button (✕) that closes the dialer. Click the bar, or Dial in the header, to open the full dialer again. Calling a contact or a number from another page (Call in a conversation, Call back in Call History) opens it in full too. You can't close the dialer during a call, but you can minimize it.
