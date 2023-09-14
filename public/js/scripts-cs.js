$(document).ready(function () {
  // Hide the second navigation bar initially
  // setting link target properly
  $('.nav-toc__group a').on('click', function (event) {
    event.preventDefault();
    const targetId = $(this).attr('href'); 
    const targetElement = $(targetId); 
    if (targetElement.length) {
      $('html, body').animate({
        scrollTop: targetElement.offset().top
      }, 1000); // Smoothly scroll to the element
    }
  });

  // Initial check when the page loads
  function checkScrollClasses() {
    var y = $(this).scrollTop();
    var $window = $(window);
    var offset = ($window.height() / 3) * 2;

    $(".slide").each(function () {
      var parentElement = $(this).closest(".slide-containerr");
      var childElement = parentElement.find(".slideContent");

      var t = parentElement.offset().top - offset;

      if (y > t) {
        childElement.addClass("scrolledd");
      } else {
        childElement.removeClass("scrolledd");

      }
    });
    $(".solContent").each(function () {
      var r = $(this).offset().top-offset;
      if (y > r) {
        $(this).addClass("scrolleddd");
      } else {
        $(this).removeClass("scrolleddd");

      }
    });
    var triggerPosition = $('#nav-trigger').offset().top - offset;

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
  }
  checkScrollClasses();
  $(document).scroll(function () {
    checkScrollClasses();

    
  });

});