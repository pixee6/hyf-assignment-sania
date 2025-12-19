//Assignment 1

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
const index = names.indexOf("Ahmad");
if (index > -1) {
  names.splice(index, 1);
}

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']

//Assignment 2

function calculateTime(info) {
  const totalTime = info.destinationDistance / info.speed;
  const hours = Math.floor(totalTime);
  const minutes = Math.round((totalTime - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
}

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = calculateTime(travelInformation);
console.log(travelTime);
// 8 hours and 38 minutes

//Assignment 3

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
  {
    title: "F.R.I.E.N.D.S",
    days: 3,
    hours: 11,
    minutes: 36,
  },
  {
    title: "The Big Bang Theory",
    days: 7,
    hours: 17,
    minutes: 54,
  },
];

function logOutSeriesText() {
  const lifeHours = 80 * 365 * 24;
  let totalPercentage = 0;
  seriesDurations.forEach((series) => {
    // convert series duration to hours
    const seriesHours = series.days * 24 + series.hours + series.minutes / 60;
    //percentage of life spent on series
    const percentage = (seriesHours / lifeHours) * 100;
    //add total
    totalPercentage += percentage;

    //when i am using only ${percentage} it is giving me a very long number
    //thats why i am using percentage.toFixed(3) so it will show only 3 numbers

    console.log(`${series.title} took ${percentage.toFixed(3)}% of my life`);
  });
  console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
}

logOutSeriesText();

//assignment 4
const notes = [];

function saveNote(content, id) {
  const note = {
    content: content,
    id: id,
  };

  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

function getNote(id) {
  return notes.find((note) => note.id === id);
}
const firstNote = getNote(1);
console.log(firstNote);

function logOutNotesFormatted() {
  notes.forEach((note) => {
    console.log(
      `The note with id: ${note.id}, has the following note text: ${note.content}`
    );
  });
}

logOutNotesFormatted();

//assignment 5

const activities = [];

function addActivity(date, activity, duration) {
  activities.push({
    date: date,
    activity: activity,
    duration: duration,
  });
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Facebook", 20);
addActivity("24/7-18", "Instagram", 88);

function showStatus(activities) {
  if (activities.length === 0) {
    return "Add some activities before calling showStatus";
  }

  //count activities
  const numberOfActivities = activities.length;

  //total duration
  let totalDuration = 0;
  for (let i = 0; i < activities.length; i++) {
    totalDuration += activities[i].duration;
  }

  const usageLimit = 100;
  if (totalDuration > usageLimit) {
    return "You have reached your limit, no more smartphoning for you!";
  }
  return `You have added ${numberOfActivities} activities. They amount to ${totalDuration} min. of usage`;
}

console.log(showStatus(activities));

