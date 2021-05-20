 $(document).ready(function () {

   $('.fadeInUp').each(function (i) {
     if ($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).outerHeight()) {
       $(this).addClass('fadeInUp--animated');
     } else {
       $(this).removeClass('fadeInUp--animated');
     }

   });

   $(window).scroll(function () {
     $('.fadeInUp').each(function (i) {
       if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
         $(this).addClass('fadeInUp--animated');
       } else {
         $(this).removeClass('fadeInUp--animated');
       }
     });

   });

 });