let slideIndex = 1;
showSlides(slideIndex);

function showSlides(num) {
    const slides = document.getElementsByClassName("item");

    if (num > slides.length) {
        slideIndex = 1;
    }
    if (num < 1) {
        slideIndex = slides.length;
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
