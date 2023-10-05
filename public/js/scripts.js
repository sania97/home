$(document).ready(function () {

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

  $('.double-layered-text').each(function () {
    var text = $(this).text();
    $(this).attr('data-text', text);
    $('.intromessage').addClass('loaded');
    //$('.circles').delay(8000).addClass('loaded');
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
  
  clickAndSelect();
  setIntroMaxHeight();

  
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

  checkScrollClasses();
  function addGrp1() {
    $('#first .shapee').addClass('grp1');
    $('#fourth .shapee').addClass('grp2');
    $('#seventh .shapee').addClass('grp3');
    $('#el .shapee').addClass('grp1');
    $('#fo .shapee').addClass('grp2');
    // Add more elements as needed
}

// Function to add .grp2 to elements
function addGrp2() {
  $('#second .shapee').addClass('grp1');
  $('#fifth .shapee').addClass('grp2');
  $('#eighth .shapee').addClass('grp3');
  $('#tw .shapee').addClass('grp1');
  $('#fi .shapee').addClass('grp2');
    // Add more elements as needed
}

// Variable to track which function to execute
let alternate = true;

// Function to remove all .grp elements and alternate between functions
function alternateAndRemoveGrp() {
    // Remove all .grp elements
    $('.shapee').removeClass('grp1 grp2 grp3');

    // Alternate between the two functions
    if (alternate) {
        addGrp1();
    } else {
        addGrp2();
    }

    // Toggle the value of 'alternate'
    alternate = !alternate;


}

// Call the alternateAndRemoveGrp function every 20 seconds
setInterval(alternateAndRemoveGrp, 16000);

// Initial call to one of the functions
addGrp1();

  $(window).resize(setIntroMaxHeight);

  $(document).scroll(function () {
    checkScrollClasses();
  });

});