
// smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});

});
});


// navbar shadow on scroll

window.addEventListener("scroll", function(){

let nav = document.querySelector("nav");

if(window.scrollY > 50){
nav.style.boxShadow = "0 4px 10px rgba(0,0,0,0.4)";
}
else{
nav.style.boxShadow = "none";
}

});
