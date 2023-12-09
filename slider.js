// slider.js

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    lazy: {
      enabled: false,
    },  
    slidesPerView: getSlidesPerView(),
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    spaceBetween: 60,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  function getSlidesPerView() {
    var width = window.innerWidth;

    if (width >= 1600) {
      return 5;
    } else if (width >= 1200) {
      return 4;
    } else if (width >= 850) {
      return 3;
    } else if (width >= 750) {
      return 2;
    } else {
      return 1;
    }
  }

  function updateSlidesPerView() {
    swiper.params.slidesPerView = getSlidesPerView();
    swiper.update(); // Update Swiper after changing the configuration
  }

  // Initial check
  updateSlidesPerView();

  // Update on window resize
  window.addEventListener('resize', updateSlidesPerView);
});
