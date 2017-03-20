!((document, $) => {
  'use strict';

  // Toggle on click.
  $('.more-toggle').on('click', function() {

    var isActive = ($(this).hasClass('more-open')) ? true : false; // checks if it is already active
      $('.more-toggle').removeClass('more-open');
      if (!isActive) $(this).addClass('more-open'); // set active only if it was not active

    // Cancel the click event.
    return false;
  });
})(document, jQuery);
