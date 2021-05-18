$(document).ready(function () {


  let headerHeight = $('.header').outerHeight();
  $(window).scroll(function () {
    var sticky = $('.header'),
      scroll = $(window).scrollTop();

    if (scroll >= headerHeight) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });


});