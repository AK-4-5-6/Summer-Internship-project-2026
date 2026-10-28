document.addEventListener('DOMContentLoaded', () => {
  const admissionForm = document.getElementById('admission-form');
  if (!admissionForm) return;

  const STORAGE_KEY = 'admission_form_draft';

  const loadFormData = () => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (!savedData) return;
      const formData = JSON.parse(savedData);
      Object.keys(formData).forEach((fieldName) => {
        const field = admissionForm.elements[fieldName];
        if (field) {
          if (field.type === 'checkbox' || field.type === 'radio') {
            field.checked = Boolean(formData[fieldName]);
          } else {
            field.value = formData[fieldName];
          }
        }
      });
    } catch (e) {
      console.warn('Could not restore draft:', e);
    }
  };

  let saveTimeout;
  const saveFormData = () => {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      const formData = {};
      Array.from(admissionForm.elements).forEach((field) => {
        if (!field.name || field.type === 'submit') return;
        formData[field.name] = (field.type === 'checkbox' || field.type === 'radio')
          ? field.checked
          : field.value;
      });
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      } catch (e) {
        console.warn('Draft save quota exceeded:', e);
      }
    }, 250);
  };

  loadFormData();

  admissionForm.addEventListener('input', saveFormData);
  admissionForm.addEventListener('change', saveFormData);

  admissionForm.addEventListener('submit', () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  });
});