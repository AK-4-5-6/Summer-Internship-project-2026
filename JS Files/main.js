document.addEventListener("DOMContentLoaded", () => {
  // 1. Locate the button (Make sure your HTML button matches this ID or Class)
  const themeToggleBtn = document.getElementById("dark-mode-toggle") || document.querySelector(".dark-mode-toggle");

  if (!themeToggleBtn) {
    console.error("Theme toggle button not found in DOM! Check your HTML ID/Class.");
    return;
  }

  // 2. Click Handler
  themeToggleBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents link navigation or form reloads if button is wrapped

    // Toggle class on <html> element
    const isDarkMode = document.documentElement.classList.toggle("dark-mode");

    // Explicitly write to localStorage
    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
      console.log("Saved to localStorage: theme = dark");
    } else {
      localStorage.setItem("theme", "light");
      console.log("Saved to localStorage: theme = light");
    }
  });
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
