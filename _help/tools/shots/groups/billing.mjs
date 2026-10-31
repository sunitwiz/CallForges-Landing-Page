const DLG = { css: '[role=dialog]' }
const PLAN = { card: 'Plan details' }

export const sessions = [
  { opts: {}, shots: [
    { name: 'add-credits-add', async run(a) {
      await a.nav('/billing/overview')
      await a.click('Add credits', 1200)
      await a.shot(a.out('add-credits-add'), {
        crop: DLG, pad: 6, scrollTo: false,
        marks: [
          { n: 2, spec: [{ label: 'Amount', within: DLG }, { label: 'Other amount', within: DLG }] },
          { n: 3, spec: [{ label: 'You pay', within: DLG, self: true }, { t: '$50.00', within: DLG, sel: 'span,div,p,dd' }, { label: 'New balance', within: DLG, self: true }, { t: '92.388 credits', within: DLG, sel: 'span,div,p,dd' }] },
          { n: 4, spec: { t: 'Continue to payment', within: DLG } },
        ],
      })
      await a.key('Escape')
    } },
    { name: 'add-credits-balance', async run(a) {
      await a.nav('/billing/usage')
      await a.shot(a.out('add-credits-balance'), {
        crop: { t: 'Paid credit use', sel: 'h2,h3' },
        extra: [{ t: 'Estimated', has: true, sel: 'tr' }],
        marks: [
          { n: 1, spec: 'Export' },
          { n: 2, spec: { t: 'Estimated', has: true, sel: 'tr' } },
        ],
      })
    } },
    { name: 'plans-and-seats-seats', async run(a) {
      await a.nav('/billing/overview')
      await a.shot(a.out('plans-and-seats-seats'), {
        crop: { t: 'Plan details', sel: 'h2,h3,[data-slot=card-title],div,span' },
        extra: [{ css: '[role=progressbar]' }, { t: 'Add seats', within: PLAN }],
        marks: [
          { n: 1, spec: { t: 'paid (', has: true, sel: 'span,p,div' } },
          { n: 2, spec: { t: 'Capacity up to', has: true, sel: 'span,p,div' } },
          { n: 3, spec: 'Contact support to raise it' },
        ],
      })
    } },
    { name: 'plans-and-seats-add-seats', async run(a) {
      await a.nav('/billing/overview')
      await a.shot(a.out('plans-and-seats-add-seats'), {
        crop: PLAN, pad: 14,
        marks: [
          { n: 1, spec: { t: 'Add seats', within: PLAN } },
          { n: 2, spec: { t: 'Invite user', sel: 'a,button', within: PLAN } },
        ],
      })
    } },
    { name: 'plans-and-seats-change', async run(a) {
      await a.nav('/billing/pricing')
      await a.shot(a.out('plans-and-seats-change'), {
        crop: { t: 'Monthly', sel: 'button,[role=tab],[role=radio]' },
        extra: [{ t: 'Downgrade' }, { t: 'Upgrade' }, { t: 'Pricing', sel: 'h1' }],
        marks: [
          { n: 1, spec: 'Upgrade' },
          { n: 2, spec: 'Downgrade' },
          { n: 3, spec: { t: 'Annually', sel: 'button,[role=tab],[role=radio]' } },
        ],
      })
    } },
  ] },
  { opts: { scenario: 'trialing', width: 1100 }, shots: [
    { name: 'start-your-free-trial-add-card', async run(a) {
      await a.nav('/billing/overview')
      await a.shot(a.out('start-your-free-trial-add-card'), {
        crop: { t: 'Plan details', sel: 'h2,h3,[data-slot=card-title],div,span' },
        extra: [{ t: 'Subscribe now' }, { t: 'Trial limits apply', has: true, sel: 'p,div,span' }], minCssW: 0, padB: 12,
        marks: [
          { n: 1, spec: { t: 'Free trial ·', starts: true, sel: 'span,div' } },
          { n: 2, spec: { t: 'Add a card', within: PLAN } },
        ],
      })
    } },
    { name: 'start-your-free-trial-days-left', async run(a) {
      await a.nav('/billing/usage')
      await a.shot(a.out('start-your-free-trial-days-left'), {
        crop: { card: 'Included minutes' }, scrollTo: false, leftOf: { t: 'left in your trial', has: true, sel: 'div', minW: 700 },
        extra: [{ t: 'left in your trial', has: true, sel: 'span,p', textRect: true }, 'Choose a plan'],
        marks: [
          { n: 1, spec: [{ css: 'svg', within: { t: 'left in your trial', has: true, sel: 'div', minW: 700 } }, { t: 'left in your trial', has: true, sel: 'span,p', textRect: true }] },
          { n: 2, spec: [{ card: 'Trial outbound minutes', cardSel: 'div[class*=rounded]' }, { card: 'Trial inbound minutes', cardSel: 'div[class*=rounded]' }] },
        ],
      })
    } },
    { name: 'plans-and-seats-choose', async run(a) {
      await a.nav('/billing/overview')
      await a.click('Subscribe now', 1400)
      await a.shot(a.out('plans-and-seats-choose'), {
        crop: DLG, pad: 6, scrollTo: false,
        marks: [
          { n: 2, spec: { t: 'Monthly', within: DLG, minW: 300 } },
          { n: 2, spec: [{ t: 'Starter', within: DLG }, { t: 'Scale', within: DLG }] },
          { n: 2, spec: { t: 'Continue', within: DLG } },
        ],
      })
    } },
  ] },
  { opts: { scenario: 'credits_empty', width: 1100 }, shots: [
    { name: 'add-credits-run-out', async run(a) {
      await a.nav('/dashboard')
      await a.shot(a.out('add-credits-run-out'), {
        crop: { t: 'recharge to keep calling', has: true, sel: 'div', minW: 600 }, scrollTo: false, pad: 0,
        extra: [{ t: 'Dashboard', sel: 'h1' }, { t: 'Dial', sel: 'button' }, { t: 'How your dialing is performing', has: true, sel: 'p' }], padB: 14,
        marks: [{ n: 1, spec: { t: 'Add credits', sel: 'button,a', nth: 0 } }],
      })
    } },
  ] },
]
