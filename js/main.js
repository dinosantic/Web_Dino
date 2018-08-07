$(document).ready(function(){

    var headerHeight = $("header").outerHeight();

    $(".slide-section").click(function(e){
       
        var link = $(this).attr("href");
       $("html, body").animate({
           scrollTop: $(link).offset().top - headerHeight
       }, 2000 );
        e.preventDefault();
    });
});
        var typed = new Typed('#typed', {
            stringsElement: '#typed-strings',           
            typeSpeed: 110,
            backSpeed: 10,
            fadeOut: true,
            loop: true
 });

