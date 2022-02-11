function maxLessThanK(n, k) {
  let maximum = 0, current = -1;

  for (let i = 1; i < k; i++) {
    for (let j = i + 1; j <= n; j++) {
      current = i & j;
      if (current < k && current > maximum) {
        maximum = current;
      }
    }
  }

  return maximum;
}

console.log(maxLessThanK(12, 345));
