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
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Classes</a>
            <a class="nav-link" href="#">Teachers</a>
            <a class="nav-link" href="#">Students</a>
          </div>
        </div>
      </div>
      <div>
        <button type="button" class="btn btn-primary me-4 custom-icon-btn" data-bs-toggle="modal" data-bs-target="#loginModal">
          <i class="bi bi-person-circle"></i> 
        </button>
      </div>
    </nav>
    `;
}
