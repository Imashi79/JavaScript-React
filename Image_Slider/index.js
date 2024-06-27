const slides = document.querySelectorAll(".slides img");
let slideIndex =0;
let intervalid = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalid = setInterval(nextslide,5000);
    }
}
function showSlides(index){
    if(index >= slides.length){
        slideIndex = 0 ;
    }
    else if (index < 0){
        slideIndex = slides.length -1 ;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function preslide(){
    slideIndex-- ;
    showSlides(slideIndex);
}
function nextslide(){
    slideIndex++ ;
    showSlides(slideIndex);
}