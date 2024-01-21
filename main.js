function hide_blur(){
    $("#blur1").css("filter", "none");
    $("#blur2").css("filter", "none");
    $("#blur3").css("filter", "none");
    $("#under-img").css("filter", "none");
};
var click_menu = 0;

function anchor(name, link){
$(name).on('click', function(){
    $('html,body').stop().animate({ scrollTop: $(`#${link}`).offset().top }, 500);
    e.preventDefault();
});
}

$(function() {
    if ($.cookie('auth')=="true") {
        $("#pop_up").css("display", "none");
        hide_blur();
    };
    $("#yes").on("click", function(){
        $("#pop_up").css("display", "none");
        hide_blur();
        $.cookie('auth', 'true', { expires: 1 });
    });
    $("#no").on("click", function(){
        $("#drop-container").slideDown("slow");
    });
    $("#menu").on("click", function(){
        click_menu += 1;
        $('.to-stores').html('Адреса');
        if (click_menu%2==1) {
        $("#header-nav").slideDown("slow");
        } else {
            $("#header-nav").slideUp("fast");
        }
    });
    anchor('a.to-about', 'about');
    anchor('a.to-stores', 'stores');
    anchor('a.to-promo', 'promo');
});