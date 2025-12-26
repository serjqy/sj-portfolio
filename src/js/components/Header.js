const renderHeader = () => {
  const headerContainer = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      headerContainer.classList.add("scrolled");
    } else {
      headerContainer.classList.remove("scrolled");
    }
  });
};

const renderNavbar = () => {
  const menuBtn = document.getElementById("menuBtn");
  const navbar = document.querySelector(".nav__list");
  const navLinks = document.querySelectorAll(".nav__link");

  function navbarIcon() {
    if (navbar.classList.contains("active")) {
      menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
      menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  }

  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    navbarIcon();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      navbarIcon();
    });
  });
};

export const initHeader = () => {
  renderHeader();
  renderNavbar();
};
