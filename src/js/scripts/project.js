$(document).ready(function () {
  if (window.screen.width > 1199) {
    $('.project__circle, .project__circles').addClass('layer');
    var $scene = $('.project__banner').parallax({
      scalarX: 10,
      scalarY: 10,
    });
  }

});