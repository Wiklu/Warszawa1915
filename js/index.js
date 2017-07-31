var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: false,
  pagination: ".swiper-pagination",
  grabCursor: true,
  speed: 500,
  keyboardControl: true,
  paginationClickable: true,
  parallax: true,
  effect: "slide",
  mousewheelControl: 1,
  hashnav: true,
  hashnavWatchState: true
});

$('.map').scrollTop(1200).scrollLeft(1100);
$('.plus').on('click', function() {
  $('.map').find('img').css('width', '+=200');
  $('.map').find('img').css('height', '+=200');
});
$('.minus').on('click', function() {
  $('.map').find('img').css('width', '-=200');
  $('.map').find('img').css('height', '-=200');
});
