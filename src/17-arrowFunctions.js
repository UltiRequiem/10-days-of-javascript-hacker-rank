function modifyArray(nums) {
  return nums.map((num) => (num % 2 === 0 ? 2 * num : 3 * num));
}
