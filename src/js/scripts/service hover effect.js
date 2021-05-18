 $(document).ready(function () {

   // btn effect
   $(".list__item").mouseenter(function (e) {
     var parentOffset = $(this).offset();

     var relX = e.pageX - parentOffset.left;
     var relY = e.pageY - parentOffset.top;
     $(this).children(".circle").css({
       "left": relX,
       "top": relY
     });
     $(this).children(".circle").removeClass("desplode-circle");
     $(this).children(".circle").addClass("explode-circle");

   });

   $(".list__item").mouseleave(function (e) {

     var parentOffset = $(this).offset();

     var relX = e.pageX - parentOffset.left;
     var relY = e.pageY - parentOffset.top;
     $(this).children(".circle").css({
       "left": relX,
       "top": relY
     });
     $(this).children(".circle").removeClass("explode-circle");
     $(this).children(".circle").addClass("desplode-circle");

   });
   // btn effect end







 });