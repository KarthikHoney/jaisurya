// For Option 5 (liquid bubble effect with mouse tracking)
document.querySelectorAll('nav a:not(.btn)').forEach(link => {
    link.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        this.style.setProperty('--mouse-x', `${x}%`);
        this.style.setProperty('--mouse-y', `${y}%`);
    });
});

// For particle effects
document.querySelectorAll('nav a:not(.btn)').forEach(link => {
    link.addEventListener('mouseenter', function() {
        // Add particle elements dynamically
        for(let i = 0; i < 4; i++) {
            const particle = document.createElement('span');
            particle.classList.add('particle');
            this.appendChild(particle);
        }
    });
});