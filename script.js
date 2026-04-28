// Smooth scroll behavior and active navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll-based navbar styling
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('header');
    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = 'rgba(6, 182, 212, 0.1)';
    } else {
        navbar.style.borderBottomColor = 'rgba(148, 163, 184, 0.1)';
    }
});

// Simple button interactions
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        console.log('Button clicked:', this.textContent);
    });
});

// Intersection Observer for fade-in animations on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
