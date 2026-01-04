// Shared JavaScript for joewapshott.com

// Theme toggle functionality
(function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;

    if (!themeToggle) return;

    // Toggle on click
    themeToggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
})();
