import "./index.scss";
import { initHeader, initNavbar } from "./js/components/Header";
import { initAboutCards } from "./js/components/aboutCards";
import { initSkillsCards } from "./js/components/Skills";

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initNavbar();
  initAboutCards();
  initSkillsCards();
});
