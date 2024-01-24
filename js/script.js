// hero swiper
  var mySwiper = new Swiper('.slider1', {
	effect: 'fade',
	fadeEffect: {
        crossFade: true,
    },
	autoplay: {
	  delay: 6000,
	  disableOnInteraction: false,
	  waitForTransition: false,
	},
	speed: 0,
	loopAdditionalSlides: 5,
	allowTouchMove: false,
});

var mySwiper = new Swiper('.slider2', {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 30,
	speed: 1000,
	autoplay: {
		delay: 6000,
		disableOnInteraction: false,
		waitForTransition: false,
	  },
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});