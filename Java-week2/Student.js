const class07Students = [];

function getNumberOfStudents() {
  return class07Students.length;
}

function addStudentToClass(studentName) {
  // Queen special case: can be added even if full, but prevent duplicates
  if (studentName === "Queen") {
    if (!class07Students.includes("Queen")) {
      class07Students.push("Queen");
    }
    return;
  }

  // Validate input
  if (!studentName || typeof studentName !== "string") {
    return;
  }

  // Duplicate check
  if (class07Students.includes(studentName)) {
    return;
  }

  // Class limit (6 students)
  if (getNumberOfStudents() >= 6) {
    console.log("Cannot add more students to class 07");
    return;
  }

  // Add regular student
  class07Students.push(studentName);
}
addStudentToClass("Alice");
addStudentToClass("Bob");
addStudentToClass("Bob");        // duplicate — should not be added
addStudentToClass("Queen");      // Queen added
// Fill to 6 students then try add another regular student -> should be rejected

