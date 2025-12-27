export const animateItems = (selector) => {
  const items = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.replace("hidden", "show");
      } else {
        entry.target.classList.replace("show", "hidden");
      }
    });
  });
  items.forEach((item) => observer.observe(item));
};

export const animateItem = (selector) => {
  const item = document.querySelector(selector);

  if (!item) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  observer.observe(item);
};
