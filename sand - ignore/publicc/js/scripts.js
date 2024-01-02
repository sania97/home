$(document).ready(function () {
  //on sections where intromessage is tall (usually small screens) this function will make sure it does not overflow onto next section
  $('.double-layered-text').each(function () {
    var text = $(this).text();
    $(this).attr('data-text', text);
  });
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
  function clickAndSelect() {
    const $cards = $('.card-containerr');
  
    $cards.each(function() {
      const $card = $(this);
  
      $card.on('click', function(e) {
        e.preventDefault();
        const $link = $card.find('a.btn.topage'); 
        if ($link.length) {
          window.location = $link.attr('href');
        }
      });
    });
  }

  //on adding top layer of intromessage of text
  //small intro animation, circles dont show up until loaded and words float up

  
 
  //directing links on page to sections
  $('.nav__group a').on('click', function (event) {
    event.preventDefault();
    const targetId = $(this).attr('href');
    const targetElement = $(targetId);
    if (targetElement.length) {
      $('html, body').animate({
        scrollTop: targetElement.offset().top
      }, 1000); // Smoothly scroll to the element
    }
  });
  $('#selected').on('click', function (event) {
    event.preventDefault();
    const targetId = $(this).attr('href');
    const targetElement = $(targetId);
    if (targetElement.length) {
      $('html, body').animate({
        scrollTop: targetElement.offset().top
      }, 1000); // Smoothly scroll to the element
    }
  });
  

  
  //scroll animations
  function checkScrollClasses() {
    var $window = $(window);
    var $body = $('body');
    var y = $window.scrollTop();
    var offset = $window.height() / 2;
    var offsetthird = ($window.height() / 3) * 2;

    // Scroll-based class addition for card elements
    $(".buttontocasestudy").each(function () {
      var parentElement = $(this).closest(".card-containerr");
      var cardElement = $(this).closest(".carddContent");

      var t = parentElement.offset().top;

      if (y > (t - offsetthird)) {
        parentElement.addClass("lightup");
        cardElement.addClass("brighten");

      } else {
        parentElement.removeClass("lightup");
        cardElement.removeClass("brighten");

      }
    });

    // Add lightup and brighten classes for .profImgcont element
    //bulletpoints float up

    var profImgcont = $(".profImgcont");
    var aboutmeElement = profImgcont.closest(".aboutme");
    var aboutmePts = $(".features-list li");
    var x = aboutmeElement.offset().top;
    var animationTimeout;

    function addFloatClass(index) {
      if (index < aboutmePts.length) {
        var currentElement = aboutmePts.eq(index);

        if (index === 0 || aboutmePts.eq(0).hasClass("float")) {
          currentElement.addClass("float");
        }

        animationTimeout = setTimeout(function () {
          addFloatClass(index + 1);
        }, 200); // 2000 milliseconds (2 seconds) delay
      }
    }

    if (y > (x - offsetthird)) {

      profImgcont.addClass("lightup");
      aboutmeElement.addClass("brighten");
      addFloatClass(0);
    } else {
      profImgcont.removeClass("lightup");
      aboutmeElement.removeClass("brighten");
      clearTimeout(animationTimeout); // Clear the animation timeout
      aboutmePts.removeClass("float"); // Remove the "float" class from all elements
    }


  }
  clickAndSelect();

  checkScrollClasses();

  const throttledScroll = throttle(checkScrollClasses, 100);
  $(document).scroll(throttledScroll);

  

});
