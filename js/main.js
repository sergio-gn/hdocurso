jQuery(document).ready(function($) {

    'use strict';


    $(".Modern-Slider").slick({
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        fade: true,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        // fade:true,
        draggable: false,
        prevArrow: '<button class="PrevArrow"></button>',
        nextArrow: '<button class="NextArrow"></button>',
    });

    //////////////////// NAVBAR LOGIC
    $('#nav-toggle').on('click', function(event) {
        event.preventDefault();
        $('#main-nav').toggleClass("open");
    });
    // Add a global click event listener to close the menu when clicking outside
    $(document).on('click', function(event) {
        // Check if the clicked element is not a button with the ID "nav-toggle" and not within the #main-nav
        if (
            !$(event.target).is('#nav-toggle') &&
            !$(event.target).closest('#main-nav').length
        ) {
            // Close the menu
            $('#main-nav').removeClass('in');
        }
    });


    //////////////////// NAVBAR LOGIC

    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e) {
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

    })



    $(".box-video").click(function() {
        $('iframe', this)[0].src += "&amp;autoplay=1";
        $(this).addClass('open');
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    })

    /////FUNCTIONS

    $('.button a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 0
        }, 500, 'linear');
    });


});


/***** accordion ******/
function initAcc(elem, option){
    document.addEventListener('click', function (e) {
        if (!e.target.matches(elem+' .a-btn')) return;
        else{
            if(!e.target.parentElement.classList.contains('active')){
                if(option==true){
                    var elementList = document.querySelectorAll(elem+' .a-container');
                    Array.prototype.forEach.call(elementList, function (e) {
                        e.classList.remove('active');
                    });
                }            
                e.target.parentElement.classList.add('active');
            }else{
                e.target.parentElement.classList.remove('active');
            }
        }
    });
    }
initAcc('.accordion.v1', true);