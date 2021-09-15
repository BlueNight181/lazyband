function flyUp() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
}

// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("scroll", myFunctionForSticky);

//   var navbar = document.getElementById("navbar");
//   var sticky = navbar.offsetTop;

//   function myFunctionForSticky() {
//     if (window.pageYOffset >= sticky) {
//       navbar.classList.add("sticky");
//     } else {
//       navbar.classList.remove("sticky");
//     }
//   }
// });


// menu changer background color
// window.addEventListener('scroll', function () {
//   let header = document.getElementById('navbar');
//   let windowPosition = window.scrollY > 600;
//   header.classList.toggle('scrolling-active', windowPosition);
// });

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 0) {
    document.getElementById('ballon').style.visibility = 'unset';
    $('#ballon').fadeIn();
  } else {
    document.getElementById('ballon').style.visibility = 'hidden';
    // $('#ballon').fadeOut();
  }
});


