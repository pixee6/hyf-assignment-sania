function getEventWeekday(daysFromToday) {
  const today = new Date().getDay();
  const eventDay = (today + daysFromToday) % 7;
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  for (let i = 0; i < weekdays.length; i++) {
    if (i === eventDay) {
      return weekdays[i];
    }
  }
}

console.log(getEventWeekday(9));
