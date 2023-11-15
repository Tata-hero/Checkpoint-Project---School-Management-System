import { createNavigation } from "../templates/header.js";

const menuItems = ["Home", "Classes", "Teachers", "Students"];

const render = () => {
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

export default {
  render,
};
