
function flyUp(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
}


document.addEventListener('DOMContentLoaded', function() {

window.addEventListener('scroll', myFunctionForSticky);

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunctionForSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
})