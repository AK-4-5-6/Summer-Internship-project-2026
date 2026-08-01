const contactForm = document.querySelector('form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop default browser page reload

    // Extract form entries dynamically
    const formData = new FormData(contactForm);
    const submittedData = Object.fromEntries(formData.entries());

    // Save submission list in LocalStorage
    const previousSubmissions = JSON.parse(localStorage.getItem('userSubmissions') || '[]');
    previousSubmissions.push(submittedData);
    localStorage.setItem('userSubmissions', JSON.stringify(previousSubmissions));

    alert('Form submitted successfully!');
    contactForm.reset();
  });
}
