
  const serviceItems = document.querySelectorAll('.service-item');

  serviceItems.forEach(item => {
    item.addEventListener('click', () => {
      // cerrar otros
      serviceItems.forEach(i => {
        if (i !== item) i.classList.remove('is-active');
      });

      // toggle actual
      item.classList.toggle('is-active');
    });
  });
document.addEventListener('click', e => {
  if (!e.target.closest('.service-item')) {
    serviceItems.forEach(i => i.classList.remove('is-active'));
  }
});
document.addEventListener('click', e => {
  if (!e.target.closest('.service-item')) {
    serviceItems.forEach(i => i.classList.remove('is-active'));
  }
});


