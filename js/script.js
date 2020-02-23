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

    $('.images').hover( function() {
        $(this).find('.picturename').fadeIn(500);
    }, function() {
        $(this).find('.picturename').fadeOut(200);
    });
})
