document.addEventListener('DOMContentLoaded', function() {
  // generate random colors
  function getRandomColor() {
    const colors = ['#D5EFFD', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // define elements from stylesheet
  const spanElement = document.querySelector('span.jstext');
  const darkModeIcon = document.querySelector('.darkmode');
  const arcFeatureDiv = document.getElementById("arcfeature");
  
  // arcfeature click listener
  arcFeatureDiv.addEventListener("click", function() {
    if(document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.classList.toggle("arc");  
  });

  // animation
  setInterval(function() {
    spanElement.style.transition = 'color 5s';
    spanElement.style.color = getRandomColor();
  }, 2000);
  
  // darkmode click listener
  darkModeIcon.addEventListener('click', function() {
    if(document.documentElement.classList.contains("arc")) {
      document.documentElement.classList.remove("arc");
    }
    document.documentElement.classList.toggle('dark');
  });
});

// arc checker
console.log(
  getComputedStyle(document.documentElement)
  .getPropertyValue('--arc-palette-title') ? 'Is Arc' : 'Is Not Arc'
);