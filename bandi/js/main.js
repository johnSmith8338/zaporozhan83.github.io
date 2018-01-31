$(document).ready(function () {
    $('.slick-gallery').slick({
        arrows: false,
        fade: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: false
    });
    mobileMenu();
});

function mobileMenu() {
    $(".hidden_menu_holder").click(function () {
        $(".nav").toggleClass('nav-active');
    });
}
