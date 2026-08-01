document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('facultySearchInput');
  const resultsContainer = document.getElementById('facultySearchResults');
  const searchForm = document.getElementById('facultySearchForm');

  if (!searchInput || !resultsContainer) return;

  // Perform filtering on input change
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();

    if (query.length < 2) {
      resultsContainer.style.display = 'none';
      resultsContainer.innerHTML = '';
      return;
    }

    // Filter by name, department, title, or research tags
    const matches = facultyDatabase.filter(person => {
      const nameMatch = person.name.toLowerCase().includes(query);
      const deptMatch = person.department.toLowerCase().includes(query);
      const titleMatch = person.title.toLowerCase().includes(query);
      const tagMatch = person.tags.some(tag => tag.toLowerCase().includes(query));

      return nameMatch || deptMatch || titleMatch || tagMatch;
    }).slice(0, 5); // Limit dropdown to top 5 matches

    renderResults(matches, query);
  });

  function renderResults(matches, query) {
    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="no-faculty-found">
          No faculty members found matching "<strong>${escapeHTML(query)}</strong>"
        </div>`;
      resultsContainer.style.display = 'block';
      return;
    }

    const html = matches.map(person => `
      <a href="${person.profileUrl}" class="faculty-dropdown-card">
        <div class="faculty-info">
          <span class="faculty-name">${person.name}</span>
          <span class="faculty-title">${person.title} — ${person.department}</span>
          <span class="faculty-office">📍 ${person.office}</span>
        </div>
        <span class="arrow-icon">→</span>
      </a>
    `).join('');

    resultsContainer.innerHTML = html;
    resultsContainer.style.display = 'block';
  }

  // Utility to prevent XSS injection in query display
  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.faculty-search-wrapper')) {
      resultsContainer.style.display = 'none';
    }
  });

  // Re-open dropdown on focus if query exists
  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim().length >= 2) {
      resultsContainer.style.display = 'block';
    }
  });
});