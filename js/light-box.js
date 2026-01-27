 document.querySelectorAll('.gallery-grid:not(.no-lightbox) img')

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-image');
  const lightboxClose = document.querySelector('.lightbox-close');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });