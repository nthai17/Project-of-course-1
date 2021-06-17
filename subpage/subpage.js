let sortParent = document.getElementById('sortparent');
let sortChild = document.getElementById('sortchild');
sortParent.addEventListener('click', function () {
    if (sortChild.style.display == 'none'){
        sortChild.style.display = 'block';
    } else {
        sortChild.style.display = 'none';
    };
})
// let sortNotclose = document.getElementsByClassName('click-not-close');
// console.log(sortNotclose);
// window.addEventListener('click', function (e) {
//     if(e.target != sortNotclose) {
//         sortChild.style.display = "none"
//     }
// })