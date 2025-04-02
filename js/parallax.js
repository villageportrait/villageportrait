// Parallax effect for header section
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    
    // Set initial position
    header.style.position = 'relative';
    header.style.zIndex = '1';
    header.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
    
    // Function to handle parallax effect on scroll
    function handleParallax() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Calculate how far down the page we've scrolled as a percentage
        // We'll use this to determine the opacity and transform
        const scrollPercentage = Math.min(scrollPosition / (windowHeight * 0.7), 1);
        
        // Apply transform and opacity based on scroll position
        if (scrollPosition > 0) {
            // Move the header up and fade it out as we scroll down
            header.style.transform = `translateY(-${scrollPercentage * 50}px)`;
            header.style.opacity = 1 - scrollPercentage;
            
            // When fully scrolled past threshold, hide the header completely
            if (scrollPercentage >= 1) {
                header.style.opacity = '0';
                header.style.pointerEvents = 'none'; // Disable interactions when hidden
            } else {
                header.style.pointerEvents = 'auto';
            }
        } else {
            // Reset when at the top
            header.style.transform = 'translateY(0)';
            header.style.opacity = '1';
            header.style.pointerEvents = 'auto';
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleParallax);
    
    // Run once on load to set initial state
    handleParallax();
});
