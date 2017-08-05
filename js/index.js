$('.map').scrollTop(1200).scrollLeft(1100);
$('.plus').on('click', function() {
  $('.map').find('img').css('width', '+=200');
  $('.map').find('img').css('height', '+=200');
});
$('.minus').on('click', function() {
  $('.map').find('img').css('width', '-=200');
  $('.map').find('img').css('height', '-=200');
});
// $('#wisla_btn').on('click', function() {
//   $('.map').scrollTop(1804.5).scrollLeft(2468.5);
// });
