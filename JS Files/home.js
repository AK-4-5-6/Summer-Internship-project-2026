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

document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".info-card .carousel-container");
  if (!card) return;

  const slides = card.querySelectorAll(".carousel-slide");
  const prevBtn = card.querySelector(".prev-btn");
  const nextBtn = card.querySelector(".next-btn");
  let currentIndex = 0;
  let autoSlideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Auto-play timer
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Manual Control Click Handlers
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Stop link navigation
      e.stopPropagation();
      nextSlide();
    });

    prevBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Stop link navigation
      e.stopPropagation();
      prevSlide();
    });
  }

  // Pause auto-play while hovering over the card
  const parentCard = card.closest(".info-card");
  parentCard.addEventListener("mouseenter", stopAutoSlide);
  parentCard.addEventListener("mouseleave", startAutoSlide);

  startAutoSlide();
});