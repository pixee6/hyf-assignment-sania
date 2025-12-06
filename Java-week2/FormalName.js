function getFullName(firstName, lastName, useFormalName = false, gender) {
  // Validation
  if (!firstName || !lastName) {
    return "Please provide both first and last name";
  }

  // If no formal name needed
  if (!useFormalName) {
    return firstName + " " + lastName;
  }

  // Formal name with gender
  if (gender === "male") {
    return "Lord " + firstName + " " + lastName;
  } else if (gender === "female") {
    return "Lady " + firstName + " " + lastName;
  } else {
    return "Mx. " + firstName + " " + lastName; // gender not provided
  }
}

// TESTS
const fullName1 = getFullName("Benjamin", "Hughes", true, "male");
const fullName2 = getFullName("Aisha", "Khan", true, "female");
const fullName3 = getFullName("Sara", "Ali"); // no formal name
console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
