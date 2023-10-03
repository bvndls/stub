document.addEventListener('DOMContentLoaded', function() {
  // generate random colors
  function getRandomColor() {
    const colors = ['#D5EFFD', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // define elements from stylesheet
  const spanElement = document.querySelector('span.jstext');
  const darkModeIcon = document.querySelector('.darkmode');

  // initial text color
  // spanElement.style.color = '##010d13';

  // animation
  setInterval(function() {
    spanElement.style.transition = 'color 5s';
    spanElement.style.color = getRandomColor();
  }, 2000);

// click listener
darkModeIcon.addEventListener('click', function() {
  document.documentElement.classList.toggle('dark');
  });
});

// arc checker
console.log(
  getComputedStyle(document.documentElement)
  .getPropertyValue('--arc-palette-title') ? 'Is Arc' : 'Is Not Arc'
);