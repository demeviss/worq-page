const activeImage = document.getElementById('activeImage');
const thumbs = document.querySelectorAll('.gallery-thumbs img');
const dots = document.querySelectorAll('.gallery-dots .dot');

thumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {

    activeImage.classList.remove('active');

    setTimeout(() => {
      activeImage.src = thumb.src;
      activeImage.classList.add('active');
    }, 200);

    thumbs.forEach(t => t.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    thumb.classList.add('active');
    dots[index].classList.add('active');
  });
});


