var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});



function checkVisibility() {
  var animatedHeading = document.getElementById('animasi-text');
  var bounding = animatedHeading.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  if (bounding.top < windowHeight) {
    animatedHeading.classList.add('visible');
  } else {
    animatedHeading.classList.remove('visible');
  }
}

window.addEventListener('scroll', function() {
  checkVisibility();
});

window.addEventListener('load', function() {
  checkVisibility();
});





