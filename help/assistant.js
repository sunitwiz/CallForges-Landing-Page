/* Help center assistant, in the /help page itself: answers questions about CallForges under the question box
   and hands the rest to a person on our team through the "Talk to a person" form, in the same place. */
(function () {
  'use strict';
  var API = 'https://api.callforges.com/api/v1';
  var STORE = 'cf-help-assistant';
  var SOURCE = 'help_center';
  var MAX_TEXT = 1000;
  var MAX_CHAT = 10;
  var MAX_TRANSCRIPT = 20;
  var MAX_KEPT = 40;
  var MAX_QUESTION = 2000;
  var TIMEOUT_MS = 30000;
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var PHONE_RE = /^\+[1-9]\d{7,14}$/;
  var NOTICE = {
    429: 'You have asked a lot of questions in a short time. A person from our team can take it from here.',
    503: 'The assistant is not available right now. A person from our team can take it from here.',
    other: 'We could not get an answer. Try again, or talk to a person.'
  };
  var SEND_ERROR = {
    400: 'Check your e-mail and phone number, then send again.',
    429: 'Too many requests from your network. Try again later, or e-mail hello@callforges.com.',
    other: 'We could not send this. Try again, or e-mail hello@callforges.com.'
  };
  var ICON = {
    sparkle: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l1.9 5.6L19.5 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9z"/><path d="M19 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/></svg>',
    arrow: '<svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    person: '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="5.5" r="2.8" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M2.8 14c.6-2.6 2.7-4.2 5.2-4.2s4.6 1.6 5.2 4.2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    tick: '<svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 10.5l3.2 3.2L15 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  var box = document.getElementById('askForm');
  if (!box) return;
  var form = document.getElementById('askPerson');
  var ui = {
    ask: box.parentNode,
    input: document.getElementById('askInput'),
    send: box.querySelector('.ask-send'),
    start: document.getElementById('askStart'),
    thread: document.getElementById('askThread'),
    form: form,
    email: field('askEmail'),
    phone: field('askPhone'),
    question: field('askQuestion'),
    submit: form.querySelector('button[type="submit"]'),
    formError: document.getElementById('askSendErr')
  };
  var reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var state = load();
  var busy = false;
  var showErrors = false;
  var typing = null;
  var draft = restoreUnanswered();
  if (draft) ui.input.value = draft;
  renderAll();
  wire();
  if (location.hash === '#ask') {
    if (document.readyState === 'complete') ui.input.focus();
    else window.addEventListener('load', function () { setTimeout(function () { ui.input.focus(); }, 0); });
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function field(id) {
    var input = document.getElementById(id);
    return { wrap: input.parentNode, input: input, err: document.getElementById(id + 'Err') };
  }

  function load() {
    var empty = { messages: [], handoff: false, email: '' };
    try {
      var s = JSON.parse(sessionStorage.getItem(STORE) || 'null');
      if (!s || !Array.isArray(s.messages)) return empty;
      return {
        messages: s.messages.filter(function (m) { return m && typeof m.text === 'string' && /^(user|assistant|notice|sent)$/.test(m.role); })
          .map(function (m) { return { role: m.role, text: m.text, sources: cleanSources(m.sources), offerHuman: !!m.offerHuman, refused: !!m.refused }; }),
        handoff: !!s.handoff,
        email: typeof s.email === 'string' ? s.email : ''
      };
    } catch (e) {
      return empty;
    }
  }

  function save() {
    try {
      state.messages = state.messages.slice(-MAX_KEPT);
      sessionStorage.setItem(STORE, JSON.stringify(state));
    } catch (e) {}
  }

  function restoreUnanswered() {
    var last = state.messages[state.messages.length - 1];
    if (!last || last.role !== 'user') return '';
    state.messages.pop();
    save();
    return last.text;
  }

  function wire() {
    box.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = ui.input.value.trim();
      if (!q || busy) return;
      ui.input.value = '';
      if (window.matchMedia && matchMedia('(pointer: coarse)').matches) ui.input.blur();
      else ui.input.focus({ preventScroll: true });
      ask(q);
    });
    shuffleChips();
    Array.prototype.forEach.call(ui.start.querySelectorAll('.ask-chip'), function (b) {
      b.addEventListener('click', function () { ask(b.textContent); });
    });
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href="/help#ask"]');
      if (!a) return;
      e.preventDefault();
      focusBox();
    });
    window.addEventListener('hashchange', function () { if (location.hash === '#ask') focusBox(); });
    ui.form.addEventListener('submit', function (e) {
      e.preventDefault();
      sendRequest();
    });
    [ui.email, ui.phone, ui.question].forEach(function (f) {
      f.input.addEventListener('input', function () { if (showErrors) validate(); });
    });
  }

  function shuffleChips() {
    var list = ui.start.querySelector('.ask-chips');
    var pool;
    try { pool = JSON.parse(list.getAttribute('data-pool') || '[]'); } catch (e) { return; }
    for (var i = pool.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = pool[i]; pool[i] = pool[j]; pool[j] = t;
    }
    var buttons = list.querySelectorAll('.ask-chip');
    for (var k = 0; k < buttons.length && k < pool.length; k++) buttons[k].textContent = pool[k];
  }

  function focusBox() {
    document.getElementById('ask').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    ui.input.focus({ preventScroll: true });
  }

  function renderAll() {
    ui.thread.textContent = '';
    state.messages.forEach(function (m) { ui.thread.appendChild(item(m)); });
    if (state.handoff) fillHandoff();
    ui.form.hidden = !state.handoff;
    refresh();
  }

  function refresh() {
    var has = state.messages.length > 0 || busy;
    ui.thread.hidden = !has;
    ui.start.hidden = has;
    ui.ask.classList.toggle('has-thread', has);
    ui.send.disabled = busy;
    Array.prototype.forEach.call(ui.thread.querySelectorAll('.ask-more'), function (n) { n.remove(); });
    var last = ui.thread.lastElementChild;
    var m = state.messages[state.messages.length - 1];
    if (!last || !m || busy) return;
    if (m.role === 'sent') last.querySelector('.ask-sent-text').appendChild(againButton());
    else if (!state.handoff && ((m.role === 'assistant' && !m.refused) || m.role === 'notice')) last.appendChild(personButton(m.role === 'notice' || m.offerHuman));
  }

  function item(m) {
    if (m.role === 'user') return el('div', 'ask-q', m.text);
    if (m.role === 'notice') {
      var n = el('div');
      n.appendChild(el('p', 'ask-notice', m.text));
      return n;
    }
    if (m.role === 'sent') {
      var s = el('div', 'ask-sent');
      var tick = el('span', 'tick');
      tick.innerHTML = ICON.tick;
      var text = el('div', 'ask-sent-text');
      text.appendChild(el('strong', null, 'Thanks — we’ll e-mail you at ' + m.text + '.'));
      text.appendChild(el('p', null, 'A person from our team has your question.'));
      s.append(tick, text);
      return s;
    }
    var a = el('div', 'ask-a');
    var who = el('p', 'ask-who');
    who.innerHTML = ICON.sparkle;
    who.appendChild(document.createTextNode('CallForges AI'));
    var body = el('div', 'ask-body');
    renderText(m.text, body);
    a.append(who, body);
    if (m.sources && m.sources.length) a.appendChild(sourcesBlock(m.sources));
    return a;
  }

  function renderText(text, into) {
    var list = null;
    var para = null;
    String(text).replace(/\r/g, '').split('\n').forEach(function (line) {
      var t = line.trim();
      var m;
      if (!t) { list = null; para = null; return; }
      if ((m = t.match(/^(\d+)[.)]\s+(.*)$/)) || (m = t.match(/^([-*•])\s+(.*)$/))) {
        var tag = /\d/.test(m[1]) ? 'OL' : 'UL';
        if (!list || list.tagName !== tag) {
          list = el(tag.toLowerCase());
          if (tag === 'OL' && m[1] !== '1') list.start = parseInt(m[1], 10);
          into.appendChild(list);
        }
        var li = el('li');
        inline(m[2], li);
        list.appendChild(li);
        para = null;
        return;
      }
      list = null;
      if (para) para.appendChild(el('br'));
      else { para = el('p'); into.appendChild(para); }
      inline(t, para);
    });
  }

  // **bold**, then *italic* or _italic_: a single mark only where it opens and closes a run of
  // text, so "2 * 3", snake_case and a list's "* " stay as they are. Text nodes only, never HTML.
  var EMPHASIS = /\*\*([^*]+)\*\*|(^|[^A-Za-z0-9*])\*([^*\s](?:[^*]*[^*\s])?)\*(?![A-Za-z0-9*])|(^|[^A-Za-z0-9_])_([^_\s](?:[^_]*[^_\s])?)_(?![A-Za-z0-9_])/g;

  function inline(text, into) {
    var done = 0;
    var m;
    EMPHASIS.lastIndex = 0;
    while ((m = EMPHASIS.exec(text))) {
      var lead = m[2] != null ? m[2] : (m[4] != null ? m[4] : '');
      var start = m.index + lead.length;
      if (start > done) into.appendChild(document.createTextNode(text.slice(done, start)));
      if (m[1] != null) into.appendChild(el('strong', null, m[1]));
      else into.appendChild(el('em', null, m[3] != null ? m[3] : m[5]));
      done = EMPHASIS.lastIndex;
    }
    if (done < text.length) into.appendChild(document.createTextNode(text.slice(done)));
  }

  function sourcesBlock(sources) {
    var wrap = el('div', 'ask-sources');
    wrap.appendChild(el('p', 'ask-label', 'Sources'));
    var ul = el('ul');
    sources.forEach(function (s) {
      var li = el('li');
      var a = el('a', null, s.title);
      a.href = s.url;
      a.insertAdjacentHTML('beforeend', ICON.arrow);
      li.appendChild(a);
      ul.appendChild(li);
    });
    wrap.appendChild(ul);
    return wrap;
  }

  function personButton(primary) {
    var wrap = el('div', 'ask-more');
    var b = el('button', 'btn ' + (primary ? 'btn-primary' : 'btn-ghost') + ' btn-sm');
    b.type = 'button';
    b.innerHTML = ICON.person;
    b.appendChild(el('span', null, 'Talk to a person'));
    b.addEventListener('click', function () { openHandoff(true); });
    wrap.appendChild(b);
    return wrap;
  }

  function againButton() {
    var wrap = el('div', 'ask-more');
    var b = el('button', 'btn btn-ghost btn-sm', 'Ask another question');
    b.type = 'button';
    b.addEventListener('click', focusBox);
    wrap.appendChild(b);
    return wrap;
  }

  function cleanSources(list) {
    var seen = {};
    return (Array.isArray(list) ? list : []).map(function (s) {
      var url = safeUrl(s && s.url);
      var title = s && typeof s.title === 'string' ? s.title.trim() : '';
      if (!url || !title || seen[url]) return null;
      seen[url] = true;
      return { title: title, url: url };
    }).filter(Boolean).slice(0, 4);
  }

  function safeUrl(u) {
    if (typeof u !== 'string') return null;
    try {
      var x = new URL(u, location.href);
      if (x.origin === location.origin || (x.protocol === 'https:' && x.hostname === 'callforges.com')) return x.href;
    } catch (e) {}
    return null;
  }

  function add(m) {
    state.messages.push(m);
    save();
    var n = item(m);
    ui.thread.insertBefore(n, typing);
    return n;
  }

  function setTyping(on) {
    if (on && !typing) {
      typing = el('div', 'ask-typing');
      typing.append(el('i'), el('i'), el('i'), el('span', 'ask-sr', 'Looking for an answer…'));
      ui.thread.appendChild(typing);
    } else if (!on && typing) {
      typing.remove();
      typing = null;
    }
  }

  function reveal(n) {
    var top = n.getBoundingClientRect().top;
    var margin = parseFloat(getComputedStyle(n).scrollMarginTop) || 0;
    if (top < margin || top > window.innerHeight - 220) n.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }

  function history(limit) {
    return state.messages
      .filter(function (m) { return m.role === 'user' || m.role === 'assistant'; })
      .slice(-limit)
      .map(function (m) { return { role: m.role, text: m.text.slice(0, MAX_TEXT) }; });
  }

  function ask(q) {
    q = q.trim().slice(0, MAX_TEXT);
    if (!q || busy) return;
    closeHandoff();
    busy = true;
    var asked = add({ role: 'user', text: q });
    setTyping(true);
    refresh();
    reveal(asked);
    post('/support/chat', { messages: history(MAX_CHAT), page: location.pathname, source: SOURCE }).then(function (r) {
      var b = r.body;
      busy = false;
      setTyping(false);
      if (r.status === 200 && b && typeof b.answer === 'string' && b.answer.trim()) {
        add({ role: 'assistant', text: b.answer.trim(), sources: b.refused ? [] : cleanSources(b.sources), offerHuman: !!b.offerHuman, refused: !!b.refused });
        refresh();
      } else {
        add({ role: 'notice', text: NOTICE[r.status] || NOTICE.other });
        if (r.status === 429 || r.status === 503) openHandoff(false);
        else refresh();
      }
      reveal(asked);
    });
  }

  function post(path, payload) {
    var ctrl = typeof AbortController === 'function' ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, TIMEOUT_MS) : 0;
    return fetch(API + path, {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: ctrl ? ctrl.signal : undefined
    }).then(function (res) {
      return res.json().catch(function () { return null; }).then(function (body) { return { status: res.status, body: body }; });
    }).catch(function () {
      return { status: 0, body: null };
    }).then(function (r) {
      clearTimeout(timer);
      return r;
    });
  }

  function lastQuestion() {
    for (var i = state.messages.length - 1; i >= 0; i--) {
      if (state.messages[i].role === 'user') return state.messages[i].text;
    }
    return '';
  }

  function fillHandoff() {
    ui.email.input.value = ui.email.input.value || state.email;
    ui.question.input.value = lastQuestion().slice(0, MAX_QUESTION);
  }

  function openHandoff(byUser) {
    if (!state.handoff) {
      showErrors = false;
      clearErrors();
      fillHandoff();
      state.handoff = true;
      save();
      ui.form.hidden = false;
    }
    refresh();
    if (!byUser) return;
    ui.form.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    ui.email.input.focus({ preventScroll: true });
  }

  function closeHandoff() {
    if (!state.handoff) return;
    state.handoff = false;
    save();
    ui.form.hidden = true;
  }

  function setError(f, msg) {
    f.wrap.classList.toggle('invalid', !!msg);
    f.err.hidden = !msg;
    f.err.textContent = msg || '';
    if (msg) {
      f.input.setAttribute('aria-invalid', 'true');
      f.input.setAttribute('aria-describedby', f.err.id);
    } else {
      f.input.removeAttribute('aria-invalid');
      f.input.removeAttribute('aria-describedby');
    }
  }

  function clearErrors() {
    [ui.email, ui.phone, ui.question].forEach(function (f) { setError(f, ''); });
    ui.formError.hidden = true;
  }

  function normalPhone(v) {
    return v.replace(/[\s().-]/g, '');
  }

  function validate() {
    var email = ui.email.input.value.trim();
    var phone = normalPhone(ui.phone.input.value);
    var question = ui.question.input.value.trim();
    var errors = [
      [ui.email, !email ? 'Enter your e-mail address.' : !EMAIL_RE.test(email) ? 'Enter a valid e-mail address, like name@company.com.' : ''],
      [ui.phone, phone && !PHONE_RE.test(phone) ? 'Enter the whole number with its country code, like +1 415 555 0134.' : ''],
      [ui.question, !question ? 'Tell us what you need help with.' : '']
    ];
    var first = null;
    errors.forEach(function (e) {
      setError(e[0], e[1]);
      if (e[1] && !first) first = e[0];
    });
    return first;
  }

  function sendRequest() {
    if (ui.submit.disabled) return;
    showErrors = true;
    ui.formError.hidden = true;
    var bad = validate();
    if (bad) { bad.input.focus(); return; }
    var email = ui.email.input.value.trim();
    var phone = normalPhone(ui.phone.input.value);
    var payload = {
      email: email,
      question: ui.question.input.value.trim().slice(0, MAX_QUESTION),
      transcript: history(MAX_TRANSCRIPT),
      page: location.pathname,
      source: SOURCE
    };
    if (phone) payload.phone = phone;
    ui.submit.disabled = true;
    ui.submit.textContent = 'Sending…';
    post('/support/requests', payload).then(function (r) {
      ui.submit.disabled = false;
      ui.submit.textContent = 'Send';
      if (r.status !== 202 && r.status !== 200) {
        ui.formError.textContent = SEND_ERROR[r.status] || SEND_ERROR.other;
        ui.formError.hidden = false;
        return;
      }
      state.email = email;
      showErrors = false;
      ui.phone.input.value = '';
      closeHandoff();
      add({ role: 'sent', text: email });
      refresh();
      ui.thread.lastElementChild.querySelector('.ask-more .btn').focus();
    });
  }
})();
