!((document, $) => {

  // Toggle on click.
  $('.more-toggle').on('click', function() {

    var isActive = ($(this).hasClass('more-open')) ? true : false; // checks if it is already active
      $('.more-toggle').removeClass('more-open');
      if (!isActive) $(this).addClass('more-open'); // set active only if it was not active

    // Cancel the click event.
    return false;
  });

  $('.more-toggle').on('click', function() {
  	$parent_box = $(this).closest('.more-wrap');
  	$parent_box.siblings().find('.more-content').slideUp();
  	$parent_box.find('.more-content').slideToggle(1000, 'swing');
  });
})(document, jQuery);
