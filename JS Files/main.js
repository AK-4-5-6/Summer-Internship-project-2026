console.log("main.js loaded sucessfully");
document.addEventListener("DOMContentLoaded", () => {
  // 1. Ensure body gets the class immediately if localStorage is already dark
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    document.documentElement.classList.add("dark-mode");
  }

  // 2. Button Click Listener
  const toggleBtn = document.querySelector("#dark-mode-toggle, .dark-mode-toggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // Toggle class directly on body (where your CSS is listening!)
      const isDark = document.body.classList.toggle("dark-mode");
      document.documentElement.classList.toggle("dark-mode");

      // Save to localStorage
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }
});
  
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
  };


