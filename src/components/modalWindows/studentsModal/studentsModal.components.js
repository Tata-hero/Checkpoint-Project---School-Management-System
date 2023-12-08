const addButton = document.getElementById("addNewStudent");

addButton.addEventListener("click", function (e) {
  handleAddStudent();
});

function handleAddStudent() {
  if (localStorage.getItem("allStudents") === null) {
    localStorage.setItem("allStudents", JSON.stringify(studentsData));
  }

  const studentName = document.getElementById("studentName").value;
  const classSelect = document.getElementById("classSelect");
  const selectedClass = classSelect.options[classSelect.selectedIndex].value;
  const description = document.getElementById("description").value;

  const newStudent = {
    id: (studentsData.length + 1 + 100).toString(), // Generate a unique ID (simple example)
    name: studentName,
    class: selectedClass,
    subjects: [],
    description: description,
  };

  const studentsFromStorage = getItemFromStorage("allStudents");
  if (!studentsFromStorage.includes(newStudent)) {
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
