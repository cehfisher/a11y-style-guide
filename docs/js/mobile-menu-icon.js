!((document, $) => {
  // Set button to click. Toggle button example 1.
  var button = document.getElementById( 'menu-toggle-ex1' );

  // Click the button.
  button.onclick = function() {

    // Toggle class "opened". Set also aria-expanded to true or false.
    if ( -1 !== button.className.indexOf( 'opened' ) ) {
      button.className = button.className.replace( ' opened', '' );
      button.setAttribute( 'aria-expanded', 'false' );
    } else {
       button.className += ' opened';
      button.setAttribute( 'aria-expanded', 'true' );
     }

   };

   // Set button to click. Toggle button example 2.
  var button2 = document.getElementById( 'menu-toggle-ex2' );

  // Click the button.
  button2.onclick = function() {

    // Toggle class "opened". Set also aria-expanded to true or false.
    if ( -1 !== button2.className.indexOf( 'opened' ) ) {
      button2.className = button2.className.replace( ' opened', '' );
      button2.setAttribute( 'aria-expanded', 'false' );
    } else {
       button2.className += ' opened';
      button2.setAttribute( 'aria-expanded', 'true' );
     }

   };

})(document, jQuery);
