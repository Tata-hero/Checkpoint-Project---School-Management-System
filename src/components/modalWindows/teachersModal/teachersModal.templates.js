export default function createTeacherModalWindow() {
  return `
    <div class="modal fade" id="teachersForm" tabindex="-1" aria-labelledby="teachersFormLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="teachersFormLabel">Teachers Information Form</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="teachersForm">
              <div class="form-group">
                <label for="teacherName">Teacher:</label>
                <input type="text" class="form-control mt-2" id="teacherName" placeholder="Enter the teacher name" required>
              </div>
              <div class="form-group mt-3">
                <label for="className">Class:</label>
                <input type="text" class="form-control mt-2" id="className" placeholder="Enter a class name" required>
              </div>
              <div class="form-group mt-3">
                <label for="teacherDescription">Description:</label>
                <textarea class="form-control mt-2" id="teacherDescription" placeholder="Enter teacher description"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="addNewTeacher">Submit</button>
          </div>
        </div>
      </div>
    </div>
`;
}
