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

// ハンバーガーメニュー
$('.drawer__icon').on('click', function() {
	$(this).toggleClass('open');
	$('.drawer__nav').toggleClass('open');
	$('.drawer__background').toggleClass('open');
	$('.hide').toggleClass('show');
	$('.drawer__list').toggleClass('show').animate({
		'opacity' : '0',
		'left' : '0px',
	  }, 0);

	function fadeIn() {
		var delaySpeed = 100; // メニューアイテムの遅延時間
		var fadeSpeed = 200; // フェードイン速度

		$('.drawer__list').each(function(i) {
		  $(this).delay(i * delaySpeed).animate({
			'opacity' : '1',
			'left' : '0px',
		  }, fadeSpeed);
		});
	};
	fadeIn()
});

// ページ内リンク スムーススクロール
$(function(){
	$('a[href^="#"]').click(function(){
	  var speed = 500;
	  var href= $(this).attr("href");
	  var target = $(href == "#" || href == "" ? 'html' : href);
	  var position = target.offset().top;
	  $("html, body").animate({scrollTop:position}, speed, "swing");
	  return false;
	});
  });

// page top
$('.page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

$(window).on('load scroll', function(){
if($(this).scrollTop() > 150) {
	$('.page-top').addClass('show');
}else{
	$('.page-top').removeClass('show');
}
});