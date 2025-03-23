// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.profile-container, .column, .slideshow-container, .contact-info');
    const socialLinks = document.querySelector('.social-links');

    // Add initial hidden state to regular elements
    animatedElements.forEach(el => el.classList.add('reveal-hidden'));
    
    // Special handling for social links to prevent disappearing
    if (socialLinks) {
        socialLinks.classList.add('reveal-hidden');
        
        // Force social links to be visible after animation
        setTimeout(() => {
            if (socialLinks.classList.contains('reveal-hidden')) {
                socialLinks.classList.remove('reveal-hidden');
                socialLinks.classList.add('reveal-visible');
            }
        }, 2000); // Ensure visibility after 2 seconds regardless of scroll
    }

    // Check if element is in viewport (80% threshold)
    const isInViewport = el => {
        const rect = el.getBoundingClientRect();
        return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 && rect.bottom >= 0;
    };

    // Handle scroll animation
    const handleScrollAnimation = () => {
        // Handle regular animated elements
        animatedElements.forEach(el => {
            if (isInViewport(el) && el.classList.contains('reveal-hidden')) {
                el.classList.remove('reveal-hidden');
                el.classList.add('reveal-visible');
            }
        });
        
        // Special handling for social links
        if (socialLinks && isInViewport(socialLinks) && socialLinks.classList.contains('reveal-hidden')) {
            socialLinks.classList.remove('reveal-hidden');
            socialLinks.classList.add('reveal-visible');
        }
    };

    // Run on load and on scroll
    handleScrollAnimation();
    window.addEventListener('scroll', handleScrollAnimation);
});
