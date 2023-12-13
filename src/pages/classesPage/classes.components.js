import classesData from "../../LMS_data/classes_data.js";
import classesPageTemplate from "./classes.template.js";
import classesModalWindow from "../../components/modalWindows/classesModal/classesModal.components.js";
import pagesContent from "../../components/content.js";

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
  console.log(editedClassId);
  const editedClassIndex = getClassIndexById(editedClassId.toString());
  console.log(editedClassIndex);
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
};
