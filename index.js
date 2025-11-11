new Swiper(".card-wrapper", {
  spaceBetween: 20,
        slidesPerView: 4,
        centeredSlides:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        0: { slidesPerView: 1 },
        520: { slidesPerView: 2 },
        950: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      },
    });
