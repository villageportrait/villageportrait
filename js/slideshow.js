// JavaScript for Image Slideshow
let slideIndex = 1;

document.addEventListener('DOMContentLoaded', () => {
    createPlaceholderImages();
    showSlides(slideIndex);
});

// Create placeholder images for slides
function createPlaceholderImages() {
    const slides = document.querySelectorAll('.slide');
    const colors = ['#444', '#555', '#666'];

    slides.forEach((slide, index) => {
        const img = slide.querySelector('img');
        if (!img.src.includes('slide')) return;

        const canvas = document.createElement('canvas');
        canvas.width = 800;
        canvas.height = 600;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = colors[index % colors.length];
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#fff';
        ctx.font = '30px Times New Roman';
        ctx.textAlign = 'center';
        ctx.fillText(`Portrait Slide ${index + 1}`, canvas.width / 2, canvas.height / 2);

        img.src = canvas.toDataURL('image/png');
    });
}

// Next/previous controls
const plusSlides = n => showSlides(slideIndex += n);

// Show specific slide
function showSlides(n) {
    const slides = document.getElementsByClassName('slide');
    if (!slides.length) return;

    slideIndex = n > slides.length ? 1 : n < 1 ? slides.length : n;

    [...slides].forEach(slide => slide.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
}
