// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = function () {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk keluar dr sidebar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
