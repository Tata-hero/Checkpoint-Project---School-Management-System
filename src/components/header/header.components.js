import {
  createLogo,
  createNavigation,
  createAccountIcon,
} from "./header.template.js";

const menuItems = ["Home", "Classes", "Teachers", "Students"];

const renderLogo = createLogo;

const renderNav = () => {
  const navigationContent = menuItems
    .map(
      (menuItem) => `
      <li class="menu_list-item">
        <a href="#" class="menu_list-link"> ${menuItem}</a>
      </li>`
    )
    .join("");
  return createNavigation(navigationContent);
};

const renderAccountIcon = createAccountIcon;

export default { renderLogo, renderNav, renderAccountIcon };
