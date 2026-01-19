document.addEventListener("DOMContentLoaded", () => {
  const divider = document.querySelector(".animate-divider");

  if (!divider) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // 🔥 solo una vez
        }
      });
    },
    {
      threshold: 0.4
    }
  );

  observer.observe(divider);
});