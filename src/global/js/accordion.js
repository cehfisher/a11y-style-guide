;(function ( $, doc ) {
  'use strict';

  var accordion = $('.accordion__trigger');

    accordion.on('click',function(event) {
      //check if the panel is already expanded
      var isExpanded = $(this).attr('aria-expanded') == 'true';
      var accordionContent = '#' + $(this).attr('aria-controls');

      if(isExpanded) {
        //hide the content panel and mark expanded as false
        $(accordionContent).attr('aria-hidden',true).slideUp();
        $(this).attr('aria-expanded',false);
      } else {
        $(accordionContent).attr('aria-hidden',false).slideDown();
        $(this).attr('aria-expanded', true);
      }

      event.preventDefault();
    });

    accordion.on('keydown',function(event){
      //navigate up and down
        if (event.keyCode == 40) {
            $(this).closest('.js-accordion__panel').next().find(accordion).focus();
        }
        if (event.keyCode == 38) {
          $(this).closest('.js-accordion__panel').prev().find(accordion).focus();
        }
    });

})( jQuery, this.document );
