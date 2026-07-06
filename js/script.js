// ====================================
// Quick Vision Broadband
// script.js
// ====================================

console.log("Quick Vision Broadband Loaded");

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

const target = document.querySelector(
this.getAttribute('href')
);

if(target){

target.scrollIntoView({

behavior:'smooth'

});

}

});

});


// Sticky Navbar

window.addEventListener("scroll",()=>{

const nav = document.querySelector(".navbar");

if(nav){

if(window.scrollY > 50){

nav.classList.add("sticky");

}

else{

nav.classList.remove("sticky");

}

}

});


// Back To Top Button

const topBtn = document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}


// Animation On Scroll

const elements = document.querySelectorAll(

".fadeIn,.slideLeft,.slideRight,.zoomIn"

);

window.addEventListener("scroll",()=>{

elements.forEach(el=>{

const pos = el.getBoundingClientRect().top;

const screen = window.innerHeight;

if(pos < screen - 100){

el.classList.add("show");

}

});

});




// Recharge Button

const rechargeBtn =

document.querySelector(".recharge-btn");

if(rechargeBtn){

rechargeBtn.addEventListener(

"click",

()=>{

alert(

"Recharge Service Coming Soon"

);

}

);

}


// Customer Login

const loginBtn =

document.querySelector(".login-btn");

if(loginBtn){

loginBtn.onclick=()=>{

alert(

"Customer Portal Coming Soon"

);

};

}



// WhatsApp Floating Button

const whatsapp =

document.querySelector(".whatsapp");

if(whatsapp){

whatsapp.onclick=()=>{

window.open(

"https://wa.me/919093595299",

"_blank"

);

};

}


console.log(

"Quick Vision Premium Loaded"

);
