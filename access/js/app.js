let slideIndex;
function slideShow() {
    let slides = document.getElementsByClassName("slide__img");
    let dots = document.getElementsByClassName("slide__sticky-dot");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
    slideIndex++;
    if (slideIndex > slides.length - 1) { slideIndex = 0};
    setTimeout(slideShow, 3000);
}
slideShow(slideIndex = 0)
// function currentSlide(n) {
//     slideShow(slideIndex = n);
// }