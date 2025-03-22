// JavaScript for the image slideshow
let slideIndex = 1;

// Initialize the slideshow when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Create placeholder images for the slideshow
    createPlaceholderImages();
    
    // Show the initial slide setup
    showSlides(slideIndex);
});

// Function to create placeholder images for the slideshow
function createPlaceholderImages() {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach((slide, index) => {
        const img = slide.querySelector('img');
        if (img.src.includes('slide')) {
            const canvas = document.createElement('canvas');
            canvas.width = 800;
            canvas.height = 600;
            const ctx = canvas.getContext('2d');
            
            const colors = ['#444', '#555', '#666'];
            ctx.fillStyle = colors[index % colors.length];
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#fff';
            ctx.font = '30px Times New Roman';
            ctx.textAlign = 'center';
            ctx.fillText(`Portrait Slide ${index + 1}`, canvas.width / 2, canvas.height / 2);
            
            img.src = canvas.toDataURL('image/png');
        }
    });
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show slides with previous and next partially visible
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const totalSlides = slides.length;
    
    // Loop back to the first slide if past the end
    if (n > totalSlides) {
        slideIndex = 1;
    }
    // Loop to the last slide if before the first
    if (n < 1) {
        slideIndex = totalSlides;
    }
    
    // Reset all slides' styles
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.opacity = "0"; // Fade out by default
        slides[i].style.transform = "translateX(100%)"; // Move off-screen to the right
        slides[i].style.position = "absolute"; // Stack them
        slides[i].style.transition = "opacity 0.5s ease, transform 0.5s ease"; // Smooth transition
    }
    
    // Calculate indices for previous, current, and next slides
    const currentIndex = slideIndex - 1;
    const prevIndex = (slideIndex - 2 + totalSlides) % totalSlides; // Wrap around
    const nextIndex = slideIndex % totalSlides; // Wrap around
    
    // Position and show the previous slide (partially visible on the left)
    slides[prevIndex].style.opacity = "0.5"; // Slightly faded
    slides[prevIndex].style.transform = "translateX(-50%)"; // Half off-screen to the left
    
    // Position and show the current slide (fully visible in the center)
    slides[currentIndex].style.opacity = "1";
    slides[currentIndex].style.transform = "translateX(0)";
    
    // Position and show the next slide (partially visible on the right)
    slides[nextIndex].style.opacity = "0.5"; // Slightly faded
    slides[nextIndex].style.transform = "translateX(50%)"; // Half off-screen to the right
}
