const steps = document.querySelectorAll('.bim-step');

const stepObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.35 });

steps.forEach(step => stepObserver.observe(step));
