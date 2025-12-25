export const initHeader = () => {
  const headerContainer = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      headerContainer.classList.add("scrolled");
    } else {
      headerContainer.classList.remove("scrolled");
    }
  });
};

export const initNavbar = () => {
  const menuBtn = document.getElementById("menuBtn");
  const navbar = document.querySelector(".nav__list");

  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
};
