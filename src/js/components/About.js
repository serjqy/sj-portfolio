import { aboutCardsData } from "../data";

export const initAboutCards = () => {
  const cardsContainer = document.querySelector(".about__right");

  aboutCardsData.forEach(({ icon, title, description }) => {
    const card = document.createElement("div");
    card.classList.add("about__card");

    card.innerHTML = `
    <div class="about__card__icon">
        <i class="fa-solid ${icon}"></i>
    </div>
    <h4 class="about__card__title">${title}</h4>
    <p class="about__card__description text-p">${description}</p>
      `;

    cardsContainer.appendChild(card);
  });
};
