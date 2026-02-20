const steps = document.querySelectorAll(".step");

window.addEventListener("scroll", () => {
  steps.forEach(step => {
    const rect = step.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      step.style.opacity = "1";
      step.style.transform = "translateY(0)";
    }
  });
});

steps.forEach(step => {
  step.style.opacity = "0";
  step.style.transform = "translateY(20px)";
  step.style.transition = "all 0.6s ease";
});
