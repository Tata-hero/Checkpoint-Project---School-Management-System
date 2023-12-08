function createStudentsPage(studentsCards) {
  return `
  <div class="container">
    <div class="mt-4 ms-5">
      <h2>Students</h2>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4 mt-3">
      ${studentsCards}
    </div>
    <div class="text-center">
      <a class="d-block mx-auto text-primary" id="addStudentBtn" data-bs-toggle="modal" data-bs-target="#studentForm" style="font-size: 4rem;"><i class="bi bi-plus-circle"></i></a>
      <div>Add new Student</div>
    </div>
  </div>`;
}

function createStudentsCards(student, calculateAverageGrade) {
  return `
  <div class="col d-flex justify-content-center">
    <div class="card" style="width: 30rem;">
      <div class="card-body">
        <div class="row justify-content-end">
          <a class="col-1" style="font-size: 20px"><i class="bi bi-pencil-square"></i></a>
          <a class="col-1" style="font-size: 20px"><i class="bi bi-trash-fill"></i></a>
        </div>
        <h5 class="card-title">${student.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${student.class}</h6>
        <p class="card-text">${student.description}</p>
        <div class="text-primary">Average Grade: ${calculateAverageGrade}</div>
      </div>
    </div>
  </div>`;
}

export default {
  createStudentsPage,
  createStudentsCards,
};
