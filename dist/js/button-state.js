!((document, $) => {
  var pressedBtn = document.getElementById('button_state');

  pressedBtn.addEventListener('click', function (e) {
    pressedBtn.setAttribute('aria-pressed', e.target.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
  });

})(document, jQuery);
