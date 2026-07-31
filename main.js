document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  if (darkModeToggle) {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      body.classList.add('dark-mode');
      darkModeToggle.textContent = '☀️ Light Mode';
    }

    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      
      let theme = 'light';
      if (body.classList.contains('dark-mode')) {
        theme = 'dark';
        darkModeToggle.textContent = '☀️ Light Mode';
      } else {
        darkModeToggle.textContent = '🌙 Dark Mode';
      }
      localStorage.setItem('theme', theme);
    });
  }

  let lastScrollY = window.scrollY;
  const navbar = document.getElementById('navbar');

  if (navbar) {
    const navHeightPx = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height')
    ) || 70;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > navHeightPx) {
        navbar.classList.add('nav-hidden');
      } else {
        navbar.classList.remove('nav-hidden');
      }
      lastScrollY = currentScrollY;
    });
  }

  const footer = document.getElementById('footer');

  if (footer) {
    window.addEventListener('scroll', () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledRatio = window.scrollY / (totalHeight || 1);

      if (scrolledRatio >= 0.6) {
        footer.classList.add('footer-visible');
      } else {
        footer.classList.remove('footer-visible');
      }
    });
  }
});
