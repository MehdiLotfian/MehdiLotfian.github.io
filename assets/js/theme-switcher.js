// Theme switcher functionality
document.addEventListener('DOMContentLoaded', () => {
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

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  }

  // Theme switching functionality
  themeSwitcher.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    themeSwitcher.innerHTML = theme === 'light' ? '🌙' : '☀️';
  }

  // Add the theme switcher to the page
  document.body.appendChild(themeSwitcher);
}); 