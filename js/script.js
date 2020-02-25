$(document).ready(function(){
    $(".toggle1").click(function(){
        $(".first").toggle();
        $(".text1").toggle();
    });
    $(".toggle2").click(function(){
        $(".second").toggle();
        $(".text2").toggle();
    });
    $(".toggle3").click(function(){
        $(".third").toggle();
        $(".text3").toggle();
    });

    $('.images').hover( function() {
        $(this).find('.picturename').fadeIn(500);
    }, function() {
        $(this).find('.picturename').fadeOut(200);
    });

    $("form").submit(function(){
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#msg").val();
    alert(name+' Your Message has been received.Thank you for contacting us. ')
    $("form").trigger('reset');
})
})
