import homePageTemplate from "../pages/home.js";
import studentsPageComponents from "../pages/studentsPage/students.components.js";
import classesPageComponents from "../pages/classesPage/classes.components.js";
import teachersPageComponents from "../pages/teachersPage/teachers.components.js";

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
  teachersCounter.innerHTML = teachersPageComponents
    .updatedTeachersData()
    .length.toString();
}

function classesPage() {
  render(classesPageComponents.displayClassesPage());
  renderModalWindows(classesPageComponents.addClassModalWindow());
  renderModalWindows(classesPageComponents.displayShowStudentsModal());
  classesPageComponents.handleShowListOfStudents();
  classesPageComponents.displayShowStudentsModal();
  classesPageComponents.classesModalFunctionality();
  classesPageComponents.handleDeleteClassCard();
  classesPageComponents.displayClassInformation();
  classesPageComponents.setCurrentActionForAddBtn();
}

function teachersPage() {
  render(teachersPageComponents.displayTeachersPage());
  renderModalWindows(teachersPageComponents.addTeacherModalWindow());
  teachersPageComponents.teachersModalFunctionality();
  teachersPageComponents.handleDeleteTeacherCard();
  teachersPageComponents.displayTeacherInformation();
  teachersPageComponents.setCurrentActionForAddBtn();
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
