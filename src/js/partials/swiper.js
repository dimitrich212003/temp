const swiperOne = new Swiper(".points-main_mobile__slider", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 2000,
  },

  spaceBetween: 30,

  // // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

const swiperTwo = new Swiper(".courses__swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      autoHeight: true,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  },
});

const swiperThree = new Swiper(".partners__slider", {
  // Optional parameters
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
  },

  // // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
const swiperFour = new Swiper(".skillbox-stage__slider", {
  // Optional parameters
  spaceBetween: 12,
});
const swiperFive = new Swiper(".reviews__slider", {
  // Optional parameters
  spaceBetween: 24,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    430: {
      slidesPerView: 1.2,
    },
  },
});

const swiperSix = new Swiper(".mentors__slider", {
  // Optional parameters
  breakpoints: {
    0: {
      slidesPerView: 1.6,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

const swiperSeven = new Swiper(".subjects__slider", {
  // Optional parameters
  loop: true,

  slidesPerView: "auto",

  breakpoints: {
    0: {
      spaceBetween: 8,
    },
    768: {
      spaceBetween: 16,
    },
  },
});

const swiperEight = new Swiper(".sertificat-s__slider", {
  // Optional parameters

  slidesPerView: "auto",

  navigation: {
    nextEl: ".swiper-button-next-s",
    prevEl: ".swiper-button-prev-s",
  },
  // breakpoints: {
  //   0: {
  //     spaceBetween: 8,
  //   },
  //   768: {
  //     spaceBetween: 16,
  //   },
  // },
});
const swiperNine = new Swiper(".courses__swiperr", {
  // Optional parameters

  slidesPerView: "auto",

  spaceBetween: 12,
  // breakpoints: {
  //   0: {
  //     spaceBetween: 8,
  //   },
  //   768: {
  //     spaceBetween: 16,
  //   },
  // },
});

const swiperTen = new Swiper(".videos-sl__slider", {
  // Optional parameters

  slidesPerView: "auto",
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next-s",
    prevEl: ".swiper-button-prev-s",
  },
  // breakpoints: {
  //   0: {
  //     spaceBetween: 8,
  //   },
  //   768: {
  //     spaceBetween: 16,
  //   },
  // },
});
const swiperEleven = new Swiper(".videos-sl2__slider", {
  // Optional parameters

  slidesPerView: "auto",
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next-s",
    prevEl: ".swiper-button-prev-s",
  },
});
const swiperTwelve = new Swiper(".ltc-h__slider", {
  // Optional parameters

  slidesPerView: "auto",
  spaceBetween: 24,
});
const swiperThirteen = new Swiper(".ltc-gls__slider", {
  // Optional parameters
  pagination: {
    el: ".swiper-pagination-grey",
    clickable: true,
  },
});
const swiperFourteen = new Swiper(".ltc-w__slider", {
  // Optional parameters

  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination-grey",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});
const swiperFiveteen = new Swiper(".abus-fw__slider", {
  // Optional parameters
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperSixteen = new Swiper(".abus-h__slider", {
  // Optional parameters

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-s",
    prevEl: ".swiper-button-prev-s",
  },

});
