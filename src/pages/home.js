export default function createHomePage() {
  return `
    <div class="container  mt-4">
      <h2 class="my-5 fs-1">Welcome, Friend!</h2>
      <div class="row row-cols-1 row-cols-md-3 mx-auto">
        <div class="col">
          <div class="card" style="height: 200px">
            <div class="card-body d-flex flex-column align-items-center justify-content-center">
            <div class="counter_students fs-4">0</div>
              <p class="card-text fs-4">number of students</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="height: 200px">
            <div class="card-body d-flex flex-column align-items-center justify-content-center">
              <div class="counter_teachers fs-4">0</div>
              <p class="card-text fs-4">number of teachers</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="height: 200px">
            <div class="card-body d-flex flex-column align-items-center justify-content-center">
            <div class="counter_classes fs-4">0</div>
              <p class="card-text fs-4">number of classes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
