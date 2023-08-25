$(document).ready(function() {
  // Hide the second navigation bar initially

  // Scroll-based class addition and navigation bar switching
  $(document).scroll(function() {
    var y = $(this).scrollTop();

    // ... (existing scroll logic)

    // Toggle navigation bars based on scroll position
    var triggerPosition = $('#nav-trigger').offset().top - 500;

    if (y > triggerPosition) {
      // Show the second navigation bar with fading effect
      $('.toc').addClass('activated');
    } else {
      // Hide the second navigation bar with fading effect
      $('.toc').removeClass('activated');
    }

    $(".sectionn").each(function () {
      var sectionTop = $(this).offset().top - 50;
      var sectionId = $(this).attr("id");
      if (y > sectionTop) {
        $('.nav-toc__group a[href="#' + sectionId + '"]').addClass("current");
      } else {
        $('.nav-toc__group a[href="#' + sectionId + '"]').removeClass("current");
      }
    });
  });

  // ... (existing code)
});