/* eslint-disable no-restricted-syntax */

function getCount(objects) {
  let count = 0;
  for (const index in objects) {
    if (objects[index].x === objects[index].y) {
      count++;
    }
  }
  return count;
}
