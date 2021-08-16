function isPositive(a) {
  if (a > 0) {
    return 'YES'
  }
  if (a === 0) {
    throw new Error('Zero Error')
  } else if (a < 0) {
    throw new Error('Negative Error')
  }
}
