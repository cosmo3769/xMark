$("#wrapper").click(function() {
    $(".icon").toggleClass("close");
})

$("#hype").hover(function(){
    $("hype-all").slideUp(1000);
     $("#hype-text").fadeToggle(1000);
});