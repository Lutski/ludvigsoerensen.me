$(document).ready(function() {
  smoothScroll(300);
  navbarPopdown();


  // var currentFace = "(>'-')>"
  // var firstFace = "(>'-')>"
  // var secondFace = "<('-'<)"
  // var isFirstFace = true
  // window.setInterval(function() {
  //   if (isFirstFace == true) {
  //     currentFace = secondFace
  //     isFirstFace = false
  //   } else {
  //     currentFace = firstFace
  //     isFirstFace = true
  //   }
  //   $('html').prepend("<!--\n" + currentFace + "\nLooking through my code bruh?!?\n-->")
  // }, 1000);



});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function navbarPopdown() {
  var $header = $("header"),
      $clone = $header.before($header.clone().addClass("clone"));

  $(window).on("scroll", function() {
    var fromTop = $("body").scrollTop();
    $('body').toggleClass("down", (fromTop > 200));
  });
}
