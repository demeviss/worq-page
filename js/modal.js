const buttons = document.querySelectorAll('.team-btn');
const modal = document.getElementById('teamModal');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
const modalBio = document.getElementById('modalBio');
const modalEmail = document.getElementById('modalEmail');
const modalLinkedin = document.getElementById('modalLinkedin');
const closeBtn = document.querySelector('.modal-close');
const overlay = document.querySelector('.modal-overlay');

buttons.forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    e.preventDefault();

    modalName.textContent = btn.dataset.name;
    modalRole.textContent = btn.dataset.role;
    modalBio.textContent = btn.dataset.bio;

    // 👇 NUEVO
    modalEmail.href = "mailto:" + btn.dataset.email;
    modalLinkedin.href = btn.dataset.linkedin;

    modal.classList.add('active');
  });
});

closeBtn.addEventListener('click', ()=> modal.classList.remove('active'));
overlay.addEventListener('click', ()=> modal.classList.remove('active'));

