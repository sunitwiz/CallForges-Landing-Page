const STRIP = { t: 'End session', sel: 'button', minW: 700 }
const POP = { css: '[role=dialog]' }
export const sessions = [{ opts: { width: 1100 }, shots: [
  { name: 'how-the-parallel-dialer-works-round', async run(a, page) {
    await a.nav('/campaigns/3004', 1800)
    await page.evaluate(() => { window.__base = 0.6 })
    await a.dialClick('Start Campaign', 900)
    const t0 = Date.now()
    while (Date.now() - t0 < 20000 && !(await page.evaluate(() => /Active batch/.test(document.body.innerText)))) await a.sleep(400)
    await a.sleep(1500)
    await a.shot(a.out('how-the-parallel-dialer-works-round'), {
      crop: STRIP, extra: [{ t: 'leads remaining', has: true, sel: 'p,div,span' }],
      marks: [
        { n: 2, spec: { t: '/3 lines', has: true, sel: 'span,div,button,p' } },
        { n: 2, spec: [{ t: 'Active batch', sel: 'h2,h3,h4,div,span,p' }, { t: 'leads remaining', has: true, sel: 'p,div,span' }] },
        { n: 4, spec: { t: 'First pickup wins', has: true, sel: 'p,div,span' } },
      ],
    })
  } },
  { name: 'how-the-parallel-dialer-works-pause-end', async run(a) {
    await a.click({ t: 'Pause', sel: 'button' }, 1200)
    await a.shot(a.out('how-the-parallel-dialer-works-pause-end'), {
      crop: POP, extra: [STRIP], scrollTo: false,
      marks: [
        { n: 1, spec: { t: 'Pause now', within: POP, minW: 250 } },
        { n: 2, spec: { t: 'Pause after this round', within: POP, minW: 250 } },
      ],
    })
    await a.key('Escape')
  } },
]}]
