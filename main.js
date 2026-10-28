// 1. Immediately apply saved theme on parse (prevents white flash)
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark-mode');
  document.body?.classList.add('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  const updateToggleUI = (isDark) => {
    if (!darkModeToggle) return;
    darkModeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    darkModeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  };

  // Sync button text with current state
  const isDark = document.documentElement.classList.contains('dark-mode');
  updateToggleUI(isDark);

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      const nowDark = document.documentElement.classList.toggle('dark-mode');
      document.body.classList.toggle('dark-mode', nowDark);
      try {
        localStorage.setItem('theme', nowDark ? 'dark' : 'light');
      } catch (e) {
        console.warn('Storage unavailable:', e);
      }
      updateToggleUI(nowDark);
    });
  }

  // Listen for theme changes across open tabs
  window.addEventListener('storage', (e) => {
    if (e.key === 'theme') {
      const themeIsDark = e.newValue === 'dark';
      document.documentElement.classList.toggle('dark-mode', themeIsDark);
      document.body.classList.toggle('dark-mode', themeIsDark);
      updateToggleUI(themeIsDark);
    }
  });

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