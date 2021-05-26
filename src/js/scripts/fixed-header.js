let headerHeight = $('.header').outerHeight();
let sticky = $('.header');
let stickyTop = $('.scroll-top');
$(window).scroll(function () {
  scroll = $(window).scrollTop();
  if (scroll >= headerHeight) {
    sticky.addClass('fixed');
    stickyTop.addClass('show');
  } else {
    sticky.removeClass('fixed');
    stickyTop.removeClass('show');
  }
});