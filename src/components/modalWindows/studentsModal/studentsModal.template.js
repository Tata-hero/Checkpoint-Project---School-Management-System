export default function createStudentModalWindow() {
  return `
    <div class="modal fade" id="studentForm" tabindex="-1" aria-labelledby="studentFormLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="studentFormLabel">Student Information Form</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="studentForms">
              <div class="form-group">
                <label for="studentName">Name:</label>
                <input type="text" class="form-control mt-2" id="studentName" placeholder="Enter student first and last name" required>
              </div>
              <div class="form-group mt-3">
                <label for="classSelect">Class:</label>
                <select class="form-control mt-2" id="classSelect" required>
                  <option value="Software Testing">Software Testing</option>
                  <option value="Fullstack Web Programming">Fullstack Web Programming</option>
                  <option value="AWS Cloud Engineering">AWS Cloud Engineering</option>
                </select>
              </div>
              <div class="form-group mt-3">
                <label for="description">Description:</label>
                <textarea class="form-control mt-2" id="description" placeholder="Enter student description"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="addNewStudent">Submit</button>
          </div>
        </div>
      </div>
    </div>
`;
}
