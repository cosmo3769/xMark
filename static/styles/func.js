const mq= window.matchMedia("(max-width: 992px)");

$("#wrapper").click(function() {
    $(".icon").toggleClass("close");
    if(mq.matches){
    $(".curtain").toggle(500);
    }
})