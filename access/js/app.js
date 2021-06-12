let slideIndex;
function slideShow() {
    let slides = document.getElementsByClassName("slide__img");
    let dots = document.getElementsByClassName("slide__sticky-dot");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" _active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " _active";
    slideIndex++;
    if (slideIndex > slides.length - 1) { slideIndex = 0};
    setTimeout(slideShow, 3000);
}
slideShow(slideIndex = 0);
// function currentSlide(n) {
//     slideShow(slideIndex = n);
// }

// $(document).ready(function() {
//     $('#slider .owl-carousel').owlCarousel({
//         loop:true,
//         margin:10,
//         nav:true,
//         items: 1
//     })
// });
$(document).ready(function() {
$('.place .owl-carousel').owlCarousel({
    loop:false,
    margin:16,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.discount .owl-carousel').owlCarousel({
    loop:false,
    margin:16,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('.suggestions .owl-carousel').owlCarousel({
    loop:false,
    margin:16,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$('.discover .owl-carousel').owlCarousel({
    loop:false,
    margin:16,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.tutorial .owl-carousel').owlCarousel({
    loop:false,
    margin:16,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

});

let search = document.getElementsByClassName('header__search-client')[0];
let extend = document.getElementById("extend-client");
search.onclick = function () {
    extend.style.display = 'block';
}
window.onclick = function (event) {
    if (event.target != search) {
        extend.style.display = "none"
    }
}