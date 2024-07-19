const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

//img animation
document.addEventListener('DOMContentLoaded', () => {
    const aboutImage = document.querySelector('.about-image');

    const animateAboutImage = () => {
        aboutImage.classList.add('animate-image');
    };

    // Intersection Observer to trigger animation when "About" section is in view
    const aboutSection = document.getElementById('about');
    const appearOptions = {
        threshold: 0,
        rootMargin: '0px'
    };
    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateAboutImage();
            } else {
                aboutImage.classList.remove('animate-image');
            }
        });
    }, appearOptions);
    appearOnScroll.observe(aboutSection);
});



document.addEventListener('DOMContentLoaded', () => {
    const scrollDownButtons = document.querySelectorAll('.scroll-down-button');

    scrollDownButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const nextSectionId = button.getAttribute('href');
            const nextSection = document.querySelector(nextSectionId);
            nextSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the buttons
    const loginButton = document.querySelector('.login');
    const signupButton = document.querySelector('.signup');

    // Add click event listeners
    loginButton.addEventListener('click', function() {
        window.location.href = 'login.html';
    });

    signupButton.addEventListener('click', function() {
        window.location.href = 'register.html';
    });
});




window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    // Ensure preloader shows for at least 5 seconds
    const minPreloaderTime = 2000;
    const loadTime = Date.now() - performance.timing.navigationStart;
    const timeRemaining = minPreloaderTime - loadTime;
    
    if (timeRemaining > 0) {
        setTimeout(() => {
            preloader.style.display = 'none';
        }, timeRemaining);
    } else {
        preloader.style.display = 'none';
    }
});
