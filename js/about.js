document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".main-header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
let currentSlide = 1;
const totalSlides = 5;

function showSlide(slideNumber) {
  document.getElementById(`btn-${slideNumber}`).checked = true;
}

function prevSlide() {
  currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
  showSlide(currentSlide);
}

