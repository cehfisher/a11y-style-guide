var jumpLinkFix = function () {
  var el = document.getElementById( location.hash.substring( 1 ) );

  if ( el ) {
    if ( !/^(?:a|select|input|button|textarea)$/i.test( el.tagName ) ) {
      el.tabIndex = -1;
    }
    el.focus();
  } // if
};
