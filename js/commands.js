// commands.js

window.addEventListener('DOMContentLoaded', () => {
    // Animate the entire commands section into view
    gsap.fromTo(".commands-section", 
        { opacity: 0, y: 20 }, 
        { 
            duration: 1, 
            opacity: 1, 
            y: 0, 
            ease: "power2.out", 
            delay: 0.3 
        }
    );

    // Animate each command category sequentially
    const categories = document.querySelectorAll('.command-category');
    categories.forEach((category, index) => {
        gsap.fromTo(category, 
            { opacity: 0, y: 20 }, 
            { 
                duration: 1, 
                opacity: 1, 
                y: 0, 
                ease: "power2.out", 
                delay: 0.5 + index * 0.2 
            }
        );
    });

    // Animate each command card with a slight stagger for a cascading effect
    const commandCards = document.querySelectorAll('.command-card');
    gsap.fromTo(commandCards, 
        { opacity: 0, y: 20 }, 
        { 
            duration: 1, 
            opacity: 1, 
            y: 0, 
            ease: "power2.out", 
            stagger: 0.1, 
            delay: 1.0 
        }
    );
});
