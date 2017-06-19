;(function ( w, doc ) {
  // enable strict mode
  'use strict';

  var cards = document.querySelectorAll(".card.card__click");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }

  function clickListener(card) {
    card.addEventListener( "click", function() {
      var c = this.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }

  // Cards need to have their own IDs
  var pressedCard1 = document.getElementById('card1');

  pressedCard1.addEventListener('click', function (e) {
    pressedCard1.setAttribute('aria-pressed', e.target.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
  });

  var pressedCard2 = document.getElementById('card2');

  pressedCard2.addEventListener('click', function (e) {
    pressedCard2.setAttribute('aria-pressed', e.target.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
  });

  var pressedCard3 = document.getElementById('card3');

  pressedCard3.addEventListener('click', function (e) {
    pressedCard3.setAttribute('aria-pressed', e.target.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
  });

  var pressedCard4 = document.getElementById('card4');

  pressedCard4.addEventListener('click', function (e) {
    pressedCard4.setAttribute('aria-pressed', e.target.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
  });

})( this, this.document );