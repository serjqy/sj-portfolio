import { aboutCardsData } from "../data";
import { animateItem, animateItems } from "./Animation";

const renderCards = (container) => {
  aboutCardsData.forEach(({ icon, title, description }) => {
    const card = document.createElement("div");
    card.classList.add("about__card", "hidden");

    card.innerHTML = `
    <div class="about__card__icon">
        <i class="fa-solid ${icon}"></i>
    </div>
    <h4 class="about__card__title">${title}</h4>
    <p class="about__card__description text-p">${description}</p>
      `;

    container.appendChild(card);
  });
};

export const initAboutCards = () => {
  const cardsContainer = document.querySelector(".about__right");

  if (!cardsContainer) return;
  renderCards(cardsContainer);

  animateItems(".about__card");
  animateItem(".about__left");
};
