// ==================== Smooth Scroll Animation ====================
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==================== Scroll Animation Observer ====================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // ==================== Contact Form Handling ====================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                organization: document.getElementById('organization').value,
                message: document.getElementById('message').value
            };
            
            // Show success message
            alert('Thank you for your interest! We will contact you soon.');
            
            // Reset form
            contactForm.reset();
            
            // In a real application, you would send this data to a server
            // Example:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData)
            // });
        });
    }

    // ==================== Parallax Effect for Hero Background ====================
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-bg img');
    
    if (hero && heroImage) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const heroHeight = hero.offsetHeight;
            
            // Only apply parallax when hero is in view
            if (scrollPosition < heroHeight) {
                heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
            }
        });
    }

    // ==================== Scroll to Top on Load ====================
    window.scrollTo(0, 0);
});

// ==================== Add Loading Class ====================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// ==================== Dynamic Year in Footer ====================
const currentYear = new Date().getFullYear();
const copyrightElements = document.querySelectorAll('.footer-copyright');
copyrightElements.forEach(element => {
    element.innerHTML = element.innerHTML.replace('2025', currentYear);
});
