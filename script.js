$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault(); 
        var target = this.hash;
        var offset = $(target).offset().top - ($(window).height() - $(target).outerHeight()) / 2;
        $('html, body').animate({
            scrollTop: offset
        }, 1000); 
    });
});

ScrollReveal().reveal('.p2,.p3,.p4,.p5', { delay: 250 });


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".content").style.display = "block";
        document.querySelector(".loading").style.display = "none";
    }, 2000);
});