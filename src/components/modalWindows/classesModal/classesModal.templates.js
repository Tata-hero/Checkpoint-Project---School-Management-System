export default function createClassesModalWindow() {
  return `
    <div class="modal fade" id="classesForm" tabindex="-1" aria-labelledby="classesFormLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="classesFormLabel">Classes Information Form</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="classesForms">
              <div class="form-group">
                <label for="className">Class name:</label>
                <input type="text" class="form-control mt-2" id="className" placeholder="Enter a class name" required>
              </div>
              <div class="form-group mt-3">
                <label for="teacherName">Teacher:</label>
                <input type="text" class="form-control mt-2" id="teacherName" placeholder="Enter the teacher name" required>
              </div>
              <div class="form-group mt-3">
                <label for="classDescription">Description:</label>
                <textarea class="form-control mt-2" id="classDescription" placeholder="Enter class description"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="addNewClass">Submit</button>
          </div>
        </div>
      </div>
    </div>
`;
}
