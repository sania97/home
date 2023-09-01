$(document).ready(function () {
  // Hide the second navigation bar initially
  $('.nav-toc__group a').on('click', function (event) {
    event.preventDefault(); // Prevent default behavior
    const targetId = $(this).attr('href'); // Get the href attribute
    const targetElement = $(targetId); // Find the corresponding element by id
    if (targetElement.length) {
      $('html, body').animate({
        scrollTop: targetElement.offset().top
      }, 1000); // Smoothly scroll to the element
    }
  });
  var $window = $(window);

  // Initial check when the page loads
  function checkScrollClasses() {
    var y = $(this).scrollTop();

    const windowHeight = $(window).height();

    $(".slide").each(function () {
      var parentElement = $(this).closest(".slide-containerr");
      var scrolledActivation = windowHeight / 1.8;
      var t = parentElement.offset().top - scrolledActivation;

      if (y > t) {
        parentElement.addClass("scrolled");
      } 
    });

  }
  checkScrollClasses();
  // Scroll-based class addition and navigation bar switching
  $(document).scroll(function () {
    checkScrollClasses();
    var y = $(this).scrollTop();

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