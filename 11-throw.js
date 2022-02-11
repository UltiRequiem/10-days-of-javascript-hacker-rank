function isPositive(number) {
  if (number > 0) {
    console.log(`The number ${number} is positive`);
  }
  if (number === 0) {
    throw new Error("Zero Error");
  } else if (number < 0) {
    throw new Error("Negative Error");
  }
}

isPositive(29);

isPositive(-29);
