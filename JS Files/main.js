console.log("main.js loaded sucessfully");
(() => {
  const initDarkMode = () => {
    // Looks for id="dark-mode-toggle" OR class="dark-mode-toggle"
    const btns = document.querySelectorAll("#dark-mode-toggle, .dark-mode-toggle");

    console.log(`Found ${btns.length} dark-mode-toggle element(s).`);

    if (btns.length === 0) return;

    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        // Toggle class on the <html> tag
        const isDark = document.documentElement.classList.toggle("dark-mode");

        // Write to localStorage
        localStorage.setItem("theme", isDark ? "dark" : "light");

        console.log(`Theme saved to localStorage: ${isDark ? "dark" : "light"}`);
      });
    });
  };
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDarkMode);
  } else {
    initDarkMode();
  }
})();

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

