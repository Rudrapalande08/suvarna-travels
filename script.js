document.addEventListener('DOMContentLoaded', () => {
    // Tapping / Ripple Effect on the hero section
    const heroSection = document.getElementById('hero');
    
    heroSection.addEventListener('click', function(e) {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        // Make it circular and large enough
        const size = Math.max(this.clientWidth, this.clientHeight);
        ripple.style.width = ripple.style.height = `${size}px`;
        
        // Center the ripple around the click point
        ripple.style.transform = 'translate(-50%, -50%) scale(0)';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600); // Matches the CSS animation duration
    });

    // Form Submission Logic
    const form = document.getElementById('bookingForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page reload
        
        // Basic validation check (html5 required handles most of it)
        if (form.checkValidity()) {
            // Hide the form
            form.classList.add('hidden');
            
            // Show the exact success message requested by the user
            successMessage.classList.remove('hidden');
            
            // Optional: reset form if they want to book again later
            // form.reset();
        }
    });
});
