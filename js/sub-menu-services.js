document.querySelectorAll('.submenu-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.menu-item');
    item.classList.toggle('open');
  });
});
