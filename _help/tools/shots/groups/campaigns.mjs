const ADLG = { css: '[role=alertdialog],[role=dialog]' }
export const sessions = [{ opts: { height: 1100 }, shots: [
  { name: 'create-a-campaign-create', async run(a) {
    await a.nav('/campaigns/new', 1800)
    await a.click({ t: 'Select a list', starts: true }, 900)
    await a.click({ label: 'List', ctrl: true }, 900)
    await a.click({ t: 'Warm Leads', starts: true, sel: '[role=option]' }, 900)
    await a.shot(a.out('create-a-campaign-create'), {
      crop: { label: 'Dialer Type', self: true }, extra: ['Create Campaign'],
      marks: [
        { n: 3, spec: [{ t: 'Power Dialer', starts: true }, { t: 'Parallel Dialer', starts: true }] },
        { n: 4, spec: { label: 'Call Via' } },
        { n: 5, spec: { label: 'Cooldown duration between two calls' } },
        { n: 8, spec: 'Create Campaign' },
      ],
    })
  } },
  { name: 'create-a-campaign-audience', async run(a) {
    await a.nav('/campaigns/new', 1800)
    await a.click({ t: 'Select a list', starts: true }, 900)
    await a.click({ label: 'List', ctrl: true }, 900)
    await a.shot(a.out('create-a-campaign-audience'), {
      crop: { label: 'Audience', self: true }, extra: [{ css: '[role=listbox]' }], padB: 2,
      marks: [
        { n: 1, spec: { t: 'Select a list', starts: true } },
        { n: 2, spec: [{ label: 'List', ctrl: true }, { css: '[role=listbox]' }] },
      ],
    })
    await a.key('Escape')
  } },
  { name: 'how-the-parallel-dialer-works-set-up', async run(a) {
    await a.nav('/campaigns/new', 1800)
    await a.click({ t: 'Parallel Dialer', starts: true }, 900)
    await a.shot(a.out('how-the-parallel-dialer-works-set-up'), {
      crop: { label: 'Dialer Type', self: true }, extra: [{ label: 'Voicemail drop' }],
      marks: [
        { n: 2, spec: { t: 'Parallel Dialer', starts: true } },
        { n: 3, spec: { label: 'Number of parallel calls' } },
        { n: 4, spec: { label: 'Re-dial cancelled leads' } },
        { n: 5, spec: { label: 'Voicemail drop' } },
      ],
    })
  } },
]}, { opts: { width: 1100 }, shots: [
  { name: 'create-a-campaign-after', async run(a) {
    await a.nav('/campaigns/3002', 1800)
    await a.shot(a.out('create-a-campaign-after'), {
      crop: { t: 'Renewal Follow-ups', sel: 'h1,h2' }, extra: [{ t: 'Start Campaign' }, { t: 'Campaign actions' }, { t: 'Campaigns', sel: 'a,button', within: { css: 'main' } }],
      marks: [
        { n: 1, spec: { t: 'Edit', sel: 'button,a' } },
        { n: 2, spec: { t: 'Settings', sel: 'button,a', nth: 0, within: { css: 'main' } } },
      ],
    })
  } },
  { name: 'start-pause-resume-stop-start', async run(a) {
    await a.nav('/campaigns/3002', 1800)
    await a.shot(a.out('start-pause-resume-stop-start'), {
      crop: { t: 'Renewal Follow-ups', sel: 'h1,h2' }, extra: [{ t: 'Start Campaign' }], padB: 12,
      marks: [
        { n: 1, spec: { t: 'READY', sel: 'span,div' } },
        { n: 2, spec: 'Start Campaign' },
      ],
    })
  } },
  { name: 'start-pause-resume-stop-stop', async run(a) {
    await a.nav('/campaigns/3001', 1800)
    await a.click('Stop', 1000)
    await a.shot(a.out('start-pause-resume-stop-stop'), {
      crop: ADLG, pad: 40, scrollTo: false,
      marks: [{ n: 2, spec: { t: 'Stop campaign', within: ADLG } }],
    })
    await a.key('Escape')
  } },
]}]
