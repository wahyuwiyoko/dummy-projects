let hamburgerMenu = document.querySelector(".hamburger-menu");
let navMenu = document.querySelector(".nav-menu")

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu li a").forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
