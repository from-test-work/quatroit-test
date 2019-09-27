import Swiper from 'swiper';

let swiper = new Swiper('.recomendation-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".recomendation-pagination",
            clickable: true,
        }
});
