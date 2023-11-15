import {
  createLogo,
  createNavigation,
  createAccountIcon,
} from "../templates/header.js";

const menuItems = ["Home", "Classes", "Teachers", "Students"];

const renderLogo = createLogo;

const renderNav = () => {
  const navigationContent = menuItems
    .map(
      (menuItem) => `
      <li class="menu_item">
        <a href="#" class="menu_link"> ${menuItem}</a>
      </li>`
    )
    .join("");
  return createNavigation(navigationContent);
};

const renderAccountIcon = createAccountIcon;

export default { renderLogo, renderNav, renderAccountIcon };
