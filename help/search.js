/* Help center search: filters the article index below as you type. */
(function () {
  var ARTICLES = [
    { title: 'Attio integration', url: '/help/articles/attio-integration', desc: 'Connect Attio, map users, log calls as notes or Calls records, import people.', words: 'attio crm notes calls object custom object record text map users import contacts log past calls disconnect permissions scopes unknown numbers' },
    { title: 'HubSpot integration', url: '/help/articles/hubspot-integration', desc: 'Connect HubSpot, map owners, log calls as HubSpot calls or notes, import contacts.', words: 'hubspot crm call activity engagement notes owners map users import contacts lists log past calls disconnect permissions scopes unknown numbers daily limit' },
    { title: 'Pipedrive integration', url: '/help/articles/pipedrive-integration', desc: 'Connect Pipedrive, map users, log calls as Call activities or notes, import people.', words: 'pipedrive crm call activity notes map users import contacts filters log past calls disconnect permissions scopes unknown numbers admin' }
  ];
  var input = document.getElementById('helpSearch');
  var list = document.getElementById('helpResults');
  if (!input || !list) return;
  var active = -1;
  function render(q) {
    q = q.trim().toLowerCase();
    list.innerHTML = '';
    active = -1;
    if (!q) { list.hidden = true; input.setAttribute('aria-expanded', 'false'); return; }
    var terms = q.split(/\s+/);
    var hits = ARTICLES.filter(function (a) {
      var hay = (a.title + ' ' + a.desc + ' ' + a.words).toLowerCase();
      return terms.every(function (t) { return hay.indexOf(t) !== -1; });
    });
    if (!hits.length) {
      var li = document.createElement('li');
      li.className = 'empty';
      li.textContent = 'No articles match “' + q + '”. Email hello@callforges.com and we will help.';
      list.appendChild(li);
    }
    hits.forEach(function (a, i) {
      var li = document.createElement('li');
      var link = document.createElement('a');
      link.href = a.url;
      link.id = 'helpHit' + i;
      link.setAttribute('role', 'option');
      var t = document.createElement('strong'); t.textContent = a.title;
      var d = document.createElement('span'); d.textContent = a.desc;
      link.appendChild(t); link.appendChild(d); li.appendChild(link); list.appendChild(li);
    });
    list.hidden = false;
    input.setAttribute('aria-expanded', 'true');
  }
  function move(step) {
    var links = list.querySelectorAll('a');
    if (!links.length) return;
    if (active >= 0) links[active].removeAttribute('aria-selected');
    active = (active + step + links.length) % links.length;
    links[active].setAttribute('aria-selected', 'true');
    input.setAttribute('aria-activedescendant', links[active].id);
  }
  input.addEventListener('input', function () { render(input.value); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
    else if (e.key === 'Enter') {
      var links = list.querySelectorAll('a');
      var pick = active >= 0 ? links[active] : links[0];
      if (pick) { e.preventDefault(); location.href = pick.href; }
    } else if (e.key === 'Escape') { input.value = ''; render(''); }
  });
  document.addEventListener('click', function (e) {
    if (!list.contains(e.target) && e.target !== input) { list.hidden = true; input.setAttribute('aria-expanded', 'false'); }
  });
})();
