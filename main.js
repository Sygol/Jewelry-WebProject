function imageToggleForItem(pictureNumber, newPictureNumber){
    
    $(".ring"+pictureNumber+"__square").click(function(){
        carouselImageToggle(this, ".carousel__image--"+pictureNumber, "Web Developer Test/ring-"+ newPictureNumber +".jpg")
    })

    if (pictureNumber!==4){
        $(".ring"+pictureNumber+"__square--filled").click(function(){
            carouselImageToggle(this, ".carousel__image--"+pictureNumber, "Web Developer Test/ring-"+ pictureNumber +".jpg")
        })
    }

    else{
        $(".ring"+pictureNumber+"__square--filled").click(function(){
            carouselImageToggle(this, ".carousel__image--"+pictureNumber, "Web Developer Test/ring-"+ 3 +".jpg")
        })
    }


}

function carouselImageToggle(square_class, ring_class, ring_src){
    $(ring_class).attr("src", ring_src);
    $(square_class).children().addClass('fas').removeClass('far');
    $(square_class).siblings().children().addClass('far').removeClass('fas');
}


$(document).ready(function(){


    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        center:true,
        responsive:{
            0:{
                items:2,
                margin: 10
            },
            600:{
                items:2,
                margin: 40
            },
            740:{
                items:2,
                margin: 100
            },

            880:{
                items: 4,
                margin: 30
            },
        
            997:{
                items: 4,
                margin: 20
            }

        }
    })

    $(".next__button").click(function(){
        owl.trigger('next.owl.carousel');
    });
    $(".prev__button").click(function(){
        owl.trigger('prev.owl.carousel');
    });


    imageToggleForItem(1,2);
    imageToggleForItem(2,1);
    imageToggleForItem(3,1);
    imageToggleForItem(4,2);

    $(".carousel__heart").click(function(){
        if ($(this).children().hasClass("far")){
            $(this).children().addClass('fas').removeClass('far')

        }
        else{$(this).children().addClass('far').removeClass('fas')}
    });


    $(".input__icon").click(function(){
        $(".search__input").toggleClass('show_search_input');
    })

    $('.menu__hamburger').click(function(){
        $('.navigation').css("height", "100vh");
    })

    $('.navigation__close_button').click(function(){
        $('.navigation').css("height", "0");
    })

    $('#navigation__item--jewelry').hover(function(){
        $('#jewelery__navigation').css("height", "100%");
    }, function(){
        if (!$('#jewelery__navigation').is(':hover')){
            $('#jewelery__navigation').css("height", "0");
        }

    });

    $('#jewelery__navigation').hover(function(){
        $('#navigation__item--jewelry').addClass("navigation__item--hover")
    }, function(){
        $('#navigation__item--jewelry').removeClass("navigation__item--hover");
        $('#jewelery__navigation').css("height", "0");
    });


});
