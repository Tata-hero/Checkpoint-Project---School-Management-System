import structureOfPage from "../modules/structure.js";
import headerStr from "../header/header.component.js";

const acs = {};

acs.init = () => {
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = structureOfPage.render();
  const headerContainer = document.querySelector(".header>.container");
  headerContainer.innerHTML = ` ${headerStr.renderLogo()} ${headerStr.renderNav()} ${headerStr.renderAccountIcon()}`;
};

acs.init();
