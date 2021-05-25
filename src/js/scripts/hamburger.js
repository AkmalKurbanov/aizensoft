$(document).ready(function () {
  $('.hamburger').on('click', function () {
    $('.header').removeClass('fixed');
    $('.header.inside-page').removeClass('inside-page');
    $('.header').addClass('color-options');
    $(this).hide();
    $('.hamburger-close').css('display', 'flex');
    $('body').addClass('disabled-scroll');
    $('.overlay').addClass('open');
    $('.curtain').addClass('open');
    $('.nav, .lang, .header__contacts ul, .phone').addClass('hidden');
    // $('.phone').hide();
    
    $('.curtain-light').css({
      'transition': '0',
      'opacity': '1',
    });
    setTimeout(function () {
      $('.menu').addClass('open');
    }, 300);
  });
  $('.hamburger-close').on('click', function () {
    $(this).hide();
    $('.hamburger').css('display', 'flex');
    $('.curtain-light').addClass('open');
    $('.overlay').removeClass('open');
    $('.curtain').removeClass('open');
    // $('.phone').show();
    setTimeout(function () {
      $('body').removeClass('disabled-scroll');
    }, 1400);
    setTimeout(function () {
      
      if (scroll >= headerHeight) {
        sticky.addClass('fixed');
      } else sticky.removeClass('fixed');
      
      $('.header').removeClass('color-options');
      $('.header').addClass('inside-page');
      $('.header.main-page').removeClass('inside-page');
      $('.nav, .lang, .header__contacts ul, .phone').removeClass('hidden');
      $('.curtain-light').removeClass('open');
      $('.curtain-light').css({
        'opacity': '0',
      });
    }, 700);
    setTimeout(function () {
      $('.menu').removeClass('open');
    }, 300);
  });
});