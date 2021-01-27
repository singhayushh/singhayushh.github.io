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

    $('.nav-open').click(
		function() {
			if ($('nav').css('left') != '0px') {
				$('nav').css({'left': '0px', 'width':'350px'});
				$('.nav-open').html('<i class="fas fa-angle-left"></i>');
			}
			else {
				$('nav').css({'left':'-225px', 'width': '225px'});
				$('.nav-open').html('<i class="fa fa-bars"></i>');
			}
		}
	);

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

