!function (document, $) {
  var clip = new Clipboard('.copy-button');

  clip.on('success', function (e) {
    $('.copied').show();
    $('.copied').fadeOut(2000);
  });
}(document, jQuery);
//# sourceMappingURL=copy-button.js.map
