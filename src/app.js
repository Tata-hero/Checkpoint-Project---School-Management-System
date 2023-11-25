import structureOfPage from "./components/structure/structure.components.js";
import navbar from "./components/header/header.components.js";
import signInModal from "./components/signInModal/signIn.components.js";

const acs = {};

acs.init = () => {
  structureOfPage.init();
  structureOfPage.addNavbar(navbar.render());
  structureOfPage.addSignInModal(signInModal.render());
};

acs.init();
