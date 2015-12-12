$(function() {
    var mediaQuery = $('.viewports').css('font-family');

    // Media Query for js
    //if (mediaQuery == 'tablet' || mediaQuery == 'desktop') {
    //
    //}

    // Mobile navigation
    $('.hamburger').click(function(event){
        $('.mobile-menu').addClass('open');
    });
    $('.close-menu').click(function(event){
        $('.mobile-menu').removeClass('open');
    });

    // Max height animation
    function animatedMaxHeight(value) {
        var listWrapper = $(value).next(),
            listMaxHeight = listWrapper.children('ul').height();

        if ( listWrapper.css('max-height') == '0px' ) {
            TweenLite.to(listWrapper, .3, {css: {maxHeight: listMaxHeight}})
        } else {
            listWrapper.css('max-height', listMaxHeight);
            TweenLite.to(listWrapper, .3, {css: {maxHeight: 0}})
        }
    }

    // Filter sidebar
    $('.filter-title').click(function(){
        animatedMaxHeight(this);
    });

    // Footer dropdown
    $('.footer-headline').click(function(event){
        if(mediaQuery != 'desktop') {
            animatedMaxHeight(this);
        }
    });



});