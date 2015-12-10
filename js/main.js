$(function() {
    var mediaQuery = $('.viewports').css('font-family');

    // Media Query for js
    //if (mediaQuery == 'tablet' || mediaQuery == 'desktop') {
    //
    //}


    $('.hamburger').click(function(event){
        $('.mobile-menu').addClass('open');
    });

    $('.close-menu').click(function(event){
        $('.mobile-menu').removeClass('open');
    });


});