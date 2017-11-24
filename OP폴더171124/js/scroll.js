function clickMove(name) {
    var offset = $("#move" + name).offset();
    $("html, body").animate({scrollTop:offset.top}.1000);
}
