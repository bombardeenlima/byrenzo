document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav__link");
  let menuOpen = false;

  const toggleMenu = () => {
    if (!menuOpen) {
      menuBtn.textContent = "Close";
      nav.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.textContent = "Menu";
      nav.classList.remove("open");
      menuOpen = false;
    }
  };

  menuBtn.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.textContent = "Menu";
      nav.classList.remove("open");
      menuOpen = false;
    });
  });
});
