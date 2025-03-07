// Theme switcher functionality
document.addEventListener('DOMContentLoaded', () => {
  // Create theme switcher button
  const themeSwitcher = document.createElement('button');
  themeSwitcher.className = 'theme-switcher';
  themeSwitcher.innerHTML = '🌙'; // Default to light mode icon
  themeSwitcher.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    cursor: pointer;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    transition: all 0.3s ease;
  `;

  // Add hover effect
  themeSwitcher.addEventListener('mouseover', () => {
    themeSwitcher.style.transform = 'scale(1.1)';
  });
  themeSwitcher.addEventListener('mouseout', () => {
    themeSwitcher.style.transform = 'scale(1)';
  });

  // Function to set theme
  function setTheme(theme) {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      updateThemeIcon(theme);
    } catch (error) {
      console.error('Error setting theme:', error);
    }
  }

  // Function to update theme icon
  function updateThemeIcon(theme) {
    themeSwitcher.innerHTML = theme === 'light' ? '🌙' : '☀️';
  }

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  // Check system preference if no saved preference
  if (!localStorage.getItem('theme') && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  }

  // Theme switching functionality
  themeSwitcher.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Add the theme switcher to the page
  document.body.appendChild(themeSwitcher);
}); 