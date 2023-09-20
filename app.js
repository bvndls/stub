document.addEventListener('DOMContentLoaded', function() {
  // generate random colors
  function getRandomColor() {
    const colors = ['#D5EFFD', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // define elements from stylesheet
  const spanElement = document.querySelector('span.stubtext');
  const darkModeIcon = document.querySelector('.darkmode');

  // initial text color
  spanElement.style.color = '##010d13';

  // animation
  setInterval(function() {
    spanElement.style.transition = 'color 7s';
    spanElement.style.color = getRandomColor();
  }, 2000);

  // click listener
  darkModeIcon.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    spanElement.style.transition = 'color s';
    spanElement.style.color = '#ffffff';  // white text in dark mode for readability
  });
});