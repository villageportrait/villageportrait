document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.profile-container, .column, .slideshow-container, .contact-info, .social-links');
    
    animatedElements.forEach(el => {
        el.classList.add('reveal-hidden');
    });
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    function handleScrollAnimation() {
        animatedElements.forEach(el => {
            if (isInViewport(el)) {
                // Remove hidden and add visible only once
                if (el.classList.contains('reveal-hidden')) {
                    el.classList.remove('reveal-hidden');
                    el.classList.add('reveal-visible');
                }
            }
        });
    }
    
    // Run on load and on scroll
    handleScrollAnimation();
    window.addEventListener('scroll', handleScrollAnimation);
});
