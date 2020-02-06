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
//Табы
    $('ul.catalog-tabs').on('click', 'li:not(.catalog-tab-active)', function() {
    $(this)
        .addClass('catalog-tab-active').siblings().removeClass('catalog-tab-active')
        .closest('div.container').find('div.catalog-content').removeClass('catalog-content-active').eq($(this).index()).addClass('catalog-content-active');
    });
//Ссылки в карточке товаров
    function toggleSlide (item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item-content').eq(i).toggleClass('catalog-item-content-active');
                $('.wraper-item').eq(i).toggleClass('wraper-item-active');
            })
        });
    };

    toggleSlide ('.link-back');
    toggleSlide ('.catalog-item-link');

    //Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });

    // $('.btn').on('click', function() {
    //     $('.overlay, #order').fadeIn('slow');
    // });

    //Modal с использованием тайтла

    $('.buy').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal-descr').text($('.catalog-item-title').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });


    $('.modal-close').on('click', function() {
        $('.overlay, .modal').fadeOut('slow');
    });


    function valideForm (form) {
        $(form).validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Пожалуйста, введите свое имя",
            phone: "Пожалуйста, введите свой номер",
            email: {
              required: "Пожалуйста, введите свой e-mail",
              email: "Не правильно введен e-mail"
            }            
          }
        });
    };    

    valideForm('#consultation-form')
    valideForm('#consultation form')
    valideForm('#order form')

    $('input[name=phone]').mask("+380 (99) 999-99-99");

    //отправка формы с сайта

    $('form').submit(function(e){
        e.preventDefault(); //отключение перезагрузки страницы при отправке формы
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    //Медленный скрол вверх страницы

    $(window).scroll(function() {
        if($(this).scrollTop() > 1600) {
            $('.skrollup').fadeIn();
        } else {
            $('.skrollup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();

  });