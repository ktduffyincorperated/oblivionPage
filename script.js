
$(document).ready(function() {

$(".x").hide();

$(".info").on("click", function(){
    $("iframe").hide("slow");
    $("#infoPage").show();
    $(".x").fadeIn();
    console.log("works");
});

$(".x").on("click", function(){
    $("iframe").fadeIn("slow");
    $(this).fadeOut();
});

});