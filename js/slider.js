// Quick Vision Hero Slider

const slides = [

"images/banner1.jpg",

"images/banner2.jpg"

];

let current = 0;

function changeSlide(){

const hero = document.querySelector(".hero");

if(hero){

hero.style.backgroundImage =

`url(${slides[current]})`;

hero.style.backgroundSize = "cover";

hero.style.backgroundPosition = "center";

hero.style.transition = "all 1s ease";

current++;

if(current >= slides.length){

current = 0;

}

}

}

setInterval(changeSlide,4000);

changeSlide();
