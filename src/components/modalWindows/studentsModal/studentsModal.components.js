import addStudentModalWindow from "./studentsModal.template.js";

export function getFormElements() {
  const studentNameInput = document.getElementById("studentName");
  const classSelectInput = document.getElementById("classSelect");
  const descriptionInput = document.getElementById("description");

  return {
    studentNameInput,
    classSelectInput,
    descriptionInput,
  };
}

function setupStudentModalFunctionality(studentsData) {
  const { studentNameInput, classSelectInput, descriptionInput } =
    getFormElements();

  const submitButton = document.querySelector("#addNewStudent");

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

  const newStudent = {
    id: (studentsData.length + 1 + 1000).toString(),
    name: studentName,
    class: selectedClass,
    subjects: [],
    description: description,
  };

  const studentsFromStorage = getItemFromStorage("allStudents");
  if (
    !studentsFromStorage.some((student) => student.name === newStudent.name)
  ) {
    studentsFromStorage.push(newStudent);
  }

  setItemToStorage("allStudents", studentsFromStorage);

  studentsData.push(newStudent);
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
  addStudentModalWindow,
  setupStudentModalFunctionality,
  getFormElements,
};
