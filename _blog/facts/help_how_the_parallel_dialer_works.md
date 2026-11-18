# Help Center: How the parallel dialer works (from https://callforges.com/help/articles/how-the-parallel-dialer-works, updated 31 October 2026)

## How the parallel dialer works: before you start
URL: https://callforges.com/help/articles/how-the-parallel-dialer-works#before
Ask: How does the parallel dialer work?
The parallel dialer rings several leads from a campaign at the same time and connects you to the first person who picks up. Use it on large lists where most calls go unanswered, so you spend your time talking instead of waiting.
- Campaigns, including the parallel dialer, start with your paid plan. During the free trial the Campaigns page reads Campaigns start with your plan. See pricing for the plans that include it.
- Users with the Owner, Admin or Member role can run a campaign. A custom role needs the permission to run campaigns.
- The campaign needs a phone number to call from and a list of leads. See Create a campaign.
- Allow your browser to use your microphone, and keep the CallForges tab open while you dial.
- One user runs a parallel campaign at a time.

## How the parallel dialer works: set up a parallel campaign
URL: https://callforges.com/help/articles/how-the-parallel-dialer-works#set-up
Ask: How do I set up a parallel campaign?
1. Open Campaigns and click Create campaign.
2. Under Dialer Type, choose Parallel Dialer.
3. In Number of parallel calls, choose how many leads ring at once.
4. In Re-dial cancelled leads, choose how many times a lead the dialer cut is called again. Never is the default. See “Leads the dialer cuts” below.
5. Optionally, pick a Voicemail drop. It plays when an answering machine picks up, then the dialer moves on.
6. Under Call Via, pick the number to call from, and set the Cooldown duration between two calls.
7. Add your leads and click Create Campaign.
The voicemail drop plays only when Auto machine detection is on in Settings → Dialer settings. When it is off, an answering machine that picks up counts as an answer and is connected to you.

## How the parallel dialer works: what happens in each round
URL: https://callforges.com/help/articles/how-the-parallel-dialer-works#round
Ask: What happens in each round of the parallel dialer?
1. On the campaign page, click Start Campaign. Your own line connects first, so the dialer only rings leads while you are ready to talk.
2. The dialer rings the next leads on the list. The session bar shows how many lines are live, for example 3/3 lines, and the Active batch table under it shows each line and its status.
3. When a line ends without an answer, the dialer rings the next lead in its place, so the batch stays full.
4. The first person who answers is connected to you. The other lines are hung up at once: First pickup wins. Other lines release automatically.
5. The session bar reads Connected with a timer, and CallForges opens the lead's contact page.

## How the parallel dialer works: after each call
URL: https://callforges.com/help/articles/how-the-parallel-dialer-works#after-call
Ask: What happens after each parallel call?
- When the call ends, the post-call form opens so you can log the outcome and notes. If it doesn't open, click Log outcome.
- The countdown shows Next call in N secs. Click it to Skip Cooldown, or click Extend for more time.
- The next round starts when the countdown ends and the post-call form is closed.
- When no leads are left, the session ends and the campaign is completed.
If your workspace runs out of credits, the campaign pauses after the current round. Lines already ringing finish, and you can still be connected to a lead who answers. Add credits, then click Resume. See Add credits.

## How the parallel dialer works: leads the dialer cuts
URL: https://callforges.com/help/articles/how-the-parallel-dialer-works#cancelled
Ask: Why does the parallel dialer cut some leads?
The dialer hangs up a ringing lead, and marks it as cancelled, when:
- another lead answered first,
- the lead answered but nobody was free to take the call, or
- you chose Pause now while the line was ringing.
A cancelled lead goes back to the bottom of the list while it is within the Re-dial cancelled leads setting. With Never, it is not called again. Cancelled leads show as Cancelled on the campaign's leads table.

## How the parallel dialer works: pause, resume and end
URL: https://callforges.com/help/articles/how-the-parallel-dialer-works#pause-end
Ask: How do I pause, resume or end a parallel session?
- Click Pause while lines are ringing and CallForges asks When to pause:
  - Pause now: hang up the lines that are ringing.
  - Pause after this round: let the ringing lines finish. If someone answers, you are connected. No new calls.
- Click Pause during a conversation and the campaign pauses without asking. Your call is never cut.
- Click Resume to start a new round.
- Click End session, then End Campaign, to stop. All ringing lines are hung up. You can restart the campaign later.
- If you close or reload the tab, the campaign pauses and ringing lines are hung up. Open the campaign and click Resume.
More detail is in Start, pause, resume or stop a campaign.

## How the parallel dialer works: incoming calls during a session
URL: https://callforges.com/help/articles/how-the-parallel-dialer-works#incoming
Ask: Do incoming calls ring me during a parallel session?
Incoming calls don't ring you while your line is connecting, while leads are ringing, or while you are on a call. If you turned on Ring me during a live call in Settings → User settings, a call to a workflow's Ring step shows you who is calling; to take it, end your call and pause the campaign. When the session is paused, in wrap-up or counting down, incoming calls ring you only if Allow incoming calls while busy is on in Settings → User settings. Answering one pauses your session.
