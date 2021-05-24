$(document).ready(function () {
  $('.footer__menu-title').on('click', function () {
    $(this).addClass('open');
    $(this).next().slideDown();
  });
});