/**
 * Match a string that starts and ends with the same vowel
 */
function regexVar() {
  return RegExp(/^([aeiou]).*\1$/);
}

const regex = regexVar();

console.log(regex.test("aeiou"));
console.log(regex.test("aeolia"));
