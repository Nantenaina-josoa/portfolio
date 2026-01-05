// navigation
let bars = document.getElementById('bars');
let bars2 = document.getElementById('bars2');
let menu = document.getElementById('menu');

bars.addEventListener('click', () => {
    menu.classList.remove('closing');
    menu.classList.add('active');

    bars.classList.add('active');
    bars2.classList.add('active');
});

bars2.addEventListener('click', () => {
    menu.classList.add('closing');

    bars.classList.remove('active');
    bars2.classList.remove('active');

    setTimeout(() => {
        menu.classList.remove('active');
        menu.classList.remove('closing');
    }, 500);
}); 




new Typed("#citation-typed", {
    strings: ["Si tu pense que l'education coûte cher, essaie l'ignorance.", "Le succès des autres me gêne mais beaucoup moins que s'il était mérité.", "L’échec n’est qu’une opportunité pour recommencer la même chose plus intelligemment.", "Rien n'est impossible, car les rêves d'hier sont les espoirs d'aujourd'hui et peuvent devenir la réalité de demain.", "Par trois méthodes, nous pouvons apprendre la sagesse : par la réflexion, par l'imitation et par l'expérience."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 5000,
    startDelay: 5000,
    loop: true,
    showCursor: false,
});






// text writer animation
new Typed("#typed", {
    strings: ["Développeur web", "Concepteur Ui/Ux", "Développeur mobile", "graphiste", "Stratège Digital"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1500,
    startDelay: 1500,
    loop: true,
    showCursor: false,
});

new Typed(".span-accueil", {
    strings: ["RANDRIAMIHARISOA", "Nantenaina Josoa"],
    typeSpeed: 150,
    backSpeed: 100,
    backDelay: 2000,
    startDelay: 1000,
    loop: false,
    showCursor: false,
});







// glightbox
let lightbox = GLightbox({
  selector: '.glightbox', 
  loop: true, 
  touchNavigation: true,
  keyboardNavigation: true,
  closeButton: true,
  closeButtonInside: false,
  closeOnOutsideClick: true,
  // startAt: 0,
  slideEffect: 'slide',
  openEffect: 'zoom',
  closeEffect: 'fade', 
  width: '100%', 
  height: '100%', 
}); 






// swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: { 
    delay: 5000, disableOnInteraction: false 
  },
  
  speed: 1000,
  slidesPerView: 1,
  effect: 'slide',
  grabCursor: true,
  
  pagination: { 
    el: '.swiper-pagination', 
    clickable: true 
  },
  
  navigation: { 
    nextEl: '.swiper-button-next', 
    prevEl: '.swiper-button-prev' 
  },
 
});



// appelle
document.getElementById("appeler").addEventListener("click", () => {
  window.location.href = "tel:+261339683207";
});



var btn_homes = document.querySelector('.btn-homes');
btn_homes.addEventListener('click', function(){
  window.location.href= '../404.html';
})



// splash animation
var sectionAll = document.getElementById('sectionAll');
var splash = document.getElementById('splash');

setTimeout(() => {
    splash.style.opacity = '0';
    splash.style.visibility = 'hidden';

    sectionAll.style.display = 'block';
    
    setTimeout(() => {
        sectionAll.style.opacity = '1';
    }, 50);

}, 2000);
