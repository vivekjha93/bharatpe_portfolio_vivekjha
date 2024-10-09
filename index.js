

//   swiper js code

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
    disableoninteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
