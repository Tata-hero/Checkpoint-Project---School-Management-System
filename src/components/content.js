import homePageTemplate from "../pages/home.js";
import studentsData from "../LMS_data/students_data.js";
import teachersData from "../LMS_data/teachers_data.js";
import classesData from "../LMS_data/classes_data.js";
import classesPageTemplate from "../pages/classes.js";
import teachersPageTemplate from "../pages/teachers.js";
import studentsPageTemplate from "../pages/students.js";
import studentModalWindow from "./modalWindows/studentsModal/studentsModal.components.js";

function updateStudentsData() {
  const storedStudentsData =
    studentModalWindow.getItemFromStorage("allStudents") || [];
  return storedStudentsData;
}

function homePage() {
  render(homePageTemplate());
  countStudents();
  countTeachers();
  countClasses();
}

function countStudents() {
  const studentCounter = document.querySelector(".counter_students");
  studentCounter.innerHTML = updateStudentsData().length.toString();
}

function countTeachers() {
  const teachersCounter = document.querySelector(".counter_teachers");
  teachersCounter.innerHTML = teachersData.length.toString();
}

function countClasses() {
  const classesCounter = document.querySelector(".counter_classes");
  classesCounter.innerHTML = classesData.length.toString();
}

function classesCards() {
  return classesData
    .map((data) => classesPageTemplate.createClassesCards(data))
    .join("");
}

function classesPage() {
  render(classesPageTemplate.createClassesPage(classesCards()));
}

function teachersCards() {
  return teachersData
    .map((data) => teachersPageTemplate.createTeachersCards(data))
    .join("");
}

function teachersPage() {
  render(teachersPageTemplate.createTechersPage(teachersCards()));
}

function studentsCards() {
  return updateStudentsData()
    .map((student) =>
      studentsPageTemplate.createStudentsCards(
        student,
        calculateAverageGrade(student)
      )
    )
    .join("");
}

function calculateAverageGrade(student) {
  const totalGrades = student.subjects.reduce(
    (sum, subject) => sum + subject.grade,
    0
  );
  const averageGrade = totalGrades / student.subjects.length;
  const roundedAverage = averageGrade.toFixed(1);

  return roundedAverage;
}

function studentsPage() {
  render(studentsPageTemplate.createStudentsPage(studentsCards()));
  renderModalWindows(studentModalWindow.addStudentModalWindow());
  studentModalWindow.setupStudentModalFunctionality(studentsData);
}

function render(content) {
  document.querySelector(".main").innerHTML = content;
}

function renderModalWindows(modalWindow) {
  return document
    .querySelector(".wrapper")
    .insertAdjacentHTML("afterend", modalWindow);
}

export default {
  homePage,
  classesPage,
  teachersPage,
  studentsPage,
  render,
};
