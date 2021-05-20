$(document).ready(function () {

  $('.form-control input, .form-control textarea').on('keyup', function () {
    var $this = $(this),
      val = $this.val();

    if (val.length >= 1) {
      $this.next().addClass('not-empty');
    } else {
      $this.next().removeClass('not-empty');
    }
  });


  $('.select__option').on('click', function () {
    let value = $(this).attr('data-value');
    $(this).parent().parent().find('#select-type').val(value);
    $('.select-ckecked').text(value);
  });

  $('.form-control-ckecked').on('click', function () {
    $('.form-control-ckecked').not(this).removeClass('form-control-ckecked--active');
    $(this).toggleClass('form-control-ckecked--active');
  });

  $('.form-control__option').on('click', function () {
    let value = $(this).attr('data-value');
    $(this).parent().parent().parent().find('.select-type').val(value);
    $(this).parent().parent().parent().find('.form-control-ckecked span').text(value);
  });


});