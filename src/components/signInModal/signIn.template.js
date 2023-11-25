export default function createSignInModalForButton() {
  return `
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="loginModalLabel">Create your account</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div>
              <form>
                <div class="row">
                  <div class="col-6">
                    <label for="firstName" class="form-label">First Name </label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                    />
                  </div>
                  <div class="col-6">
                    <label for="lastName" class="form-label">Last Name </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                    />
                  </div>
                </div>
                <div class="mt-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                  />
                </div>
                <div class="mt-3">
                  <label for="inputPassword5" class="form-label">Password</label>
                  <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
                  <div id="passwordHelpBlock" class="form-text">
                  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Create account</button>
          </div>
        </div>
      </div>
    </div>`;
}
