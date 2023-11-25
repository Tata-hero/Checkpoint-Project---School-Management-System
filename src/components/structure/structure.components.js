import structureOfPage from "./structure.template.js";

function init() {
  getElement().innerHTML = structureOfPage();
}

function addNavbar(contentNavbar) {
  const headerPart = document.querySelector(".header");
  headerPart.innerHTML = contentNavbar;
}

function addSignInModal(contentModal) {
  getElement().insertAdjacentHTML("afterend", contentModal);
}

function getElement() {
  return document.querySelector(".wrapper");
}

export default { init, addNavbar, addSignInModal };
