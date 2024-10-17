
var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".suggestSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1280: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
/* 메인스와이퍼이미지 */

/* 핫뉴스스와이퍼이미지 */
var swiper = new Swiper(".hotnewSwiper", {
  slidesPerView: 'auto',
  spaceBetween: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // 모바일 설정
    768: {
        slidesPerView: 2, // 한 줄에 2개 보이게 설정
        spaceBetween: 2,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      
      
    },
  },
});
/* 핫뉴스스와이퍼이미지 */

