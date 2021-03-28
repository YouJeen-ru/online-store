$(function(){
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnPrev"><img src="../images/arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnNext"><img src="../images/arrow-right.svg" alt="arrow-right"></button>',
    })

    $('.tab').on('click', function (e){
        e.preventDefault()

        $($(this).siblings()).removeClass('tab--active')
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active')

        $(this).addClass('tab--active')
        $($(this).attr('href')).addClass('tabs-content--active')
    })

    $('.product-item__favorite').on('click', function () {
        $(this).toggleClass('product-item__favorite--active')
    })

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnPrev"><img src="../images/arrow-black-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnNext"><img src="../images/arrow-black-right.svg" alt="arrow-right"></button>',
    })

    $('.filter-style').styler();

    $('.filter__item-drop, .filter-extra').on('click', function () {
        $(this).toggleClass('filter__item-drop--active')
        $(this).next().slideToggle('200')
    })

    $(".js-range-slider").ionRangeSlider({
        type: 'double',
    });

    $('.catalog__filter-btngrid').on('click', function () {
        $(this).addClass('catalog__filter-button--active')
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active')
        $('.product-item__wrapper').removeClass('product-item__wrapper--list')
    })

    $('.catalog__filter-btnline').on('click', function () {
        $(this).addClass('catalog__filter-button--active')
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active')
        $('.product-item__wrapper').addClass('product-item__wrapper--list')
    })

});