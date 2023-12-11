import addStudentModalWindow from "./studentsModal.template.js";

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

function setupStudentModalFunctionality(studentsData) {
  const { submitButton, studentNameInput, classSelectInput, descriptionInput } =
    getFormElements();

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleAddStudent(
      studentsData,
      studentNameInput,
      classSelectInput,
      descriptionInput
    );
    resetForm(studentNameInput, classSelectInput, descriptionInput);
  });
}

function handleAddStudent(
  studentsData,
  studentNameInput,
  classSelectInput,
  descriptionInput
) {
  if (localStorage.getItem("allStudents") === null) {
    localStorage.setItem("allStudents", JSON.stringify(studentsData));
  }

  const studentName = studentNameInput.value;
  const selectedClass =
    classSelectInput.options[classSelectInput.selectedIndex].value;
  const description = descriptionInput.value;

  const studentsFromStorage = getItemFromStorage("allStudents");

  const newStudent = {
    id: (studentsFromStorage.length + 1 + 1000).toString(),
    name: studentName,
    class: selectedClass,
    subjects: [],
    description: description,
  };

  if (
    !studentsFromStorage.some((student) => student.name === newStudent.name)
  ) {
    studentsFromStorage.push(newStudent);
  }

  setItemToStorage("allStudents", studentsFromStorage);
}

function getItemFromStorage(pKey) {
  const studentsFromStorage = JSON.parse(localStorage.getItem(pKey));
  return studentsFromStorage;
}

function setItemToStorage(pKey, value) {
  localStorage.setItem(pKey, JSON.stringify(value));
}

function resetForm(studentNameInput, classSelectInput, descriptionInput) {
  studentNameInput.value = "";
  classSelectInput.selectedIndex = 0;
  descriptionInput.value = "";
}

export default {
  getFormElements,
  addStudentModalWindow,
  setupStudentModalFunctionality,
  getItemFromStorage,
  setItemToStorage,
};
