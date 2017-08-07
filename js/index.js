$('map').imageMapResize();

$('.map').scrollTop(1200).scrollLeft(1100);
var map = $('.map').find('img');

$('.plus').on('click', function() {
  var newWidth = map.width() * 1.1;
  var newHeight = map.height() * 1.1;
  map.width(newWidth);
  map.height(newHeight);
  $('area').each(function() {
    var coords = $(this).attr('coords').split(',');
    coords[0] = Math.ceil(coords[0] * 1.1);
    coords[1] = Math.ceil(coords[1] * 1.1);
    coords[2] = Math.ceil(coords[2] * 1.1);
    var newCoords = coords.join(', ');
    $(this).attr('coords', newCoords);
  });
});

$('.minus').on('click', function() {
  var newWidth = map.width() / 1.1;
  var newHeight = map.height() / 1.1;
  map.width(newWidth);
  map.height(newHeight);
  $('area').each(function() {
    var coords = $(this).attr('coords').split(',');
    coords[0] = Math.ceil(coords[0] / 1.1);
    coords[1] = Math.ceil(coords[1] / 1.1);
    coords[2] = Math.ceil(coords[2] / 1.1);
    var newCoords = coords.join(', ');
    $(this).attr('coords', newCoords);
  });
});
