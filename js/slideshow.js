// JavaScript for the image slideshow
let slideIndex = 1;

// Initialize the slideshow when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Create placeholder images for the slideshow
    createPlaceholderImages();
    
    // Show the first slide
    showSlides(slideIndex);
});

// Function to create placeholder images for the slideshow
function createPlaceholderImages() {
    const slides = document.querySelectorAll('.slide');
    
    // Check if images already exist
    slides.forEach((slide, index) => {
        const img = slide.querySelector('img');
        if (img.src.includes('slide')) {
            // Create a canvas element to generate a placeholder image
            const canvas = document.createElement('canvas');
            canvas.width = 800;
            canvas.height = 600;
            const ctx = canvas.getContext('2d');
            
            // Set background color based on slide index
            const colors = ['#444', '#555', '#666'];
            ctx.fillStyle = colors[index % colors.length];
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Add text to indicate it's a placeholder
            ctx.fillStyle = '#fff';
            ctx.font = '30px Times New Roman';
            ctx.textAlign = 'center';
            ctx.fillText(`Portrait Slide ${index + 1}`, canvas.width / 2, canvas.height / 2);
            
            // Convert canvas to data URL and set as image source
            img.src = canvas.toDataURL('image/png');
        }
    });
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show a specific slide
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    
    // Loop back to the first slide if we've gone past the end
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    // Loop to the last slide if we've gone before the first
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
}
