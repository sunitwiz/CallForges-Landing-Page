# Help Center: HubSpot integration (from https://callforges.com/help/articles/hubspot-integration, updated 22 October 2026)

## HubSpot integration: what it does and before you start
URL: https://callforges.com/help/articles/hubspot-integration#before
Ask: What does the HubSpot integration do?
The HubSpot integration logs every call you make or take in CallForges on the timeline of the matching HubSpot contact, as a HubSpot call or as a note. It also lets you browse your HubSpot contacts inside CallForges and import them as contacts to call. Before you start: you need a CallForges owner or admin role to connect, configure or disconnect HubSpot (other users don't see the integration settings, but their calls are logged once they are mapped); you need a HubSpot user who is allowed to install apps in the HubSpot account, such as a Super Admin; one CallForges workspace connects to one HubSpot account.

## Connect HubSpot
URL: https://callforges.com/help/articles/hubspot-integration#connect
Ask: How do I connect HubSpot?
In CallForges, open Integrations and choose HubSpot. Click Connect; HubSpot opens in the same tab. Sign in to HubSpot if asked, choose the HubSpot account, review the permissions and click Connect app (while the app is waiting for HubSpot Marketplace review, HubSpot may ask you to confirm that you want to install it). You come back to the Connection tab, which shows the HubSpot account, who connected it and when. If the HubSpot account is already connected to another CallForges workspace, CallForges asks before moving it, and that other workspace then stops logging calls to HubSpot. If HubSpot later asks CallForges to sign in again (for example after the app was uninstalled in HubSpot), the Connection tab shows Reconnect; calls made in the meantime wait and are sent once you reconnect.

## HubSpot: map users
URL: https://callforges.com/help/articles/hubspot-integration#map-users
Ask: How do I map users to HubSpot?
Calls are logged only for CallForges users who are matched to a HubSpot owner; the owner becomes the owner of the logged call in HubSpot. Open the Map users tab, click Auto-map by e-mail, choose the HubSpot owner for anyone left (or leave them on Not mapped), and click Save. Calls by an unmapped user are skipped and shown in Activity with the reason; use Show unmapped only to find who still needs a match, and after mapping them you can send their skipped calls from Activity.

## HubSpot: call logging settings
URL: https://callforges.com/help/articles/hubspot-integration#logging
Ask: Which HubSpot call logging settings can I change?
Open the Settings tab, change what you need and click Save changes. For outbound answered calls, outbound unanswered calls, inbound answered calls, missed calls and voicemails you choose separately:
- Call activity: a HubSpot call on the contact's timeline, with its direction, outcome, duration, owner, the disposition and the call notes. It counts in HubSpot's own call reports.
- Note: a note on the contact's timeline with the same details written as text.
- Don't log: nothing is written to HubSpot.
Link to the recording and Link to the transcript add a link to the call's page in CallForges; recordings and transcripts stay in CallForges and only signed-in users of your workspace can open them. AI summary adds the call's AI summary, when it has one: summaries are made for English calls long enough to summarise, on plans that include them. Leave Log calls on all numbers on to log every number your workspace owns, or turn it off to pick numbers. A call is written to HubSpot within a few minutes of ending, so the disposition and notes added after the call are included, and a later change updates the same HubSpot call or note.

## HubSpot: the caller's name when a call rings
URL: https://callforges.com/help/articles/hubspot-integration#caller-name
Ask: Does CallForges show the HubSpot contact's name when a call rings?
When someone who isn't in your CallForges Contacts calls one of your numbers, CallForges looks the number up in HubSpot while the call rings, and the name appears on the ring card a moment later. The ring never waits for the answer: if HubSpot is slow or busy, or several contacts share the number, the card shows the number alone. Our own saved contact always comes first. CallForges keeps the answer in memory for a few minutes and doesn't save it.

## HubSpot: unknown numbers
URL: https://callforges.com/help/articles/hubspot-integration#unknown
Ask: What happens when a number isn't in HubSpot?
CallForges finds the HubSpot contact by its phone or mobile number. In Settings → General: Create a HubSpot contact if the number isn't found (when off, the call isn't logged and Activity shows that the contact wasn't found); Use the phone number as the new contact's name (when off, the new contact is named "Unknown caller"; applies only while creating contacts is on); Add HubSpot contacts to CallForges Contacts (off by default). New contacts count toward your HubSpot account's contact limits like any other contact.

## HubSpot: import contacts
URL: https://callforges.com/help/articles/hubspot-integration#contacts
Ask: How do I import HubSpot contacts?
The Contacts tab lists the contacts in your HubSpot account who have a phone number, read live from HubSpot, with each contact's company and whether they are already in CallForges. Search, or filter by a HubSpot list with All lists; select contacts or import everyone in the chosen list; click Import and choose an existing CallForges list or name a new one. Imported contacts are linked to their HubSpot records and ready to call. Click Sync now to bring in later changes; CallForges reads HubSpot only when you open the tab, import or sync. The list filter needs the optional lists permission; if you didn't grant it when connecting, reconnect HubSpot to grant it.

## HubSpot: log past calls
URL: https://callforges.com/help/articles/hubspot-integration#past-calls
Ask: How do I log past calls to HubSpot?
To send calls made before you connected, use Settings → Log past calls: pick a date range under How far back (up to 1 year), click Log past calls to see how many would be logged and which users' calls would be skipped because they aren't mapped, then confirm. Past calls are sent in the background and never delay new calls. To stop a run, open Activity, go to the Queued tab and click Stop queued.

## HubSpot: activity and the daily API limit
URL: https://callforges.com/help/articles/hubspot-integration#activity
Ask: Where do I see the calls sent to HubSpot?
The Activity tab lists every call and what happened to it in HubSpot: logged (as a call or a note), queued, failed or skipped, with the reason. You can retry one call, or use Retry all for every failed or skipped call that matches your filters; Never logged lists calls that were never sent. If your HubSpot account's daily API limit is used up, CallForges pauses and shows how many calls are waiting; they are sent automatically once HubSpot accepts requests again, and nothing is lost.

## HubSpot: disconnect
URL: https://callforges.com/help/articles/hubspot-integration#disconnect
Ask: How do I disconnect HubSpot?
Open Integrations → HubSpot, click Disconnect and confirm. Calls stop being logged, the user mapping is cleared and CallForges gives up its access. Calls and notes already written stay in HubSpot, and your logging settings are kept in case you reconnect. You can also uninstall the app from HubSpot (Settings → Integrations → Connected apps) at any time; CallForges then shows Reconnect.

## HubSpot: what CallForges can access
URL: https://callforges.com/help/articles/hubspot-integration#access
Ask: What can CallForges access in HubSpot?
CallForges asks HubSpot for: oauth (connect the app); crm.objects.contacts.read (find the contact by phone number, list contacts); crm.objects.contacts.write (log calls and notes, create a contact for an unknown number when turned on); crm.objects.companies.read (show each contact's company); crm.objects.owners.read (list owners for Map users and set the owner of each logged call); crm.lists.read, optional (show HubSpot lists in the Contacts filter). Your HubSpot access is stored encrypted and used only for these features.
