var treehouseArray = ["Treehouse", "Meh pork belly tousled, listicle hashtag sustainable fanny pack disrupt mlkshk forage. Knausgaard tilde skateboard polaroid master cleanse. Actually disrupt microdosing, DIY truffaut XOXO austin PBR&B mumblecore blue bottle. IPhone offal tousled 8-bit williamsburg.", "https://teamtreehouse.com/"]

var codeschool = ["Code School", "Meh pork belly tousled, listicle hashtag sustainable fanny pack disrupt mlkshk forage. Knausgaard tilde skateboard polaroid master cleanse. Actually disrupt microdosing, DIY truffaut XOXO austin PBR&B mumblecore blue bottle. IPhone offal tousled 8-bit williamsburg.", "https://teamtreehouse.com/"]

var otherschool = ["Other School", "Meh pork belly tousled, listicle hashtag sustainable fanny pack disrupt mlkshk forage. Knausgaard tilde skateboard polaroid master cleanse. Actually disrupt microdosing, DIY truffaut XOXO austin PBR&B mumblecore blue bottle. IPhone offal tousled 8-bit williamsburg.", "https://teamtreehouse.com/"]


var array = [treehouseArray, codeschool, otherschool]
var counter = 0

function currentPost() {
  $('.resource-title').html(array[counter][0].toString());
  $('.resource-text').html(array[counter][1].toString());
  document.getElementById("resource-link").href = array[counter][2].toString();
  document.getElementById('resource-link').innerText = "Go to " + array[counter][0].toString();
  $('.post-count h1').html((counter + 1) + "/10");
}

$(document).ready(function() {
  currentPost()
});

$('.next-post').click(function() {
  if (counter >= array.length - 1) {
    counter = 0
  } else {
    counter++
  }
  currentPost();
});

$('.prev-post').click(function() {
  if (counter == 0) {
    counter = array.length - 1
  } else {
    counter--
  }
  currentPost()
});

var isClicked = false
$('.menu').click(function() {
  if (isClicked == true) {
    $('.should-be-blurred').animate({opacity: '1.0'});
    isClicked = false
    $('.menu-clicked').css({
      'display' : 'none'
    });
  } else {
    $('.should-be-blurred').animate({opacity: '0.1'});
    isClicked = true
    $('.menu-clicked').css({
      'display' : 'block'
    });
  }
});



//
//
// $(document).ready(function() {
//
// });
//
// $('.next-post').click(function() {
//   console.log("asdasda")
// });
