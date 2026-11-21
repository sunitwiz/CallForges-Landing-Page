/*
 * The offer banner across the top of every callforges.com page, drawn like the one inside the app:
 * one line with the offer and its end date, the theme's colours and icon, and a close button.
 * It carries no coupon code; people claim the offer in the app after they sign up.
 *
 * To change it, edit PROMO below and push. To turn it off, set on: false and push.
 * It hides itself once endsAt has passed, so an old offer never shows.
 */
var PROMO = {
  on: true,
  text: 'Black Friday deal: save 20% on your plan',
  endsAt: '2026-11-30T06:24:00Z', // the banner's end in the app, UTC
  theme: 'black_friday', // one of THEMES below
  link: 'https://app.callforges.com/signup',
};

(function () {
  /* The same theme keys, colours and icons as the app. */
  var THEMES = {
    default: { bg: '#E7EDFB', text: '#2B6CB8', icon: 'sparkles' },
    thanksgiving: { bg: '#FCF0DA', text: '#8D6009', icon: 'leaf' },
    black_friday: { bg: '#17171C', text: '#FFFFFF', icon: 'tag' },
    cyber_monday: { bg: '#EDE9FE', text: '#6D28D9', icon: 'zap' },
    christmas: { bg: '#E3F6ED', text: '#157A4C', icon: 'gift' },
    new_year: { bg: '#FBE9E7', text: '#BD372C', icon: 'party-popper' },
  };
  var ICONS = {
    tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
    sparkles: '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    gift: '<path d="M12 7v14"/><path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"/><rect x="3" y="7" width="18" height="4" rx="1"/>',
    'party-popper': '<path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  };

  var ends = new Date(PROMO.endsAt);
  if (!PROMO.on || !(ends > new Date())) return;
  var here = document.currentScript;
  if (!here) return;

  var theme = THEMES[PROMO.theme] || THEMES['default'];
  function svg(name, size) {
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[name] + '</svg>';
  }
  function escape(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  var day;
  try {
    day = new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric' }).format(ends);
  } catch (e) {
    day = ends.toDateString().slice(4, 10);
  }

  var style = document.createElement('style');
  style.textContent =
    '.promo{background:var(--promo-bg);color:var(--promo-text);font-size:13px;line-height:1.4}' +
    '.promo-in{display:flex;align-items:center;gap:12px;min-height:44px;padding-top:6px;padding-bottom:6px}' +
    '.promo-in>svg{flex-shrink:0}' +
    '.promo a{flex:1;min-width:0;color:inherit;text-decoration:none;text-wrap:pretty}' +
    '.promo a:hover b{text-decoration:underline}' +
    '.promo b{font-weight:500}' +
    '.promo span{opacity:.7}' +
    '.promo button{flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border:0;border-radius:6px;background:transparent;color:inherit;cursor:pointer}' +
    '.promo button:hover{background:rgba(127,127,127,.18)}' +
    '.promo a:focus-visible,.promo button:focus-visible{outline:2px solid currentColor;outline-offset:2px}' +
    '@media print{.promo{display:none}}';
  document.head.appendChild(style);

  var bar = document.createElement('section');
  bar.className = 'promo';
  bar.setAttribute('aria-label', 'Offer');
  bar.style.setProperty('--promo-bg', theme.bg);
  bar.style.setProperty('--promo-text', theme.text);
  bar.innerHTML =
    '<div class="wrap promo-in">' + svg(theme.icon, 16) +
    '<a href="' + escape(PROMO.link) + '"><b>' + escape(PROMO.text) + '</b><span> · Offer ends ' + escape(day) + '</span></a>' +
    '<button type="button" aria-label="Close offer">' + svg('x', 16) + '</button></div>';
  bar.querySelector('button').addEventListener('click', function () {
    bar.remove();
  });
  here.parentNode.insertBefore(bar, here);
})();
