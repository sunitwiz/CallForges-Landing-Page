# Help Center: Clio integration (from https://callforges.com/help/articles/clio-integration, updated 7 November 2026)

## Clio integration: what it does and before you start
URL: https://callforges.com/help/articles/clio-integration#before
Ask: What does the Clio integration do?
The Clio integration logs every call you make or take in CallForges as a phone call in Clio Manage, on the matching contact and on their matter when they have exactly one open matter. If you turn it on, it also adds a time entry for each call with talk time. Before you start: you need a CallForges owner or admin role to connect, configure or disconnect Clio (other users don't see the integration settings, but their calls are logged once they are mapped). Connect with a Clio administrator, because if Clio's Contacts Visibility hides contacts from the user who connects, CallForges can't find those contacts. The integration works with Clio Manage; someone who exists only in Clio Grow counts as an unknown number. Clio is offered for accounts in the United States, the ones you sign in to at app.clio.com. Your Clio plan needs to allow third-party apps; if Clio refuses the connection, check your plan with Clio. One CallForges workspace connects to one Clio account.

## Connect Clio
URL: https://callforges.com/help/articles/clio-integration#connect
Ask: How do I connect Clio?
In CallForges, open Integrations and choose Clio. Click Connect. Under Where is your Clio account?, choose United States and click Continue to Clio. Sign in to Clio if asked and allow access. You come back to the Connection tab, which shows the Clio account, who connected it and when. If the Clio account is already connected to another CallForges workspace, CallForges asks before moving it, and that other workspace then stops logging calls to Clio. If Clio later asks CallForges to sign in again, the Connection tab shows Reconnect; calls made in the meantime wait and are sent once you reconnect.

## Clio: map users
URL: https://callforges.com/help/articles/clio-integration#map-users
Ask: How do I map users to Clio?
Calls are logged only for CallForges users who are matched to a Clio user. Open the Map users tab, click Auto-map by e-mail, choose the Clio user for anyone left (or leave them on Not mapped), and click Save mappings. Calls by an unmapped user are skipped and shown in Activity with the reason; use Show unmapped only to find who still needs a match, and after mapping them you can send their skipped calls from Activity.

## Clio: call logging settings
URL: https://callforges.com/help/articles/clio-integration#logging
Ask: Which Clio call logging settings can I change?
Open the Settings tab, change what you need and click Save changes. For outbound answered calls, outbound unanswered calls, inbound answered calls, missed calls and voicemails you choose separately:
- Call activity: a phone call on the contact, with the call's details in its body.
- Don't log: nothing is written to Clio.
Note isn't available for Clio: every logged call is saved as a phone call, because Clio can only link a time entry to a phone call. The phone call is linked to a matter only when the contact has exactly one open matter; with no open matter, or more than one, it stays on the contact alone. To put a call on a matter afterward, click Move to a matter on that call. Link to the recording and Link to the transcript add a link to the call's page in CallForges, and only signed-in users of your workspace can open them. AI summary adds the call's AI summary, when it has one: summaries are made for English calls long enough to summarise, on plans that include them. Save the recording in Clio stores the recording in the matter's documents, or the contact's when the call has no matter. It's off by default, works only while Secured recording links is off in Settings → Call settings, and a call on no contact stores nothing. Leave Log calls on all numbers on to log every number your workspace owns, or turn it off to pick numbers. A call is written to Clio within a few minutes of ending, so the disposition and notes added after the call are included. If the call is changed later, the same phone call is updated. A phone call you delete in Clio stays deleted: CallForges doesn't write a new one, and Activity says so.

## Clio: time entries
URL: https://callforges.com/help/articles/clio-integration#time-entries
Ask: Does CallForges add time entries in Clio?
CallForges can add a Clio time entry for each call. This is a setting on your Clio connection and it is off by default. To turn it on, open Settings, go to What each phone call includes, turn on Add a time entry for each call and click Save changes. While it is on, each call with talk time gets one time entry, and a call with no talk time gets none. Time entries are non-billable by default; turn on Make time entries billable to change that. In Map users, the Time entries switch turns them off for one user. The time entry is linked to the phone call, and to the matter when the phone call has one. It is dated in the mapped user's Clio time zone. A later edit updates the phone call and leaves the time entry alone, except Move to a matter, which moves both, and a time entry you delete in Clio isn't added back. Turning the setting on writes nothing by itself for calls already in Clio; one of those calls gets a time entry the next time it is sent to Clio, for example after an edit, if it had talk time. Calls sent with Log past calls while it is on get one too, if they had talk time. Turning it off removes nothing.

## Clio: unknown numbers
URL: https://callforges.com/help/articles/clio-integration#unknown
Ask: What happens when a number isn't in Clio?
CallForges finds the Clio contact by phone number, trying the number in several formats. A call to a number that is on no contact is still logged: Clio keeps it under Inbox → Logs, on no contact and no matter. CallForges doesn't create a contact by default. To add one after the call, click Add to Clio on that call. In Settings → General: Create a Clio contact if the number isn't found (off by default; when on, CallForges creates a contact and logs the call on it); Use the phone number as the new contact's name (when off, the new contact is named "Unknown caller"; applies only while creating contacts is on).

## Clio: Add to Clio and Move to a matter
URL: https://callforges.com/help/articles/clio-integration#after-the-call
Ask: How do I add a contact or pick a matter in Clio after a call?
Both actions are on the call's page and on its row in Activity, for anyone who can log that call. Add to Clio shows on a call logged with no contact: fill in the name and CallForges creates the contact with the call's number and links the call to it. If a Clio contact already has that number, the call is linked to it. If several do, nothing changes and you link the call in Clio. Move to a matter shows on a call with a contact and no matter: pick one of the contact's open matters, and the phone call and its time entry move there. If Clio keeps the time entry where it is, for example because it was billed, only the phone call moves and CallForges says so. You need to be mapped to a Clio user to see matters.

## Clio: the caller's name when a call rings
URL: https://callforges.com/help/articles/clio-integration#caller-name
Ask: Does CallForges show the Clio contact's name when a call rings?
When someone who isn't in your CallForges Contacts calls one of your numbers, CallForges looks the number up in Clio while the call rings, and the name appears on the ring card a moment later. The ring never waits for the answer: if Clio is slow or busy, or several contacts share the number, the card shows the number alone. Our own saved contact always comes first. CallForges keeps the answer in memory for a few minutes and doesn't save it. Users mapped to a Clio user also see the caller's open matters. Clio allows fewer requests per second than other CRMs, so its name can take a few seconds to appear.

## Clio: contacts tab
URL: https://callforges.com/help/articles/clio-integration#contacts
Ask: Can I import Clio contacts into CallForges?
No. Clio contacts can't be imported into CallForges, so they stay in Clio. The Contacts tab lists the contacts in your Clio account who have a phone number, read live from Clio, with a link to open each one in Clio. The import buttons and Sync now are greyed out for Clio, and so is Add Clio contacts to CallForges Contacts in Settings. Clio has no contact lists, so All lists is greyed out too.

## Clio: log past calls
URL: https://callforges.com/help/articles/clio-integration#past-calls
Ask: How do I log past calls to Clio?
Connecting logs the calls that happen from then on. To send earlier calls, use Settings → Log past calls: under How far back pick a date range (it reaches back up to 1 year), click Log past calls (CallForges counts the calls first and shows how many would be logged and which users' calls would be skipped because they aren't mapped), then confirm. A progress bar shows the calls being sent. Past calls go in the background and never delay new calls. To stop a run, open Activity, go to the Queued tab and click Stop queued.

## Clio: activity
URL: https://callforges.com/help/articles/clio-integration#activity
Ask: Where do I see the calls sent to Clio?
The Activity tab lists every call and what happened to it in Clio: logged, queued, failed or skipped, with the reason. You can retry one call, or use Retry all for every failed or skipped call that matches your filters. Never logged lists calls that were never sent to Clio. Clio limits how many requests an app can make, so after a burst of calls some phone calls may appear in Clio a little late. Nothing is lost.

## Clio: disconnect
URL: https://callforges.com/help/articles/clio-integration#disconnect
Ask: How do I disconnect Clio?
Open Integrations → Clio, click Disconnect and confirm. Calls stop being logged to Clio and the user mapping is cleared. CallForges gives up its access to your Clio account and forgets the Clio names and e-mail addresses it held. Phone calls and time entries already written stay in Clio, and your logging settings are kept in case you reconnect. If Clio doesn't confirm the removal, CallForges shows "Disconnected here, but Clio did not confirm it" and asks you to remove CallForges' access in Clio's settings too. You can also remove CallForges in Clio, under My Integrations, at any time; CallForges then shows Not connected or Reconnect.

## Clio: what CallForges can access
URL: https://callforges.com/help/articles/clio-integration#access
Ask: What can CallForges access in Clio?
When you connect, CallForges asks Clio for these permissions on your account: Contacts, read and write (find the contact by phone number, list contacts, and create a contact for an unknown number when you turn that on); Communications, read and write (write and update the phone calls); Activities, read and write (add time entries when you turn them on); Matters, read (find the contact's open matters); Documents, read and write (save the recording in Clio when you turn that on); Users, read (Map users, Auto-map by e-mail and each user's time zone). CallForges doesn't ask for your Clio notes or calendars. Connections made before recordings could be saved need to reconnect to use that switch; calls are logged either way. Your Clio access is stored encrypted and used only for these features. See the Privacy Policy.
