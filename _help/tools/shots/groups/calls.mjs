const PANEL = { t: 'Logs', sel: 'button', minW: 280, minH: 420 }
const DIAL = { t: 'Dial', sel: 'button,a', within: { css: 'main' } }
export const sessions = [{ opts: {}, shots: [
  { name: 'place-a-call-open', async run(a, page) {
    await a.nav('/settings?section=dialer', 1500)
    await a.click({ t: 'Post-call details form', sel: '[role=switch]' }, 900)
    const saves = await a.texts('button')
    if (saves.includes('Save changes')) await a.click('Save changes', 1200)
    console.log('POSTCALL SWITCH', await page.evaluate(() => document.querySelector('[role=switch][aria-label="Post-call details form"]')?.getAttribute('aria-checked')))
    await a.click('Close settings', 900)
    await a.nav('/dashboard', 1500)
    await a.click(DIAL, 1200)
    await a.shot(a.out('place-a-call-open'), {
      crop: PANEL, extra: [DIAL], scrollTo: false, padB: 24,
      marks: [
        { n: 1, spec: DIAL },
        { n: 2, spec: [{ t: 'Phone', sel: 'button,[role=tab]', within: PANEL }, { t: 'Contacts', sel: 'button,[role=tab]', within: PANEL }] },
        { n: 3, spec: { t: 'Available', sel: 'span,div,button', within: PANEL } },
      ],
    })
  } },
  { name: 'make-your-first-call-call', async run(a) {
    await a.type({ t: 'Enter number', sel: 'input' }, '2125550100', 500)
    await a.shot(a.out('make-your-first-call-call'), {
      crop: PANEL, extra: [DIAL], scrollTo: false,
      marks: [
        { n: 1, spec: DIAL },
        { n: 2, spec: [{ t: '+1', has: true, sel: 'button', within: PANEL }, { t: 'Enter number', sel: 'input' }] },
        { n: 3, spec: [{ t: 'CALL VIA', sel: 'span,div,p,label', within: PANEL }, { t: '+1 (512) 555-0142', has: true, sel: 'button,[role=combobox]', within: PANEL }] },
        { n: 4, spec: { t: 'Call', sel: 'button', within: PANEL } },
      ],
    })
  } },
  { name: 'place-a-call-dial', async run(a) {
    await a.click({ t: '+1 (512) 555-0142', has: true, sel: 'button,[role=combobox]', within: PANEL }, 900)
    await a.shot(a.out('place-a-call-dial'), {
      crop: PANEL, extra: [{ css: '[role=listbox]' }], scrollTo: false, maxCss: 820,
      marks: [
        { n: 1, spec: { t: 'Enter number', sel: 'input' } },
        { n: 2, spec: { css: '[role=listbox]' } },
        { n: 3, spec: { t: 'Call', sel: 'button', within: PANEL } },
      ],
    })
    await a.click({ t: '+1 (512) 555-0142', has: true, sel: '[role=option]' }, 700)
  } },
  { name: 'make-your-first-call-on-the-call', async run(a, page) {
    await page.evaluate(() => { window.__base = 0 })
    await a.dialClick({ t: 'Call', sel: 'button', within: PANEL }, 1100)
    await page.evaluate(() => { window.__base = 0.999 })
    await a.sleep(2600)
    await a.shot(a.out('make-your-first-call-on-the-call'), {
      crop: { t: 'Live call', sel: 'span,div' }, extra: [{ t: 'Hold', sel: 'button' }], scrollTo: false, padB: 10,
      marks: [
        { n: 1, spec: [{ t: 'CONNECTED', sel: 'span,div,p' }, { t: '00:0', starts: true, sel: 'span,div,p' }] },
        { n: 2, spec: [{ t: 'Keypad', sel: 'button' }, { t: 'Hold', sel: 'button' }] },
      ],
    })
  } },
]}]
