const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here
  if (studentName === "") {
    console.log("You must give a student name");
    return;
  }

  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }

  if (studentName >= 6) {
    console.log("Cannot add more students to class 07");
    return;
  }
  if (studentName === "Queen") {
    class07Students.push(studentName);
    return;
  }
}

function getNumberOfStudents() {
  // You write code here
  return class07Students.length;
}
addStudentToClass("Benjamin");
addStudentToClass("Sarah");
addStudentToClass("Jonas");
addStudentToClass("Mia");
addStudentToClass("Ali");
addStudentToClass("Lena");
