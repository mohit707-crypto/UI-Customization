//lpg-custom.js

//on screen fix button js start
function isOnScreen(elem) {
	// if the element doesn't exist, abort
	if( elem.length == 0 ) {
		return;
	}
	var $window = jQuery(window)
	var viewport_top = $window.scrollTop()
	var viewport_height = $window.height()
	var viewport_bottom = viewport_top + viewport_height
	var $elem = jQuery(elem)
	var top = $elem.offset().top
	var height = $elem.height()
	var bottom = top + height

	return (top >= viewport_top && top < viewport_bottom) ||
	(bottom > viewport_top && bottom <= viewport_bottom) ||
	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
}
//on screen fix button js end

$(document).ready(function() {

    if( isOnScreen($(".nonStickyBtn").eq(0)) ||
        isOnScreen($(".nonStickyBtn").eq(1)) || 
        isOnScreen($(".nonStickyBtn").eq(2)) || 
        isOnScreen($(".nonStickyBtn").eq(3)) || 
        isOnScreen($(".nonStickyBtn").eq(4)) || 
        isOnScreen($(".nonStickyBtn").eq(5)) || 
        isOnScreen($(".nonStickyBtn").eq(6)) || 
        isOnScreen($(".nonStickyBtn").eq(7)) || 
        isOnScreen($(".nonStickyBtn").eq(8)) ||
        isOnScreen($("#CTASection")) ) {
        $(".stickyBtn").fadeOut(10);
    } else {
        // $(".stickyBtn").fadeIn(10);
        if($(window).width() < 767){
            $(".stickyBtn").fadeIn(10);
        }
    }
    $(window).on('scroll',function(){
        if( isOnScreen($(".nonStickyBtn").eq(0)) ||
        isOnScreen($(".nonStickyBtn").eq(1)) || 
        isOnScreen($(".nonStickyBtn").eq(2)) || 
        isOnScreen($(".nonStickyBtn").eq(3)) || 
        isOnScreen($(".nonStickyBtn").eq(4)) || 
        isOnScreen($(".nonStickyBtn").eq(5)) || 
        isOnScreen($(".nonStickyBtn").eq(6)) || 
        isOnScreen($(".nonStickyBtn").eq(7)) || 
        isOnScreen($(".nonStickyBtn").eq(8)) || 
        isOnScreen($("#CTASection")) ) {
            $(".stickyBtn").fadeOut(10);
        } else {
            // $(".stickyBtn").fadeIn(10);
            if($(window).width() < 767){
                $(".stickyBtn").fadeIn(10);
            }
        }
    });

    /* scroll to target */
    jQuery('.scrollTo').click(function(e) {
        var jump = jQuery(this).attr('href');
        var new_position = jQuery(jump).offset();
        jQuery('html, body').stop().animate({ scrollTop: new_position.top }, 800, function(){
            var new_position = jQuery(jump).offset();
            jQuery('html, body').stop().animate({ scrollTop: new_position.top }, 500);
        });
        e.preventDefault();
    });


    /* initialize fancybox */
    $(".fancybox").fancybox();
    
    //Match height
    $(".MatchHeight").matchHeight();
  

    // banner slider js start
    // SLICK
    $('#mainSlider').slick({
        asNavFor: '#navSlider',
        rows: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        adaptiveHeight: true,
        dots: false,
        autoplay: false,
    });

    $('#navSlider').slick({
        asNavFor: '#mainSlider',
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        dots: false,
        arrows: true,
        // vertical: true,
    });
    // banner slider js end

    // CTA slider js start
    // SLICK
    $('#mainSlider2').slick({
        asNavFor: '#navSlider2',
        rows: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        adaptiveHeight: true,
        dots: false,
        autoplay: false,
    });

    $('#navSlider2').slick({
        asNavFor: '#mainSlider2',
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        dots: false,
        arrows: true,
        // vertical: true,
    });
    // banner slider js end
 
     
    $('.banerCommentSlider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        focusOnSelect: false,
        adaptiveHeight: false,
        dots: false,
        infinite: true,
        arrows: true,
        centerMode: false,
    });
     
    $('.banerCommentSlider1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        focusOnSelect: false,
        adaptiveHeight: false,
        dots: false,
        infinite: true,
        arrows: true,
        centerMode: false,
    });

    $('.featuredSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        focusOnSelect: false,
        adaptiveHeight: false,
        // variableWidth: true,
        dots: false,
        infinite: true,
        arrows: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    autoplay: true,
                    autoplaySpeed: 4000,
                }
            }
        ]
    });

    $('.justForYouSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        dots: true,
        arrows: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 4000,
                }
            }
        ]
    });


    $('.testimonialSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        dots: false,
        arrows: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
   

    // /* back to top */
    var btn = jQuery('#backToTop');
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        jQuery('html, body').animate({scrollTop:0}, '300');
    });


    //accordion js
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fas").addClass("fa-opened").removeClass("fa-closed");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fas").removeClass("fa-closed").addClass("fa-opened");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fas").removeClass("fa-opened").addClass("fa-closed");
    });
    $('.accordionBtn').click(function(){
        if ($(this).parents('.card').hasClass('cardActive')) {
            $(this).parents('.card').toggleClass('cardActive');
        }
        else{
            $('.card').removeClass('cardActive');
            $(this).parents('.card').addClass('cardActive');
        }
    });


    
});

