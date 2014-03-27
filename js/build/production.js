//Ensure Main Content takes entire screen
$(document).ready(function(){
    resizeDiv();
    showCard();
});

window.onresize = function(event) {
    resizeDiv();
}

function resizeDiv() {

    vpw = $(window).width();
    vph = $(window).height();

    $('.screen-size').css({'height': vph + 'px'});
    
}

function showCard() {

    $('.profile-card').addClass("show");

}

// $(window).scroll(function () {
//     $('.profile-card').each(function () {

//         if (($(this).offset().top - $(window).scrollTop()) < 20) {
//             $(this).stop().fadeTo(900, 0);
//         } else {
//             $(this).stop().fadeTo('fast', 1);
//         }
//     });
// });