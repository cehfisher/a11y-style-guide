$(function() {
  $('#toggle-menu').click(function(e) {
    e.preventDefault();
    $('ul').toggleClass('active');
  });
});