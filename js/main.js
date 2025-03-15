// Main JavaScript for Village Portrait Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize slideshow
    initSlideshow();
    
    // Initialize portfolio filtering
    initPortfolioFilter();
    
    // Initialize testimonials slider
    initTestimonialsSlider();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize scroll effects
    initScrollEffects();
});

// Slideshow functionality
function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    
    // Set first slide as active
    slides[0].classList.add('active');
    
    // Change slide every 5 seconds
    setInterval(() => {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide or back to first slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new current slide
        slides[currentSlide].classList.add('active');
    }, 5000);
}

// Portfolio filtering functionality
function initPortfolioFilter() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (categoryButtons.length === 0 || portfolioItems.length === 0) return;
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get category to filter
            const category = button.getAttribute('data-category');
            
            // Show/hide portfolio items based on category
            portfolioItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Testimonials slider functionality
function initTestimonialsSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length <= 1) return;
    
    let currentTestimonial = 0;
    
    // Hide all testimonials except the first one
    for (let i = 1; i < testimonials.length; i++) {
        testimonials[i].style.display = 'none';
    }
    
    // Change testimonial every 8 seconds
    setInterval(() => {
        // Hide current testimonial
        testimonials[currentTestimonial].style.display = 'none';
        
        // Move to next testimonial or back to first
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        
        // Show new current testimonial
        testimonials[currentTestimonial].style.display = 'block';
    }, 8000);
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Validate form (simple validation)
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // In a real implementation, you would send this data to a server
        // For now, just show a success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Scroll effects
function initScrollEffects() {
    const header = document.querySelector('.site-header');
    
    // Change header style on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '20px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.site-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}
