



//Dark mode ------------------------------------------------------------//


let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));

  // Ensure endValue is a number and handle potential errors
  if (isNaN(endValue)) {
    console.error("Error: 'data-val' attribute for element", valueDisplay, "is not a number.");
    return; // Skip this iteration if data-val is not a number
  }

  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function() {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue === endValue) { // Use === for strict comparison
      clearInterval(counter);
    }
  }, duration);
});

//Dark mode ------------------------------------------------------------//

const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');

  toggleButton.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Check for previously saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  toggleButton.textContent = 'Light Mode';
}


//------------------------------------------------

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkMode) {
  // Apply dark theme initially
} 




window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.animated'); // Elements with animation class

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight) {
      // Animate the element (add class, manipulate styles)
    }
  });
});
