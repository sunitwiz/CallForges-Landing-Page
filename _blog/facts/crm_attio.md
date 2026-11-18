# Help Center: Attio integration (from https://callforges.com/help/articles/attio-integration, updated 22 October 2026)

## Attio integration: what it does and before you start
URL: https://callforges.com/help/articles/attio-integration#before
Ask: What does the Attio integration do?
The Attio integration logs every call you make or take in CallForges onto the matching person in Attio, as a note or as a record of a Calls object. It also lets you browse your Attio people inside CallForges and import them as contacts to call. Before you start: you need a CallForges owner or admin role to connect, configure or disconnect Attio (other users don't see the integration settings, but their calls are logged once they are mapped); you need access to the Attio workspace you want to connect, with permission to install apps; one CallForges workspace connects to one Attio workspace.

## Connect Attio
URL: https://callforges.com/help/articles/attio-integration#connect
Ask: How do I connect Attio?
In CallForges, open Integrations and choose Attio. Click Connect; Attio opens in the same tab. Sign in to Attio if asked, pick the Attio workspace, and click Allow. You come back to the Connection tab, which shows the Attio workspace, who connected it and when. If the Attio workspace is already connected to another CallForges workspace, CallForges asks before moving it, and that other workspace then stops logging calls to Attio. If Attio later asks CallForges to sign in again (for example after the app was removed in Attio), the Connection tab shows Reconnect; calls made in the meantime wait and are sent once you reconnect.

## Attio: map users
URL: https://callforges.com/help/articles/attio-integration#map-users
Ask: How do I map users to Attio?
Calls are logged only for CallForges users who are matched to an Attio workspace member. Open the Map users tab, click Auto-map by e-mail to match every user whose e-mail address is the same in both products, choose the Attio member for anyone left (or leave them on Not mapped), and click Save. Calls by an unmapped user are skipped, and each skip shows up in Activity with the reason. Use Show unmapped only to find the users who still need a match; after you map them, you can send their skipped calls from Activity.

## Attio: call logging settings
URL: https://callforges.com/help/articles/attio-integration#logging
Ask: Which Attio call logging settings can I change?
Open the Settings tab, change what you need and click Save changes. For outbound answered calls, outbound unanswered calls, inbound answered calls, missed calls and voicemails you choose separately what each call becomes in Attio:
- Note: a note on the person's record with the direction, outcome, talk time, the user who made or took the call, the disposition and the call notes.
- Custom object: a record in a Calls object, linked to the person, with Summary, AI summary, Direction, Outcome, Disposition, Notes, Duration, From, To, Agent, Recording and Transcript attributes. CallForges creates the Calls object in your Attio workspace the first time you save this option.
- Don't log: nothing is written to Attio.
Name your Calls records once: in Attio open Settings → Data → Objects → Calls → Appearance and set Record text to Summary (Attio's API can't choose which attribute names a record, so new records show their record ID until you do). Link to the recording and Link to the transcript add a link to the call's page in CallForges; recordings and transcripts stay in CallForges and only signed-in users of your workspace can open them. AI summary adds the call's AI summary, when it has one: summaries are made for English calls long enough to summarise, on plans that include them. Leave Log calls on all numbers on to log every number your workspace owns, or turn it off to pick numbers. A call is written to Attio within a few minutes of ending, so the disposition and notes added after the call are included, and a later change (for example a new disposition) updates the note or Calls record.

## Attio: the caller's name when a call rings
URL: https://callforges.com/help/articles/attio-integration#caller-name
Ask: Does CallForges show the Attio contact's name when a call rings?
When someone who isn't in your CallForges Contacts calls one of your numbers, CallForges looks the number up in Attio while the call rings, and the name appears on the ring card a moment later. The ring never waits for the answer: if Attio is slow or busy, or several contacts share the number, the card shows the number alone. Our own saved contact always comes first. CallForges keeps the answer in memory for a few minutes and doesn't save it.

## Attio: unknown numbers
URL: https://callforges.com/help/articles/attio-integration#unknown
Ask: What happens when a number isn't in Attio?
CallForges finds the Attio person by phone number. In Settings → General: Create an Attio person if the number isn't found (when off, the call isn't logged and Activity shows that the person wasn't found); Use the phone number as the new person's name (when off, the new person is named "Unknown caller"; applies only while creating people is on); Add Attio people to CallForges Contacts (adds a person a call reaches to your CallForges Contacts and links the two; off by default).

## Attio: import contacts
URL: https://callforges.com/help/articles/attio-integration#contacts
Ask: How do I import Attio contacts?
The Contacts tab lists the people in your Attio workspace who have a phone number, read live from Attio, and shows whether each is already in CallForges. Search, or filter by an Attio list with All lists; select people or import everyone in the chosen list; click Import and choose an existing CallForges list or name a new one. Imported people become CallForges contacts linked to their Attio records, ready to call from a campaign or the dialer. Click Sync now to bring in later changes; CallForges reads Attio only when you open the tab, import or sync.

## Attio: log past calls
URL: https://callforges.com/help/articles/attio-integration#past-calls
Ask: How do I log past calls to Attio?
Connecting logs the calls that happen from then on. To send earlier calls, use Settings → Log past calls: pick a date range under How far back (up to 1 year), click Log past calls to see how many calls would be logged and which users' calls would be skipped because they aren't mapped, then confirm. A progress bar shows the calls being sent in the background; they never delay new calls. To stop a run, open Activity, go to the Queued tab and click Stop queued.

## Attio: activity
URL: https://callforges.com/help/articles/attio-integration#activity
Ask: Where do I see the calls sent to Attio?
The Activity tab lists every call and what happened to it in Attio: logged (as a note or a Calls record), queued, failed or skipped, with the reason. You can retry one call, or use Retry all for every failed or skipped call that matches your filters. Never logged lists calls that were never sent to Attio.

## Attio: disconnect
URL: https://callforges.com/help/articles/attio-integration#disconnect
Ask: How do I disconnect Attio?
Open Integrations → Attio, click Disconnect and confirm. Calls stop being logged to Attio, the user mapping is cleared and CallForges gives up its access. Notes and Calls records already written stay in Attio, and your logging settings are kept in case you reconnect. You can also remove the CallForges app from your Attio workspace settings at any time; CallForges then shows Reconnect.

## Attio: what CallForges can access
URL: https://callforges.com/help/articles/attio-integration#access
Ask: What can CallForges access in Attio?
When you click Allow, CallForges asks Attio for: record_permission:read-write (find the person by phone number, create a person for an unknown number when turned on, write Calls records); object_configuration:read-write (read objects and attributes, create the Calls object); note:read-write (write and replace the call note); user_management:read (list members for Map users); list_configuration:read (show Attio lists in the Contacts filter); list_entry:read (read who is in a list). Your Attio access is stored encrypted and used only for these features.
