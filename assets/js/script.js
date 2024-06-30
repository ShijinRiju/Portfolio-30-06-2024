// Swiper JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Navbar onscroll
window.addEventListener("scroll",function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY > 0);
});

// Navbar active toggle on scroll
window.addEventListener("scroll",() => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector(".nav-links a[href*=" + id + "]").classList.add("active");
    }
    else{
      document.querySelector(".nav-links a[href*=" + id + "]").classList.remove("active");
    }
  });
});

// Scroll Reveal
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('header', {delay: 200});
ScrollReveal().reveal('.hero .top .hero-content', {delay: 200,origin:'left'});
ScrollReveal().reveal('.hero .top .hero-image', {delay: 200,origin:'right'})
ScrollReveal().reveal('.hero .bottom', {delay: 200,origin:'bottom'})
ScrollReveal().reveal('.title-1', {delay: 200,origin:'bottom'})
ScrollReveal().reveal('.title-2', {delay: 200,origin:'bottom'})
ScrollReveal().reveal('.about-content .about-image', {delay: 200,origin:'left'})
ScrollReveal().reveal('.about-content .about-info', {delay: 200,origin:'right'})
ScrollReveal().reveal('.skill-cards .skill-card', {delay: 200,origin:'bottom',interval:200})
ScrollReveal().reveal('.input-group input, .textarea, .btn', {delay: 200,origin:'bottom',interval:200})

// Mobile nav
let menu = document.querySelector("#menu");
let navlinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navlinks.classList.toggle("open");
});

window.addEventListener("scroll", () => {
    if (navlinks.classList.contains("open")) {
        menu.classList.remove("bx-x");
        navlinks.classList.remove("open");
    }
});

// scrollToTop Function
const scrollTop = document.querySelector(".scrollTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollTop.classList.add("active");
    } else {
        scrollTop.classList.remove("active");
    }
});