const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    allowTouchMove: true,
    direction: 'horizontal',
    loop: true,

    breakpoints: {
      420: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2.6,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });

  window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#burger').addEventListener('click', function () {
      document.querySelector('#nav').classList.toggle('is-active')
    })
  })
  document.querySelector('.header__burger').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('burger--active');
  });