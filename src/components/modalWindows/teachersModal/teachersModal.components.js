import createTeacherModalWindow from "./teachersModal.templates.js";

export function getFormElements() {
  const submitButton = document.querySelector("#addNewTeacher");
  const teacherNameInput = document.getElementById("teacherName");
  const classNameInput = document.getElementById("className");
  const teacherDescriptionInput = document.getElementById("teacherDescription");

  return {
    submitButton,
    teacherNameInput,
    classNameInput,
    teacherDescriptionInput,
  };
}

let currentAction = "add";

function setupTeacherModalFunctionality(handleAddTeacher, handleEditTeacher) {
  const {
    submitButton,
    teacherNameInput,
    classNameInput,
    teacherDescriptionInput,
  } = getFormElements();

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (currentAction === "add") {
      handleAddTeacher();
    } else if (currentAction === "edit") {
      handleEditTeacher();
    }

    resetForm(teacherNameInput, classNameInput, teacherDescriptionInput);
  });
}

function getTeacherFormInformation(e, getItemFromStorage, getTeacherIndexById) {
  const {
    submitButton,
    teacherNameInput,
    classNameInput,
    teacherDescriptionInput,
  } = getFormElements();

  if (
    e.target.classList.contains("edit_teacher-button") ||
    e.target.closest(".edit_teacher-button")
  ) {
    setCurrentAction("edit");

    const teacherId = e.target.id;

    const teachersFromStorage = getItemFromStorage("allTeachers");
    const teacher = teachersFromStorage[getTeacherIndexById(teacherId)];

    teacherNameInput.value = teacher.name || "";
    classNameInput.value = teacher.class;
    teacherDescriptionInput.value = teacher.description || "";

    submitButton.setAttribute("data-teacher-id", teacherId);
  }
}

function setCurrentAction(action) {
  console.log("Current Action:", action);
  return (currentAction = action);
}

function resetForm(teacherNameInput, classNameInput, teacherDescriptionInput) {
  teacherNameInput.value = "";
  classNameInput.value = "";
  teacherDescriptionInput.value = "";
}

export default {
  getFormElements,
  createTeacherModalWindow,
  setupTeacherModalFunctionality,
  setCurrentAction,
  resetForm,
  getTeacherFormInformation,
};
