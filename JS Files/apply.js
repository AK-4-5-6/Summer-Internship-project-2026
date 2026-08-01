document.addEventListener('DOMContentLoaded', () => {
  const admissionForm = document.getElementById('admission-form');

  if (!admissionForm) return;

  const STORAGE_KEY = 'admission_form_draft';

  const loadFormData = () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) return;

    try {
      const formData = JSON.parse(savedData);
      Object.keys(formData).forEach((fieldName) => {
        const field = admissionForm.elements[fieldName];
        if (field) {
          if (field.type === 'checkbox' || field.type === 'radio') {
            field.checked = formData[fieldName];
          } else {
            field.value = formData[fieldName];
          }
        }
      });
    } catch (e) {
      // Ignored invalid JSON payload
    }
  };

  const saveFormData = () => {
    const formData = {};
    const elements = Array.from(admissionForm.elements);

    elements.forEach((field) => {
      if (!field.name) return;
      if (field.type === 'checkbox' || field.type === 'radio') {
        formData[field.name] = field.checked;
      } else {
        formData[field.name] = field.value;
      }
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  };

  loadFormData();

  admissionForm.addEventListener('input', saveFormData);
  admissionForm.addEventListener('change', saveFormData);

  admissionForm.addEventListener('submit', () => {
    localStorage.removeItem(STORAGE_KEY);
  });
});