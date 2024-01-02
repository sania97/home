$(document).ready(function () {
  // Hide the second navigation bar initially
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const context = this;
      const args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  const $titleslide = $('.titleslide');
  $titleslide.addClass("scrolledd");
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
  function clickAndSelect() {
    const $slides = $('.slide');
  
    $slides.each(function() {
      const $slide = $(this);
  
      $slide.on('click', function(e) {
        e.preventDefault();
        const $link = $slide.find('a.btn.topage'); 
        if ($link.length) {
          window.location = $link.attr('href');
        }
      });
    });
  }
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
  
  clickAndSelect();

  const throttledScroll = throttle(checkScrollClasses, 100);
  $(document).scroll(throttledScroll);

});