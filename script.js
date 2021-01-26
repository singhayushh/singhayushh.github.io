/* 
    Most of the code here is taken from stackoverflow.
    Credits to all the individual authors of the snippets I used.
*/

jQuery(document).ready(function($) {

    // Disable scrolling when mouse is over nav
    $( 'nav' ).on( 'mousewheel DOMMouseScroll', function ( e ) {
        var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
    
        this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
        e.preventDefault();
    });

    // Smooth scrolling
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                    scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});

