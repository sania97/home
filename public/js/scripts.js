$(document).ready(function () {
  setIntroMaxHeight();

  //on sections where intromessage is tall (usually small screens) this function will make sure it does not overflow onto next section
  function setIntroMaxHeight() {
    const herocontHeight = $('.herocont').outerHeight();
    if (herocontHeight > 600) {
      const minHeight = herocontHeight + 600;
      $('.sectionn.intro').css('min-height', minHeight + 'px');
    } else {
      $('.sectionn.intro').css('min-height', '');
    }
  }

  //on adding top layer of intromessage of text
  //small intro animation, circles dont show up until loaded and words float up

  $('.double-layered-text').each(function () {
    var text = $(this).text();
    $(this).attr('data-text', text);
    $('.intromessage').addClass('loaded');
    $('.circles').addClass('loaded');
  });

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

    //changing body color animation
    var $sections = $('[data-color]'); // Select all sections with data-color attribute
    $sections.each(function () {
      var $this = $(this);
      var sectionTop = $this.offset().top - offset;
      var sectionBottom = sectionTop + $this.outerHeight();
      var sectionColor = $this.data('color');
      console.log("top"+sectionTop +"off"+offset);
      console.log("color"+sectionColor);

      // Check if the section is on screen
      if (y >= sectionTop && y <= sectionBottom) {

        $body.removeClass(function (index, classNames) {
          // Remove any existing color classes from the body
          return (classNames.match(/color-\S+/g) || []).join(' ');
        });
        $body.addClass('color-' + sectionColor);
        return false; // Exit the loop once a matching section is found
      }
    });

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

  checkScrollClasses();

  $(window).resize(setIntroMaxHeight);

  $(document).scroll(function () {
    checkScrollClasses();
  });

});