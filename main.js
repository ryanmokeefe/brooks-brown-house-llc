// Mobile Nav:
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
// Carousel 
$(document).ready(function(){
    $('.carousel').carousel();
});


// TODO: Lazy Loading, Parallax

      
// Fixed NavBar
// var offsetNav = $("#missionStatement").offset().top;
// $(window).resize(function(){
//     offsetNav = $("#missionStatement").offset().top;
// })
// console.log(offsetNav)
// function stickyNav() {
//     var scrolltop = $(window).scrollTop();
//     console.log(scrolltop)
//     var dist = (offsetNav - scrolltop);
//     if (dist >= 0)
//     {
//         $(".nav-mobile").removeClass(".nav-m-scroll");
//         $(".nav-open").removeClass(".nav-m-button-scroll");
//     } else 
//     {
//         $(".nav-mobile").addClass(".nav-m-scroll");
//         $(".nav-open").addClass(".nav-m-button-scroll");
//     }
// };
// $(window).scroll(function() {
//     stickyNav();
// });

