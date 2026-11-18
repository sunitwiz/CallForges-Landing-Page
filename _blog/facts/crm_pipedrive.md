# Help Center: Pipedrive integration (from https://callforges.com/help/articles/pipedrive-integration, updated 22 October 2026)

## Pipedrive integration: what it does and before you start
URL: https://callforges.com/help/articles/pipedrive-integration#before
Ask: What does the Pipedrive integration do?
The Pipedrive integration logs every call you make or take in CallForges as a completed Call activity on the matching Pipedrive person, or as a note. It also lets you browse your Pipedrive people inside CallForges and import them as contacts to call. Before you start: you need a CallForges owner or admin role to connect, configure or disconnect Pipedrive (other users don't see the integration settings, but their calls are logged once they are mapped); connect as a Pipedrive admin, so calls can be logged for every user in the company; one CallForges workspace connects to one Pipedrive company.

## Connect Pipedrive
URL: https://callforges.com/help/articles/pipedrive-integration#connect
Ask: How do I connect Pipedrive?
In CallForges, open Integrations and choose Pipedrive. Click Connect; Pipedrive opens in the same tab. Sign in to Pipedrive if asked, choose the company, review the permissions and click Allow and install. You come back to the Connection tab, which shows the Pipedrive company, who connected it and when. If the Pipedrive company is already connected to another CallForges workspace, CallForges asks before moving it, and that other workspace then stops logging calls to Pipedrive. If Pipedrive later asks CallForges to sign in again (for example after the app was uninstalled in Pipedrive), the Connection tab shows Reconnect; calls made in the meantime wait and are sent once you reconnect.

## Pipedrive: map users
URL: https://callforges.com/help/articles/pipedrive-integration#map-users
Ask: How do I map users to Pipedrive?
Calls are logged only for CallForges users who are matched to a Pipedrive user; that Pipedrive user becomes the owner of the Call activity. Open the Map users tab, click Auto-map by e-mail, choose the Pipedrive user for anyone left (or leave them on Not mapped), and click Save. Calls by an unmapped user are skipped and shown in Activity with the reason; use Show unmapped only to find who still needs a match, and after mapping them you can send their skipped calls from Activity.

## Pipedrive: call logging settings
URL: https://callforges.com/help/articles/pipedrive-integration#logging
Ask: Which Pipedrive call logging settings can I change?
Open the Settings tab, change what you need and click Save changes. For outbound answered calls, outbound unanswered calls, inbound answered calls, missed calls and voicemails you choose separately:
- Call activity: a completed activity of type Call on the person, with its duration, owner, outcome, the disposition and the call notes. It counts in Pipedrive's activity reports.
- Note: a note on the person with the same details written as text.
- Don't log: nothing is written to Pipedrive.
Link to the recording and Link to the transcript add a link to the call's page in CallForges; recordings and transcripts stay in CallForges and only signed-in users of your workspace can open them. AI summary adds the call's AI summary, when it has one: summaries are made for English calls long enough to summarise, on plans that include them. Leave Log calls on all numbers on to log every number your workspace owns, or turn it off to pick numbers. A call is written to Pipedrive within a few minutes of ending, so the disposition and notes added after the call are included, and a later change updates the same Call activity.

## Pipedrive: the caller's name when a call rings
URL: https://callforges.com/help/articles/pipedrive-integration#caller-name
Ask: Does CallForges show the Pipedrive contact's name when a call rings?
When someone who isn't in your CallForges Contacts calls one of your numbers, CallForges looks the number up in Pipedrive while the call rings, and the name appears on the ring card a moment later. The ring never waits for the answer: if Pipedrive is slow or busy, or several contacts share the number, the card shows the number alone. Our own saved contact always comes first. CallForges keeps the answer in memory for a few minutes and doesn't save it.

## Pipedrive: unknown numbers
URL: https://callforges.com/help/articles/pipedrive-integration#unknown
Ask: What happens when a number isn't in Pipedrive?
CallForges finds the Pipedrive person by phone number, with or without the country code. In Settings → General: Create a Pipedrive person if the number isn't found (when off, the call isn't logged and Activity shows that the person wasn't found); Use the phone number as the new person's name (when off, the new person is named "Unknown caller"; applies only while creating people is on); Add Pipedrive people to CallForges Contacts (off by default).

## Pipedrive: import contacts
URL: https://callforges.com/help/articles/pipedrive-integration#contacts
Ask: How do I import Pipedrive contacts?
The Contacts tab lists the people in your Pipedrive company who have a phone number, read live from Pipedrive, with each person's organization and whether they are already in CallForges. Search, or filter by one of your saved Pipedrive people filters with All lists; select people or import everyone in the chosen filter; click Import and choose an existing CallForges list or name a new one. Imported people are linked to their Pipedrive records and ready to call. Click Sync now to bring in later changes; CallForges reads Pipedrive only when you open the tab, import or sync.

## Pipedrive: log past calls
URL: https://callforges.com/help/articles/pipedrive-integration#past-calls
Ask: How do I log past calls to Pipedrive?
To send calls made before you connected, use Settings → Log past calls: pick a date range under How far back (up to 1 year), click Log past calls to see how many would be logged and which users' calls would be skipped because they aren't mapped, then confirm. Past calls are sent in the background and never delay new calls. To stop a run, open Activity, go to the Queued tab and click Stop queued.

## Pipedrive: activity and the API limit
URL: https://callforges.com/help/articles/pipedrive-integration#activity
Ask: Where do I see the calls sent to Pipedrive?
The Activity tab lists every call and what happened to it in Pipedrive: logged (as a Call activity or a note), queued, failed or skipped, with the reason. You can retry one call, or use Retry all for every failed or skipped call that matches your filters; Never logged lists calls that were never sent. If Pipedrive can't be reached or its API limit is used up, CallForges pauses and shows how many calls are waiting; they are sent automatically once Pipedrive accepts requests again, and nothing is lost.

## Pipedrive: disconnect
URL: https://callforges.com/help/articles/pipedrive-integration#disconnect
Ask: How do I disconnect Pipedrive?
Open Integrations → Pipedrive, click Disconnect and confirm. Calls stop being logged, the user mapping is cleared and CallForges gives up its access. Call activities and notes already written stay in Pipedrive, and your logging settings are kept in case you reconnect. You can also uninstall the app from Pipedrive (Tools and apps → Marketplace apps) at any time; CallForges then shows Reconnect.

## Pipedrive: what CallForges can access
URL: https://callforges.com/help/articles/pipedrive-integration#access
Ask: What can CallForges access in Pipedrive?
CallForges asks Pipedrive for: base (connect the app, read your user, company and saved filters); contacts:full (find the person by phone number, list people, create a person for an unknown number when turned on, write notes); activities:full (write each call as a Call activity and update it); users:read (list users for Map users and set the owner of each Call activity); phone-integration (Pipedrive's permission for calling apps; CallForges writes calls as Call activities today and doesn't write Pipedrive call logs). Your Pipedrive access is stored encrypted and used only for these features.
