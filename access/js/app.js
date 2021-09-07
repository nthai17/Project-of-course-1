

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
            items:2,
            dots: true,
            margin:12
        },
        739:{
            items:2
        },
        1023:{
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
            items:1,
            dots: true
        },
        739:{
            items:1
        },
        1023:{
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
            items:1,
            dots: true
        },
        739:{
            items:2
        },
        1024:{
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
            items:1,
            dots: true
        },
        739:{
            items:2
        },
        1024:{
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
            items:1,
            dots: true
        },
        739:{
            items:2
        },
        1024:{
            items:3
        }
    }
})

});

let search = document.getElementById('header__hasextend')
let searchClass = document.getElementsByClassName('xxx')
let extend = document.getElementById("extend-client");
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
let isLanguage = document.getElementById('language');
let isOption = document.querySelector('.header__navbar-language');

window.onclick = function (e) {
    if (e.target.className.indexOf("yyy") === -1) {
        isOption.style.display = 'none';
    }
    if (e.target.className.indexOf("xxx") === -1) {
        extend.style.display = 'none';
    }
    if (e.target == resBack || e.target == logBack || e.target == overlay) {
        myModal.style.display = "none"
    }
    if (e.target.className.indexOf('yyy') === -1 && navBar.className.indexOf('m-0') === -1){
        navBar.classList.add('m-0');
    }
}

search.onclick = function () {
    if(extend.style.display === 'none') {
        extend.style.display = 'block';
    } else {
        extend.style.display = 'none';
    }
}


isLanguage.onclick = function () {
    if(isOption.style.display === 'none') {
        isOption.style.display = 'flex';
    } else {
        isOption.style.display = 'none';
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

var navMobileBtn = document.querySelector('.mobile__nav-btn')
var navBar = document.querySelector('.header__navbar')
navMobileBtn.addEventListener('click', function(event){
    event.stopPropagation()
    if (navBar.className.indexOf('m-0') !== -1) {
        navBar.classList.remove('m-0')
    } else {
        navBar.classList.add('m-0');
        isOption.style.display = 'none';
    }
})


$('.mobile__famouscitys .owl-carousel').owlCarousel({
    loop:false,
    margin:8,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:4,
        },
        739:{
            items:0
        },
        1023:{
            items:0
        }
    }
})
var searchPageToScreenMobile = document.querySelector('.mobile__backtoscreen-btn');
var mobileSearchPage = document.querySelector('.mobile__search-page');
var openMobileSearchPage = document.querySelector('.mobile__search-btn');
    openMobileSearchPage.addEventListener('click', function(){
        mobileSearchPage.classList.add('m-block');
    })

    searchPageToScreenMobile.addEventListener('click', function(){
        mobileSearchPage.classList.remove('m-block');
    })
// $('.mobile__search-btn').click(function(){
//     $('.mobile__search-page').show(100);
// })
// $('.mobile__backtoscreen-btn').click(function(){
//     $('.mobile__search-page').hide(300)
// })


