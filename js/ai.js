const counters = document.querySelectorAll('.ai-metric h2');

counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  let count = 0;

  const update = () => {
    const increment = target / 80;
    if (count < target) {
      count += increment;
      counter.innerText = Math.ceil(count) + "%";
      requestAnimationFrame(update);
    } else {
      counter.innerText = target + "%";
    }
  };

  update();
});
