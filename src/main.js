import "./index.scss";
import { initHeader } from "./js/components/Header";
import { initAboutCards } from "./js/components/About";
import { initSkillsCards } from "./js/components/Skills";
import { initProjects } from "./js/components/Projects";
import { initHeroStars } from "./js/components/Stars";
import { initForm } from "./js/components/Form";

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initAboutCards();
  initSkillsCards();
  initProjects();
  initHeroStars();
  initForm();
});
