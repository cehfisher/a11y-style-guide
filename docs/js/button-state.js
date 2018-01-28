!((document, $) => {
  var pressedBtn = document.getElementById('button_state');

  pressedBtn.addEventListener('click', function (e) {
    pressedBtn.setAttribute('aria-pressed', e.target.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
  });

  var pressedBtn2 = document.getElementById('button_like');

  pressedBtn2.addEventListener('click', function (e) {
    pressedBtn2.setAttribute('aria-pressed', e.target.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
  });

  var pressedBtn3 = document.getElementById('button_all');

  pressedBtn3.addEventListener('click', function (e) {
    pressedBtn3.setAttribute('aria-pressed', e.target.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
  });

  var pressedBtn4 = document.getElementById('button_search');

  pressedBtn4.addEventListener('click', function (e) {
    pressedBtn4.setAttribute('aria-pressed', e.target.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
  });
})(document, jQuery);
