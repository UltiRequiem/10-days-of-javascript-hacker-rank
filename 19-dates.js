function dayName(dateString) {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date(dateString);

  return dayNames[date.getDay()];
}

console.log(dayName("2020-01-01"));
