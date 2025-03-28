// FAQ Section Functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqBar = document.getElementById('faqBar');
    const faqSection = document.getElementById('faqSection');
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Toggle FAQ section expansion when clicking the bar
    if (faqBar) {
        faqBar.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            faqSection.classList.toggle('expanded');
            
            // Scroll to the FAQ section when expanded
            if (faqSection.classList.contains('expanded')) {
                setTimeout(() => {
                    faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    }
    
    // Toggle individual FAQ items
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const symbol = item.querySelector('.faq-symbol');
        
        if (question) {
            question.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event bubbling
                
                // Close other open items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        const otherSymbol = otherItem.querySelector('.faq-symbol');
                        if (otherSymbol) otherSymbol.textContent = '+';
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
                
                // Toggle plus/minus symbol
                if (symbol) {
                    symbol.textContent = item.classList.contains('active') ? '-' : '+';
                }
            });
        }
    });
    
    // Close FAQ section when clicking outside, but not when clicking inside
    document.addEventListener('click', (event) => {
        // Check if the click is inside the FAQ section or the info link
        const isClickInsideFAQ = event.target.closest('.faq-section') || 
                                event.target.closest('#faqBar') ||
                                event.target.id === 'faqBar';
        
        if (!isClickInsideFAQ && faqSection && faqSection.classList.contains('expanded')) {
            faqSection.classList.remove('expanded');
            
            // Reset all symbols to plus when closing the section
            faqItems.forEach(item => {
                const symbol = item.querySelector('.faq-symbol');
                if (symbol) symbol.textContent = '+';
                item.classList.remove('active');
            });
        }
    }, { passive: true }); // Use passive event listener for better performance
});
