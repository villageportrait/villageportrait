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
        if (!img || img.src.includes('slide')) return; // Skip if already set

        const canvas = document.createElement('canvas');
        canvas.width = 640;
        canvas.height = 800;
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
    if (!slides.length) {
        console.error('No slides found');
        return;
    }

    slideIndex = n > slides.length ? 1 : n < 1 ? slides.length : n;
    const currentIndex = slideIndex - 1;
    const prevIndex = (slideIndex - 2 + slides.length) % slides.length;
    const nextIndex = slideIndex % slides.length;

    const isMobile = window.innerWidth <= 768;

    [...slides].forEach((slide, i) => {
        if (isMobile) {
            // Mobile: Show only current slide
            slide.style.position = 'static';
            slide.style.width = '100%';
            slide.style.height = 'auto';
            slide.style.transform = 'none';
            slide.style.transition = 'none';
            slide.style.display = i === currentIndex ? 'block' : 'none';
        } else {
            // Desktop: Sliding with centered current slide
            slide.style.position = 'absolute';
            slide.style.top = '0';
            slide.style.width = '640px';
            slide.style.height = '800px';
            slide.style.transition = 'transform 0.5s ease';
            slide.style.display = 'block'; // Always visible, positioned

            if (i === currentIndex) {
                slide.style.transform = 'translateX(380px)'; // Centered in 1400px
                slide.style.zIndex = '2';
            } else if (i === prevIndex) {
                slide.style.transform = 'translateX(-380px)'; // Half visible, 60px gap
                slide.style.zIndex = '1';
            } else if (i === nextIndex) {
                slide.style.transform = 'translateX(1140px)'; // Half visible, 60px gap
                slide.style.zIndex = '1';
            } else {
                slide.style.transform = 'translateX(218.75%)'; // Off-screen
                slide.style.zIndex = '0';
            }
        }
    });
}
