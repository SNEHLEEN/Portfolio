$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
    var typed = new Typed(".typing", {
        strings: ["leen."],
        typedSpeed: 250,
        backSpeed: 200,
        loop: true
    })
})