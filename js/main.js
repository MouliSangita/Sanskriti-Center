// ===================================
// Navigation & Scroll Functionality
// ===================================

// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// ===================================
// Mobile Menu Toggle
// ===================================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===================================
// Smooth Scroll for Navigation Links
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Active Navigation Highlighting with Intersection Observer
// ===================================
const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -66%',
    threshold: 0
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            
            // Remove active class from all nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to the corresponding nav link
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// ===================================
// Navbar Scroll Effect
// ===================================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 10) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Support Form Validation & Submission
// ===================================
const supportForm = document.getElementById('supportForm');

supportForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('support-name').value.trim();
    const email = document.getElementById('support-email').value.trim();
    const signature = document.getElementById('support-signature').value.trim();
    
    // Reset previous errors
    clearFormErrors(supportForm);
    
    let isValid = true;
    
    // Validate name
    if (name === '') {
        showError('support-name', 'Please enter your name');
        isValid = false;
    } else if (name.length < 2) {
        showError('support-name', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    // Validate email
    if (email === '') {
        showError('support-email', 'Please enter your email');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('support-email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate signature
    if (signature === '') {
        showError('support-signature', 'Please enter your signature');
        isValid = false;
    } else if (signature.toLowerCase() !== name.toLowerCase()) {
        showError('support-signature', 'Signature must match your name');
        isValid = false;
    }
    
    // If form is valid, submit (in a real app, this would send to a server)
    if (isValid) {
        // Show success message
        showSuccessMessage(supportForm, 'Thank you for your support! We appreciate your contribution.');
        
        // Reset form
        supportForm.reset();
    }
});

// ===================================
// Contact Form Validation & Submission
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    
    // Reset previous errors
    clearFormErrors(contactForm);
    
    let isValid = true;
    
    // Validate name
    if (name === '') {
        showError('contact-name', 'Please enter your name');
        isValid = false;
    } else if (name.length < 2) {
        showError('contact-name', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    // Validate email
    if (email === '') {
        showError('contact-email', 'Please enter your email');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('contact-email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate message
    if (message === '') {
        showError('contact-message', 'Please enter a message');
        isValid = false;
    } else if (message.length < 10) {
        showError('contact-message', 'Message must be at least 10 characters');
        isValid = false;
    }
    
    // If form is valid, submit (in a real app, this would send to a server)
    if (isValid) {
        // Show success message
        showSuccessMessage(contactForm, 'Thank you for reaching out! We\'ll get back to you soon.');
        
        // Reset form
        contactForm.reset();
    }
});

// ===================================
// Form Helper Functions
// ===================================

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show error message
function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const formGroup = input.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    
    formGroup.classList.add('error');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Clear all form errors
function clearFormErrors(form) {
    const formGroups = form.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        group.classList.remove('error');
        const errorMessage = group.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.textContent = '';
            errorMessage.style.display = 'none';
        }
    });
}

// Show success message
function showSuccessMessage(form, message) {
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <p>${message}</p>
    `;
    
    // Style the success message
    successDiv.style.cssText = `
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
        padding: 20px;
        border-radius: 10px;
        margin-top: 20px;
        text-align: center;
        animation: slideInFromTop 0.5s ease;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInFromTop {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Remove any existing success messages
    const existingMessage = form.parentElement.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Insert success message after the form
    form.parentElement.insertBefore(successDiv, form.nextSibling);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.style.animation = 'slideInFromTop 0.5s ease reverse';
        setTimeout(() => {
            successDiv.remove();
        }, 500);
    }, 5000);
}

// ===================================
// Real-time Input Validation
// ===================================

// Support form real-time validation
document.getElementById('support-name').addEventListener('blur', function() {
    const value = this.value.trim();
    const formGroup = this.closest('.form-group');
    
    if (value === '') {
        showError('support-name', 'Please enter your name');
    } else if (value.length < 2) {
        showError('support-name', 'Name must be at least 2 characters');
    } else {
        formGroup.classList.remove('error');
        formGroup.querySelector('.error-message').style.display = 'none';
    }
});

document.getElementById('support-email').addEventListener('blur', function() {
    const value = this.value.trim();
    const formGroup = this.closest('.form-group');
    
    if (value === '') {
        showError('support-email', 'Please enter your email');
    } else if (!isValidEmail(value)) {
        showError('support-email', 'Please enter a valid email address');
    } else {
        formGroup.classList.remove('error');
        formGroup.querySelector('.error-message').style.display = 'none';
    }
});

// Contact form real-time validation
document.getElementById('contact-name').addEventListener('blur', function() {
    const value = this.value.trim();
    const formGroup = this.closest('.form-group');
    
    if (value === '') {
        showError('contact-name', 'Please enter your name');
    } else if (value.length < 2) {
        showError('contact-name', 'Name must be at least 2 characters');
    } else {
        formGroup.classList.remove('error');
        formGroup.querySelector('.error-message').style.display = 'none';
    }
});

document.getElementById('contact-email').addEventListener('blur', function() {
    const value = this.value.trim();
    const formGroup = this.closest('.form-group');
    
    if (value === '') {
        showError('contact-email', 'Please enter your email');
    } else if (!isValidEmail(value)) {
        showError('contact-email', 'Please enter a valid email address');
    } else {
        formGroup.classList.remove('error');
        formGroup.querySelector('.error-message').style.display = 'none';
    }
});

// ===================================
// Scroll Animations (Fade In on Scroll)
// ===================================
const animateOnScrollOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animateOnScrollCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
};

const animateObserver = new IntersectionObserver(animateOnScrollCallback, animateOnScrollOptions);

// Add animation to cards
const cards = document.querySelectorAll('.about-card, .team-card, .info-card, .contact-detail');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animateObserver.observe(card);
});

// ===================================
// Prevent Social Link Navigation (Placeholder Links)
// ===================================
const socialLinks = document.querySelectorAll('.social-icons a, .footer-social a');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Social media links are placeholders. Connect your actual social media profiles here!');
    });
});

// ===================================
// Console Welcome Message
// ===================================
console.log('%c Welcome to Sanskriti Center! ', 'background: #b64400; color: white; font-size: 20px; padding: 10px;');
console.log('%c This website celebrates Indian culture and heritage. ', 'font-size: 14px; color: #b64400;');

// ===================================
// Page Load Animation
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

