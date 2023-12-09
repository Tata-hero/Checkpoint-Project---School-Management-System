import addStudentModalWindow from "./studentsModal.template.js";

function setupStudentModalFunctionality(studentsData) {
  const submitButton = document.querySelector("#addNewStudent");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleAddStudent(studentsData);
  });
}

function handleAddStudent(studentsData) {
  if (localStorage.getItem("allStudents") === null) {
    localStorage.setItem("allStudents", JSON.stringify(studentsData));
  }

  const studentName = document.getElementById("studentName").value;
  const classSelect = document.getElementById("classSelect");
  const selectedClass = classSelect.options[classSelect.selectedIndex].value;
  const description = document.getElementById("description").value;

  const newStudent = {
    id: (studentsData.length + 1 + 1000).toString(),
    name: studentName,
    class: selectedClass,
    subjects: [],
    description: description,
  };

  const studentsFromStorage = getItemFromStorage("allStudents");
  if (!studentsFromStorage.includes(newStudent.name)) {
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

export default { addStudentModalWindow, setupStudentModalFunctionality };
