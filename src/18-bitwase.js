function getMaxLessThanK(n, k) {
  let maximum = 0
  let current = -1

  for (let i = 1; i < k; i++) {
    for (let j = i + 1; j <= n; j++) {
      // eslint-disable-next-line no-bitwise
      current = i & j
      if (current < k && current > maximum) {
        maximum = current
      }
    }
  }
  return maximum
}
