import classesData from "../../LMS_data/classes_data.js";
import classesPageTemplate from "./classes.template.js";
import classesModalWindow from "../../components/modalWindows/classesModal/classesModal.components.js";
import pagesContent from "../../components/content.js";
import studentsPageComponents from "../studentsPage/students.components.js";
import { createShowStudentsModalTemplate } from "../../components/modalWindows/classesModal/showStudentsModal.js";

function classesCards() {
  return updatedClassesData()
    .map((classItem) => classesPageTemplate.createClassesCards(classItem))
    .join("");
}

function displayClassesPage() {
  return classesPageTemplate.createClassesPage(classesCards());
}

function addClassModalWindow() {
  return classesModalWindow.createClassesModalWindow();
}

function classesModalFunctionality() {
  return classesModalWindow.setupClassModalFunctionality(
    handleAddClass,
    handleEditClass
  );
}

if (localStorage.getItem("allClasses") === null) {
  localStorage.setItem("allClasses", JSON.stringify(classesData));
}

function handleAddClass() {
  const { classNameInput, teacherNameInput, classDescriptionInput } =
    classesModalWindow.getFormElements();

  const className = classNameInput.value;
  const teacherName = teacherNameInput.value;
  const classDescription = classDescriptionInput.value;

  const classesFromStorage = getItemFromStorage("allClasses");

  const newClass = {
    id: (classesFromStorage.length + 1).toString(),
    className: className,
    teacherName: teacherName,
    description: classDescription,
  };

  if (
    !classesFromStorage.some(
      (classItem) => classItem.className === newClass.className
    )
  ) {
    classesFromStorage.push(newClass);
  }

  setItemToStorage("allClasses", classesFromStorage);

  pagesContent.classesPage();
}

function handleDeleteClassCard() {
  const classesContainer = document.querySelector(".main");

  classesContainer.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("delete_class-button") ||
      e.target.closest(".delete_class-button")
    ) {
      const classId = e.target.id;

      getClassIndexById(classId);

      if (getClassIndexById(classId) !== -1) {
        const classesFromStorage = getItemFromStorage("allClasses");
        classesFromStorage.splice(getClassIndexById(classId), 1);
        setItemToStorage("allClasses", classesFromStorage);
      }

      pagesContent.classesPage();
    }
  });
}

function displayClassInformation() {
  const classesContainer = document.querySelector(".main");

  classesContainer.addEventListener("click", function (e) {
    classesModalWindow.getClassFormInformation(
      e,
      getItemFromStorage,
      getClassIndexById
    );
  });
}

function handleEditClass() {
  const {
    submitButton,
    classNameInput,
    teacherNameInput,
    classDescriptionInput,
  } = classesModalWindow.getFormElements();

  const editedClassName = classNameInput.value;
  const editedTeacherName = teacherNameInput.value;
  const editedClassDescription = classDescriptionInput.value;

  const classesFromStorage = getItemFromStorage("allClasses");
  const editedClassId = parseInt(
    submitButton.getAttribute("data-class-id"),
    10
  );
  const editedClassIndex = getClassIndexById(editedClassId.toString());
  if (editedClassIndex !== -1) {
    const editedClass = classesFromStorage[editedClassIndex];
    editedClass.className = editedClassName;
    editedClass.teacherName = editedTeacherName;
    editedClass.description = editedClassDescription;

    setItemToStorage("allClasses", classesFromStorage);
    pagesContent.classesPage();
  }
}

function setCurrentActionForAddBtn() {
  const addButton = document.querySelector("#addClassBtn");

  addButton.addEventListener("click", function () {
    classesModalWindow.setCurrentAction("add");
  });
}

function getClassIndexById(classId) {
  const classesFromStorage = getItemFromStorage("allClasses");

  const classIndex = classesFromStorage.findIndex(
    (classItem) => classItem.id === classId
  );

  return classIndex;
}

function updatedClassesData() {
  const storedClassesData = getItemFromStorage("allClasses") || [];
  return storedClassesData;
}

function createStudentsOfClass(classId) {
  const classesFromStorage = getItemFromStorage("allClasses");
  const currentClass = classesFromStorage[getClassIndexById(classId)];

  const modalTitel = currentClass.className;

  const studentsList = studentsPageComponents
    .updateStudentsData()
    .filter((student) => student.class === currentClass.className)
    .map((student) => `<li class="list-group-item">${student.name}</li>`)
    .join("");

  return { studentsList, modalTitel };
}

function handleShowListOfStudents() {
  const classesContainer = document.querySelector(".main");
  classesContainer.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("showStudents") ||
      e.target.closest(".showStudents")
    ) {
      const classId = e.target.id;

      const listOfStudents = document.querySelector("#listOfStudents");
      listOfStudents.innerHTML = createStudentsOfClass(classId).studentsList;

      const titleOfModal = document.querySelector("#showStudentsLabel");
      titleOfModal.innerHTML = `Students of ${
        createStudentsOfClass(classId).modalTitel
      } class`;
    }
  });
}

function displayShowStudentsModal() {
  return createShowStudentsModalTemplate();
}

function getItemFromStorage(pKey) {
  const classesFromStorage = JSON.parse(localStorage.getItem(pKey));
  return classesFromStorage;
}

function setItemToStorage(pKey, value) {
  localStorage.setItem(pKey, JSON.stringify(value));
}

export default {
  displayClassesPage,
  addClassModalWindow,
  classesModalFunctionality,
  handleDeleteClassCard,
  displayClassInformation,
  updatedClassesData,
  setCurrentActionForAddBtn,
  handleShowListOfStudents,
  displayShowStudentsModal,
};
