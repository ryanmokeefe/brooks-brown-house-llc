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

// TODO: 

// const makeSquares = function() {
//     const squares = $('.squares');
//     for (i = 0; i < 10; i++) {
//         let row = '<div class="square-row square-row' + i + '">';
//         for (i = 0; i < 10; i++) {
//             $(row).append('<div class="square-new square-new' + i + '"></div>')
//             console.log("square-new" + i)
//         }
//         $(row).append('</div>');
//         $(squares).append(row);
//         console.log(row)

//     }
// } 
// $(document).ready(function() {
//     makeSquares();
// })
