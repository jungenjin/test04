jQuery(document).ready(function () {
   // vages
   $('#main_visual').vegas({
      slides: [
         {src: '../images/cookie1.jpg'},
         {src: '../images/cookie2.jpg'},
         {src: '../images/cookie3.jpg'},
         {src: '../images/cookie4.jpg'},
      ],
   });

   //팝업창
   $('.notice li:first').click(function () {
      $('#modal').addClass('active');
   });

   $('.Btn').click(function () {
      $('#modal').removeClass('active');
   });

   //nav
   $('.navi > li')
      .mouseover(function () {
         $(this).find('.submenu').stop().slideDown(500);
      })
      .mouseout(function () {
         $(this).find('.submenu').stop().slideUp(500);
      });
});
