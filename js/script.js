$(document).ready(function(){
    $(".clickable1").click(function(){
        $(".first").toggle();
        $(".text1").toggle();
    });
    $(".clickable2").click(function(){
        $(".second").toggle();
        $(".text2").toggle();
    });
    $(".clickable3").click(function(){
        $(".third").toggle();
        $(".text3").toggle();
    });

    $('.gallery-item').hover( function() {
        $(this).find('.img-title').fadeIn(300);
    }, function() {
        $(this).find('.img-title').fadeOut(100);
    });
})
