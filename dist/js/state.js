!function (document, $) {
  var pressedBtn = document.getElementById('press_me');

  pressedBtn.addEventListener('click', function (e) {
    /* toggle the pressed state of the button based on
       whatever the current value is */
    pressedBtn.setAttribute('aria-pressed', e.target.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
  });
}(document, jQuery);
//# sourceMappingURL=state.js.map
