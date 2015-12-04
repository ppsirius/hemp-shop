$(function() {
    var mediaQuery = $('.viewports').css('font-family');

    // Media Query for js
    //if (mediaQuery == 'tablet' || mediaQuery == 'desktop') {
    //
    //}


    $('.hamburger').click(function(event){
        event.preventDefault();
        $(this).toggleClass('open');
    });


});