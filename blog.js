/* /blog: filter the posts by topic and show them a few rows at a time. Without this file every post is listed. */
(function () {
  var PAGE = 9;
  var bar = document.getElementById('blogTopics');
  var grid = document.getElementById('blogGrid');
  var more = document.getElementById('blogMore');
  var status = document.getElementById('blogStatus');
  var featured = document.getElementById('blogFeatured');
  if (!bar || !grid || !more) return;

  var cards = Array.prototype.slice.call(grid.children);
  var buttons = Array.prototype.slice.call(bar.querySelectorAll('button'));
  var topic = 'all';
  var limit = PAGE;

  function render() {
    var all = topic === 'all';
    var matches = cards.filter(function (card) {
      return all ? !card.hasAttribute('data-featured') : card.getAttribute('data-topic') === topic;
    });
    cards.forEach(function (card) { card.hidden = true; });
    matches.slice(0, limit).forEach(function (card) { card.hidden = false; });
    more.hidden = matches.length <= limit;
    if (featured) featured.hidden = !all;
    if (status) status.textContent = matches.length === 1 ? '1 post' : matches.length + ' posts';
  }

  bar.addEventListener('click', function (event) {
    var button = event.target.closest('button');
    if (!button) return;
    topic = button.getAttribute('data-topic');
    limit = PAGE;
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === button)); });
    render();
  });

  more.addEventListener('click', function () {
    var first = limit;
    limit += PAGE;
    render();
    var next = cards.filter(function (card) { return !card.hidden; })[first];
    if (next) next.querySelector('a').focus({ preventScroll: true });
  });

  bar.hidden = false;
  render();
})();
