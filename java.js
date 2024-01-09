//----------- CAMBIO CLASSE AL CLICK --------------
let item = document.querySelector('.menu');    //variabili
let panel = document.querySelector('.panel');

item.addEventListener("click", function() {   //al click di item
panel.classList.toggle('menu-active');  //panel avrà la classe active
});

//------------- CAMBIO CLASSE ALLO SCROLL -------------
window.addEventListener('scroll', function() {
    if(window.scrollY > 200) {
        document.body.classList.add('scroll-down')
    } else {
        this.document.body.classList.remove('scroll-down')
    }
} )