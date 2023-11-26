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

function addFooter(contentFooter) {
  const footerPart = document.querySelector(".footer");
  footerPart.innerHTML = contentFooter;
}

function getElement() {
  return document.querySelector(".wrapper");
}

export default { init, addNavbar, addSignInModal, addFooter };
