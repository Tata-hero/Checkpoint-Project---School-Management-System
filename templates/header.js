export function createLogo() {
  return `
  <a class="logo" href="#">
    <img class="logo_img" src="../img/logoDraft.png" alt="logo">
  </a>`;
}

export function createNavigation(menuItem) {
  return `
    <nav>
      <div class="container">
        <ul class="menu">
          ${menuItem}
        </ul>
      </div>
    </nav>`;
}

export function createAccountIcon() {
  return `
  <a class="account_icon" href="#">
    <img class="account_icon_img" src="../img/account_icon.png" alt="logo">
  </a>`;
}
