const DLG = { css: '[role=dialog]' }
export const sessions = [{ opts: {}, shots: [
  { name: 'buy-a-phone-number-choose', async run(a) {
    await a.nav('/numbers/purchase', 2200)
    await a.shot(a.out('buy-a-phone-number-choose'), {
      crop: { t: 'Number details', sel: 'h2,h3' }, extra: ['Save & Next'],
      marks: [
        { n: 2, spec: { label: 'Country' } },
        { n: 3, spec: { label: 'Number type' } },
        { n: 6, spec: { label: 'Suggested number', minH: 150 } },
        { n: 7, spec: 'Save & Next' },
      ],
    })
  } },
  { name: 'buy-a-phone-number-details', async run(a) {
    await a.click('Save & Next', 1500)
    await a.shot(a.out('buy-a-phone-number-details'), {
      crop: { label: 'Friendly name' }, extra: [{ label: 'Shared teams' }],
      marks: [
        { n: 1, spec: { label: 'Friendly name' } },
        { n: 2, spec: { label: 'Owner' } },
        { n: 3, spec: { label: 'Share with users' } },
        { n: 4, spec: { label: 'Shared teams' } },
      ],
    })
  } },
  { name: 'make-your-first-call-get-a-number', async run(a) {
    await a.nav('/numbers', 1800)
    await a.shot(a.out('make-your-first-call-get-a-number'), {
      crop: { t: 'Phone Numbers', sel: 'h1' }, extra: ['Add Number', { css: 'tbody tr', nth: 2 }], padB: 1,
      marks: [{ n: 1, spec: 'Add Number' }],
    })
  } },
  { name: 'buy-a-phone-number-buy', async run(a) {
    await a.nav('/numbers/purchase', 2200)
    await a.click({ t: 'Toll-free number', starts: true }, 1500)
    await a.click('Save & Next', 1500)
    await a.shot(a.out('buy-a-phone-number-buy'), {
      crop: { t: 'Confirm details', sel: 'h2,h3' }, extra: ['Continue to payment'],
      marks: [
        { n: 1, spec: [{ label: 'Pricing', self: true }, { t: '/ month', has: true, sel: 'span,div,dd,p' }, { t: 'Prorated to your next renewal', has: true, sel: 'span,div,dd,p' }] },
        { n: 2, spec: 'Continue to payment' },
      ],
    })
  } },
  { name: 'port-your-number-wizard', async run(a) {
    await a.nav('/numbers/port', 2000)
    await a.shot(a.out('port-your-number-wizard'), {
      crop: { t: 'Port numbers', sel: 'h1' }, scrollTo: false,
      extra: [{ label: 'Number type' }, { t: 'Confirm details', has: true, sel: 'li,button,a' }, { card: 'Porting information & charges' }],
      marks: [
        { n: 1, spec: [{ label: 'Country' }, { label: 'Number type' }] },
        { n: 1, spec: 'Next' },
      ],
    })
  } },
  { name: 'port-your-number-on-request', async run(a, page) {
    await a.nav('/numbers/port', 2000)
    await a.click({ label: 'Country', ctrl: true }, 800)
    await page.keyboard.type('United Kingdom', { delay: 30 })
    await a.sleep(600)
    await a.click({ t: 'United Kingdom', sel: '[role=option]', has: true }, 1200)
    await a.click({ t: 'Submit request', sel: 'button,a' }, 1400)
    await a.shot(a.out('port-your-number-on-request'), {
      crop: DLG, pad: 6, scrollTo: false,
      marks: [
        { n: 2, spec: [{ label: 'Country', within: DLG }, { label: 'Numbers to port', within: DLG }] },
        { n: 3, spec: [{ label: 'Contact email', within: DLG }, { label: 'Files', starts: true, within: DLG }] },
        { n: 4, spec: { t: 'Submit request', within: DLG } },
      ],
    })
  } },
  { name: 'port-your-number-track', async run(a) {
    await a.key('Escape')
    await a.nav('/numbers?tab=porting', 1800)
    await a.shot(a.out('port-your-number-track'), {
      crop: { t: 'Porting', has: true, sel: '[role=tab]' }, extra: [{ css: 'tbody tr', nth: 3 }, { t: 'Phone Numbers', sel: 'h1' }], padB: 1,
      marks: [
        { n: 1, spec: { t: 'Porting', has: true, sel: '[role=tab]' } },
        { n: 2, spec: 'Continue' },
        { n: 3, spec: { t: 'View', nth: 0 } },
      ],
    })
  } },
]}]
