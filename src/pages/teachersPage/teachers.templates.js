function createTechersPage(teachersCards) {
  return `
  <div class="container">
    <div class="mt-4 ms-5">
      <h2>Teachers</h2>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4 mt-3">
      ${teachersCards}
    </div>
    <div class="text-center">
      <a href="#" class="d-block mx-auto text-primary" id="addTeacherBtn" data-bs-toggle="modal" data-bs-target="#teachersForm" style="font-size: 4rem;"><i class="bi bi-plus-circle"></i></a>
      <div class="">Add new Teacher</div>
    </div>
  </div>`;
}

function createTeachersCards(teacher) {
  return `
  <div class="col d-flex justify-content-center">
    <div class="card" style="width: 30rem;">
      <div class="card-body">
        <div class="d-flex gap-2 mb-1 offset-7">
          <button type="button" class="edit_teacher-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#teachersForm" id="${teacher.id}" data-action="edit" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"></path>
          </svg>  Edit</button>
          <button type="button" class="delete_teacher-button btn btn-secondary" id="${teacher.id}" "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"></path>
          </svg>  Delete</button>
        </div>
        <h5 class="card-title">${teacher.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${teacher.class}</h6>
        <p class="card-text">${teacher.description}</p>
        <a href="#" class="card-link">Students</a>
        <a href="#" class="card-link">Teachers</a>
      </div>
    </div>
  </div>`;
}

export default {
  createTechersPage,
  createTeachersCards,
};
