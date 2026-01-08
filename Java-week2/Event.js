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
 return weekdays[eventDay];
}

console.log(getEventWeekday(9));
