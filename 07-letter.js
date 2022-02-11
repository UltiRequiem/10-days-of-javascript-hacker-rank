function letter(s) {
  let result;

  switch (s) {
    case "a":
    case "e":
    case "o":
    case "i":
    case "u":
      result = "A";
      break;

    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      result = "B";
      break;

    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      result = "C";
      break;

    case "z":
    case "n":
    case "p":
    case "q":
    case "r":
    case "s":
    case "t":
    case "v":
    case "w":
    case "x":
    case "y":
      result = "D";
  }

  return result;
}

console.log(letter("a"));

console.log(letter("h"));

console.log(letter("n"));
