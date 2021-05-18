$(document).ready(function () {
  $('.hamburger').on('click', function () {
    $('.header').addClass('color-options');
    $('.header').removeClass('fixed');
    $(this).hide();
    $('.hamburger-close').css('display', 'flex');
    $('body').addClass('disabled-scroll');
    $('.overlay').addClass('open');
    $('.curtain').addClass('open');
    $('.nav, .lang, .header__contacts ul').addClass('hidden');
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
    setTimeout(function () {
      $('body').removeClass('disabled-scroll');
    }, 1400);
    setTimeout(function () {

      $('.header').removeClass('color-options');
      $('.header').addClass('fixed');
      $('.nav, .lang, .header__contacts ul').removeClass('hidden');
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