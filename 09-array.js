function secondLargest(numbers) {
  return numbers.sort((a, b) => a - b)[numbers.length - 2];
}

console.log(secondLargest([5, 6, 7]));
console.log(secondLargest([5, 6, 7]));
