const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2.6,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    allowTouchMove: true,
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });