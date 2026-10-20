// Portfolio - Ryan Amory
// 1) Filtres de la section Projets (index.html)
// 2) Lien actif dans la navigation / le sommaire selon la section visible
(function () {
  // ---- Filtres projets -------------------------------------------------
  var filters = document.querySelectorAll('.filter');
  var cards = document.querySelectorAll('.project');
  if (filters.length && cards.length) {
    // Compteurs automatiques sur chaque bouton
    filters.forEach(function (btn) {
      var f = btn.getAttribute('data-filter');
      var n = f === 'all' ? cards.length
        : Array.prototype.filter.call(cards, function (c) { return (c.getAttribute('data-domain') || '').split(' ').indexOf(f) > -1; }).length;
      var span = document.createElement('span');
      span.className = 'count';
      span.textContent = n;
      btn.appendChild(span);
    });
    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var f = btn.getAttribute('data-filter');
        filters.forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
        cards.forEach(function (c) {
          var d = (c.getAttribute('data-domain') || '').split(' ');
          c.hidden = !(f === 'all' || d.indexOf(f) > -1);
        });
      });
    });
  }

  // ---- Lien actif (nav de l'accueil ou sommaire d'une page projet) -----
  var links = document.querySelectorAll('.nav-links a[href^="#"], .toc a[href^="#"]');
  if (!links.length || !('IntersectionObserver' in window)) return;
  var map = {};
  links.forEach(function (a) {
    var el = document.getElementById(a.getAttribute('href').slice(1));
    if (el) map[el.id] = a;
  });
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        links.forEach(function (a) { a.classList.remove('active'); });
        if (map[e.target.id]) map[e.target.id].classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  Object.keys(map).forEach(function (id) { obs.observe(document.getElementById(id)); });
})();
