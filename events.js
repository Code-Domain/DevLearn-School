function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
    document.querySelector(".menu-toggle").textContent = document.querySelector(".menu-toggle").textContent ==="X" ? "☰" : "X";
}

function openLogin() {
    document.getElementById("loginBox").classList.add("active");
}

function closeLogin() {
    document.getElementById("loginBox").classList.remove("active");
}

function openSignup() {
    document.getElementById("signupBox").classList.add("active");
}

function closeSignup() {
    document.getElementById("signupBox").classList.remove("active");
}

/* SWITCH BETWEEN LOGIN & SIGNUP */
function switchToSignup() {
    closeLogin();
    openSignup();
}

function switchToLogin() {  
    closeSignup();
    openLogin();
}

/* CLICK OUTSIDE TO CLOSE */
window.onclick = function (e) {
    let login = document.getElementById("loginBox");
    let signup = document.getElementById("signupBox");

    if (e.target === login) {
        login.classList.remove("active");
    }

    if (e.target === signup) {
        signup.classList.remove("active");
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // 1. Intersection Observer for Scroll Animations
    // This adds the 'visible' class to elements when they scroll into view
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select all elements with the animation class
    const animatedElements = document.querySelectorAll('.fade-on-scroll');
    animatedElements.forEach(el => observer.observe(el));


    // 2. Simple Toast/Feedback for Interaction
    // Since we don't use native alerts, we create a toast message function
    window.handleCta = function (event) {
        event.preventDefault();

        // Create toast element
        const toast = document.createElement('div');
        toast.textContent = "Navigating to full academic program catalog...";
        toast.style.position = 'fixed';
        toast.style.bottom = '30px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = '#1F2937';
        toast.style.color = '#fff';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '50px';
        toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        toast.style.zIndex = '1000';
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease, bottom 0.3s ease';
        toast.style.fontSize = '0.9rem';

        document.body.appendChild(toast);

        // Animate in
        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.bottom = '40px';
        });

        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.bottom = '30px';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    };

    // 3. Add subtle parallax tilt effect to cards on mousemove (Desktop enhancement)
    const cards = document.querySelectorAll('.program-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Only apply on larger screens
            if (window.innerWidth > 768) {
                // Subtle glow effect following mouse could go here
                // For now, we keep it strictly per design requirements (lift + zoom)
                // but ensure the image zoom feels smooth
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {

    // 1. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // 2. Ticker Pause on Hover
    const ticker = document.querySelector('.ticker-wrap');
    if (ticker) {
        ticker.addEventListener('mouseenter', () => {
            document.querySelector('.ticker').style.animationPlayState = 'paused';
        });
        ticker.addEventListener('mouseleave', () => {
            document.querySelector('.ticker').style.animationPlayState = 'running';
        });
    }

    // 3. Toast Notification for CTA
    window.handleCta = function (event) {
        event.preventDefault();

        const toast = document.createElement('div');
        toast.textContent = "Loading full events calendar...";
        toast.style.position = 'fixed';
        toast.style.bottom = '30px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = '#1F2937';
        toast.style.color = '#fff';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '50px';
        toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        toast.style.zIndex = '1000';
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease, bottom 0.3s ease';

        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.bottom = '40px';
        });

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.bottom = '30px';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    };
});



document.addEventListener('DOMContentLoaded', () => {

    // 1. Intersection Observer for Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // 2. Interactive Toast Function
    window.showToast = function (message, type = 'info') {
        const toast = document.createElement('div');
        toast.textContent = message;

        // Styles
        toast.style.position = 'fixed';
        toast.style.bottom = '30px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = type === 'success' ? '#059669' : '#1F2937'; // Green or Dark
        toast.style.color = '#fff';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '50px';
        toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        toast.style.zIndex = '1000';
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease, bottom 0.3s ease';
        toast.style.fontSize = '0.9rem';

        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.bottom = '40px';
        });

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.bottom = '30px';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    };

    // Button Handlers
    window.handleApply = function (event) {
        event.preventDefault();
        window.showToast("Redirecting to Application Portal...", "info");
    };

    window.handleDownload = function (event) {
        event.preventDefault();
        window.showToast("Downloading Brochure PDF...", "success");
    };
});





document.addEventListener('DOMContentLoaded', () => {

    // 1. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // 2. Toast Notification Logic
    window.showToast = function (message) {
        const toast = document.createElement('div');
        toast.textContent = message;

        // Style the toast
        toast.style.position = 'fixed';
        toast.style.bottom = '30px';
        toast.style.right = '30px'; /* Right aligned for form feedback */
        toast.style.backgroundColor = '#10B981'; /* Success Green */
        toast.style.color = '#fff';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '12px';
        toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        toast.style.zIndex = '1000';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        toast.style.transition = 'all 0.3s ease';
        toast.style.fontSize = '0.9rem';
        toast.style.display = 'flex';
        toast.style.alignItems = 'center';
        toast.style.gap = '10px';

        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        });

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    };

    // 3. Event Handlers
    window.handleAction = function (event, type) {
        event.preventDefault();
        if (type === 'application') {
            window.showToast("Redirecting to Application Portal...");
        }
    };

    window.handleFormSubmit = function (event) {
        event.preventDefault();

        // Simulate form submission delay
        const btn = event.target.querySelector('button');
        const originalText = btn.innerText;

        btn.innerText = "Sending...";
        btn.disabled = true;
        btn.style.opacity = "0.7";

        setTimeout(() => {
            window.showToast("Message sent successfully! We'll contact you soon.");
            event.target.reset();

            btn.innerText = originalText;
            btn.disabled = false;
            btn.style.opacity = "1";
        }, 1500);
    };
});