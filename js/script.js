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
	slidesPerView: 1.5,
	centeredSlides: true,
	breakpoints: {
		768: {
			slidesPerView: 3,
		}
	},
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

// drawer menu
jQuery('.drawer__icon').on('click', function(e) {
	e.preventDefault();

	jQuery('.drawer__icon').toggleClass('is-active');
	jQuery('.drawer__nav').toggleClass('is-active');
	jQuery('.drawer__background').toggleClass('is-active');
	return false;
  });