import homePageTemplate from "../pages/home.js";
import studentsData from "../LMS_data/students_data.js";
import teachersData from "../LMS_data/teachers_data.js";
import classesData from "../LMS_data/classes_data.js";
import classesPageTemplate from "../pages/classes.js";
import teachersPageTemplate from "../pages/teachers.js";

function homePage() {
  render(homePageTemplate());
  countStudents();
  countTeachers();
  countClasses();
}

function countStudents() {
  const studentCounter = document.querySelector(".counter_students");
  studentCounter.innerHTML = studentsData.length.toString();
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
    .map((data) => classesPageTemplate.createClassesPage(data))
    .join("");
}

function classesPage() {
  const classesHeadingTemplate = classesPageTemplate.createClassesHeading();
  const classesAddBtn = classesPageTemplate.createAddButton();

  const classesRowTemplate = classesPageTemplate.createClassesRow(
    classesCards()
  );

  const classesContainerTemplate = classesPageTemplate.createClassesContainer(
    classesHeadingTemplate + classesRowTemplate + classesAddBtn
  );

  render(classesContainerTemplate);
}

function teachersCards() {
  return teachersData
    .map((data) => teachersPageTemplate.createTeachersCards(data))
    .join("");
}

function teachersPage() {
  render(teachersPageTemplate.createTechersPage(teachersCards()));
}

function render(content) {
  document.querySelector(".main").innerHTML = content;
}

export default {
  homePage,
  classesPage,
  teachersPage,
  render,
};
