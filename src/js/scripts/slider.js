 var swiper = new Swiper(".exaple-sites-slider", {
   loop: true,
   speed: 1000,
   autoplay: {
     delay: 3500,
     disableOnInteraction: false,
   },
   navigation: {
     nextEl: ".next-btn",
     prevEl: ".prev-btn",
   },
 });

 var swiper = new Swiper(".blog-article-js", {
   loop: true,
   speed: 1000,
   autoplay: {
     delay: 3500,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true
   }
 });