
// hero swiper
var mySwiper = new Swiper('.slider1', {
	effect: 'fade',
	speed: 3000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        waitForTransition: false,
    },
	loop: true,
    allowTouchMove: false,
});

//photo-gallery swiper
var mySwiper = new Swiper('.slider2', {
	loop: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		450: {
			slidesPerView: 2.5,
		},
		741: {
			slidesPerView: 3.5,
		},
		1080: {
			slidesPerView: 4,
		},
	},
	centeredSlides: true,
	spaceBetween: 60,
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
	$('.drawer__list').toggleClass('open');
	$('.drawer__background').toggleClass('open');
	$('.hide').toggleClass('open');
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