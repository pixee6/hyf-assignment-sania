function getFullName(firstName, lastName, useFormalName,){ 
  if (useFormalName === true) {
      return "Lord " + firstName + " " + lastName;
    } else {
    return firstName + " " + lastName;
}
const fullName1 = getFullName("Benjamin", "Hughes", true, male);
const fullName2 = getFullName("Aisha", "Khan", false, female);
console.log(fullName1);
console.log(fullName2);

/*But what if the person is a woman? Describe how you would fix the getFullName so it also works for women
Answer: I think we should add a gender parameter and than we can add if statement if its female than it will add lady and male to lord.*/