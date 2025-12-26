import "./index.scss";
import { initHeader, initNavbar } from "./js/components/Header";
import { initAboutCards } from "./js/components/About";
import { initSkillsCards } from "./js/components/Skills";
import { initProjects } from "./js/components/Projects";

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initNavbar();
  initAboutCards();
  initSkillsCards();
  initProjects();
});
