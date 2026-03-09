
// Analytics tracking
function trackEvent(eventName, eventData = {}) {
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
    console.log(`Event tracked: ${eventName}`, eventData);
}

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeToggleIcon();

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeToggleIcon();
        trackEvent('theme_change', { theme: newTheme });
    });
}

function updateThemeToggleIcon() {
    if (!themeToggle) return;
    const theme = htmlElement.getAttribute('data-theme');
    themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const messageDiv = document.getElementById('contactMessage');
        const submitBtn = e.target.querySelector('button[type="submit"]');

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        try {
            const response = await fetch('https://formspree.io/f/xdadqqlg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    subject: formData.get('subject'),
                    message: formData.get('message')
                })
            });

            if (response.ok) {
                messageDiv.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
                messageDiv.className = 'message success';
                e.target.reset();
                trackEvent('contact_form_submitted', { source: 'contact_form' });
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            messageDiv.textContent = '✗ Error sending message. Please try again or email me directly at kanjanikumar52@gmail.com';
            messageDiv.className = 'message error';
            trackEvent('contact_form_error', { error: error.message });
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });
}

// Newsletter Form Handling
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('newsletter-email').value;
        const messageDiv = document.getElementById('newsletterMessage');
        const submitBtn = e.target.querySelector('button[type="submit"]');

        submitBtn.disabled = true;
        submitBtn.textContent = 'Subscribing...';

        try {
            const response = await fetch('https://formspree.io/f/xdadqqlg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    subject: 'Newsletter Signup'
                })
            });

            if (response.ok) {
                messageDiv.textContent = '✓ Thanks for subscribing!';
                messageDiv.className = 'message success';
                e.target.reset();
                trackEvent('newsletter_signup', { source: 'newsletter_form' });
            } else {
                throw new Error('Failed to subscribe');
            }
        } catch (error) {
            messageDiv.textContent = '✗ Error subscribing. Please try again.';
            messageDiv.className = 'message error';
            trackEvent('newsletter_error', { error: error.message });
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Subscribe';
        }
    });
}

// Back to top button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (backToTopBtn) {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    // Mobile Nav Active State
    updateActiveNavItem();
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        trackEvent('back_to_top_clicked');
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            trackEvent('navigation_click', { target: targetId });
        }
    });
});

// Track page view
trackEvent('page_view', { page: 'home' });

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Mobile Navigation Active State Logic
function updateActiveNavItem() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.mobile-bottom-nav .nav-item');

    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= (sectionTop - 300)) {
            currentSectionId = section.getAttribute('id');
        }
    });

    if (currentSectionId) {
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    }
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registered:', reg))
            .catch(err => console.log('Service Worker registration failed:', err));
    });
}
