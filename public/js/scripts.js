$(document).ready(function() {
  // Hide the second navigation bar initially

  $('.double-layered-text').each(function() {
    var text = $(this).text();
    $(this).attr('data-text', text);
    var parentdiv = $(this).closest(".intromessage");
    parentdiv.addClass('loaded');

  });
  $('.nav__group a').on('click', function(event) {
    event.preventDefault(); // Prevent default behavior
    const targetId = $(this).attr('href'); // Get the href attribute
    const targetElement = $(targetId); // Find the corresponding element by id
    if (targetElement.length) {
      $('html, body').animate({
        scrollTop: targetElement.offset().top
      }, 1000); // Smoothly scroll to the element
    }
  });
  $('#selected').on('click', function(event) {
    event.preventDefault(); // Prevent default behavior
    const targetId = $(this).attr('href'); // Get the href attribute
    const targetElement = $(targetId); // Find the corresponding element by id
    if (targetElement.length) {
      $('html, body').animate({
        scrollTop: targetElement.offset().top
      }, 1000); // Smoothly scroll to the element
    }
  });
  function setIntroMaxHeight() {
    const herocontHeight = $('.herocont').outerHeight(); // Get the height of .herocont
    if (herocontHeight>1000) {
    const maxHeight = herocontHeight + 600; // Calculate max height
    $('.sectionn.intro').css('min-height', maxHeight + 'px'); // Set max height of .sectionn.intro
    }
  }

  function checkScrollClasses() {
    
    var $window = $(window),
    $body = $('body');
    var y = $window.scrollTop();


    var offset=$window.height() / 2;
    var $sections = $('[data-color]'); // Select all sections with data-color attribute
    $sections.each(function () {
      var $this = $(this);
      var sectionTop = $this.offset().top-offset;
      var sectionBottom = sectionTop + $this.outerHeight();

      var sectionColor = $this.data('color');

      // Check if the section is on screen
      if (y >= sectionTop && y <= sectionBottom) {
        $body.removeClass(function(index, classNames) {
          // Remove any existing color classes from the body
          return (classNames.match(/color-\S+/g) || []).join(' ');
        });
        $body.addClass('color-' + sectionColor);
        return false; // Exit the loop once a matching section is found
      }
    });

    
    // Add lightup and brighten classes for .profImgcont element
    var profImgcont = $(".profImgcont");
    var aboutmeElement = profImgcont.closest(".aboutme");
    var aboutmePts = $(".features-list li");

    var x = profImgcont.offset().top - 600;

    if (y > x) {
      profImgcont.addClass("lightup");
      aboutmeElement.addClass("brighten");
      //aboutmePts.addClass("float");
      function addFloatClass(index) {
        if (index < aboutmePts.length) {
          aboutmePts.eq(index).addClass("float");
          setTimeout(function () {
            addFloatClass(index + 1);
          }, 400); // 2000 milliseconds (2 seconds) delay
        }
      }
    
      // Start adding the 'float' class with the first li
      addFloatClass(0);


    } else {
      profImgcont.removeClass("lightup");
      aboutmeElement.removeClass("brighten");
      //aboutmePts.removeClass("float");

    }

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

    // Change 33% earlier than scroll position so colour is there when you arrive.
    //var scroll = y + ($window.height() / 3);

    
    
    
  }
  setIntroMaxHeight();

  checkScrollClasses();
  $(window).resize(setIntroMaxHeight);
  $(document).scroll(function() {
    checkScrollClasses();
   

    

  });
  
});
