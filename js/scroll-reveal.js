// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.profile-container, .column, .slideshow-container, .contact-info, .social-links');

    // Add initial hidden state
    animatedElements.forEach(el => el.classList.add('reveal-hidden'));

    // Check if element is in viewport (80% threshold)
    const isInViewport = el => {
        const rect = el.getBoundingClientRect();
        return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 && rect.bottom >= 0;
    };

    // Handle scroll animation
    const handleScrollAnimation = () => {
        animatedElements.forEach(el => {
            if (isInViewport(el) && el.classList.contains('reveal-hidden')) {
                el.classList.remove('reveal-hidden');
                el.classList.add('reveal-visible');
            }
        });
    };

    // Run on load and on scroll
    handleScrollAnimation();
    window.addEventListener('scroll', handleScrollAnimation);
});
