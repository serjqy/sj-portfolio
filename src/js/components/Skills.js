import { skillsData } from "../DATA";

const renderSkillsCards = (data, container) => {
  data.forEach(({ category, skills }) => {
    const card = document.createElement("div");
    card.classList.add("skills__card");

    card.innerHTML = `
      <h3 class="skills__card__title">${category}</h3>
      ${skills
        .map(
          ({ name, level, color }) => `
        <div class="skill">
          <div class="skill__header">
            <span>${name}</span>
            <span>${level}%</span>
          </div>
          <div class="skill__bar">
            <div class="skill__progress ${color}" data-progress="${level}"></div>
          </div>
        </div>
      `
        )
        .join("")}
    `;

    container.appendChild(card);
  });
};

const animateSkillBars = () => {
  const bars = document.querySelectorAll(".skill__progress");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.progress + "%";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  bars.forEach((bar) => observer.observe(bar));
};

const renderSkillTags = (data, container) => {
  const names = data.flatMap((c) => c.skills.map((skill) => skill.name));

  names.forEach((name) => {
    const tag = document.createElement("li");
    tag.classList.add("tag", "tag-d");
    tag.textContent = name;
    container.appendChild(tag);
  });
};

export const initSkillsCards = () => {
  const skillsHeader = document.querySelector(".skills__header");
  const skillsTags = document.querySelector(".skills__tags");

  if (!skillsHeader) return;

  renderSkillsCards(skillsData, skillsHeader);
  animateSkillBars();

  if (skillsTags) {
    renderSkillTags(skillsData, skillsTags);
  }
};
