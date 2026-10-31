(function () {
  var form = document.getElementById('searchForm');
  if (!form) return;
  var input = document.getElementById('searchInput');
  var list = document.getElementById('searchResults');
  var empty = document.getElementById('searchEmpty');
  var index = [];
  try { index = JSON.parse(document.getElementById('helpIndex').textContent); } catch (e) { return; }

  function words(text) {
    return (text || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').match(/[a-z0-9]+/g) || [];
  }
  index.forEach(function (a) {
    a.titleText = ' ' + words(a.t).join(' ');
    a.allText = ' ' + words(a.t + ' ' + a.d + ' ' + a.c).join(' ');
  });

  function score(a, query) {
    var total = 0;
    for (var i = 0; i < query.length; i++) {
      var w = ' ' + query[i];
      if (a.titleText.indexOf(w) !== -1) total += 3;
      else if (a.allText.indexOf(w) !== -1) total += 1;
      else return 0;
    }
    return total;
  }

  function render() {
    var query = words(input.value);
    list.textContent = '';
    if (!query.length) { list.hidden = true; empty.hidden = true; return; }
    var hits = index.map(function (a) { return { a: a, s: score(a, query) }; })
      .filter(function (h) { return h.s > 0; })
      .sort(function (x, y) { return y.s - x.s; })
      .slice(0, 8);
    hits.forEach(function (h) {
      var li = document.createElement('li');
      var link = document.createElement('a');
      link.href = h.a.u;
      var box = document.createElement('div');
      var title = document.createElement('strong');
      title.textContent = h.a.t;
      var desc = document.createElement('span');
      desc.textContent = h.a.c + ' · ' + h.a.d;
      box.appendChild(title);
      box.appendChild(desc);
      link.appendChild(box);
      li.appendChild(link);
      list.appendChild(li);
    });
    list.hidden = hits.length === 0;
    empty.hidden = hits.length !== 0;
  }

  input.addEventListener('input', render);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { input.value = ''; render(); }
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    render();
    var first = list.querySelector('a');
    if (first) location.href = first.href;
  });
})();
