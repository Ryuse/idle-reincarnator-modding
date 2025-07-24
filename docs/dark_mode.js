document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const html = document.documentElement;
  
  // Set dark mode as default if no preference is saved
  if (localStorage.getItem('theme') !== 'light') {
    html.setAttribute('data-theme', 'dark');
    if (darkModeToggle) darkModeToggle.checked = true;
    localStorage.setItem('theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light');
    if (darkModeToggle) darkModeToggle.checked = false;
  }
  
  // Toggle dark/light mode
  if (darkModeToggle) {
    darkModeToggle.addEventListener('change', function() {
      if (this.checked) {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  }
});