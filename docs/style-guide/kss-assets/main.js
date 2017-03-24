(function ($, Rainbow) {
    $(function () {

        var $window = $(window),
            $document = $(document),
            $content = $('.kss-content'),
            $sidebar = $('.kss-sidebar'),
            $sidebarInner = $('.kss-sidebar-inner'),
            $menu = $('.kss-menu'),
            $childMenu = $('.kss-menu-child'),
            $menuItem = $menu.find('.kss-menu-item'),
            $childMenuItem = $childMenu.find('.kss-menu-item'),
            ref = $menu.data('kss-ref'),
            prevScrollTop;

        // Fix sidebar position
        function fixSidebar() {
            if ($sidebarInner.outerHeight() < $content.outerHeight()) {
                $sidebar.addClass('kss-fixed');
                if ($sidebarInner.outerHeight() > $window.height()) {
                    $sidebar.height($window.height());
                }
                else {
                    $sidebar.height('auto');
                }
            }
            else {
                $sidebar.removeClass('kss-fixed');
                $sidebar.height('auto');
            }
        }

        // Activate current page item
        $menuItem.eq(ref).addClass('kss-active');

        // Append child menu.
        if ($childMenu.length) {
            $childMenu.show().appendTo($menuItem.eq(ref));
        }

        // Fixed sidebar
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $window.on('resize', fixSidebar).trigger('resize');
        }

        // Toggle menu JS used by the mobile menu component.
        // These JS classes must be added to both the menu
        // and menu button.
        var $menu = $('.js-menu-toggle');
        var $menuButton = $('.js-menu-toggle-button');

        // Handle menu button clicking
        // This needs jQuery update to run.
        $menuButton.on('click', function(event) {
          var $self = $(this);

          // Toggle classes on menu and menu button.
          $self.toggleClass('site-menu__button--active');

          $self
            .parent()
            .parent()
            .find('.js-menu-toggle')
            .toggleClass('site-menu--expanded');
        });

        // Show markup when the button is clicked.
        $('.js-show-markup').on('click', function() {
          var $self = $(this);

          // Grab the inner html of the next available template tag.
          var markup = $self.next('template').html();

          // Replace the button with the markup.
          $self.replaceWith(markup);

          // Syntax hightlignting with Rainbow.js
          Rainbow.color();
        });

        var fullWidth = function (appendUrl) {
          // Remove the page wrapper padding.
          $('.kss-wrapper').css({'padding': 0});
          // Kill the sidebar.
          $('.kss-sidebar').remove();
          // Remove left margin on main content.
          $('.kss-content').css({'margin': '0 auto', 'max-width': '1200px'});
          // Remove padding from example component.
          $('.kss-modifier-example').css({
            'padding-left': 0,
            'padding-right': 0
          });

          // Append to URL if this is fired via button click.
          if (appendUrl === true) {
            history.pushState('', '', '?full=true');
          }
        };

        // Kill container padding and the sidebar when the button is clicked.
        $('.js-full-width').on('click', function() {
          var appendUrl = true;
          fullWidth(appendUrl);
        });

        // Pass in a parameter name and return that parameter's value.
        function getParameterByName(name) {
          var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
          return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
        }

        // If "?full=true" exists in the URL call the fullWidth function.
        if (getParameterByName('full') === 'true') {
          var appendUrl = false;
          fullWidth(appendUrl);
        }
    });
}(jQuery, Rainbow));
