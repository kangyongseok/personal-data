$(function() {
    var slideNum = $(".visual li").length;

    $(".next").on("click", function() {
        $(".visual ul").animate({ left: '-1440px' }, 1000);
    });

    $(".prev").on("click", function() {
        $(".visual ul").animate({ left: '1440px' }, 1000);
    });
})