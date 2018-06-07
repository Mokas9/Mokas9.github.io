var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       $('header').removeClass('active');
   } else {
      $('header').addClass('active');
   }
   lastScrollTop = st;
});