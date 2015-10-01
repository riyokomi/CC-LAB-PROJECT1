//$('.parallax-window').parallax({imageSrc: '/path/to/image/2.jpg'});

lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });

  $(document).ready(function () {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $('.scrollup').fadeIn();
          } else {
              $('.scrollup').fadeOut();
          }
      });
      $('.scrollup').click(function () {
          $("html, body").animate({
              scrollTop: 0
          }, 600);
          return false;
      });
  });

var offset = 300,
	offset_opacity = 1200,
	scroll_top_duration = 700;
