document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking a link (mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            // Toggle current
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.classList.remove('active');
                header.querySelector('.icon').textContent = '+';
            } else {
                // Close others (optional)
                document.querySelectorAll('.accordion-content').forEach(c => {
                    c.style.maxHeight = null;
                    c.classList.remove('active');
                });
                document.querySelectorAll('.accordion-header .icon').forEach(i => i.textContent = '+');

                content.style.maxHeight = content.scrollHeight + "px";
                content.classList.add('active');
                header.querySelector('.icon').textContent = '-';
            }
        });
    });

});
