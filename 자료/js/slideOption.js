$(function(){
  $('.bxslider-visual').bxSlider({
    mode: 'horizontal',
    captions: false,
    slideWidth: 1000,
    speed:500,
    slideMargin:5,
    pager:true,
    controls:true,
    auto:true
  });
});

$(function(){
  $('.bxslider-banner').bxSlider({
    mode: 'horizontal',
    captions: false,
    slideWidth: 200,
    speed:1500,
    slideMargin:5,
    pager:false,
    controls:true,
    auto:true,
    maxSlides:5,
    minSlides:1,
   moveSlides:1
  });
});



// menu
$(function(){
      $(".gnb-main>a").click(function(){
        $(".gnb a").removeClass("on");
        $(this).addClass("on");
      });
    });
