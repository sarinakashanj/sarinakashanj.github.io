$(document).ready(function (){
   // Selectors
   const navbar = $('.navbar');
   const navContent = $('.nav-content');
   // let maxH = $(window).height();
   // let maxW = $(window).width();
   //Events
   // $('#first-landing').height(maxH).width(maxW);
   // $(window).resize(function() {
   //    let maxW = $(window).width();
   //    let maxH = $(window).height();
   //    $('#first-landing').height(maxH).width(maxW);
   // });
   navbar.on('click', function (){
      navContent.toggleClass('open');
   });
});
