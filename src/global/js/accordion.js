;(function ( $, doc ) {
  'use strict';

  var accordion = $('.accordion__heading');

    accordion.on('click',function(event) {
      //check if the panel is already expanded
      var isExpanded = $(this).attr('aria-expanded') == 'true';

      if(isExpanded) {
        //hide the content panel and mark expanded as false
        var accordionContent = '#' + $(this).attr('aria-controls');
        $(accordionContent).attr('aria-hidden',true);
        $(accordionContent).slideUp();
        $(this).attr('aria-expanded',false);
      } else {
        var accordionContent = '#' + $(this).attr('aria-controls');
        $(accordionContent).attr('aria-hidden',false);
        $(accordionContent).slideDown();
        $(this).attr('aria-expanded', true);
      }

      event.preventDefault();
    });


})( jQuery, this.document );
