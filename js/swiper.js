var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true
  // },
  // navigation: {
  //   // nextEl: ".swiper-button-next",
  //   nextEl: ".next-btn",
  //   prevEl: ".swiper-button-prev"
  // }
});

// custom pagination
$(function(){
  $('.swiper-bullet').on('click', function(){
    const i = $(this).attr('tabindex');
    console.log(i)
    swiper.slideTo(i);
    $('.swiper-bullet').removeClass('on');
    $(this).addClass('on');
  })
})

$('.next-btn').on('click', function(){
  // 현재 슬라이더 index
  var activeIndex = swiper.activeIndex - 1;

  swiper.slideNext(); // 다음 슬라이더
  $('.swiper-bullet').removeClass('on'); // pager 리셋
  if(activeIndex == 4) activeIndex = 0;
  console.log(activeIndex);
  // 현재 pager 스타일
  $('.swiper-bullet').eq(activeIndex).addClass('on');
})

