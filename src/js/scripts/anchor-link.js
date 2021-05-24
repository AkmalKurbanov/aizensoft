$(document).ready(function () {
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - headerHeight
    }, 2000);
  });

  $('.form-js').on('click', function () {
    $('.form').addClass('show');
  });
});