export default function createHomePage() {
  return `
    <div class="container  mt-4">
      <div class="row row-cols-1 row-cols-md-3 mx-auto">
        <div class="col">
          <div class="card">
            <div class="card-body d-flex flex-column align-items-center justify-content-center">
            <div class="counter_students">0</div>
              <p class="card-text">number of students</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body d-flex flex-column align-items-center justify-content-center">
              <div class="counter_teachers">0</div>
              <p class="card-text">number of teachers</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body d-flex flex-column align-items-center justify-content-center">
            <div class="counter_classes">0</div>
              <p class="card-text">number of classes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
