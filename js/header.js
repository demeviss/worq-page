const header = document.querySelector('.site-header');

let lastScroll = 0;

// detectar scroll
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove('hide');
    header.classList.add('show');
    return;
  }

  if (currentScroll > lastScroll && currentScroll > 100) {
    // bajando
    header.classList.remove('show');
    header.classList.add('hide');
  } else {
    // subiendo
    header.classList.remove('hide');
    header.classList.add('show');
  }

  lastScroll = currentScroll;
});

// detectar mouse cerca del top
document.addEventListener('mousemove', (e) => {
  if (e.clientY < 80) {
    header.classList.remove('hide');
    header.classList.add('show');
  }
});
