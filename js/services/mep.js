const counters = document.querySelectorAll(".counter");

const animateCounters = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const duration = 1500; // tiempo total animación
    const increment = target / (duration / 16);

    let current = 0;

    const updateCounter = () => {
      current += increment;

      if (current < target) {
        counter.innerText = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
        
        // Agregar símbolos según el valor
        if (target === 30) counter.innerText += "%";
        if (target === 250) counter.innerText += "+";
        if (target === 100) counter.innerText += "%";
      }
    };

    updateCounter();
  });
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      observer.disconnect(); // solo animar una vez
    }
  });
}, { threshold: 0.4 });

observer.observe(document.querySelector(".mep-metrics"));
