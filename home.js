document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.info-card');
  const hoverDelay = 750; 

  cards.forEach(card => {
    let hoverTimer;

    card.addEventListener('mouseenter', () => {
      hoverTimer = setTimeout(() => { 
        card.classList.add('hover-active');
      }, hoverDelay);
    });

    card.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimer);
      card.classList.remove('hover-active');
    });
  });
});
