const STRIP = { t: 'End session', sel: 'button', minW: 700 }
async function waitText(a, page, re, ms = 20000) {
  const t0 = Date.now()
  while (Date.now() - t0 < ms) {
    if (await page.evaluate((r) => new RegExp(r).test(document.body.innerText), re)) return
    await a.sleep(400)
  }
  throw new Error('waited for ' + re)
}
export const sessions = [{ opts: { width: 1100 }, shots: [
  { name: 'start-pause-resume-stop-pause', async run(a, page) {
    await a.nav('/settings?section=dialer', 1500)
    await a.click({ t: 'Post-call details form', sel: '[role=switch]' }, 900)
    await a.click('Close settings', 900)
    await a.nav('/campaigns/3002', 1800)
    await page.evaluate(() => { window.__base = 0.6 })
    await a.dialClick('Start Campaign', 900)
    await waitText(a, page, 'WRAPPING UP')
    await a.sleep(600)
    await a.shot(a.out('start-pause-resume-stop-pause'), {
      crop: STRIP, extra: [{ t: 'Renewal Follow-ups', sel: 'h1,h2' }, 'Log outcome'],
      marks: [{ n: 1, spec: { t: 'Pause', sel: 'button' } }],
    })
  } },
  { name: 'place-a-call-end', async run(a, page) {
    await a.click('Log outcome', 1400)
    await page.setViewport({ width: 1100, height: 760, deviceScaleFactor: 2 })
    await a.sleep(600)
    const SHEET = { css: '[role=dialog]' }
    await a.shot(a.out('place-a-call-end'), {
      crop: { label: 'RATING', self: true, within: SHEET }, extra: [{ t: 'Save', sel: 'button', within: SHEET }], scrollTo: false, pad: 14,
      marks: [
        { n: 2, spec: { label: 'DISPOSITION', within: SHEET } },
        { n: 3, spec: { t: 'Save', sel: 'button', within: SHEET } },
      ],
    })
    await page.setViewport({ width: 1100, height: 1000, deviceScaleFactor: 2 })
    await a.sleep(600)
    await a.click('Skip', 1000)
  } },
  { name: 'start-pause-resume-stop-resume', async run(a, page) {
    await a.click({ t: 'Pause', sel: 'button' }, 1500)
    await waitText(a, page, 'PAUSED')
    await a.sleep(7000)
    await a.shot(a.out('start-pause-resume-stop-resume'), {
      crop: { t: 'Resume', sel: 'button', minW: 700 }, extra: [{ t: 'Renewal Follow-ups', sel: 'h1,h2' }], padB: 4,
      marks: [
        { n: 1, spec: { t: 'PAUSED', sel: 'span,div' } },
        { n: 2, spec: { t: 'Resume', sel: 'button' } },
      ],
    })
  } },
  { name: 'create-a-campaign-follow-up', async run(a, page) {
    await a.click({ t: 'Status', sel: 'button' }, 700)
    await a.click({ t: 'Pending', has: true, sel: '[role=option],[role=menuitemcheckbox],[role=checkbox],label' }, 700)
    await a.key('Escape', 900)
    const names = await page.evaluate(() => [...document.querySelectorAll('[aria-label^="Select "]')].map((e) => e.getAttribute('aria-label')).filter((n) => !/all leads/.test(n)).slice(0, 2))
    console.log('PICK', names)
    await a.click({ t: names[0] }, 400)
    await a.click({ t: names[1] }, 900)
    globalThis.__picked = names
    await a.shot(a.out('create-a-campaign-follow-up'), {
      crop: { t: 'Create campaign', sel: 'button', minW: 600 }, extra: [{ t: globalThis.__picked[1], minW: 600 }, { t: 'Status', starts: true, sel: 'button' }],
      marks: [
        { n: 1, spec: [{ t: globalThis.__picked[0] }, { t: globalThis.__picked[1] }] },
        { n: 2, spec: { t: 'Create campaign', sel: 'button' } },
      ],
    })
  } },
]}]
