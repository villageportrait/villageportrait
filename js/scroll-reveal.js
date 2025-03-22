// Scroll reveal animation script
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements that should be animated
    const animatedElements = document.querySelectorAll('.profile-container, .column, .slideshow-container, .contact-info, .social-links');
    
    // Add reveal-hidden class to all elements initially
    animatedElements.forEach(el => {
        el.classList.add('reveal-hidden');
    });
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll animation
    function handleScrollAnimation() {
        animatedElements.forEach(el => {
            if (isInViewport(el) && el.classList.contains('reveal-hidden')) {
                el.classList.remove('reveal-hidden');
                el.classList.add('reveal-visible');
            }
        });
    }
    
    // Run once on load to check for elements already in viewport
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
});
