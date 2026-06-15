// Wait for DOM to load
window.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate numbers on scroll
    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.innerHTML = `${Math.floor(progress * (end - start) + start)}`;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Create intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate numbers if element has data-value attribute
                if (entry.target.hasAttribute('data-value')) {
                    const end = parseInt(entry.target.getAttribute('data-value'));
                    animateValue(entry.target, 0, end, 2000);
                }
            }
        });
    }, { threshold: 0.1 });

    // Observe all cards and stat elements
    document.querySelectorAll('.dashboard-card, .stat-card').forEach(el => {
        observer.observe(el);
    });

    // Add floating animation to SVG elements
    const svgElements = document.querySelectorAll('svg');
    svgElements.forEach((svg, index) => {
        svg.style.animationDelay = `${index * 0.2}s`;
    });

    // Console message
    console.log('%c📊 Deutschland Digital Dashboard', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%cInteraktive Visualisierungen mit Plotly.js', 'color: #764ba2; font-size: 14px;');
});

// Add particle effect (optional)
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
    particle.style.borderRadius = '50%';
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.zIndex = '-1';
    particle.style.pointerEvents = 'none';
    particle.style.animation = `fadeOut 5s linear forwards`;
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 5000);
}

// Create particles every 2 seconds
setInterval(createParticle, 2000);

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        0% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-100px); }
    }
`;
document.head.appendChild(style);