// hero swiper
  const mySwiper = new Swiper('.swiper', {
    loop: true,
	effect: 'fade',
	fadeEffect: {
        crossFade: true
    },
	autoplay: {
	  delay: 4000,
	  disableOnInteraction: false,
	},
	speed: 2000,
	followFinger: false,
	allowTouchMove: false,
});
