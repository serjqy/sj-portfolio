import { projectsData } from "../data";
import { animateItems } from "./Animation";

const createProjectCard = (item, variant = "featured") => {
  const tagClass = variant === "featured" ? "tag-g" : "tag-d";

  const card = document.createElement("div");
  card.classList.add("card", "hidden", `card-${variant}`);

  card.innerHTML = `
    <div class="card__header">
      <img src="${item.image}" alt="${item.title}" class="card__image"/>
      <div class="card__cta">
        <a href="${item.gitLink}" class="card__link" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="${item.demoLink}" class="card__link" target="_blank">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>

    <div class="card__footer">
      <h2 class="card__footer__title">${item.title}</h2>
      <p class="card__footer__description text-p">${item.description}</p>

      <ul class="card__tags">
        ${item.tags
          .map((tag) => `<li class="card__tag tag ${tagClass}">${tag}</li>`)
          .join("")}
      </ul>
    </div>
  `;

  return card;
};

const renderProjects = (data, container, variant, predicate) => {
  data.filter(predicate).forEach((item) => {
    container.appendChild(createProjectCard(item, variant));
  });
};

export const initProjects = () => {
  const projectsFeatured = document.querySelector(".projects__featured");
  const projectsOther = document.querySelector(".projects__other");

  if (!projectsFeatured) return;
  renderProjects(projectsData, projectsFeatured, "featured", (p) => p.featured);
  animateItems(".card-featured");

  if (!projectsOther) return;
  renderProjects(projectsData, projectsOther, "other", (p) => !p.featured);
  animateItems(".card-other");
};
