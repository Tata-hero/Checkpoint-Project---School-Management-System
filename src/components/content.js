import homePageTemplate from "../pages/home.js";
import studentsData from "../LMS_data/students_data.js";
import teachersData from "../LMS_data/teachers_data.js";

function homePage() {
  render(homePageTemplate());
  countStudents();
  countTeachers();
}

function countStudents() {
  const studentCounter = document.querySelector(".counter_students");
  studentCounter.innerHTML = studentsData.length.toString();
}

function countTeachers() {
  const teachersCounter = document.querySelector(".counter_teachers");
  teachersCounter.innerHTML = teachersData.length.toString();
}

function render(content) {
  document.querySelector(".main").innerHTML = content;
}

export default {
  homePage,
  render,
};
