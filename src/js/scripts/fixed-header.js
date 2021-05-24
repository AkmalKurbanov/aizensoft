let headerHeight = $('.header').outerHeight();
let sticky = $('.header');
$(window).scroll(function () {
  scroll = $(window).scrollTop();
  if (scroll >= headerHeight) {
    sticky.addClass('fixed');
  } else sticky.removeClass('fixed');
});