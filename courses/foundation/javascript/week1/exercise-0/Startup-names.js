const firstWords = [
  "Easy",
  "Smart",
  "Quick",
  "Bright",
  "Happy",
  "Super",
  "Next",
  "Blue",
  "Green",
  "Power",
];
const secondWords = [
  "Tech",
  "Solutions",
  "Systems",
  "Works",
  "Labs",
  "Network",
  "World",
  "Dynamics",
  "Corp",
  "Studio",
];
const randomNumber = Math.floor(Math.random() * 10);
const startupNames = firstWords[randomNumber] + " " + secondWords[randomNumber];
console.log(
  "The startup: " +
    startupNames +
    " contains " +
    startupNames.length +
    " characters."
);
