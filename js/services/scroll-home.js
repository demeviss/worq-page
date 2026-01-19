const homeBtn = document.querySelector('.scroll-home');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    homeBtn.classList.add('show');
  } else {
    homeBtn.classList.remove('show');
  }
});