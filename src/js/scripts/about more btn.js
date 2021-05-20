$(document).ready(function () {


  $('.about-btn-js').on('click', function () {
    $(this).toggleClass('active');
    $('.about__text').toggleClass('open');
  });


});