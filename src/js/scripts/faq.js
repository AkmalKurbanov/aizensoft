 $(document).ready(function () {
   $('.faq__item').first().addClass('open');
   $('.faq__item').on('click', function () {
     $('.faq__item').not(this).children('.faq__desc').slideUp();
     $('.faq__item').not(this).removeClass('open');
     $(this).toggleClass('open');
     $(this).children('.faq__desc').slideToggle();
   });

 });