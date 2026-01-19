document.addEventListener("DOMContentLoaded", () => {
  const numbers = document.querySelectorAll(".impact-number");

  const animateNumber = (el) => {
    const target = +el.dataset.target;
    let current = 0;
    const increment = target / 60;

    const update = () => {
      current += increment;
      if (current < target) {
        el.textContent = Math.round(current) + "%";
        requestAnimationFrame(update);
      } else {
        el.textContent = target + "%";
      }
    };

    update();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains("done")) {
          entry.target.classList.add("done");
          animateNumber(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  numbers.forEach(num => observer.observe(num));
});