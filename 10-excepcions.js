function reverseString(text) {
  try {
    console.log(text.split("").reverse().join(""));
  } catch {
    console.log(`There was an error reversing ${text}`);
  }
}

reverseString("hola");
reverseString(23);
