// Selecting elements
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark & Light Imaages
const imageMode = (color) => {
   image1.src = `/img/undraw_proud_coder_${color}.svg`;
   image2.src = `/img/undraw_feeling_proud_${color}.svg`;
   image3.src = `/img/undraw_conceptual_idea_${color}.svg`;
};

// Dark Mode styles
const darkMode = () => {
   nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
   textBox.style.backgroundColor = 'rgb( 255 255 255 / 50%)';
   toggleIcon.children[0].textContent = 'Dark Mode';
   toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
   imageMode('Dark');
};

// Light Mode styles
const lightMode = () => {
   nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
   textBox.style.backgroundColor = 'rgb( 0 0 0 / 50%)';
   toggleIcon.children[0].textContent = 'Light Mode';
   toggleIcon.children[1].classList.remove('fa-moon', 'fa-sun');
   imageMode('Light');
};

// Switch Theme Dynamically
const switchTheme = (event) => {
   if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); // store theme in localStorage
      darkMode();
   } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); // store theme in localStorage
      lightMode();
   }
};
// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check localStorage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
   document.documentElement.setAttribute('data-theme', currentTheme);

   if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
      darkMode();
   }
}
