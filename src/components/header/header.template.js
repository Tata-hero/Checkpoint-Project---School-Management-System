export default function createNavbar() {
  return `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold ms-4" href="#">NOT BAD GIRL</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-5 fs-5">
            <a class="nav-link" id="menu-home" aria-current="page" href="#">Home</a>
            <a class="nav-link" id="menu-classes" href="#">Classes</a>
            <a class="nav-link" id="menu-teachers" href="#">Teachers</a>
            <a class="nav-link" id="menu-students" href="#">Students</a>
          </div>
        </div>
      </div>
      <div>
        <a href="#" class="text-dark fs-1 me-5" data-bs-toggle="modal" data-bs-target="#loginModal">
          <i class="bi bi-person-circle"></i> 
        </a>
      </div>
    </nav>
    `;
}
