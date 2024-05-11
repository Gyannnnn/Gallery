let menu = document.getElementById('menu-icon');
let ul = document.querySelector('ul')
let links = document.getElementById('a')


menu.addEventListener('click',(e)=>{
    ul.classList.toggle('appearance');
    let menuChild = menu.firstElementChild;
    if(ul.classList.contains('appearance')){
        menuChild.classList.replace('fa-bars','fa-xmark')
    }
    else{
        menuChild.classList.replace('fa-xmark','fa-bars')
    }
})


let loader = document.getElementById('preloader');
window.addEventListener('load',()=>{
    loader.style.display = 'none';
})

