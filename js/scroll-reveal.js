// Optimized Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    // Select elements for animation
    const animatedElements = document.querySelectorAll('.profile-container, .column');
    // Slideshow animation references removed
    const contactInfo = document.querySelector('.contact-info');
    const submissionInfo = document.querySelector('.submission-info');
    const contactDetails = document.querySelector('.contact-details');
    const contactItems = document.querySelectorAll('.contact-item');
    const socialLinks = document.querySelector('.social-links');
    const socialIcons = document.querySelectorAll('.social-icon');

    // Add initial hidden state to elements
    animatedElements.forEach(el => el.classList.add('reveal-hidden'));
    
    // Slideshow animation code removed
    
    if (contactInfo) contactInfo.classList.add('reveal-hidden');
    if (submissionInfo) submissionInfo.classList.add('reveal-hidden');
    if (contactDetails) contactDetails.classList.add('reveal-hidden');
    
    if (socialLinks) socialLinks.classList.add('reveal-hidden');
    
    // Check if element is in viewport (with threshold)
    const isInViewport = (el, threshold = 0.2) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        // Element is considered in viewport when its top edge is within the threshold percentage from the bottom
        return rect.top <= windowHeight * (1 - threshold) && rect.bottom >= 0;
    };

    // Handle scroll animation with staggered reveal
    const handleScrollAnimation = () => {
        // Handle regular animated elements
        animatedElements.forEach(el => {
            if (isInViewport(el) && el.classList.contains('reveal-hidden')) {
                el.classList.remove('reveal-hidden');
                el.classList.add('reveal-visible');
            }
        });
        
        // Slideshow animation code removed
        
        // Handle contact section with staggered animations
        if (contactInfo && isInViewport(contactInfo, 0.3) && contactInfo.classList.contains('reveal-hidden')) {
            contactInfo.classList.remove('reveal-hidden');
            contactInfo.classList.add('reveal-visible');
            
            // Animate submission info
            if (submissionInfo && submissionInfo.classList.contains('reveal-hidden')) {
                submissionInfo.classList.remove('reveal-hidden');
                submissionInfo.classList.add('reveal-visible');
            }
            
            // Animate contact details
            if (contactDetails && contactDetails.classList.contains('reveal-hidden')) {
                contactDetails.classList.remove('reveal-hidden');
                contactDetails.classList.add('reveal-visible');
                
                // Animate individual contact items with staggered delay
                contactItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate');
                    }, 150 * index); // Stagger each item by 150ms
                });
            }
        }
        
        // Handle social links
        if (socialLinks && isInViewport(socialLinks) && socialLinks.classList.contains('reveal-hidden')) {
            socialLinks.classList.remove('reveal-hidden');
            socialLinks.classList.add('reveal-visible');
            
            // Animate individual social icons with staggered delay
            socialIcons.forEach((icon, index) => {
                setTimeout(() => {
                    icon.classList.add('animate');
                }, 100 * index); // Stagger each icon by 100ms
            });
        }
    };

    // Run on load and on scroll with throttling for performance
    let scrollTimeout;
    const throttleScroll = () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                scrollTimeout = null;
                handleScrollAnimation();
            }, 20); // 20ms throttle for smooth performance
        }
    };

    // Initial check on page load
    handleScrollAnimation();
    
    // Add scroll event listener with throttling
    window.addEventListener('scroll', throttleScroll);
    
    // Also check on resize
    window.addEventListener('resize', throttleScroll);
    
    // Force check after images load to ensure animations trigger properly
    window.addEventListener('load', handleScrollAnimation);
});
