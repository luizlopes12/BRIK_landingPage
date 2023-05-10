var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,

    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },

        600: {
          slidesPerView: 2,
          spaceBetween: 700
        },
    
        800: {
          slidesPerView: 2,
          spaceBetween: 70
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 43
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
    });