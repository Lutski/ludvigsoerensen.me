$(document).ready(function() {
  getDay();
});

function getDay() {
  var currentDate = new Date();
  var dayOfTheWeek = currentDate.getDay();

  var weekDays = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  }

  var getCurrentDay = weekDays[dayOfTheWeek];
  $('footer .grid h1 span').text(getCurrentDay);
}


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
