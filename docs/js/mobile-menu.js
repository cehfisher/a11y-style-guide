!((document, $) => {
  $('#toggle-menu').click(function(e) {
    e.preventDefault();
    $('ul').toggleClass('active');
  });


   // Set button to click. Mobile menu button.
  var buttonmm = document.getElementById( 'toggle-menu' );

  // Click the button.
  buttonmm.onclick = function() {

    // Toggle class "opened". Set also aria-expanded to true or false.
    if ( -1 !== buttonmm.className.indexOf( 'opened' ) ) {
      buttonmm.className = buttonmm.className.replace( ' opened', '' );
      buttonmm.setAttribute( 'aria-expanded', 'false' );
    } else {
       buttonmm.className += ' opened';
      buttonmm.setAttribute( 'aria-expanded', 'true' );
     }

   };
})(document, jQuery);