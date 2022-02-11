/** Match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
 * followed by one or more letters. */
function regexVar() {
  return /^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/;
}

const titleMatcher = regexVar();

console.log(titleMatcher.test("Mrs.Y"));

console.log(titleMatcher.test("Zero Requiem"));
