import teachersData from "../../LMS_data/teachers_data.js";
import teachersPageTemplate from "./teachers.templates.js";
import teachersModalWindow from "../../components/modalWindows/teachersModal/teachersModal.components.js";
import pagesContent from "../../components/content.js";

function teachersCards() {
  return updatedTeachersData()
    .map((teacher) => teachersPageTemplate.createTeachersCards(teacher))
    .join("");
}

function displayTeachersPage() {
  return teachersPageTemplate.createTechersPage(teachersCards());
}

function addTeacherModalWindow() {
  return teachersModalWindow.createTeacherModalWindow();
}

function teachersModalFunctionality() {
  return teachersModalWindow.setupTeacherModalFunctionality(
    handleAddTeacher,
    handleEditTeacher
  );
}

if (localStorage.getItem("allTeachers") === null) {
  localStorage.setItem("allTeachers", JSON.stringify(teachersData));
}

function handleAddTeacher() {
  const { teacherNameInput, classNameInput, teacherDescriptionInput } =
    teachersModalWindow.getFormElements();

  const teacherName = teacherNameInput.value;
  const className = classNameInput.value;
  const teacherDescription = teacherDescriptionInput.value;

  const teachersFromStorage = getItemFromStorage("allTeachers");

  const newTeacher = {
    id: (teachersFromStorage.length + +100 + 1).toString(),
    name: teacherName,
    class: className,
    description: teacherDescription,
  };

  if (
    !teachersFromStorage.some((teacher) => teacher.name === newTeacher.name)
  ) {
    teachersFromStorage.push(newTeacher);
  }

  setItemToStorage("allTeachers", teachersFromStorage);

  pagesContent.teachersPage();
}

function handleDeleteTeacherCard() {
  const teacherContainer = document.querySelector(".main");

  teacherContainer.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("delete_teacher-button") ||
      e.target.closest(".delete_teacher-button")
    ) {
      const teacherId = e.target.id;

      getTeacherIndexById(teacherId);

      if (getTeacherIndexById(teacherId) !== -1) {
        const teachersFromStorage = getItemFromStorage("allTeachers");
        teachersFromStorage.splice(getTeacherIndexById(teacherId), 1);
        setItemToStorage("allTeachers", teachersFromStorage);
      }

      pagesContent.teachersPage();
    }
  });
}

function displayTeacherInformation() {
  const teacherContainer = document.querySelector(".main");

  teacherContainer.addEventListener("click", function (e) {
    teachersModalWindow.getTeacherFormInformation(
      e,
      getItemFromStorage,
      getTeacherIndexById
    );
  });
}

function handleEditTeacher() {
  const {
    submitButton,
    teacherNameInput,
    classNameInput,
    teacherDescriptionInput,
  } = teachersModalWindow.getFormElements();

  const editedTeacherName = teacherNameInput.value;
  const editedClassName = classNameInput.value;
  const editedClassDescription = teacherDescriptionInput.value;

  const teachersFromStorage = getItemFromStorage("allTeachers");
  const editedTeacherId = parseInt(
    submitButton.getAttribute("data-teacher-id"),
    10
  );
  const editedTeacherIndex = getTeacherIndexById(editedTeacherId.toString());

  if (editedTeacherIndex !== -1) {
    const editedTeacher = teachersFromStorage[editedTeacherIndex];
    editedTeacher.name = editedTeacherName;
    editedTeacher.class = editedClassName;
    editedTeacher.description = editedClassDescription;

    setItemToStorage("allTeachers", teachersFromStorage);
    pagesContent.teachersPage();
  }
}

function setCurrentActionForAddBtn() {
  const addButton = document.querySelector("#addTeacherBtn");

  addButton.addEventListener("click", function () {
    teachersModalWindow.setCurrentAction("add");
  });
}

function getTeacherIndexById(teacherId) {
  const teachersFromStorage = getItemFromStorage("allTeachers");

  const teacherIndex = teachersFromStorage.findIndex(
    (teacher) => teacher.id === teacherId
  );

  return teacherIndex;
}

function updatedTeachersData() {
  const storedTeachersData = getItemFromStorage("allTeachers") || [];
  return storedTeachersData;
}

function getItemFromStorage(pKey) {
  const teachersFromStorage = JSON.parse(localStorage.getItem(pKey));
  return teachersFromStorage;
}

function setItemToStorage(pKey, value) {
  localStorage.setItem(pKey, JSON.stringify(value));
}

export default {
  displayTeachersPage,
  addTeacherModalWindow,
  teachersModalFunctionality,
  handleDeleteTeacherCard,
  displayTeacherInformation,
  updatedTeachersData,
  setCurrentActionForAddBtn,
};
