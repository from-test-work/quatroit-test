import Swiper from 'swiper';

let swiper = new Swiper('.translator-container', {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        570: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        991: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        1199: {
            slidesPerView: 3,
            spaceBetween: 10,
        }
    }
});
