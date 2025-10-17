document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle (Bootstrap approach)
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', () => {
        navbarCollapse.classList.toggle('show');
        const isExpanded = navbarCollapse.classList.contains('show');
        navbarToggler.setAttribute('aria-expanded', isExpanded);
    });

    // Scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after clicking
                navbarCollapse.classList.remove('show');
                navbarToggler.setAttribute('aria-expanded', 'false');
            }
        });
    });
});
