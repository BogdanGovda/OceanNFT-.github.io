import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const burger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
const close = document.querySelector('.header__close');
const overlay = document.querySelector('.overlay');
const body = document.body;


burger.addEventListener('click', function () {
    header.classList.toggle('active');
    overlay.classList.toggle('overlay-active');
    body.classList.toggle('lock');
})
close.addEventListener('click', function () {
    header.classList.toggle('active');
    overlay.classList.toggle('overlay-active');
    body.classList.toggle('lock');
})
overlay.addEventListener('click', function () {
    header.classList.toggle('active');
    overlay.classList.toggle('overlay-active');
    body.classList.toggle('lock');
})

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 35,
    // autoplay: {
    //     delay: 3000,
    // },
    breakpoints: {
        330: {
            slidesPerView: 1,
            spaceBetween: 45,
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 25,

        },

        1000: {
            slidesPerView: 2,
            spaceBetween: 25,

        },

        1440: {
            slidesPerView: 2,
            spaceBetween: 30,

        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 35,
        }
    },
    pagination: {
        el: '.swiper-pagination',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

