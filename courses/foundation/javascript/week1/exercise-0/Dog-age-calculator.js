const dogYearOfBirth = 2020;
const dogYearOfFuture = 2027;
dogYear = dogYearOfFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
  console.log(
    "your dog will be " + dogYear * 7 + " dog years old in " + dogYearOfFuture
  );
} else {
  console.log(
    "Your dog will be " + dogYear + "human years old in " + dogYearOfFuture
  );
}
