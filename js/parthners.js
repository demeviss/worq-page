 const testimonials = document.querySelectorAll('.testimonial');
const plusGrid = document.querySelector('.testimonials-plus');
let index = 0;

setInterval(() => {
  testimonials[index].classList.remove('active');
  plusGrid.classList.remove('active');

  index = (index + 1) % testimonials.length;

  testimonials[index].classList.add('active');
  plusGrid.classList.add('active');
}, 5000);