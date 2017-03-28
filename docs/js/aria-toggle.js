;(function ( w, doc ) {
  // enable strict mode
  'use strict';
  /**
   * Local object for method references
   * and define script meta-data
   */
  var ARIAtoggle = {};
  ARIAtoggle.NS      = "ARIAtoggle";
  ARIAtoggle.AUTHOR  = "Scott O'Hara";
  ARIAtoggle.VERION  = "0.1.0";
  ARIAtoggle.LICENSE = "https://github.com/scottaohara/accessible-components/blob/master/LICENSE.md";

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
  ARIAtoggle.createToggle = function () {
    // hooks
    var widget = doc.querySelectorAll('[data-action="aria-toggle"]');
    var self;
    var i;

    // BEM classes for components
    var widgetClass   = 'atblock';
    var widgetTitle   = widgetClass + '__title';
    var widgetTrigger = widgetTitle + '__trigger';
    var widgetPanel   = widgetClass + '__panel';

    // if widgets exist, loop through all instances
    // and set up appropriate attributes
    for ( i = 0; i < widget.length; i++ ) {
      // set this specific widget
      self = widget[i];
      // panel selector
      var panel = self.querySelector('.' + widgetPanel);
      var title = self.querySelector('.' + widgetTitle);
      // check to see if there are the necessary panel
      // and title hooks to continue on with this script
      // if not, then it doesn't get to be a toggle block
      if ( panel && title ) {
        // we'll need an ID
        var setID;
        // now that we know there's a panel to toggle,
        // check to see if it has an ID
        if ( panel.hasAttribute('id') ) {
          setID = panel.getAttribute('id');
        }
        else {
          setID = 'atb_' + Math.floor(Math.random() * 999) + 1;
          panel.setAttribute('id', setID);
        }

        // check to see if the title has an <a> element as a child
        // this should be the trigger to open/close the panel
        var hasTrigger = title.querySelector('a') || 'null';
        // if an <a> is not found, we'll need to create one
        if ( hasTrigger === 'null') {
          var getContent = title.textContent;
          var createLink = doc.createElement('a');
          // we took what we needed, now clear out that title element
          title.innerHTML = '';
          // good thing we grabbed/created IDs for the panels
          // we need it here
          createLink.setAttribute('href', '#' + setID);
          createLink.innerHTML = getContent;
          // repopulate the title element with the new link,
          // that has the previous title content within it
          title.appendChild(createLink);
        }

        // now that all triggers have been successfully created
        // grab them again and add the widgetTrigger class to each
        var trigger = self.querySelector('a');
        trigger.classList.add(widgetTrigger);

        // another safety precaution, make sure the HREF of the
        // trigger and the panel's ID match.
        var triggerHREF = trigger.getAttribute('href').split('#')[1];
        if ( setID !== triggerHREF ) {
          panel.setAttribute('id', triggerHREF);
        }
        // setup necessary ARIA roles for the 'button'
        trigger.setAttribute('role', 'button');
        trigger.setAttribute('aria-controls', triggerHREF);

        // if the container has a data-expanded attribute set,
        // that means that the contents of the toggle should
        // be open by default on page load.
        if ( self.hasAttribute('data-expanded') ) {
          panel.setAttribute('aria-hidden', false);
          trigger.setAttribute('aria-expanded', true);
        }
        else {
          panel.setAttribute('aria-hidden', true);
          trigger.setAttribute('aria-expanded', false);
        }
        /**
         * Setup Events
         */
        trigger.addEventListener('click', ARIAtoggle.toggleState);
        trigger.addEventListener('keydown', ARIAtoggle.keytrolls);
      }
      else {
        self.classList.remove(widgetClass);
        self.removeAttribute('data-action');
      } //if ( panel && title )
    } // for(widget.length)
  }; // ARIAtoggle.create()



  ARIAtoggle.keytrolls = function ( e ) {
    var keyCode = e.keyCode || e.which;

    switch ( keyCode ) {
      // enter or space
      case 32:
      case 13:
        e.preventDefault();
        e.target.click();
        break;

      default:
        break;
    } // switch
  };



  ARIAtoggle.toggleState = function ( e ) {
    e.preventDefault();
    var thisTarget = this.getAttribute('aria-controls');

    // toggle aria-expanded state of trigger
    this.setAttribute('aria-expanded', e.target.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');

    // toggle aria-hidden state of target
    doc.getElementById(thisTarget).setAttribute('aria-hidden', e.target.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  }; // ARIAtoggle.events()



  ARIAtoggle.init = function () {
    ARIAtoggle.createToggle();
  }; // ARIAtoggle.init()



  ARIAtoggle.init();

})( this, this.document );
