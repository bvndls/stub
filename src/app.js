document.addEventListener('DOMContentLoaded', function () {


  // generate random colors
  function getRandomColor() {
    const colors = ['#D5EFFD', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // arc browser detection
  window.onload = function () {
    let arcPaletteTitle = getComputedStyle(document.documentElement)
      .getPropertyValue('--arc-palette-title')
      .trim();

    if (!arcPaletteTitle) {
      let arcFeatureDiv = document.getElementById('arcfeature');
      if (arcFeatureDiv) {
        arcFeatureDiv.style.display = 'none';
      }
    }
  }

  // define elements from stylesheet
  const spanElement = document.querySelector('span.jstext');
  const darkModeIcon = document.querySelector('.darkmode');
  const arcFeatureDiv = document.getElementById("arcfeature");

  // variables to track original classes
  let wasDark = false;
  let wasArc = false;

  // arcfeature click listener
  arcFeatureDiv.addEventListener("click", function () {
    if (document.documentElement.classList.contains("arc")) {
      document.documentElement.classList.remove("arc");
      if (wasDark) {
        document.documentElement.classList.add("dark");
        wasDark = false;
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        wasDark = true;
      }
      document.documentElement.classList.add("arc");
    }
  });

  // animation
  setInterval(function () {
    spanElement.style.transition = 'color 5s';
    spanElement.style.color = getRandomColor();
  }, 2000);

  const outer = document.querySelector('.outer');
  const inner = document.querySelector('.inner');

  inner.style.transform = `translateX(0px)`;
  const position = outer.clientWidth - inner.clientWidth;
  // darkmode click listener
  outer.addEventListener('click', function () {
    if (inner.style.transform === `translateX(${position}px)`) {
      inner.style.transform = `translateX(0)`;
    } else {
      inner.style.transform = `translateX(${position}px)`;
    }
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      if (wasArc) {
        document.documentElement.classList.add("arc");
        wasArc = false;
      }
    } else {
      if (document.documentElement.classList.contains("arc")) {
        document.documentElement.classList.remove("arc");
        wasArc = true;
      }
      document.documentElement.classList.add("dark");
    }
  });
});