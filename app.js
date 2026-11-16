(function () {
  var els = document.querySelectorAll('[data-en]');
  els.forEach(function (el) { el.dataset.pt = el.textContent; });
  var botao = document.getElementById('idioma');
  function aplicar(l) {
    document.documentElement.lang = l === 'en' ? 'en' : 'pt-BR';
    els.forEach(function (el) { el.textContent = l === 'en' ? el.dataset.en : el.dataset.pt; });
    botao.textContent = l === 'en' ? 'PT' : 'EN';
    botao.dataset.l = l;
    try { localStorage.setItem('idioma', l); } catch (e) {}
  }
  botao.addEventListener('click', function () { aplicar(botao.dataset.l === 'en' ? 'pt' : 'en'); });
  var inicial = 'pt';
  try {
    inicial = localStorage.getItem('idioma') || ((navigator.language || '').toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en');
  } catch (e) {}
  botao.dataset.l = 'pt';
  if (inicial === 'en') aplicar('en');
})();
