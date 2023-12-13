import createClassesModalWindow from "./classesModal.templates.js";

export function getFormElements() {
  const submitButton = document.querySelector("#addNewClass");
  const classNameInput = document.getElementById("className");
  const teacherNameInput = document.getElementById("teacherName");
  const classDescriptionInput = document.getElementById("classDescription");

  return {
    submitButton,
    classNameInput,
    teacherNameInput,
    classDescriptionInput,
  };
}

let currentAction = "add";

function setupClassModalFunctionality(handleAddClass, handleEditClass) {
  const {
    submitButton,
    classNameInput,
    teacherNameInput,
    classDescriptionInput,
  } = getFormElements();

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (currentAction === "add") {
      handleAddClass();
    } else if (currentAction === "edit") {
      handleEditClass();
    }

    resetForm(classNameInput, teacherNameInput, classDescriptionInput);
  });
}

function getClassFormInformation(e, getItemFromStorage, getClassIndexById) {
  const {
    submitButton,
    classNameInput,
    teacherNameInput,
    classDescriptionInput,
  } = getFormElements();

  if (
    e.target.classList.contains("edit_class-button") ||
    e.target.closest(".edit_class-button")
  ) {
    setCurrentAction("edit");

    const classId = e.target.id;

    const classesFromStorage = getItemFromStorage("allClasses");
    const classItem = classesFromStorage[getClassIndexById(classId)];

    classNameInput.value = classItem.className || "";
    teacherNameInput.value = classItem.teacherName;
    classDescriptionInput.value = classItem.description || "";

    submitButton.setAttribute("data-class-id", classId);
  }
}

function setCurrentAction(action) {
  console.log("Current Action:", action);
  return (currentAction = action);
}

function resetForm(classNameInput, teacherNameInput, classDescriptionInput) {
  classNameInput.value = "";
  teacherNameInput.value = "";
  classDescriptionInput.value = "";
}

export default {
  getFormElements,
  createClassesModalWindow,
  setupClassModalFunctionality,
  setCurrentAction,
  resetForm,
  getClassFormInformation,
};
