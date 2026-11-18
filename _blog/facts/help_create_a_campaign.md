# Help Center: Create a campaign (from https://callforges.com/help/articles/create-a-campaign, updated 31 October 2026)

## Create a campaign: before you start
URL: https://callforges.com/help/articles/create-a-campaign#before
Ask: What is a campaign?
A campaign is a list of leads that CallForges dials for you, one after another. You choose how it dials, which number it calls from, who it calls and when.
- Your role needs Create and edit campaigns. Owners, admins and members have it by default.
- You need an active phone number. If you have none, the form shows You need an active phone number to place calls. with Get a number.
- Have your leads ready: a contact list in CallForges, or a CSV file with at least a phone number column.

## Create a campaign: create the campaign
URL: https://callforges.com/help/articles/create-a-campaign#create
Ask: How do I create a campaign?
1. Open Campaigns and click Create campaign.
2. The form opens as Untitled Campaign. Click the name at the top to rename it.
3. Under Dialer Type, choose:
  - Power Dialer: calls one lead at a time.
  - Parallel Dialer: calls several leads at once and connects you to the first who answers. Then set Number of parallel calls, Re-dial cancelled leads and, if you like, a Voicemail drop to play when a voicemail box answers.
4. Under Call Via, pick the number your leads see. Your own numbers are offered first.
5. Set Cooldown duration between two calls, in seconds.
6. Under Audience, add your leads (see below).
7. Choose the options at the bottom (see below).
8. Click Create Campaign.
If something is missing, CallForges tells you what to add, such as a contact list or a valid calling window. The new campaign opens as a Draft. Nothing is dialed until you start it.
You can't change the dialer type after the campaign is created.

## Create a campaign: add your leads
URL: https://callforges.com/help/articles/create-a-campaign#audience
Ask: How do I add leads to a campaign?
Select a list uses a contact list you already have:
1. Click Select a list.
2. Open List and pick one. Each list shows how many contacts it holds. Choose Create new list to make one here.
Upload leads imports a CSV file:
1. Click Upload leads and choose your .csv file. CallForges detects the columns. A file saved from Excel works as it is: columns separated by commas, semicolons or tabs, and names with accents (José, Müller) whether Excel saved it as CSV or CSV UTF-8.
2. Check how each column is mapped. Rows without a phone number are skipped. Existing contacts are matched by phone, then by email.
3. Under Add to, choose New list and name it, or Existing list.
4. Under Existing contacts, choose Update with CSV values or Keep as-is, only add to list.
5. Click the Import button, which shows how many contacts it will import, then Done. That list is now the campaign's audience.

## Create a campaign: recording, Do Not Call and calling hours
URL: https://callforges.com/help/articles/create-a-campaign#options
Ask: How do recording, Do Not Call and calling hours work in a campaign?
- Enable default call recording for all calls in this campaign: records every connected call. It starts from your caller number's own recording setting.
- Respect Do-Not-Call (DNC) lists: contacts on your Do Not Call list are not dialed. Their status shows Do not call.
- Use the lead/contact's local time zone to call during their active hours: pick the Active Days, a Start Time and an End Time. These are the lead's own local hours.
When a lead's turn comes outside their hours, the lead is skipped and shows Out of timezone. It is not called again in this campaign. A lead with no time zone is always called. A US number uses its area code's time zone.
Start the campaign during your leads' hours, or many of them may be skipped as Out of timezone.

## Create a campaign: change the campaign later
URL: https://callforges.com/help/articles/create-a-campaign#after
Ask: Can I change a campaign later?
On the campaign's page:
- Edit opens Edit campaign. Use Add a list or Pick contacts to add leads, and drag rows to change the dial order. Leads are dialed top to bottom. Click Save. A contact already in the campaign is not added twice.
- Settings opens Campaign settings: the name, the Caller number, Dialing behavior (Ring timeout, Wrap-up time, Cooldown between calls, Record calls, Skip Do-Not-Call contacts, and Auto-advance on a power campaign) and the Calling window. Click Save changes.
If the campaign is running, Edit and Settings first ask Pause campaign to edit?. The current call finishes, and nothing new is dialed until you resume. On a completed or ended campaign, Edit is read-only and Settings is greyed out.

## Create a campaign: call the same leads again
URL: https://callforges.com/help/articles/create-a-campaign#follow-up
Ask: How do I call the same leads again?
To call back leads from an earlier campaign, for example everyone who didn't answer:
1. Open the campaign and tick the leads in its list. You can filter by status first.
2. Click Create campaign. You can also use the ··· menu and Create campaign from leads….
3. The form opens with a "follow-up" name, the same settings and the chosen contacts as the audience. Change anything you need and click Create Campaign.
Next: Start, pause, resume or stop a campaign.
