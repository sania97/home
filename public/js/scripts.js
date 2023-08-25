$(document).ready(function() {
  // Hide the second navigation bar initially
  $('.double-layered-text').each(function() {
    var text = $(this).text();
    $(this).attr('data-text', text);
  });

  // Scroll-based class addition and navigation bar switching
  $(document).scroll(function() {
    var y = $(this).scrollTop();

    // Scroll-based class addition for .buttontocasestudy elements
    $(".buttontocasestudy").each(function() {
      var parentElement = $(this).closest(".card-containerr");
      var cardElement = $(this).closest(".carddContent");
      var t = parentElement.offset().top - 600;

      if (y > t) {
        parentElement.addClass("lightup");
        cardElement.addClass("brighten");
      } else {
        parentElement.removeClass("lightup");
        cardElement.removeClass("brighten");
      }
    });

    // Adding lightup and brighten classes for .profImgcont element
    var profImgcont = $(".profImgcont");
    var aboutmeElement = profImgcont.closest(".aboutme");
    var x = profImgcont.offset().top - $(window).height() + 200;

    if (y > x) {
      profImgcont.addClass("lightup");
      aboutmeElement.addClass("brighten");
    } else {
      profImgcont.removeClass("lightup");
      aboutmeElement.removeClass("brighten");
    }

    // Toggle navigation bars based on scroll position

    // Adding double layered text effect
    // selectors
    var $window = $(window),
      $body = $('body'),
      $section = $('.sectionn');

    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = y + ($window.height() / 3);

    $section.each(function () {
      var $this = $(this);

      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
       
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    });
  });    
});
