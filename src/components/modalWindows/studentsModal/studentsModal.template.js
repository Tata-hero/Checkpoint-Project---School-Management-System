export default function addStudentModalWindow() {
  return `
    <div class="container mt-5">
    <h2 class="mb-4">Student Information Form</h2>
    <form id="studentForm">
      <div class="form-group">
        <label for="studentName">Name:</label>
        <input type="text" class="form-control" id="studentName" placeholder="Enter student name" required>
      </div>
      <div class="form-group">
        <label for="classSelect">Class:</label>
        <select class="form-control" id="classSelect" required>
          <option value="Software Testing">Software Testing</option>
          <option value="Fullstack Web Programming">Fullstack Web Programming</option>
          <option value="AWS Cloud Engineering">AWS Cloud Engineering</option>
        </select>
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea class="form-control" id="description" placeholder="Enter student description"></textarea>
      </div>
      <button type="button" class="btn btn-primary" id="addNewStudent">Submit</button>
    </form>
  </div>
`;
}
