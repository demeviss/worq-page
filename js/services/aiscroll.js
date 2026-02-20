const backBtn = document.querySelector('.back-home');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backBtn.classList.add('hidden');
  } else {
    backBtn.classList.remove('hidden');
  }
});
