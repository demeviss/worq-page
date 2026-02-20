// BACK BUTTON HIDE
const backBtn = document.querySelector(".about-back");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    backBtn.style.opacity = "0";
  } else {
    backBtn.style.opacity = "1";
  }
});

// FAQ
const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
