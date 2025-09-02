// Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Dark mode toggle
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Slider
let slideIndex = 0;
let slides = document.querySelectorAll(".slides");
let dotsContainer = document.querySelector(".dots");

slides.forEach((_, i) => {
  let dot = document.createElement("span");
  dot.addEventListener("click", () => showSlides(slideIndex = i));
  dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll(".dots span");

function showSlides(n) {
  slides.forEach((slide, i) => {
    slide.style.display = "none";
    dots[i].classList.remove("active");
  });
  slides[n].style.display = "block";
  dots[n].classList.add("active");
}

function autoSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlides(slideIndex);
}

showSlides(slideIndex);
let slideTimer = setInterval(autoSlide, 3000); // ⬅️ changed from 3000ms to 2000ms

// Next/Prev
document.querySelector(".next").addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlides(slideIndex);
});
document.querySelector(".prev").addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlides(slideIndex);
});

// Pause on hover
document.querySelector(".hero-slider").addEventListener("mouseenter", () => clearInterval(slideTimer));
document.querySelector(".hero-slider").addEventListener("mouseleave", () => slideTimer = setInterval(autoSlide, 2000));


// Next/Prev
document.querySelector(".next").addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlides(slideIndex);
});
document.querySelector(".prev").addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlides(slideIndex);
});

// Pause on hover
document.querySelector(".hero-slider").addEventListener("mouseenter", () => clearInterval(slideTimer));
document.querySelector(".hero-slider").addEventListener("mouseleave", () => slideTimer = setInterval(autoSlide, 3000));
