const DLG = { css: '[role=dialog]' }
const PANEL = { t: 'Close step', minW: 300, minH: 400 }
export const sessions = [{ opts: { height: 1300 }, shots: [
  { name: 'build-a-call-workflow-create', async run(a) {
    await a.nav('/workflows/new', 2000)
    await a.click({ t: 'Business hours + voicemail', starts: true }, 600)
    await a.shot(a.out('build-a-call-workflow-create'), {
      crop: DLG, pad: 6, scrollTo: false,
      marks: [
        { n: 2, spec: { t: 'Business hours + voicemail', starts: true, minH: 100 } },
        { n: 2, spec: { t: 'Use template', within: DLG } },
      ],
    })
  } },
  { name: 'build-a-call-workflow-steps', async run(a, page) {
    await a.click('Use template', 2000)
    await a.click({ t: 'Fit workflow to screen' }, 1200)
    const r = await a.rect({ t: 'Add a step after Ring users or teams, Unanswered' })
    console.log('PLUS-Y', Math.round(r.y))
    await a.click({ t: 'Add a step after Ring users or teams, Unanswered' }, 1000)
    await page.evaluate(() => window.__find({ t: 'View more blocks' }).scrollIntoView({ block: 'nearest' }))
    await a.sleep(400)
    const MENU = [{ t: 'Search steps…', sel: 'input' }, { t: 'Pick a step to add it here', has: true, sel: 'p,div,span' }]
    await a.shot(a.out('build-a-call-workflow-steps'), {
      crop: MENU[0], extra: [MENU[1], { t: 'Add a step after Ring users or teams, Unanswered' }], scrollTo: false,
      marks: [
        { n: 1, spec: { t: 'Add a step after Ring users or teams, Unanswered' } },
        { n: 2, spec: MENU },
        { n: 3, spec: { t: 'View more blocks' } },
      ],
    })
    await a.key('Escape', 600)
  } },
  { name: 'build-a-call-workflow-ring', async run(a, page) {
    await a.click({ t: 'Ring users or teams', sel: 'div,span,p,h3,h4', nth: 0 }, 1200)
    await a.click({ label: 'Ring to', ctrl: true, within: PANEL }, 800)
    console.log('RINGTO', JSON.stringify(await a.texts('[role=option],[role=radio],[role=menuitem]')))
    await a.click({ t: 'Users', sel: '[role=option],[role=radio],[role=menuitem],button' }, 1000)
    await a.click({ t: 'Add users', sel: 'button,[role=combobox]', within: PANEL }, 900)
    await a.click({ t: 'Priya Nair' }, 400)
    await a.click({ t: 'Sam Ortiz' }, 400)
    await a.click({ t: 'Done', sel: 'button', nth: 1 }, 900)
    await a.shot(a.out('build-a-call-workflow-ring'), {
      crop: { label: 'Ring to', within: PANEL }, extra: [{ label: 'Ring for', within: PANEL }], scrollTo: false,
      marks: [
        { n: 2, spec: { label: 'Ring to', within: PANEL } },
        { n: 3, spec: [{ label: 'Ringing order', within: PANEL, starts: true, self: true }, { t: 'One user at a time, top to bottom.', has: true, sel: 'p,div,span' }] },
        { n: 5, spec: { label: 'Ring for', within: PANEL } },
      ],
    })
  } },
]}, { opts: { width: 960 }, shots: [
  { name: 'build-a-call-workflow-publish', async run(a) {
    await a.nav('/workflows/new', 2000)
    await a.click({ t: 'Business hours + voicemail', starts: true }, 600)
    await a.click('Use template', 2000)
    await a.shot(a.out('build-a-call-workflow-publish'), {
      crop: { t: 'Save draft', sel: 'button' }, extra: [{ t: 'Untitled workflow', has: true, sel: 'h1,h2,span,div,button' }, 'Publish', { t: 'No number uses this workflow yet', has: true, sel: 'div,p,span' }], scrollTo: false,
      marks: [
        { n: 1, spec: 'Save draft' },
        { n: 2, spec: 'Publish' },
        { n: 3, spec: { t: 'Draft', sel: 'span,div' } },
      ],
    })
  } },
]}]
