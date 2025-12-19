const age = -3;
if (age >= 0 && age <= 2) {
  console.log("Get free ride");
} else if (age >= 3 && age <= 18) {
  console.log(15);
} else if (age >= 19 && age <= 26) {
  console.log(10);
} else if (age < 0) {
  console.log(0);
} else if (age >= 60) {
  console.log(60);
} else {
  console.log("no discount!");
}

//Ternary Statement
const a = 4;
const b = 4;
const result = a + b < 4 ? "Below" : "Over";
console.log(result);

//Continue and Break
for (let i = 10; i > -1; i--) {
  if (i == 10) {
    console.log("OMG it started");
  } else if (i == 0) {
    console.log("Happy New Year");
  } else {
    console.log(i);
  }
}

//Function
function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));
