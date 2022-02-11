/*
 * Multiply the number n, being operated upon,
 * by every positive integer smaller than n.
 */

function recursiveFactorial(n) {
  return n < 2 ? 1 : n * recursiveFactorial(n - 1);
}

function whileFactorial(n) {
  let result = 1;

  while (n > 0) result *= n--;

  return result;
}

function forFactorial(num) {
  let rval = 1;

  for (let i = 2; i <= num; i++) {
    rval = rval * i;
  }

  return rval;
}

console.log(recursiveFactorial(5));

console.log(whileFactorial(5));

console.log(forFactorial(5));
