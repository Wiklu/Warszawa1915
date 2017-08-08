$('map').imageMapResize();

$(window).scroll(function() {
    var height = $(window).scrollTop();
    // if(height >= 1100) {
    //     console.log(height);
    // }
});

$('.map').scrollTop(1200).scrollLeft(1100);
var map = $('.map').find('img');

// $('.paragraph').each(function() {
//   if ($(this)[0].offsetHeight * 1.5 < $(this)[0].scrollHeight) {
//     console.log($(this)[0].offsetHeight);
//     console.log('scroll: ',$(this)[0].scrollHeight);
//     $(this).parent().width('100%').height('50%').css({'left': '0', "z-index": '0'});
//   }
// });

// $('.paragraph').on('click', function() {
//   if ($(this)[0].offsetHeight !== $(this)[0].scrollHeight) {
//     console.log($(this).parent().width('43%').height('50%'));
//   }
//   console.log($(this)[0].offsetHeight);
//   console.log('scroll: ',$(this)[0].scrollHeight);
// });

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
