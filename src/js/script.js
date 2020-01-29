$(document).ready(function(){
    $('.carousel-item').slick({
        speed: 1000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
        ]
      });
  });