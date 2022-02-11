/**
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 */
function count(objects) {
  let count = 0;
  for (const object of objects) {
    if (object.x === object.y) {
      count++;
    }
  }
  return count;
}

console.log(
  count([
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 5, y: 5 },
  ]),
);
