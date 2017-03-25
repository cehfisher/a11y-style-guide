!((document, $) => {
  'use strict';

  // the nav is open by default, so set
  // aria-expanded to be true by default
  // also add aria-controls to provide context
  // (to ATs that actually respect aria-controls)
  // as to what element this button is toggling
  $('.nav-btn').attr({
    'aria-expanded': 'true',
    'aria-controls': 'kss-nav-list'
  });

  $('.nav-btn').on('click', function() {
    $('.kss-sidebar').toggleClass('kss-sidebar-collapsed');
    // when the button is triggered, toggle between expanded
    // state being true/false
    if ( $(this).attr('aria-expanded') === 'true' ) {
      $(this).attr('aria-expanded', 'false');
    }
    else {
      $(this).attr('aria-expanded', 'true');
    }
  });
})(document, jQuery);
