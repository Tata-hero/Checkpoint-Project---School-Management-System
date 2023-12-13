import homePageTemplate from "../pages/home.js";

import teachersData from "../LMS_data/teachers_data.js";
import classesData from "../LMS_data/classes_data.js";
import teachersPageTemplate from "../pages/teachers.js";
import studentsPageComponents from "../pages/studentsPage/students.components.js";
import classesPageComponents from "../pages/classesPage/classes.components.js";

function homePage() {
  render(homePageTemplate());
  countStudents();
  countTeachers();
  countClasses();
}

function countClasses() {
  const classesCounter = document.querySelector(".counter_classes");
  classesCounter.innerHTML = classesPageComponents
    .updatedClassesData()
    .length.toString();
}

function countStudents() {
  const studentCounter = document.querySelector(".counter_students");
  studentCounter.innerHTML = studentsPageComponents
    .updateStudentsData()
    .length.toString();
}

function countTeachers() {
  const teachersCounter = document.querySelector(".counter_teachers");
  teachersCounter.innerHTML = teachersData.length.toString();
}

function classesPage() {
  render(classesPageComponents.displayClassesPage());
  renderModalWindows(classesPageComponents.addClassModalWindow());
  classesPageComponents.classesModalFunctionality();
  classesPageComponents.handleDeleteClassCard();
  classesPageComponents.displayClassInformation();
  classesPageComponents.setCurrentActionForAddBtn();
}

function teachersCards() {
  return teachersData
    .map((data) => teachersPageTemplate.createTeachersCards(data))
    .join("");
}

function teachersPage() {
  render(teachersPageTemplate.createTechersPage(teachersCards()));
}

function studentsPage() {
  render(studentsPageComponents.displayStudentsPage());
  renderModalWindows(studentsPageComponents.addStudentModalWindow());
  studentsPageComponents.studentModalFunctionality();
  studentsPageComponents.handleDeleteStudentCard();
  studentsPageComponents.displayStudentInformation();
  studentsPageComponents.setCurrentActionForAddBtn();
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
