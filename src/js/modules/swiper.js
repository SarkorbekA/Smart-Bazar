import Swiper, { Navigation, Pagination, Thumbs, Zoom, Autoplay } from 'swiper';

export function init() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        modules: [Navigation, Thumbs, Zoom],
        spaceBetween: 20,
        navigation: {
            nextEl: ".content-next",
            prevEl: ".content-prev",
        },
        thumbs: {
            swiper: swiper,
        }
    })
    var swiper3 = new Swiper(".mySwiper3", {
        modules: [Pagination, Navigation, Autoplay],
        slidesPerView: 1,
        spaceBetween: 16,
        navigation: {
            nextEl: ".news-next",
            prevEl: ".news-prev",
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 16,
            }
        },
        autoplay: {
            delay: 2000,
        },
    });
    var swiper4 = new Swiper(".contentSwiper", {
        modules: [Navigation],
        slidesPerView: 4,
        spaceBetween: 40,
        navigation: {
            nextEl: ".content2-next",
            prevEl: ".content2-prev",
        },
    })
}