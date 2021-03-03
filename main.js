var swiper = new Swiper('.swiper-container', {

  direction: 'vertical',
  mousewheelControl: false,
  mousewheel: false,
  slidesPerView: 1,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  //freeMode: true,
  //freeModeSticky: true,
});

window.addEventListener('wheel', function (e) {
	if (e.deltaY > 0) {
    // down
    swiper.slideNext()
  } else {
    // UP
    swiper.slidePrev()
  }
})
