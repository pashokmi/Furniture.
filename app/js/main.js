const menuBtnActive = document.querySelector('.menu__btn');
const menuActive = document.querySelector('.menu__list')
// const swiper = document.querySelector('.swiper-container').swiper;

menuBtnActive.addEventListener("click", function () {
  menuBtnActive.classList.toggle('menu__btn--active');
});

document.querySelector('.menu__btn').addEventListener('click', () => {
  document.querySelector('.menu__list').classList.toggle('menu__list--hide');
});



const swiper = new Swiper('.swiper-container', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    1220: {
      slidesPerView: 3,
      spaceBetween: 30
    },

    525: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
})
