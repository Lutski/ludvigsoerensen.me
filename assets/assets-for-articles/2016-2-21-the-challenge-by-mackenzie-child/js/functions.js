//------------- Document.ready -------------//
$(document).ready(function() {
  makeSideNavFixedOnScroll();
  moveDot();
  showImage();
});


//------------- Scroll to -------------//




//------------- Navigation -------------//

// It will make the side navigation fixed when the sidebar hits the top header
function makeSideNavFixedOnScroll() {
  $(window).scroll(function() {

    var wScroll = $(window).scrollTop()
    var headerHeight = $('#header').height();
    //console.log(wScroll)

    if (wScroll >= headerHeight) {
      $('#blog_wrapper #navigation nav').addClass('navigation-flex');
    } else {
      $('#blog_wrapper #navigation nav').removeClass('navigation-flex');
      $('#blog_wrapper #navigation nav').removeClass('navigation-bottom-fixed');
    }

    if (wScroll >= 3500) {
      $('#blog_wrapper #navigation nav').removeClass('navigation-flex');
      $('#blog_wrapper #navigation nav').addClass('navigation-bottom-fixed');
    }

    if (window.offset().top >= 0 && window.matchMedia('(min-width: 700px)').matches) {
      $('#blog_wrapper #navigation nav').css('display','block');
    }
  });
}

$('#blog_wrapper #mobile-nav button').click(function() {
  $('#blog_wrapper #mobile_nav').addClass("is-open")
});


// Mobile
$('.mobile-nav-toggle').click(function() {
  $(this).toggleClass('is-open');
  $('#navigation nav').toggle();
  $('#blog_wrapper #navigation nav').removeClass('navigation-flex');
});


// Move dots on navigation depending on where you're at
function moveDot() {
  $('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function (event) {

    function currentSection(section) {
      if ($(window).scrollTop() >= $('#' + section).offset().top) {
        $('.circle-' + section).addClass('is-open');
      } else {
        $('.circle-' + section).removeClass('is-open');
      }
    }

    currentSection("introduction");
    currentSection("idea");
    currentSection("wireframes");
    currentSection("design");
    currentSection("coding");
    currentSection("conclusion");


  })
}


//------------- Wireframes -------------//

// Disables scrolling when its called
function disableScrolling() {
// Page jumps to top when its disabled and reanabled
//  $('html, body').css({
//      'overflow': 'hidden',
//      'height': '100%'
//  });
}

// Enables scrolling when its called
function enableScrolling() {
// Page jumps to top when its disabled and reanabled
//  $('html, body').css({
//      'overflow': 'auto',
//      'height': 'auto'
//  });
}

// On click functions for all the wireframes
$('.wireframe-1').click(function() {
  $('.wireframe-1-overlay').css({
    "display":"block"
  });
  disableScrolling()
});

$('.wireframe-2').click(function() {
  $('.wireframe-2-overlay').css({
    "display":"block"
  });
  disableScrolling();
});

$('.wireframe-3').click(function() {
  $('.wireframe-3-overlay').css({
    "display":"block"
  });
  disableScrolling();
});

$('.wireframe-4').click(function() {
  $('.wireframe-4-overlay').css({
    "display":"block"
  });
  disableScrolling();
});


// Function for closing the modal/overlay
$('.close-modal-btn').click(function() {
  console.log("Close it")
  $('.wireframe-1-overlay, .wireframe-2-overlay, .wireframe-3-overlay, .wireframe-4-overlay').css({
    "display":"none"
  });
  enableScrolling();
});




//------------- Design -------------//
var i2mages = ["https://images.unsplash.com/photo-1454678904372-2ca94103eca4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=dcc8a4008017a59eb862846cd4fdc34b", "https://images.unsplash.com/photo-1447877085163-3cce903855cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=11824d7b2d17589a51d4d92fe40330c7"];
var images = ["/assets/assets-for-articles/2016-2-21-the-challenge-by-mackenzie-child/extras/winelog-index.png", "/assets/assets-for-articles/2016-2-21-the-challenge-by-mackenzie-child/extras/winelog-show.png"]
var currentImage = 0;

// The initial show image is set in document.ready at the top
function showImage() {
  document.slideshowimg.src = images[currentImage];
  currentImageBackground();
}

function currentImageBackground() {
  if (currentImage == 0) {
    $('.circle-1').addClass("is-selected");
    $('.circle-2').removeClass("is-selected");
  } else {
    $('.circle-2').addClass("is-selected");
    $('.circle-1').removeClass("is-selected");
  }
}

function change_image(number) {

  if (number < 0) {
    // If the number is negative
    if (currentImage == 0) {
      currentImage = images.length - 1;
    } else {
      currentImage--
    }
  } else {
    // If the number is positive
    if (currentImage >= images.length - 1) {
      currentImage = 0
    } else {
      currentImage++
    }
  }
  currentImageBackground();
  showImage();
}
