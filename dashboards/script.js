// Wait for DOM to load
window.addEventListener('DOMContentLoaded', function() {
    // Typing Animation für Hero-Subtitle (falls vorhanden)
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const phrases = [
            " Wie zukunftsfähig ist Deutschland?",
            " Digitalisierung analysieren.",
            " KI-Potenziale entdecken.",
            " Lebensqualität vergleichen.",
            " Zukunftsszenarien simulieren."
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentPhrase = phrases[phraseIndex];
            if (isDeleting) {
                typingText.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(type, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 50 : 100);
            }
        }
        
        setTimeout(type, 1000);
    }

    // Smooth Scroll für alle Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Partikeleffekt (optional)
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

    // Create particles every 2 seconds (optional - auskommentiert für bessere Performance)
    // setInterval(createParticle, 2000);

    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            0% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-100px); }
        }
        
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .metric-card:nth-child(1) { animation-delay: 0.1s; }
        .metric-card:nth-child(2) { animation-delay: 0.2s; }
        .metric-card:nth-child(3) { animation-delay: 0.3s; }
        .metric-card:nth-child(4) { animation-delay: 0.4s; }
    `;
    document.head.appendChild(style);

    // Console message
    console.log('%c📊 Germany Pulse 2030', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%cInteraktive Dashboards zur Zukunft Deutschlands', 'color: #764ba2; font-size: 14px;');
});

// Für KI-Berufsradar: Risiko-Klassen definieren
const riskClasses = {
    "niedrig": "risk-low",
    "mittel": "risk-medium", 
    "hoch": "risk-high",
    "sehr hoch": "risk-very-high"
};

const riskColors = {
    "niedrig": "#4CAF50",
    "mittel": "#FFC107",
    "hoch": "#FF5722",
    "sehr hoch": "#F44336"
};

const riskLabels = {
    "niedrig": "🟢 Niedrig",
    "mittel": "🟡 Mittel",
    "hoch": "🟠 Hoch",
    "sehr hoch": "🔴 Sehr hoch"
};