!((document, $) => {
  'use strict';

  $('.more').on('click', function() {
    $('.more-info').toggleClass('more-info-open');
  });
})(document, jQuery);
