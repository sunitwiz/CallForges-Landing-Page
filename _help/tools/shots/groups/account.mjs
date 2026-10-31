const DLG = { t: 'Invite to workspace', sel: 'h2,h3,div', closest: '[role=dialog]' }
export const sessions = [{ opts: {}, shots: [
  { name: 'invite-users-send', async run(a, page) {
    await a.nav('/settings?section=team', 1500)
    await a.click('Invite user', 1200)
    await a.type({ label: 'Email addresses', ctrl: true, within: DLG }, 'jamie@example.com', 300)
    await page.keyboard.press('Enter')
    await a.sleep(600)
    await a.shot(a.out('invite-users-send'), {
      crop: DLG, pad: 6, scrollTo: false,
      marks: [
        { n: 3, spec: { label: 'Email addresses', within: DLG } },
        { n: 4, spec: { label: 'Role', within: DLG } },
        { n: 5, spec: { t: 'Send invite', sel: 'button', within: DLG } },
      ],
    })
    await a.key('Escape', 800)
  } },
  { name: 'invite-users-manage', async run(a) {
    await a.click({ t: 'Invited', starts: true, sel: 'button,[role=tab],[role=radio]' }, 900)
    await a.click({ t: 'Actions for jordan@acme.com' }, 900)
    await a.shot(a.out('invite-users-manage'), {
      crop: { t: 'Invited', starts: true, sel: 'button,[role=tab],[role=radio]' }, extra: [{ css: '[role=menu]' }, { t: 'Invite user', sel: 'button' }, { t: 'All', starts: true, sel: 'button,[role=tab],[role=radio]' }, { css: 'table' }], scrollTo: false,
      marks: [
        { n: 1, spec: { t: 'Invited', starts: true, sel: 'button,[role=tab],[role=radio]' } },
        { n: 2, spec: { t: 'Resend invite', sel: '[role=menuitem]' } },
        { n: 3, spec: { t: 'Revoke invite', sel: '[role=menuitem]' } },
      ],
    })
    await a.key('Escape', 400)
  } },
]}, { opts: { login: false }, shots: [
  { name: 'start-your-free-trial-sign-up', async run(a) {
    await a.load('/signup', 1500)
    await a.shot(a.out('start-your-free-trial-sign-up'), {
      crop: { t: 'Create your account', sel: 'h1,h2' }, extra: [{ t: 'Create account', sel: 'button' }], scrollTo: false,
      marks: [
        { n: 2, spec: [{ label: 'First name' }, { label: 'Workspace name' }] },
        { n: 3, spec: { t: 'Create account', sel: 'button' } },
      ],
    })
  } },
]}]
