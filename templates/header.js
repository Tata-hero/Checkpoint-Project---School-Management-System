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
