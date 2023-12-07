function createClassesPage(classesCards) {
  return `
  <div class="container">
    <div class="mt-4 ms-5">
      <h2>Classes</h2>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4 mt-3">
      ${classesCards}
    </div>
    <div class="text-center">
      <a class="d-block mx-auto text-primary" style="font-size: 4rem;"><i class="bi bi-plus-circle"></i></a>
      <div class="">Add new Class</div>
    </div>
  </div>`;
}
function createClassesCards(classesData) {
  return `
  <div class="col d-flex justify-content-center">
    <div class="card" style="width: 30rem;">
      <div class="card-body">
        <div class="row justify-content-end">
          <a class="col-1" style="font-size: 20px"><i class="bi bi-pencil-square"></i></a>
          <a class="col-1" style="font-size: 20px"><i class="bi bi-trash-fill"></i></a>
        </div>
        <h5 class="card-title">${classesData.className}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${classesData.teacher.name}</h6>
        <p class="card-text">${classesData.description}</p>
        <a href="#" class="card-link">Students</a>
        <a href="#" class="card-link">Teachers</a>
      </div>
    </div>
  </div>`;
}

export default {
  createClassesPage,
  createClassesCards,
};
