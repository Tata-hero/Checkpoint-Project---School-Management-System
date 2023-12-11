import studentsData from "../../LMS_data/students_data.js";
import studentsPageTemplate from "./students.template.js";
import studentModalWindow from "../../components/modalWindows/studentsModal/studentsModal.components.js";

function updateStudentsData() {
  const storedStudentsData =
    studentModalWindow.getItemFromStorage("allStudents") || [];
  return storedStudentsData;
}

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
  return studentModalWindow.setupStudentModalFunctionality(studentsData);
}

export default {
  displayStudentsPage,
  addStudentModalWindow,
  studentModalFunctionality,
};
