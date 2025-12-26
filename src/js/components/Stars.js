export const initHeroStars = () => {
  const container = document.querySelector(".hero__stars");
  if (!container) return;

  const stars = 320;

  for (let i = 0; i < stars; i++) {
    const star = document.createElement("span");
    star.classList.add("hero__star");

    const size = Math.random() * 2 + 1;
    const duration = Math.random() * 4 + 2;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${duration}s`;

    container.appendChild(star);
  }
};
