function leftRightDifference(nums: number[]): number[] {
  const leftSum = new Array(nums.length).fill(0);
  const rightSum = new Array(nums.length).fill(0);
  const result = new Array(nums.length).fill(0);

  for (let i = 1; i < nums.length; i++) {
    leftSum[i] = leftSum[i - 1] + nums[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    rightSum[i] = rightSum[i + 1] + nums[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    result[i] = Math.abs(leftSum[i] - rightSum[i]);
  }
  return result;
}
console.log(leftRightDifference([10, 4, 8, 3])); //[15, 1, 11, 22]
