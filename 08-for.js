function vowelsAndConsonants(s) {
  const vowels = ["a", "e", "i", "o", "u"];

  console.log("Vowels: ");
  for (const letter of s) {
    if (vowels.indexOf(letter) > -1) {
      console.log(letter);
    }
  }

  console.log("Consonants: ");
  for (const letter of s) {
    if (vowels.indexOf(letter) < 0) {
      console.log(letter);
    }
  }
}

vowelsAndConsonants("Hello World");
