$('.map').scrollTop(1200).scrollLeft(1100);
$('.plus').on('click', function() {
  $('.map').find('img').css('width', '+=200');
  $('.map').find('img').css('height', '+=200');
});
$('.minus').on('click', function() {
  $('.map').find('img').css('width', '-=200');
  $('.map').find('img').css('height', '-=200');
});
