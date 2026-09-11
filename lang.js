// 언어 전환. 스크립트가 막히면 세 언어가 모두 보인다(noscript 대비로 초기 상태는 CSS가 아니라 JS가 정한다).
(function () {
  var sections = Array.prototype.slice.call(document.querySelectorAll('section[data-lang]'));
  var buttons = Array.prototype.slice.call(document.querySelectorAll('.langs button'));
  if (!sections.length || !buttons.length) return;

  function show(lang) {
    sections.forEach(function (s) { s.hidden = s.getAttribute('data-lang') !== lang; });
    buttons.forEach(function (b) { b.setAttribute('aria-selected', String(b.getAttribute('data-lang') === lang)); });
    try { history.replaceState(null, '', '#' + lang); } catch (e) { /* file:// 등 */ }
  }

  var known = sections.map(function (s) { return s.getAttribute('data-lang'); });
  var fromHash = (location.hash || '').replace('#', '');
  var fromBrowser = (navigator.language || 'ko').slice(0, 2);
  var initial = known.indexOf(fromHash) >= 0 ? fromHash
    : known.indexOf(fromBrowser) >= 0 ? fromBrowser
    : known[0];

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { show(b.getAttribute('data-lang')); });
  });
  show(initial);
})();
