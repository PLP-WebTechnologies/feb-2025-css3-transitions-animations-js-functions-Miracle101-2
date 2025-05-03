// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.toggle('dark', savedTheme === 'dark');
      document.getElementById('themeSelect').value = savedTheme;
    }
  });
  
  // Save theme preference
  document.getElementById('saveBtn').addEventListener('click', () => {
    const theme = document.getElementById('themeSelect').value;
    localStorage.setItem('theme', theme);
    document.body.classList.toggle('dark', theme === 'dark');
  });
  
  // Launch animation
  document.getElementById('launchBtn').addEventListener('click', () => {
    const rocket = document.getElementById('rocket');
    rocket.classList.remove('launching'); // reset if already launched
    void rocket.offsetWidth; // reflow hack to restart animation
    rocket.classList.add('launching');
  });
  