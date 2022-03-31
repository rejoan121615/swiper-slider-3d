var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
        delay: 5000,
  },
    speed: 500,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
