import { Swiper as SwiperHero } from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

const initSwiperHero = () => {
    const swiper = new SwiperHero('.hero__swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
        modules: [Pagination],
        pagination: {
            el: '.hero__bullets',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="${className} hero__bullet"></span>`;
            },
        },
        breakpoints: {
            1440: {
                allowTouchMove: false,
            },
        },
    });

    swiper.on('slideChange', function () {
      const bullets = document.querySelectorAll('.hero__bullet');
      bullets.forEach((bullet) => {
          bullet.classList.remove('hero__bullet--active');
      });
      bullets[swiper.realIndex].classList.add('hero__bullet--active');
  });

  const bullets = document.querySelectorAll('.hero__bullet');
  bullets[swiper.realIndex].classList.add('hero__bullet--active');
};

initSwiperHero();

export { initSwiperHero };
