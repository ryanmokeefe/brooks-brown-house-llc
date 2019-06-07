

// Fixed NavBar

var offsetNav = $("nav").offset().top;
$(window).resize(function(){
    offsetNav = $("nav").offset().top;
})

function stickyNav() {
    
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
};


$(window).scroll(function() {
    // stickyNav();
    stickyLogo();
});

// moving BBH logo

var offsetLogo = $(".headerLogo").offset().top;
$(window).resize(function(){
    offsetLogo = $(".headerLogo").offset().top;
})

function stickyLogo() {
    var scrolltop = $(window).scrollTop();
    var dist = (offsetLogo - scrolltop);

    if (dist <= 0)
    {
        $(".headerLogo").removeClass("scrollLogo");
        $(".headerLogo").addClass("fixedLogo");
    } else 
    {
        $(".headerLogo").removeClass("fixedLogo");
        $(".headerLogo").addClass("scrollLogo");
    }
}
