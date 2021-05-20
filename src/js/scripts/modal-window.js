$(document).ready(function () {
  $('.order-js').on('click', function () {
    $('.modal').addClass('open');
    $('.modal__window').addClass('show');
    $('.modal #type-site').val($('.site-type.total__item.active .total__info-title span').text());
    $('.modal #design-site').val($('.site-design.total__item.active .total__info-title span').text());
    $('.modal #page-proofs-site').val($('.site-page-proofs.total__item.active .total__info-title span').text());
    $('.modal #cms-site').val($('.site-cms.total__item.active .total__info-title span').text());
    $('.modal #price-site').val($('.total__cost span').text());
    $('.modal #term-site').val($('.total__term span').text());
  });
  $('.modal__close').on('click', function () {
    $('.modal__window').removeClass('show');
    setTimeout(function () {
      $('.modal').removeClass('open');
    }, 300);
  });

});