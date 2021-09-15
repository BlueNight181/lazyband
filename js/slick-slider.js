$('.object__logo-content').slick({
 slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1200,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
  ]
});
// $('.carousel').carousel({
//   interval: false,
// });
