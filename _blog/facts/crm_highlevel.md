# Help Center: HighLevel integration (from https://callforges.com/help/articles/highlevel-integration, updated 7 November 2026)

## HighLevel integration: what it does and before you start
URL: https://callforges.com/help/articles/highlevel-integration#before
Ask: What does the HighLevel integration do?
The HighLevel integration logs every call you make or take in CallForges on the matching contact in a HighLevel sub-account. The call goes into the contact's conversation with a note holding its details, or is written as a note alone. It also lets you browse your HighLevel contacts inside CallForges and import them as contacts to call. Before you start: you need a CallForges owner or admin role to connect, configure or disconnect HighLevel (other users don't see the integration settings, but their calls are logged once they are mapped), and a HighLevel login that can open the sub-account you want to connect. One CallForges workspace connects to one HighLevel sub-account (also called a business account), so an agency with several sub-accounts connects each one from its own CallForges workspace.

## Connect HighLevel
URL: https://callforges.com/help/articles/highlevel-integration#connect
Ask: How do I connect HighLevel?
In CallForges, open Integrations and choose HighLevel. Click Connect, then Continue to HighLevel. Sign in to HighLevel if asked, choose the sub-account and approve the permissions. You come back to the Connection tab, which shows the sub-account, who connected it and when. If the sub-account is already connected to another CallForges workspace, CallForges asks before moving it, and that other workspace then stops logging calls to HighLevel. If you connect a different sub-account to this workspace, CallForges asks you to confirm the switch. If HighLevel later asks CallForges to sign in again, the Connection tab shows Reconnect; calls made in the meantime wait and are sent once you reconnect.

## HighLevel: agency logins and installs from HighLevel
URL: https://callforges.com/help/articles/highlevel-integration#other-ways
Ask: How do I connect HighLevel with an agency login?
If you sign in with an agency login, CallForges asks which sub-account to connect: pick one under Sub-account, searching by name if the list is long, and click Connect. Only that sub-account is connected, never the rest of the agency. To install from HighLevel with an agency login, use Agency View: click Install, then Proceed to Install, choose the sub-account at Select Sub-Account, click Continue, then Allow & install. The Install button in Sub-Account View does nothing, and the agency needs at least one sub-account first: without one, Proceed to Install does nothing. If you start the install from HighLevel, HighLevel sends you to CallForges, and after you sign in CallForges shows the HighLevel sub-account and the CallForges workspace you have open. Nothing is connected until you click Connect. If you belong to several workspaces, click Switch to connect a different one. Cancel connects nothing, and you can start again from Integrations. To install from HighLevel's Marketplace, use Agency View, click Install and Proceed to Install, then select the sub-account. The agency needs at least one sub-account first: without one, Proceed to Install does nothing.

## HighLevel: map users
URL: https://callforges.com/help/articles/highlevel-integration#map-users
Ask: How do I map users to HighLevel?
Calls are logged only for CallForges users who are matched to a HighLevel user. Open the Map users tab, click Auto-map by e-mail, choose the HighLevel user for anyone left (or leave them on Not mapped), and click Save mappings. Calls by an unmapped user are skipped and shown in Activity with the reason; use Show unmapped only to find who still needs a match, and after mapping them you can send their skipped calls from Activity.

## HighLevel: call logging settings
URL: https://callforges.com/help/articles/highlevel-integration#logging
Ask: Which HighLevel call logging settings can I change?
Open the Settings tab, change what you need and click Save changes. For outbound answered calls, outbound unanswered calls, inbound answered calls, missed calls and voicemails you choose separately:
- Call activity: the call is added to the contact's conversation, with a note holding its time, duration, outcome, disposition and call notes, and the contact is tagged with the disposition and the call's outcome. If HighLevel refuses the conversation entry, the call is still saved as a note on the contact.
- Note: a note on the contact with the same details written as text. Nothing is added to the conversation and no tag is added.
- Don't log: nothing is written to HighLevel.
The call itself happens in CallForges, so these calls may not appear in HighLevel's own call reports. Link to the recording and Link to the transcript add a link to the call's page in CallForges, and only signed-in users of your workspace can open them. AI summary adds the call's AI summary, when it has one: summaries are made for English calls long enough to summarise, on plans that include them. Save the recording in HighLevel attaches the recording to the call's entry in the conversation. It's off by default and works only while Secured recording links is off in Settings → Call settings. The attachment uses a share link that stops working after a time; the link to the call's page keeps working. Leave Log calls on all numbers on to log every number your workspace owns, or turn it off to pick numbers. A call is written to HighLevel within a few minutes of ending, so the disposition and notes added after the call are included. If the call is changed later, the same note is updated and the entry in the conversation stays as it was.

## HighLevel: outcome tags
URL: https://callforges.com/help/articles/highlevel-integration#outcome-tags
Ask: Which HighLevel tags does CallForges add for a call's outcome?
With Call activity, every logged call tags the contact with its outcome: callforges-answered, callforges-no-answer, callforges-missed, callforges-busy, callforges-failed, callforges-cancelled or callforges-voicemail. Use these tags to start a HighLevel workflow, for example a text after a missed call. CallForges never takes an outcome tag away for good, so a contact can hold several. If the contact already holds the tag from an earlier call, CallForges removes it and adds it again for the new call.

## HighLevel: follow-up tasks and the last outcome
URL: https://callforges.com/help/articles/highlevel-integration#follow-ups
Ask: Can CallForges add a HighLevel task after a missed call?
Yes. In Settings, turn on Add a follow-up task on a missed call: each missed call or voicemail logged as Call activity gets one task to call back, due a day later and assigned to the mapped HighLevel user. Turn on Save the last outcome on the contact to fill a Last call outcome field on the contact with each call's outcome. Both are off by default. CallForges creates the field the first time it needs it. Connections made before this feature need to reconnect to fill the field; the call is logged either way.

## HighLevel: disposition tags
URL: https://callforges.com/help/articles/highlevel-integration#logging
Ask: What happens to the HighLevel tag when a disposition changes?
With Call activity, a call that has a disposition tags the contact with it. If the disposition changes later, CallForges replaces the tag it added with the new one. If the disposition is cleared, CallForges removes the tag it added. CallForges only ever removes a tag it added itself: a tag the contact already had, and every other tag on the contact, is never touched.

## HighLevel: the caller's name when a call rings
URL: https://callforges.com/help/articles/highlevel-integration#caller-name
Ask: Does CallForges show the HighLevel contact's name when a call rings?
When someone who isn't in your CallForges Contacts calls one of your numbers, CallForges looks the number up in HighLevel while the call rings, and the name appears on the ring card a moment later. The ring never waits for the answer: if HighLevel is slow or busy, or several contacts share the number, the card shows the number alone. Our own saved contact always comes first. CallForges keeps the answer in memory for a few minutes and doesn't save it.

## HighLevel: unknown numbers
URL: https://callforges.com/help/articles/highlevel-integration#unknown
Ask: What happens when a number isn't in HighLevel?
CallForges finds the HighLevel contact by phone number, including a contact's additional phone numbers. In Settings → General: Create a HighLevel contact if the number isn't found (on by default; when off, the call isn't logged and Activity shows that the contact wasn't found); Use the phone number as the new contact's name (when off, the new contact is named "Unknown caller"; applies only while creating contacts is on); Add HighLevel contacts to CallForges Contacts (off by default; adds someone reached by a call to your CallForges Contacts and links the two). If HighLevel refuses a new contact, for example because the sub-account doesn't allow duplicates, Activity shows the reason.

## HighLevel: import contacts
URL: https://callforges.com/help/articles/highlevel-integration#contacts
Ask: How do I import HighLevel contacts?
The Contacts tab lists the contacts in your HighLevel sub-account who have a phone number, read live from HighLevel, with their company and whether they are already in CallForges. Search, or filter by a HighLevel tag with All lists; Smart Lists aren't available here. Select contacts, or import everyone in the chosen tag, then click Import selected or Import all and choose an existing CallForges list or name a new one. Imported contacts become CallForges contacts linked to their HighLevel records, ready to call from a campaign or the dialer. Click Sync now to bring in later changes. CallForges reads HighLevel only when you open the tab, import or sync.

## HighLevel: log past calls
URL: https://callforges.com/help/articles/highlevel-integration#past-calls
Ask: How do I log past calls to HighLevel?
Connecting logs the calls that happen from then on. To send earlier calls, use Settings → Log past calls: under How far back pick a date range (it reaches back up to 1 year), click Log past calls (CallForges counts the calls first and shows how many would be logged and which users' calls would be skipped because they aren't mapped), then confirm. A progress bar shows the calls being sent. Past calls go in the background and never delay new calls. To stop a run, open Activity, go to the Queued tab and click Stop queued.

## HighLevel: activity and paused logging
URL: https://callforges.com/help/articles/highlevel-integration#activity
Ask: Where do I see the calls sent to HighLevel?
The Activity tab lists every call and what happened to it in HighLevel: logged, queued, failed or skipped, with the reason. You can retry one call, or use Retry all for every failed or skipped call that matches your filters. Never logged lists calls that were never sent to HighLevel. If HighLevel's limits are reached or HighLevel can't be reached, CallForges pauses and sends the waiting calls once HighLevel accepts requests again. If HighLevel says the sub-account isn't active, the page shows Paused · account inactive; CallForges keeps retrying by itself and you don't need to reconnect. Nothing is lost.

## HighLevel: disconnect
URL: https://callforges.com/help/articles/highlevel-integration#disconnect
Ask: How do I disconnect HighLevel?
Open Integrations → HighLevel, click Disconnect and confirm. Calls stop being logged to HighLevel and the user mapping is cleared. CallForges uninstalls itself from this sub-account only, never from the agency or its other sub-accounts. Call logs already written stay in HighLevel, and your logging settings are kept in case you reconnect. If HighLevel doesn't confirm the removal, CallForges shows "Disconnected here, but HighLevel did not confirm it" and asks you to remove CallForges' access in HighLevel's settings too. You can also uninstall the app from HighLevel at any time; CallForges then shows Reconnect.

## HighLevel: what CallForges can access
URL: https://callforges.com/help/articles/highlevel-integration#access
Ask: What can CallForges access in HighLevel?
When you connect, CallForges asks HighLevel for these permissions on your sub-account: contacts.readonly (find the contact by phone number and list contacts), contacts.write (write notes and tags, and create a contact for an unknown number when that setting is on), conversations.readonly, conversations.write and conversations/message.write (add the call to the contact's conversation), users.readonly (Map users and Auto-map by e-mail), locations.readonly (identify the sub-account), locations/tags.readonly (the tag filter in the Contacts tab), locations/customFields.readonly and locations/customFields.write (the Last call outcome field), oauth.write (remove CallForges from the sub-account when you disconnect, and connect the sub-account you pick after an agency login) and oauth.readonly (list an agency's sub-accounts). Your HighLevel access is stored encrypted and used only for these features. See the Privacy Policy.
