# Help Center: Build a call workflow (from https://callforges.com/help/articles/build-a-call-workflow, updated 31 October 2026)

## Build a call workflow: before you start
URL: https://callforges.com/help/articles/build-a-call-workflow#before
Ask: What does a call workflow do?
A workflow decides what happens when someone calls one of your numbers: which hours count as open, who rings and in what order, and where the call goes when nobody answers. One workflow can serve many numbers, and each number runs exactly one workflow.
- Users with the Owner or Admin role can create, edit, publish and delete workflows. Members can view them.
- Every new or ported number starts on Direct line, the System default: it rings the number's owner and teams, then goes to voicemail. You only need a workflow when you want something different.
- To change the Direct line itself, open it from Workflows and click Duplicate it to make changes.
- If Workflows reads Not available on your workspace, contact support to turn it on.

## Build a call workflow: create a workflow
URL: https://callforges.com/help/articles/build-a-call-workflow#create
Ask: How do I create a call workflow?
1. Open Workflows and click New workflow.
2. Pick a template, or Start from scratch, and click Use template:
  - Direct line: ring the number's owner, then take a voicemail.
  - Business hours + voicemail: ring the owner Monday to Friday, 9 to 5. At any other time, take a voicemail.
  - Business hours + forward: the same hours, then forward to a number you pick.
  - Single-level IVR menu: callers press 1 or 2, and each key rings the owner, then takes a voicemail.
3. Click the pencil next to the name to rename the workflow.

## Build a call workflow: add and set up steps
URL: https://callforges.com/help/articles/build-a-call-workflow#steps
Ask: How do I add and set up workflow steps?
A workflow starts with the Incoming call trigger. Click + under a step to add the next one. The menu shows only the steps that fit there; click View more blocks for the rest. Click a step to open its settings on the right.
- Time rule: Sends calls down different paths by day and time, in the time zone you pick. Calls outside every slot take At any other time.
- Date rule: Handles a holiday or other special date differently from Business days.
- Ring users or teams: Rings the number's owner, chosen users or teams. It has an Answered and an Unanswered path.
- Forward call: Sends the call to another phone number, such as a mobile or another office line. Enter it with its country code.
- IVR menu: Plays a menu and sends the caller down a path for each key they press, with a No valid key path.
- Extension message: Lets callers type a user's or team's extension to reach them directly.
- Audio message: Plays a message, typed, uploaded or recorded, then continues.
- Voicemail: Takes a message with the greeting and mailbox you choose.
- Queue: Holds callers with music or a message while your users are busy, and connects them in order. It goes on a ring step's Unanswered path.
- Post-call survey: After the call, asks the caller to rate it from 1 to 5 on their keypad.
A path with nothing after it ends the call. Click Add a note to leave a note for your team on the canvas. Use undo and redo if you change your mind.

## Build a call workflow: choose who rings
URL: https://callforges.com/help/articles/build-a-call-workflow#ring
Ask: How do I choose who rings in a workflow?
1. Click a Ring users or teams step.
2. Under Ring to, choose Number owner, Users or Teams, and add the users or teams.
3. Choose a Ringing order: Ring all (available users at once), Ring in order (top to bottom), Ring idle (whoever answered the fewest calls recently first) or Ring in round robin (starts after whoever answered last, so calls are shared evenly).
4. For teams, each team also has its own ring order: Ring all users, Ring idle first or Ring in round robin.
5. Set Ring for: how long each ring lasts before the next user or the Unanswered path.
CallForges skips users who aren't set to Available, are outside their working hours, are on a call or wrapping up, or don't have CallForges open. A user who turned on Ring me during a live call in Settings → User settings still rings while on a connected call or while their outgoing call rings, and answering ends that call. If nobody can take the call, it goes straight to the Unanswered path.

## Build a call workflow: save and publish
URL: https://callforges.com/help/articles/build-a-call-workflow#publish
Ask: How do I save and publish a workflow?
- Save draft keeps your changes. A draft never takes calls.
- Click Publish to make it live. If something needs fixing, Can’t publish yet lists each problem with its step. The problems button in the top bar shows the same list.
- The status reads Draft, Published, or Published · unpublished changes when you have saved edits that aren't live yet.
- Calls already in progress keep the version they started on. New calls use what you just published.

## Build a call workflow: put numbers on the workflow
URL: https://callforges.com/help/articles/build-a-call-workflow#numbers
Ask: How do I put a number on a workflow?
1. In the workflow, click Numbers. It is available once the workflow is published.
2. Pick the numbers and click Save numbers. A number already on another workflow moves to this one when you click Take off and save.
You can also start from the number: open Phone Numbers, click the number, open Call routing and click Change workflow, pick a published workflow and click Use workflow. Choose Direct line · System default to go back to the default. If you delete a workflow, its numbers move to the Direct line.
The Pause incoming calls switch under the workflow on Call routing stops the workflow from running: every incoming call on that number goes to voicemail until you turn it off.
