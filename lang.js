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

  // 언어 버튼이 아니라 본문 앵커 링크를 눌렀을 때는 해시를 언어 코드로 덮어쓰지 않는다
  window.addEventListener('hashchange', function () {
    var id = (location.hash || '').replace('#', '');
    if (known.indexOf(id) >= 0) { show(id); return; }
    var el = id ? document.getElementById(id) : null;
    var sec = el && el.closest ? el.closest('section[data-lang]') : null;
    if (sec) {
      var lang = sec.getAttribute('data-lang');
      sections.forEach(function (s) { s.hidden = s.getAttribute('data-lang') !== lang; });
      buttons.forEach(function (b) { b.setAttribute('aria-selected', String(b.getAttribute('data-lang') === lang)); });
      el.scrollIntoView();
    }
  });

  var known = sections.map(function (s) { return s.getAttribute('data-lang'); });
  var fromHash = (location.hash || '').replace('#', '');
  // 해시가 언어 코드가 아니라 본문 앵커(#art7-ja 등)면 그 앵커가 든 섹션의 언어를 연다
  var anchorEl = fromHash && known.indexOf(fromHash) < 0 ? document.getElementById(fromHash) : null;
  var anchorSection = anchorEl && anchorEl.closest ? anchorEl.closest('section[data-lang]') : null;
  var fromAnchor = anchorSection ? anchorSection.getAttribute('data-lang') : '';
  var fromBrowser = (navigator.language || 'ko').slice(0, 2);
  var initial = known.indexOf(fromHash) >= 0 ? fromHash
    : fromAnchor ? fromAnchor
    : known.indexOf(fromBrowser) >= 0 ? fromBrowser
    : known[0];

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { show(b.getAttribute('data-lang')); });
  });
  show(initial);
})();
