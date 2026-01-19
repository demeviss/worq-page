document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll('.bim-block');

  if (!blocks.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // animar solo una vez
        }
      });
    },
    { threshold: 0.25 }
  );

  blocks.forEach(block => observer.observe(block));
});
