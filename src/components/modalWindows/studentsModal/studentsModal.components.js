import createStudentModalWindow from "./studentsModal.template.js";

export function getFormElements() {
  const submitButton = document.querySelector("#addNewStudent");
  const studentNameInput = document.getElementById("studentName");
  const classSelectInput = document.getElementById("classSelect");
  const descriptionInput = document.getElementById("description");

  return {
    submitButton,
    studentNameInput,
    classSelectInput,
    descriptionInput,
  };
}

function setupStudentModalFunctionality(handleAddStudent) {
  const { submitButton, studentNameInput, classSelectInput, descriptionInput } =
    getFormElements();

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleAddStudent();
    resetForm(studentNameInput, classSelectInput, descriptionInput);
  });
}

function resetForm(studentNameInput, classSelectInput, descriptionInput) {
  studentNameInput.value = "";
  classSelectInput.selectedIndex = 0;
  descriptionInput.value = "";
}

export default {
  getFormElements,
  createStudentModalWindow,
  setupStudentModalFunctionality,
};
