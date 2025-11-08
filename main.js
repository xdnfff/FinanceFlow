const navBtn = document.querySelector(".header__nav-btn");
const nav = document.querySelector(".header__nav");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("nav--open");
});
