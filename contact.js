document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const fNameInput = document.getElementById('c-fname');
      const lNameInput = document.getElementById('c-lname');
      const fullName = `${fNameInput?.value || ''} ${lNameInput?.value || ''}`.trim() || 'Visitor';

      alert(`Thank you, ${fullName}! Your inquiry has been submitted successfully.`);
      contactForm.reset();
    });
  }
});