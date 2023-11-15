import structureOfPage from "./modules/structure.js";
import headerStr from "./modules/header.js";

const acs = {};

acs.init = () => {
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = structureOfPage.render();
  const header = document.querySelector(".header");
  header.innerHTML = headerStr.render();
};

acs.init();
