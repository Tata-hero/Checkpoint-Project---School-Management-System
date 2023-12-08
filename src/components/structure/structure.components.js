import structureOfPage from "./structure.template.js";
import pagesContent from "../content.js";

function init() {
  getElement().innerHTML = structureOfPage();
}

function addNavbar(contentNavbar) {
  getElementHeader().innerHTML = contentNavbar;
}

function addSignInModal(contentModal) {
  getElement().insertAdjacentHTML("afterend", contentModal);
}

function addEventListener() {
  getElementHeader().addEventListener("click", function (event) {
    switch (event.target.id) {
      case "menu-home":
        pagesContent.homePage();
        break;
      case "menu-classes":
        pagesContent.classesPage();
        break;
      case "menu-teachers":
        pagesContent.teachersPage();
        break;
      case "menu-students":
        pagesContent.studentsPage();
        break;
      default:
        console.log("this page is not created yet.");
    }
  });
}

function addFooter(contentFooter) {
  const footerPart = document.querySelector(".footer");
  footerPart.innerHTML = contentFooter;
}

function getElement() {
  return document.querySelector(".wrapper");
}

function getElementHeader() {
  return document.querySelector(".header");
}

export default { init, addNavbar, addSignInModal, addFooter, addEventListener };
