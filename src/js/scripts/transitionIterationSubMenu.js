$(document).ready(function () {
  for (var i = 0; i < 5; i++) {
    $('.menu__nav ul li' + (i + 1)).css('transition-delay' * i);
  }

  $(".menu__nav ul li").on({
    'mouseenter': function () {
      $('.menu__nav ul li ul').addClass('show-sub-menu')
    },
    'mouseleave': function () {
      $('.menu__nav ul li ul').removeClass('show-sub-menu')
    }
  });



});