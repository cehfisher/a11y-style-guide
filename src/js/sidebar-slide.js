!((document, $) => {
  'use strict';

  $('.toggle').on('click', function() {
    $('.kss-sidebar').toggleClass('kss-sidebar-collapsed');
  });
})(document, jQuery);
