document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('c-name').value;
      alert(`Thank you, ${name}! Your inquiry has been submitted successfully.`);
      contactForm.reset();
    });
  }
});