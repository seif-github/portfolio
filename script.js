// Initialize Lucide icons
lucide.createIcons();

// Dark mode functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const moonIcon = '<i data-lucide="moon"></i>';
const sunIcon = '<i data-lucide="sun"></i>';

// Check for saved theme preference, otherwise use system preference
const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Apply theme
const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  darkModeToggle.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
  localStorage.setItem('theme', theme);
  lucide.createIcons();
};

// Initialize theme
setTheme(getPreferredTheme());

// Toggle theme
darkModeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

// Watch for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});

// Skills data
const techSkills = [
  'C#',
  'Python',
  'C++',
  'HTML',
  'CSS',
  'JavaScript',
  '.NET Framework',
  'SQL',
  'MVC',
  'API',
  'LINQ',
  'Git',
  'GitHub',
  'Microsoft 356'

];

const softSkills = [
    'Teamwork',
    'Leadership',
    'Time Management',
    'Problem Solving',
    'Work Under Pressure'

  ];


// Populate technical skills grid
const techSkillsGrid = document.getElementById('skillsGrid');
techSkills.forEach(skill => {
  const skillCard = document.createElement('div');
  skillCard.className = 'skill-card';
  
  const icon = document.createElement('i');
  icon.className = 'skill-icon';
  icon.setAttribute('data-lucide', 'code');
  
  const title = document.createElement('h3');
  title.textContent = skill;
  
  skillCard.appendChild(icon);
  skillCard.appendChild(title);
  skillsGrid.appendChild(skillCard);
});

// Populate soft skills grid
const softSkillsGrid = document.getElementById('skillsGrid');
softSkills.forEach(skill => {
  const skillCard = document.createElement('div');
  skillCard.className = 'skill-card';
  
  const icon = document.createElement('i');
  icon.className = 'skill-icon';
  icon.setAttribute('data-lucide', 'user');
  
  const title = document.createElement('h3');
  title.textContent = skill;
  
  skillCard.appendChild(icon);
  skillCard.appendChild(title);
  skillsGrid.appendChild(skillCard);
});

// Re-initialize icons after adding skills
lucide.createIcons();

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all elements with animation classes
  document.querySelectorAll('.fade-in, .fade-in-up, .slide-in-right').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
  });

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});