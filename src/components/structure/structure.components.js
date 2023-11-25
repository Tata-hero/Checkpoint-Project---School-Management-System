import structureOfPage from "./structure.template.js";

function init() {
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = structureOfPage();
}

export default { init };
