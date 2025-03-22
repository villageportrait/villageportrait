// Main JavaScript for Village Portrait Website

document.addEventListener('DOMContentLoaded', () => {
    initSlideshow();
    initPortfolioFilter();
    initTestimonialsSlider();
    initContactForm();
    initScrollEffects();
});

// Slideshow Functionality
function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;

    let currentSlide = 0;
    slides[0].classList.add('active');

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

// Portfolio Filtering Functionality
function initPortfolioFilter() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    if (!categoryButtons.length || !portfolioItems.length) return;

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;
            portfolioItems.forEach(item => {
                item.style.display = (category === 'all' || item.dataset.category === category) ? 'block' : 'none';
            });
        });
    });
}

// Testimonials Slider Functionality
function initTestimonialsSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length <= 1) return;

    let currentTestimonial = 0;
    testimonials.forEach((t, i) => t.style.display = i === 0 ? 'block' : 'none');

    setInterval(() => {
        testimonials[currentTestimonial].style.display = 'none';
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.display = 'block';
    }, 8000);
}

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        const fields = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        if (!fields.name || !fields.email || !fields.message) {
            alert('Please fill in all required fields.');
            return;
        }

        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Scroll Effects
function initScrollEffects() {
    const header = document.querySelector('.site-header');
    const navLinks = document.querySelectorAll('.site-nav a');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 100;
        header.style.padding = scrolled ? '10px 0' : '20px 0';
        header.style.backgroundColor = scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)';
        // boxShadow is constant, so it's handled in CSS
    });

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}
