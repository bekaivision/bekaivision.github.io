(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  function set(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('open', open);
  }
  btn.addEventListener('click', function () {
    set(btn.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') set(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') set(false);
  });
})();
