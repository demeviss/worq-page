const menuBtn = document.querySelector('.menu-btn');
const menuIcon = menuBtn.querySelector('i');
const menuOverlay = document.querySelector('.menu-overlay');
const menuBackdrop = document.querySelector('.menu-backdrop');

function closeMenu() {
  menuOverlay.classList.remove('active');
  menuIcon.classList.remove('fa-xmark');
  menuIcon.classList.add('fa-bars');
}

menuBtn.addEventListener('click', () => {
  const isOpen = menuOverlay.classList.toggle('active');

  if (isOpen) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  } else {
    closeMenu();
  }
});

menuBackdrop.addEventListener('click', closeMenu);



