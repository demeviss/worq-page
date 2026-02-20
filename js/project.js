
const slider = document.querySelector('.projects-slider');

slider.addEventListener('wheel', (e) => {
  e.preventDefault();
  slider.scrollLeft += e.deltaY;
}, { passive: false });

