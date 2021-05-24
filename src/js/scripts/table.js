$(document).ready(function () {
  $('.table__type').on('click', function () {
    $(this).parent().parent().next().toggleClass('open');
  });
});