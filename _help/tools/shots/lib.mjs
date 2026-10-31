import puppeteer from 'puppeteer-core'

export const ORIGIN = 'http://127.0.0.1:5191'
const WS_ORIGIN = 'ws://127.0.0.1:5191'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const IN_PAGE = () => {
  const norm = (s) => (s || '').replace(/\s+/g, ' ').trim()
  const visible = (e) => {
    const r = e.getBoundingClientRect()
    if (r.width < 1 || r.height < 1) return false
    const cs = getComputedStyle(e)
    return cs.visibility !== 'hidden' && cs.display !== 'none' && Number(cs.opacity) > 0.05
  }
  const INTERACTIVE = 'button,a,[role=button],[role=tab],[role=radio],[role=menuitem],[role=menuitemradio],[role=option],[role=checkbox],[role=switch],[role=combobox],label,input,select,textarea,summary'
  const ownText = (e) => norm(e.innerText || e.getAttribute('aria-label') || e.getAttribute('placeholder') || e.value || '')
  const matches = (e, spec) => {
    const t = norm(e.innerText)
    const a = norm(e.getAttribute('aria-label'))
    const p = norm(e.getAttribute('placeholder'))
    const want = spec.t
    if (spec.starts) return t.startsWith(want) || a.startsWith(want) || p.startsWith(want)
    if (spec.has) return t.includes(want) || a.includes(want)
    return t === want || a === want || p === want
  }
  const scope = (spec) => {
    if (!spec.within) return document
    const w = window.__find(spec.within)
    if (!w) throw new Error('scope not found: ' + JSON.stringify(spec.within))
    return w
  }
  window.__find = (spec) => {
    if (typeof spec === 'string') spec = { t: spec }
    if (spec.el) return spec.el
    const root = scope(spec)
    let found = null
    if (spec.css) {
      const all = [...root.querySelectorAll(spec.css)].filter(visible)
      found = all[spec.nth ?? 0] || null
    } else if (spec.label) {
      const labels = [...root.querySelectorAll('label,legend,[data-slot=field-label],[data-slot=label],p,span,div,h2,h3,h4,dt')]
        .filter(visible)
        .filter((e) => norm(e.innerText) === spec.label || (spec.starts && norm(e.innerText).startsWith(spec.label)))
      labels.sort((x, y) => x.innerText.length - y.innerText.length || (x.contains(y) ? 1 : -1))
      const lab = labels[spec.nth ?? 0]
      if (!lab) return null
      if (spec.self) return lab
      let el = lab.parentElement
      const ctrl = 'input,select,textarea,button,[role=combobox],[role=radiogroup],[role=switch],[role=checkbox]'
      while (el && el !== document.body) {
        if (el.querySelector(ctrl) && el !== lab) break
        el = el.parentElement
      }
      found = el
      if (spec.ctrl && found) found = [...found.querySelectorAll(ctrl)].filter(visible)[0] || found
    } else if (spec.card) {
      const heads = [...root.querySelectorAll('h1,h2,h3,h4,[data-slot=card-title],p,span,div')]
        .filter(visible)
        .filter((e) => norm(e.innerText) === spec.card)
      heads.sort((x, y) => (x.contains(y) ? 1 : y.contains(x) ? -1 : 0))
      const h = heads[0]
      if (!h) return null
      found = h.closest(spec.cardSel || '[data-slot=card],[role=dialog],section,.rounded-xl,.rounded-lg')
    } else {
      const cands = [...root.querySelectorAll(spec.sel || INTERACTIVE + ',h1,h2,h3,h4,p,span,div,td,th,li')]
        .filter(visible)
        .filter((e) => matches(e, spec))
      const deep = cands.filter((e) => !cands.some((o) => o !== e && e.contains(o)))
      let pickFrom = deep
      if (!spec.sel) {
        const lifted = deep.map((e) => e.closest(INTERACTIVE) || e)
        pickFrom = [...new Set(lifted)].filter(visible)
      }
      found = pickFrom[spec.nth ?? 0] || null
    }
    if (found && spec.up) for (let i = 0; i < spec.up; i++) found = found.parentElement
    if (found && spec.closest) found = found.closest(spec.closest)
    if (found && spec.minW) while (found.parentElement && found.getBoundingClientRect().width < spec.minW) found = found.parentElement
    if (found && spec.minH) while (found.parentElement && found.getBoundingClientRect().height < spec.minH) found = found.parentElement
    return found
  }
  window.__rect = (spec) => {
    const e = window.__find(spec)
    if (!e) return null
    let r = e.getBoundingClientRect()
    if (spec.textRect) { const range = document.createRange(); range.selectNodeContents(e); r = range.getBoundingClientRect() }
    return { x: r.left, y: r.top, w: r.width, h: r.height, text: ownText(e).slice(0, 50), radius: spec.textRect ? '4px' : getComputedStyle(e).borderRadius }
  }
  window.__mark = (marks) => {
    document.getElementById('__marks')?.remove()
    const layer = document.createElement('div')
    layer.id = '__marks'
    layer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:2147483647'
    const GAP = 6, STROKE = 2.5, R = 11
    const badges = []
    for (const m of marks) {
      const o = document.createElement('div')
      let x = m.x - GAP - STROKE, y = m.y - GAP - STROKE
      let w = m.w + 2 * (GAP + STROKE), h = m.h + 2 * (GAP + STROKE)
      if (y < 1) { h -= 1 - y; y = 1 }
      if (x < 1) { w -= 1 - x; x = 1 }
      if (x + w > innerWidth - 1) w = innerWidth - 1 - x
      const rad = Math.min(14, Math.max(8, (parseFloat(m.radius) || 6) + GAP))
      o.style.cssText = `position:fixed;left:${x}px;top:${y}px;width:${w}px;height:${h}px;box-sizing:border-box;border:${STROKE}px solid #ff7a2e;border-radius:${rad}px;box-shadow:0 0 0 1.5px rgba(255,255,255,.9),0 2px 10px rgba(255,122,46,.18)`
      layer.appendChild(o)
      const b = document.createElement('div')
      b.textContent = String(m.n)
      b.style.cssText = `position:fixed;left:${Math.max(1, x - R - 1)}px;top:${Math.max(1, y - R - 1)}px;width:${2 * R}px;height:${2 * R}px;border-radius:50%;background:#ff7a2e;color:#fff;font:700 12.5px/22px Inter,Geist,system-ui,sans-serif;text-align:center;box-shadow:0 0 0 2px #fff,0 2px 6px rgba(11,13,18,.25);font-variant-numeric:tabular-nums`
      badges.push(b)
    }
    badges.forEach((b) => layer.appendChild(b))
    document.body.appendChild(layer)
  }
}

export async function start({ scenario = null, width = 1280, height = 1000, login = true } = {}) {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', '--lang=en-US', '--disable-features=Translate'],
    env: { ...process.env, LANG: 'en_US.UTF-8' },
  })
  const page = await browser.newPage()
  await page.emulateTimezone('America/New_York')
  const guard = { aborted: [], armed: false, armedAborts: [] }
  await page.setRequestInterception(true)
  page.on('request', (r) => {
    const u = r.url()
    if (u.startsWith(ORIGIN + '/') || u === ORIGIN || u.startsWith(WS_ORIGIN) || u.startsWith('data:') || u.startsWith('blob:')) return r.continue()
    guard.aborted.push(u)
    if (guard.armed) guard.armedAborts.push(u)
    console.log('ABORTED', guard.armed ? '(after call/start)' : '', u)
    r.abort()
  })
  const cdp = await page.createCDPSession()
  await cdp.send('Network.enable')
  cdp.on('Network.webSocketCreated', (e) => {
    if (!e.url.startsWith(WS_ORIGIN)) {
      guard.aborted.push(e.url)
      if (guard.armed) guard.armedAborts.push(e.url)
      console.log('WEBSOCKET to other host', e.url)
    }
  })
  await page.evaluateOnNewDocument((wsOrigin) => {
    const Native = window.WebSocket
    window.WebSocket = function (url, p) {
      if (!String(url).startsWith(wsOrigin)) throw new Error('blocked websocket ' + url)
      return new Native(url, p)
    }
    window.WebSocket.prototype = Native.prototype
    Object.assign(window.WebSocket, { CONNECTING: 0, OPEN: 1, CLOSING: 2, CLOSED: 3 })
  }, WS_ORIGIN)
  await page.evaluateOnNewDocument(() => {
    const native = Math.random
    window.__base = null
    Math.random = () => (window.__base === null ? native() : window.__base + native() * 0.0009)
  })
  await page.evaluateOnNewDocument(IN_PAGE)
  page.on('pageerror', (e) => console.log('PAGEERROR', e.message.slice(0, 200)))
  await page.setViewport({ width, height, deviceScaleFactor: 2 })
  await page.goto(ORIGIN + '/login', { waitUntil: 'networkidle0' })
  await page.evaluate((s) => {
    try {
      localStorage.clear()
      if (s) localStorage.setItem('pd.mockBillingScenario', s)
    } catch {}
  }, scenario)
  await page.goto(ORIGIN + '/login', { waitUntil: 'networkidle0' })
  if (!login) return { browser, page, guard }
  await page.type('#identifier', 'ana@acme.com')
  await page.type('#password', 'demo-password-1')
  await page.click('button[type=submit]')
  await sleep(2500)
  return { browser, page, guard }
}

export function api(page, guard) {
  const self = {
    sleep,
    async nav(path, wait = 1600) {
      await page.evaluate((u) => {
        window.history.pushState({}, '', u)
        window.dispatchEvent(new PopStateEvent('popstate'))
      }, path)
      await sleep(wait)
    },
    async load(path, wait = 2200) {
      await page.goto(ORIGIN + path, { waitUntil: 'networkidle0' })
      await sleep(wait)
    },
    async el(spec) {
      const h = await page.evaluateHandle((s) => window.__find(s), spec)
      const e = h.asElement()
      if (!e) throw new Error('NOT FOUND: ' + JSON.stringify(spec))
      return e
    },
    async rect(spec) {
      const r = await page.evaluate((s) => window.__rect(s), spec)
      if (!r) throw new Error('NOT FOUND: ' + JSON.stringify(spec))
      return r
    },
    async click(spec, wait = 900) {
      const e = await self.el(spec)
      await e.evaluate((x) => x.scrollIntoView({ block: 'center', inline: 'nearest' }))
      await sleep(150)
      await e.click()
      await sleep(wait)
    },
    async dialClick(spec, wait = 900) {
      guard.armed = true
      await self.click(spec, wait)
    },
    async type(spec, text, wait = 500) {
      const e = await self.el(spec)
      await e.click({ clickCount: 3 })
      await e.type(text, { delay: 20 })
      await sleep(wait)
    },
    async key(k, wait = 400) {
      await page.keyboard.press(k)
      await sleep(wait)
    },
    async scrollTo(spec, block = 'start', wait = 400) {
      const e = await self.el(spec)
      await e.evaluate((x, b) => x.scrollIntoView({ block: b }), block)
      await sleep(wait)
    },
    async shot(file, { marks = [], crop, pad = 18, padB, extra = [], maxCss = 800, scrollTo, minCssW = 600, leftOf }) {
      if (guard.armedAborts.length) throw new Error('GUARD: requests to other hosts after call/start: ' + guard.armedAborts.join(', '))
      await page.evaluate(() => document.getElementById('__marks')?.remove())
      const ms = []
      if (scrollTo !== false) {
        await page.evaluate((sp) => {
          const e = window.__find(sp)
          if (!e) return
          e.scrollIntoView({ block: 'start' })
          let p = e.parentElement
          while (p && p !== document.body) {
            const oy = getComputedStyle(p).overflowY
            if (p.scrollHeight > p.clientHeight + 2 && (oy === 'auto' || oy === 'scroll')) { p.scrollTop = Math.max(0, p.scrollTop - 110); return }
            p = p.parentElement
          }
          window.scrollBy(0, -110)
        }, scrollTo || crop)
        await sleep(400)
      }
      for (const m of marks) {
        const specs = Array.isArray(m.spec) ? m.spec : [m.spec]
        const rs = []
        for (const sp of specs) rs.push(await self.rect(sp))
        const x = Math.min(...rs.map((r) => r.x)), y = Math.min(...rs.map((r) => r.y))
        const x2 = Math.max(...rs.map((r) => r.x + r.w)), y2 = Math.max(...rs.map((r) => r.y + r.h))
        ms.push({ ...rs[0], x, y, w: x2 - x, h: y2 - y, n: m.n, text: rs.map((r) => r.text).join(' + ') })
      }
      await page.evaluate((x) => window.__mark(x), ms)
      const rects = []
      const cr = await self.rect(crop)
      rects.push(cr)
      for (const s of extra) rects.push(await self.rect(s))
      for (const m of ms) rects.push({ x: m.x - 22, y: m.y - 22, w: m.w + 36, h: m.h + 36 })
      let x0 = Math.min(...rects.map((r) => r.x)) - pad
      let y0 = Math.min(...rects.map((r) => r.y)) - pad
      let x1 = Math.max(...rects.map((r) => r.x + r.w)) + pad
      let y1 = Math.max(...rects.map((r) => r.y + r.h)) + (padB ?? pad)
      const vp = page.viewport()
      if (x1 - x0 < minCssW) {
        const need = minCssW - (x1 - x0)
        x0 -= need / 2; x1 += need / 2
        if (x0 < 0) { x1 -= x0; x0 = 0 }
        if (x1 > vp.width) { x0 -= x1 - vp.width; x1 = vp.width }
      }
      if (leftOf) x0 = Math.max(x0, (await self.rect(leftOf)).x)
      x0 = Math.max(0, x0); y0 = Math.max(0, y0)
      x1 = Math.min(vp.width, x1); y1 = Math.min(vp.height, y1)
      const w = Math.round(x1 - x0), h = Math.round(y1 - y0)
      const scale = Math.min(1, maxCss / w)
      const text = await page.evaluate(() => document.body.innerText)
      if (/twilio/i.test(text)) console.log('WARNING: page text contains Twilio')
      const off = await page.evaluate(() => ({ x: window.visualViewport.pageLeft, y: window.visualViewport.pageTop }))
      await page.screenshot({ path: file, captureBeyondViewport: false, clip: { x: Math.round(x0) + off.x, y: Math.round(y0) + off.y, width: w, height: h, scale } })
      console.log('SHOT', file.split('/').pop(), `${w}x${h}css scale=${scale.toFixed(2)}`, ms.map((m) => `${m.n}:${m.text}`).join(' | '))
      await page.evaluate(() => document.getElementById('__marks')?.remove())
    },
    async peek(file) {
      await page.screenshot({ path: file })
    },
    async texts(sel = 'button,[role=tab],[role=menuitem],[role=option],label,h1,h2,h3') {
      return page.evaluate((s) => [...document.querySelectorAll(s)].filter((e) => e.getBoundingClientRect().width > 0).map((e) => (e.innerText || e.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim().slice(0, 50)).filter(Boolean), sel)
    },
  }
  return self
}
