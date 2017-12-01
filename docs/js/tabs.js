!((document, $) => {
  'use strict';

  var keys = {
    ARROWS: [37, 38, 39, 40],
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    ENTER: 13,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34
  };

  /**
    @param {Object} startTab - The tab to start searching from.
    @param {Object} $list - A list of nav buttons as a jQuery object.
    @param {Object} key - The triggering key code.
    @returns {Object} - The tab to the left or right of `startTab`.
  */
  function findAdjacentTab(startTab, $list, key) {
    var dir =
      (key === keys.ARROW_LEFT || key === keys.ARROW_UP) ? 'prev' : 'next';
    var adjacentTab = (dir === 'prev') ?
      $(startTab.parentNode)
      .prev()[0] :
      $(startTab.parentNode)
      .next()[0];

    if (!adjacentTab) {
      var allTabs = $list.find('.tabs__nav-item');
      if (dir === 'prev') {
        adjacentTab = allTabs[allTabs.length - 1];
      }
      else {
        adjacentTab = allTabs[0];
      }
    }

    return $(adjacentTab)
      .find('.tabs__nav-trigger')[0];
  }

  /**
    @param {Object} newActive - Tab to be made active.
    @param {Object} $list - A list of nav buttons as a jQuery object.
    @returns {undefined}
  */
  function setActiveAndInactive(newActive, $list) {
    $list.find('.tabs__nav-item')
      .each(function () {
        var assocPanelID = $(this)
          .find('.tabs__nav-trigger')
          .first()
          .attr('aria-controls');
        var anchor = $(this)
          .find('.tabs__nav-trigger')[0];

        if (this !== newActive.parentNode) {
          $(this)
            .removeClass('is-active');
          anchor.tabIndex = -1;
          anchor.setAttribute('aria-selected', 'false');
          $('#' + assocPanelID)
            .removeClass('is-current')
            .attr('aria-hidden', 'true');
        }
        else {
          $(this)
            .addClass('is-active');
          anchor.tabIndex = 0;
          anchor.setAttribute('aria-selected', 'true');
          $('#' + assocPanelID)
            .addClass('is-current')
            .removeAttr('aria-hidden');
        }
      });
  }

  var $allTabGroups = $('.tabs');

  $allTabGroups.each(function () {
    var $tabs = $(this);
    var $navlist = $tabs.find('.tabs__navlist');

    $navlist.on('keydown', '.tabs__nav-item .tabs__nav-trigger',
      function (keyVent) {
        var which = keyVent.which;
        var target = keyVent.target;

        if ($.inArray(which, keys.ARROWS) > -1) {
          var adjacentTab = findAdjacentTab(target, $navlist, which);

          if (adjacentTab) {
            keyVent.preventDefault();
            adjacentTab.focus();

            setActiveAndInactive(adjacentTab, $navlist);
          }
        }
        else if (which === keys.ENTER || which === keys.SPACE) {
          keyVent.preventDefault();
          target.click();
        }
        else if (which === keys.PAGE_DOWN) {
          keyVent.preventDefault();
          var assocPanel = $('#' + this.getAttribute('aria-controls'));

          if (assocPanel) {
            assocPanel.focus();
          }
        }
      }
    );

    // Click support
    $navlist.on('click', '.tabs__nav-item .tabs__nav-trigger', function () {
      var currentTarget =
        $navlist.find('.tabs__nav-item.is-active .tabs__nav-trigger')[0];
      if (currentTarget !== $(this)[0]) {
        var eventData = {
          'previousTarget': currentTarget,
          'newTarget': $(this)[0]
        };
        var event = new CustomEvent('rb.tabs.tabChanged', {
          detail: eventData
        });
        $(this)[0].dispatchEvent(event);
      }

      setActiveAndInactive(this, $navlist);
    });
  });

  $(document.body)
    .on('keydown', '.tabs__panel', function (e) {
      if (e.which === keys.PAGE_UP) {
        e.preventDefault();
        var $navlist = $(this)
          .closest('.tabs')
          .find('.tabs__navlist');
        var activeTab = $navlist
          .find('.tabs__nav-item.is-active .tabs__nav-trigger')[0];

        if (activeTab) {
          activeTab.focus();
        }
      }
    });
})(document, jQuery);
