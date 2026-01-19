 let lastScrollTop = 0;
  const partnerBack = document.querySelector('.partner-back');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Bajando → ocultar
      partnerBack.classList.add('hidden');
    } else {
      // Subiendo → mostrar
      partnerBack.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });