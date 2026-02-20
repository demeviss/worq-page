
  const slider = document.getElementById('projectsSlider');
  const btnLeft = document.querySelector('.slider-arrow.left');
  const btnRight = document.querySelector('.slider-arrow.right');

  const scrollAmount = () => {
    const card = slider.querySelector('.project-card');
    return card ? card.offsetWidth + 24 : 300;
  };

  btnLeft.addEventListener('click', () => {
    slider.scrollBy({
      left: -scrollAmount(),
      behavior: 'smooth'
    });
  });

  btnRight.addEventListener('click', () => {
    slider.scrollBy({
      left: scrollAmount(),
      behavior: 'smooth'
    });
  });



