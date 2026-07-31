document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.info-card');
  const hoverDelay = 750; // 3 seconds in milliseconds

  cards.forEach(card => {
    let hoverTimer;

    card.addEventListener('mouseenter', () => {
      // Start the 3-second timer when mouse enters
      hoverTimer = setTimeout(() => {
        // After 3 seconds, add the class that triggers CSS transitions
        card.classList.add('hover-active');
      }, hoverDelay);
    });

    card.addEventListener('mouseleave', () => {
      // If mouse leaves BEFORE 3 seconds, cancel the timer
      clearTimeout(hoverTimer);
      // Immediately remove the active state if it had triggered
      card.classList.remove('hover-active');
    });
  });
});