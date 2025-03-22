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

// Show slides with previous/next partially visible and gaps
function showSlides(n) {
    const slides = document.getElementsByClassName('slide');
    if (!slides.length) return;

    slideIndex = n > slides.length ? 1 : n < 1 ? slides.length : n;
    const currentIndex = slideIndex - 1;
    const prevIndex = (slideIndex - 2 + slides.length) % slides.length;
    const nextIndex = slideIndex % slides.length;

    // Position all slides with gaps
    [...slides].forEach((slide, i) => {
        slide.style.position = 'absolute';
        slide.style.top = '0';
        slide.style.width = '90%'; // Match CSS
        slide.style.transition = 'transform 0.5s ease';
        slide.style.display = 'block';

        if (i === currentIndex) {
            slide.style.transform = 'translateX(5%)'; // Center with slight offset
            slide.style.zIndex = '2';
        } else if (i === prevIndex) {
            slide.style.transform = 'translateX(-50%)'; // Half visible on left with gap
            slide.style.zIndex = '1';
        } else if (i === nextIndex) {
            slide.style.transform = 'translateX(60%)'; // Half visible on right with gap
            slide.style.zIndex = '1';
        } else {
            slide.style.transform = 'translateX(111.11%)'; // Fully off-screen
            slide.style.zIndex = '0';
        }
    });
}
