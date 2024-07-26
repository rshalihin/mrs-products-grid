/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
// let sliderColumns = document.getElementsByClassName('mrs-products-slider');
// let slideAttr = sliderColumns[0].getAttribute('data-products-column');
// let desktopColumns = slideAttr.slice( slideAttr.search('desktop:'), slideAttr.search('desktop:') + 1 );
// console.log(slideAttr.desktop);
// console.log(slideAttr.search(desktop));
// console.log(desktopColumns);

const swiper = new Swiper('.mrs-products-slider', {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4
    }
  }
});
let prevBtn = document.querySelector('.mrs-slider-btn-prev');
let nextBtn = document.querySelector('.mrs-slider-btn-next');
prevBtn.addEventListener('click', function (e) {
  console.log(prevBtn);
  swiper.slidePrev();
});
nextBtn.addEventListener('click', function (e) {
  console.log(prevBtn);
  swiper.slideNext();
});
/******/ })()
;
//# sourceMappingURL=view.js.map