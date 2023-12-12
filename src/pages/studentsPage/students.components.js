import studentsData from "../../LMS_data/students_data.js";
import studentsPageTemplate from "./students.template.js";
import studentModalWindow from "../../components/modalWindows/studentsModal/studentsModal.components.js";
import pagesContent from "../../components/content.js";

function studentsCards() {
  return updateStudentsData()
    .map((student) =>
      studentsPageTemplate.createStudentsCards(
        student,
        calculateAverageGrade(student)
      )
    )
    .join("");
}

function calculateAverageGrade(student) {
  const totalGrades = student.subjects.reduce(
    (sum, subject) => sum + subject.grade,
    0
  );
  const averageGrade = totalGrades / student.subjects.length;
  const roundedAverage = averageGrade.toFixed(1);

  return roundedAverage;
}

function displayStudentsPage() {
  return studentsPageTemplate.createStudentsPage(studentsCards());
}

function addStudentModalWindow() {
  return studentModalWindow.createStudentModalWindow();
}

function studentModalFunctionality() {
  return studentModalWindow.setupStudentModalFunctionality(
    handleAddStudent,
    handleEditStudent
  );
}

if (localStorage.getItem("allStudents") === null) {
  localStorage.setItem("allStudents", JSON.stringify(studentsData));
}

function handleAddStudent() {
  const { studentNameInput, classSelectInput, descriptionInput } =
    studentModalWindow.getFormElements();

  const studentName = studentNameInput.value;
  const selectedClass =
    classSelectInput.options[classSelectInput.selectedIndex].value;
  const description = descriptionInput.value;

  const studentsFromStorage = getItemFromStorage("allStudents");

  const newStudent = {
    id: (studentsFromStorage.length + 1 + 1000).toString(),
    name: studentName,
    class: selectedClass,
    subjects: studentModalWindow.getSubjectsForClass(selectedClass),
    description: description,
  };

  if (
    !studentsFromStorage.some((student) => student.name === newStudent.name)
  ) {
    studentsFromStorage.push(newStudent);
  }

  setItemToStorage("allStudents", studentsFromStorage);

  pagesContent.studentsPage();
}

function handleDeleteStudentCard() {
  const studentsContainer = document.querySelector(".main");

  studentsContainer.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("delete-button") ||
      e.target.closest(".delete-button")
    ) {
      const studentId = e.target.id;

      getStudentIndexById(studentId);

      if (getStudentIndexById(studentId) !== -1) {
        const studentsFromStorage = getItemFromStorage("allStudents");
        studentsFromStorage.splice(getStudentIndexById(studentId), 1);
        setItemToStorage("allStudents", studentsFromStorage);
      }

      pagesContent.studentsPage();
    }
  });
}

function displayStudentInformation() {
  const studentsContainer = document.querySelector(".main");

  studentsContainer.addEventListener("click", function (e) {
    studentModalWindow.getStudentFormInformation(
      e,
      getItemFromStorage,
      getStudentIndexById
    );
  });
}

function handleEditStudent() {
  const { submitButton, studentNameInput, classSelectInput, descriptionInput } =
    studentModalWindow.getFormElements();

  const editedStudentName = studentNameInput.value;
  const editedClass =
    classSelectInput.options[classSelectInput.selectedIndex].value;
  const editedDescription = descriptionInput.value;

  const studentsFromStorage = getItemFromStorage("allStudents");
  const editedStudentId = parseInt(
    submitButton.getAttribute("data-student-id"),
    10
  );

  const editedStudentIndex = getStudentIndexById(editedStudentId.toString());
  if (editedStudentIndex !== -1) {
    const editedStudent =
      studentsFromStorage[getStudentIndexById(editedStudentId.toString())];
    editedStudent.name = editedStudentName;
    editedStudent.class = editedClass;
    editedStudent.description = editedDescription;

    setItemToStorage("allStudents", studentsFromStorage);
    pagesContent.studentsPage();
  }
}

function setCurrentActionForAddBtn() {
  const addButton = document.querySelector("#addStudentBtn");

  addButton.addEventListener("click", function () {
    studentModalWindow.setCurrentAction("add");
  });
}

function getStudentIndexById(studentId) {
  const studentsFromStorage = getItemFromStorage("allStudents");

  const studentIndex = studentsFromStorage.findIndex(
    (student) => student.id === studentId
  );

  return studentIndex;
}

function updateStudentsData() {
  const storedStudentsData = getItemFromStorage("allStudents") || [];
  return storedStudentsData;
}

function getItemFromStorage(pKey) {
  const studentsFromStorage = JSON.parse(localStorage.getItem(pKey));
  return studentsFromStorage;
}

function setItemToStorage(pKey, value) {
  localStorage.setItem(pKey, JSON.stringify(value));
}

export default {
  displayStudentsPage,
  addStudentModalWindow,
  studentModalFunctionality,
  handleDeleteStudentCard,
  displayStudentInformation,
  updateStudentsData,
  setCurrentActionForAddBtn,
};
