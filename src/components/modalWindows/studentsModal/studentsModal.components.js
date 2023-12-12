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

let currentAction = "add";

function setupStudentModalFunctionality(handleAddStudent, handleEditStudent) {
  const { submitButton, studentNameInput, classSelectInput, descriptionInput } =
    getFormElements();

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (currentAction === "add") {
      handleAddStudent();
    } else if (currentAction === "edit") {
      handleEditStudent();
    }

    resetForm(studentNameInput, classSelectInput, descriptionInput);
  });
}

function getStudentFormInformation(e, getItemFromStorage, getStudentIndexById) {
  const { submitButton, studentNameInput, classSelectInput, descriptionInput } =
    getFormElements();

  if (
    e.target.classList.contains("edit-button") ||
    e.target.closest(".edit-button")
  ) {
    setCurrentAction("edit");

    const studentId = e.target.id;

    const studentsFromStorage = getItemFromStorage("allStudents");
    const student = studentsFromStorage[getStudentIndexById(studentId)];

    studentNameInput.value = student.name || "";
    descriptionInput.value = student.description || "";
    setSelectedOption(classSelectInput, student.class);

    submitButton.setAttribute("data-student-id", studentId);
  }
}

function setSelectedOption(selectElement, value) {
  for (let i = 0; i < selectElement.options.length; i++) {
    if (selectElement.options[i].value === value) {
      selectElement.selectedIndex = i;
      break;
    }
  }
}

function setCurrentAction(action) {
  console.log("Current Action:", action);
  return (currentAction = action);
}

function getSubjectsForClass(selectedClass) {
  switch (selectedClass) {
    case "Fullstack Web Programming":
      return [
        { name: "JavaScript Fundamentals", grade: 0 },
        { name: "HTML and CSS Basics", grade: 0 },
        { name: "Responsive Web Design", grade: 0 },
      ];

    case "AWS Cloud Engineering":
      return [
        { name: "Introduction to AWS Services", grade: 0 },
        { name: "Cloud Security", grade: 0 },
        { name: "Serverless Architecture", grade: 0 },
      ];

    case "Software Testing":
      return [
        { name: "Testing Methodologies", grade: 0 },
        { name: "Automated Testing with Selenium", grade: 0 },
        { name: "Performance Testing", grade: 0 },
      ];

    default:
      return [];
  }
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
  setCurrentAction,
  getSubjectsForClass,
  resetForm,
  getStudentFormInformation,
};
