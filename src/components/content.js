import homePageTemplate from "../pages/home.js";
import studentsData from "../LMS_data/students_data.js";

function homePage() {
  render(homePageTemplate());
  countStudents();
}

function countStudents() {
  const studentCounter = document.querySelector(".counter_students");
  studentCounter.innerHTML = studentsData.length.toString();
}

function render(content) {
  document.querySelector(".main").innerHTML = content;
}

export default {
  homePage,
  render,
};
