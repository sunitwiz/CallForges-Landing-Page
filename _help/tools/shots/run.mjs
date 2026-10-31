import { start, api } from './lib.mjs'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const OUT = process.env.HELP_IMG_DIR || path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../help/img')
const PEEK = path.join(os.tmpdir(), 'help-shots-peek')
fs.mkdirSync(PEEK, { recursive: true })

const [group, ...only] = process.argv.slice(2)
const mod = await import(`./groups/${group}.mjs`)
const results = []
for (const sess of mod.sessions) {
  const todo = sess.shots.filter((s) => !only.length || only.includes(s.name))
  if (!todo.length) continue
  const { browser, page, guard } = await start(sess.opts || {})
  const a = api(page, guard)
  a.out = (n) => `${OUT}/${n}.png`
  a.peekTo = (n) => a.peek(`${PEEK}/${n}.png`)
  for (const s of todo) {
    try {
      await Promise.race([s.run(a, page), new Promise((_, rej) => setTimeout(() => rej(new Error('TIMEOUT 60s')), 60000))])
      results.push(`OK   ${s.name}`)
    } catch (e) {
      results.push(`FAIL ${s.name}: ${e.message.slice(0, 300)}`)
      await a.peek(`${PEEK}/${s.name}-fail.png`).catch(() => {})
      if (e.message.startsWith('GUARD')) break
    }
  }
  if (guard.aborted.length) results.push(`aborted requests this session: ${guard.aborted.length}`)
  await browser.close()
}
console.log('\n' + results.join('\n'))
