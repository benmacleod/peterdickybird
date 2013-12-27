(function($) {
  $(document).ready(function() {
    $('.links a').on('click', function() {
      if(!$(this).hasClass('active')) {
        $('.links a.active').removeClass('active');
        $('.tab.active').removeClass('active');
        $(this).addClass('active');
        $('.tab#' + $(this).attr('id').replace('_link', '')).addClass('active');
      }
    });
    $('a#go_links').on('click', function() {
      $('#links_link').click();
    });
  });
}(jQuery));
