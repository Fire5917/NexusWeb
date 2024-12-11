// index.js

window.addEventListener('DOMContentLoaded', () => {
    gsap.from(".title", { duration: 1, opacity: 0, y: -20, ease: "power2.out" });
    gsap.from(".tagline", { duration: 1, opacity: 0, y: 20, delay: 0.5, ease: "power2.out" });
    gsap.from(".invite-button", { duration: 1, opacity: 0, scale: 0.8, delay: 1, ease: "back.out(1.7)" });
    gsap.from(".why-nexusbot", { duration: 1, opacity: 0, y: 20, delay: 1.5, ease: "power2.out" });
    gsap.from(".user-features", { duration: 1, opacity: 0, y: 20, delay: 2, ease: "power2.out" });
    gsap.from(".user-category", { 
        duration: 1, 
        opacity: 0, 
        y: 20, 
        delay: 2.5, 
        stagger: 0.2, 
        ease: "power2.out" 
    });
    gsap.from(".call-to-action", { duration: 1, opacity: 0, y: 20, delay: 3.3, ease: "power2.out" });
    gsap.from(".contact", { duration: 1, opacity: 0, y: 20, delay: 3.8, ease: "power2.out" });
});
