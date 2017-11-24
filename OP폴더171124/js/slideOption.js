// 전체 배너

$(function(){
  $('.bxslider-visual').bxSlider({
    mode: 'horizontal',
    captions: false,
    slideWidth: 750, //슬라이드 넓이
    speed:500, //슬라이드 속도
    slideMargin:5,
    pager:true,
    controls:true,
    auto:true
  });
});

//  여러개 슬라이드 광고배너
$(function(){
  $('.bxslider-banner').bxSlider({
    mode: 'horizontal',
    captions: false,
    slideWidth: 150, //이미지 1개 넓이
    speed:1500, // 슬리드 속도
    slideMargin:5, //이미지 간격
    pager:false,
    controls:true,
    auto:true, //슬라이드 자동
    maxSlides:5, //최대 보여질 갯수
    minSlides:1, //최소갯수
   moveSlides:1 //슬라이스 이동 개수
  });
});

