import structureOfPage from "./modules/structure.js";

const acs = {};

acs.init = () => {
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = structureOfPage.render();
};

acs.init();
