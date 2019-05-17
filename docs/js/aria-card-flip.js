(function(win, doc) {
  'use strict';
  if (!doc.querySelectorAll || !win.addEventListener) {
    return;
  }
  var toggles = doc.querySelectorAll('[aria-controls]');
  var togglecount = toggles.length;
  var toggleID;
  var togglecontent;
  var i;
  var target;
  for (i = 0; i < togglecount; i = i + 1) {
    toggleID = toggles[i].getAttribute('aria-controls');
    togglecontent = doc.getElementById(toggleID);
    togglecontent.setAttribute('aria-hidden', 'true');
    togglecontent.setAttribute('tabindex', '-1');
  }

  var cards = document.querySelectorAll(".card.effect__click");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }

  function clickListener(card) {
    card.addEventListener( 'click', function() {
      var c = this.classList;
      c.contains('flipped') === true ? c.remove('flipped') : c.add('flipped');
    });
  }

  function toggle(ev) {
    ev = ev || win.event;
    target = ev.target || ev.srcElement;

    if (target.hasAttribute('aria-controls')) {
      toggleID = target.getAttribute('aria-controls');
      togglecontent = doc.getElementById(toggleID);

      if (togglecontent.getAttribute('aria-hidden') == 'true') {
        togglecontent.setAttribute('aria-hidden', 'false');
        target.setAttribute('aria-expanded', 'true');
      } else {

        togglecontent.setAttribute('aria-hidden', 'true');
        target.setAttribute('aria-expanded', 'false');
      }
    }
  }

  // Each card needs its own specific ID
  doc.getElementById('flip1').addEventListener('click', toggle, false);
  doc.getElementById('flip2').addEventListener('click', toggle, false);
  doc.getElementById('flip3').addEventListener('click', toggle, false);
  doc.getElementById('flip4').addEventListener('click', toggle, false);

}(this, this.document));
