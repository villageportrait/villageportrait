// JavaScript for Image Slideshow
let slideIndex = 1;
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Add lazy loading to images
    const slideImages = document.querySelectorAll('.slide img');
    slideImages.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
    
    // Initialize slideshow
    showSlides(slideIndex);
    
    // Add window resize handler to ensure proper centering
    window.addEventListener('resize', () => {
        showSlides(slideIndex);
    });

    // Add touch event listeners for mobile swipe functionality
    const slideContainer = document.querySelector('.slideshow-container');
    if (slideContainer) {
        // Touch start event
        slideContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, {passive: true});

        // Touch end event
        slideContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, {passive: true});
    }
});

// Handle swipe direction
function handleSwipe() {
    const swipeThreshold = 50; // Minimum distance required for a swipe
    
    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - go to next slide
        plusSlides(1);
    } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - go to previous slide
        plusSlides(-1);
    }
}

// Next/previous controls
const plusSlides = n => showSlides(slideIndex += n);

// Show specific slide
function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    const slideWrapper = document.querySelector('.slide-wrapper');
    
    if (!slides.length || !slideWrapper) return;

    // Handle wrapping of slides
    slideIndex = n > slides.length ? 1 : n < 1 ? slides.length : n;
    
    // Calculate the transform position to center the current slide
    const slideWidth = slides[0].offsetWidth;
    const slideMargin = 5; // Margin from CSS
    const slideGap = 10; // Gap from CSS
    const totalSlideWidth = slideWidth + (slideMargin * 2) + slideGap;
    
    // Calculate the transform position
    // We need to adjust the transform to account for the left: 50% and translateX(-50%) in CSS
    const transformValue = -((slideIndex - 1) * totalSlideWidth);
    
    // Apply the transform to move the wrapper
    slideWrapper.style.transform = `translateX(${transformValue}px)`;
    
    // Add active class to current slide and remove from others
    slides.forEach((slide, index) => {
        if (index === slideIndex - 1) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}
