import Swiper from "swiper";

const onceHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const target = event.target;
    const body = target.closest("body");

    try {
        const originUrl = target.previousElementSibling.attributes.origin.value;

        const template = `
            <div id='swiper-modal' class='swiper-modal'>
                <img class="slide-cnt__img" src="${originUrl}" alt="">
            </div>
        `;

        console.log(target.previousElementSibling.attributes.origin.value);
        body.setAttribute("modal", "is-open");
        body.insertAdjacentHTML("beforeEnd", template);

        closeSwiperModal();
    } catch (e) {
        console.warn(e.message);
        return;
    }
};

const closeSwiperModal = () => {
    const swiperModal = document.getElementById("swiper-modal");

    swiperModal.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        const target = event.target;

        if (target.children.length === 0) return;
        target.children[0].remove();
        target.parentNode.removeChild(swiperModal);
    });
};

let config = {
    init: true,
    spaceBetween: 30,
    // speed: 1000,
    loop: true,
    // flipEffect: {
    //     rotate: 30,
    //     slideShadows: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
};

const swiperPreview = new Swiper("#swiperPreview", config);

swiperPreview.init();
swiperPreview.on("click", onceHandler);
