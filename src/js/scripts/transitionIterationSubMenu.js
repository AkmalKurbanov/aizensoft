$(document).ready(function () {
  for (var i = 0; i < 5; i++) {
    $('.menu__nav ul li' + (i + 1)).css('transition-delay' * i);
  }

  $(".menu__nav ul li").on({
    'mouseenter': function () {
      $(this).find('ul').addClass('show-sub-menu')
    },
    'mouseleave': function () {
      $(this).find('ul').removeClass('show-sub-menu')
    }
  });


  let headerHeight = $('.header').outerHeight();
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
});









