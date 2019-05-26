

// Fixed NavBar

var offsetNav = $("nav").offset().top;
$(window).resize(function(){
    offsetNav = $("nav").offset().top;
})

$(window).scroll(function() {
    
    var scrolltop = $(window).scrollTop();
    var dist = (offsetNav - scrolltop);

    if (dist <= 0)
    {
        $("nav").removeClass("scrollNav");
        $("nav").addClass("fixedNav");
    } else 
    {
        $("nav").removeClass("fixedNav");
        $("nav").addClass("scrollNav");
    }
});