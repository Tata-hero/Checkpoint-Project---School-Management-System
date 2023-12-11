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
  getSubjectsForClass,
};
