"use strict";
const totalSlides = document.querySelectorAll('.slider--item').length;
const sliderArea = document.querySelector('.slider');
const sliderControls = document.querySelector('.slider-controls');
let currentSlide = 0;
sliderArea.style.width = `calc(100vw * ${totalSlides})`;
sliderControls.style.height = `${sliderArea.clientHeight}px`;
function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}
function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}
function updateMargin() {
    const sliderItemWidth = document.querySelector('.slider--item');
    let newMargin = (currentSlide * sliderItemWidth.clientWidth);
    sliderArea.style.marginLeft = `-${newMargin}px`;
}
setInterval(goNext, 4000);
