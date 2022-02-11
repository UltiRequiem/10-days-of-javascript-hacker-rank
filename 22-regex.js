/** Match all occurrences of numbers in a string. */
function regexVar() {
  return RegExp("\\d+", "g");
}

const numberMatcher = regexVar();

console.log(numberMatcher.test("hey"));
console.log(numberMatcher.test("393939"));
