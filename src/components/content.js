import homePageTemplate from "../pages/home.js";

function homePage() {
  render(homePageTemplate());
}

function render(content) {
  document.querySelector(".main").innerHTML = content;
}

export default {
  homePage,
  render,
};
