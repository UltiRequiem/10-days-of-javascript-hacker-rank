function getSecondLargest(nums) {
  const uniqueSortedArray = nums
    .sort((a, b) => a - b)
    .filter((elem, index, self) => index === self.indexOf(elem))

  return uniqueSortedArray[uniqueSortedArray.length - 2]
}
