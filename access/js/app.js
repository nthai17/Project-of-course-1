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

let search = document.getElementById('header__hasextend')
let searchClass = document.getElementsByClassName('xxx')
let extend = document.getElementById("extend-client");

// window.onclick = function (e) {
//     if (e.target != search) {
//         extend.style.display = 'none';
//     }
// }


// window.onclick = function (e) {
//     if (e.target = searchClass) {
//         extend.style.display = 'block';
//     }
// }



let plusAdult = document.getElementById('plusAdult');
let minusAdult = document.getElementById('minusAdult');
let plusChild = document.getElementById('plusChild');
let minusChild = document.getElementById('minusChild');
let plusInfant = document.getElementById('plusInfant');
let minusInfant = document.getElementById('minusInfant');
let inputAdult = document.getElementById('inputAdult').value;
let inputChild = document.getElementById('inputChild').value;
let inputInfant = document.getElementById('inputInfant').value;
let clientNumber = document.getElementById('client').innerHTML;
let delOption = document.getElementById('del-option');
let applyOption = document.getElementById('apply-option');

search.onclick = function () {
    if(extend.style.display === 'none') {
        extend.style.display = 'block';
    } else {
        extend.style.display = 'none';
    }
}

let isLanguage = document.getElementById('language');
let isOption = document.getElementsByClassName('header__navbar-language')[0];
isLanguage.onclick = function () {
    if(isOption.style.display === 'none') {
        isOption.style.display = 'flex';
    } else {
        isOption.style.display = 'none';
    }
}
window.onclick = function (e) {
    if (e.target.className.indexOf("yyy") === -1) {
        isOption.style.display = 'none';
    }
    if (e.target.className.indexOf("xxx") === -1) {
        extend.style.display = 'none';
    }
}
plusAdult.onclick = function (){
    if(!isNaN(inputAdult)){
        inputAdult++;
        document.getElementById('inputAdult').value = inputAdult;
        return false    
    }
}
minusAdult.onclick = function (){
    if(!isNaN(inputAdult) && inputAdult > 0){
        inputAdult--;
        document.getElementById('inputAdult').value = inputAdult;
        return false    
    }
}

plusInfant.onclick = function (){
    if(!isNaN(inputInfant)){
        inputInfant++;
        document.getElementById('inputInfant').value = inputInfant;
        return false    
    }
}
minusInfant.onclick = function (){
    if(!isNaN(inputInfant) && inputInfant > 0){
        inputInfant--;
        document.getElementById('inputInfant').value = inputInfant;
        return false    
    }
}

plusChild.onclick = function (){
    if(!isNaN(inputChild)){
        inputChild++;
        document.getElementById('inputChild').value = inputChild;
        return false    
    }
}
minusChild.onclick = function (){
    if(!isNaN(inputChild) && inputChild > 0){
        inputChild--;
        document.getElementById('inputChild').value = inputChild;
        return false    
    }
}
delOption.onclick = function () {
    document.getElementById('inputAdult').value = 0;
    document.getElementById('inputChild').value = 0;
    document.getElementById('inputInfant').value = 0;
}
applyOption.onclick = function () {
    extend.style.display = 'none';
}
let myModal = document.getElementById('mymodal');
let overlay = document.getElementById('overlay');
let resForm = document.getElementById('resform');
let logForm = document.getElementById('logform');
let resBtn = document.getElementById('resbtn');
let logBtn = document.getElementById('logbtn');
let resBtn2 = document.getElementById('resbtn2');
let logBtn2 = document.getElementById('logbtn2');
let resBack = document.getElementById('resback')
let logBack = document.getElementById('logback')
let switchTolog = document.getElementById('switch-to-log')
let switchTores = document.getElementById('switch-to-res')

window.addEventListener('click', function (e){
    if (e.target == resBack || e.target == logBack || e.target == overlay) {
        myModal.style.display = "none"
    }
})

resBtn.addEventListener('click', function () {
    myModal.style.display = "flex";
    resForm.style.display = "block";
    logForm.style.display = "none";
})
logBtn.addEventListener('click', function () {
    myModal.style.display = "flex";
    logForm.style.display = "block";
    resForm.style.display = "none"
})
switchTolog.addEventListener('click', function(){
    logForm.style.display = "block";
    resForm.style.display = "none";
})
switchTores.addEventListener('click', function(){
    resForm.style.display = "block";
    logForm.style.display = "none";
})
resBtn2.addEventListener('click', function () {
    myModal.style.display = "flex";
    resForm.style.display = "block";
    logForm.style.display = "none";
})
logBtn2.addEventListener('click', function () {
    myModal.style.display = "flex";
    logForm.style.display = "block";
    resForm.style.display = "none"
})
let fm = document.getElementsByClassName('auth-form__container');
for (var i = 0; i < fm.length; i++) {
    fm[i].addEventListener('submit', function (){
        myModal.style.display = "none";
    })
}