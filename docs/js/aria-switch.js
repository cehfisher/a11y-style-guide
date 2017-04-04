;(function ( w, doc, undefined ) {
  // enable strict mode
  'use strict';
  /**
   * Local object for method references
   * and define script meta-data
   */
  var ARIAswitch = {};
  w.ARIAswitch = ARIAswitch;

  ARIAswitch.NS      = 'ARIAswitch';
  ARIAswitch.AUTHOR  = 'Scott O\'Hara';
  ARIAswitch.VERION  = '0.2.0';
  ARIAswitch.LICENSE = 'https://github.com/scottaohara/accessible-components/blob/master/LICENSE.md';

  /**
   * Global Create
   *
   * This function validates that the minimum
   * required markup is present to create the
   * ARIA widget(s). Any additional markup elements
   * or attributes that do not exist in the found
   * required markup patterns will be generated
   * via this function.
   */
  ARIAswitch.create = function () {
    // hooks
    var widget = doc.querySelectorAll('[data-action="aria-switch"]');
    var self;
    var i;
    // define error message here, rather than in the weeds of the code
    var ariaLabelError = 'An attribute of "data-missing-label" has been added to a switch/switches that are missing aria-labelledby or aria-label attributes! Please add unique labels to the appropriate components!';

    // if widgets exist, loop through all instances
    // and set up appropriate attributes
    for ( i = 0; i < widget.length; i++ ) {
      // set this specific widget
      self = widget[i];

      // give each instance the role of switch if the role hasn't been set
      // or if it was set to something else in error
      if ( !self.hasAttribute('role') || self.getAttribute('role') !== 'switch' ) {
        self.setAttribute('role', 'switch');
      }

      // since these sorts of buttons won't work if
      // JavaScript is disabled, (hopefully) a disabled
      // attribute is set to them by default. When JavaScript
      // is on, we should remove the disabled attributes EXCEPT
      // if a switch button is meant to be disabled by default,
      // in which case, look for the data-keep-disabled attribute
      // and DON'T remove that disabled attribute...
      if ( !self.hasAttribute('data-keep-disabled') ) {
        self.removeAttribute('disabled');
      }

      // if an instance doesn't have a set aria-checked attribute,
      // then it must not be checked, so populate an aria-checked='false'
      if ( !self.hasAttribute('aria-checked') ) {
        self.setAttribute('aria-checked', 'false');
      }

      // log an error if an aria-label or labelledby attribute
      // is not found on a switch. also add a 'data-missing-label' attribute
      // to further call out what instance(s) are without appropriate labeling.
      if ( !self.hasAttribute('aria-label') && !self.hasAttribute('aria-labelledby') ) {
        console.warn(ariaLabelError);
      }

      self.addEventListener('click', ARIAswitch.actions);
    } // for(widget.length)
  }; // ARIAswitch.create()



  // primary actions function
  ARIAswitch.actions = function ( e ) {
    e.preventDefault();
    this.setAttribute('aria-checked', e.target.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
  }; // ARIAswitch.events()



  // init function to run start-up functions.
  // if expanding this script, place any other
  // initialize functions within here.
  ARIAswitch.init = function () {
    ARIAswitch.create();
  }; // ARIAswitch.init()



  ARIAswitch.init();

})( window, document );
