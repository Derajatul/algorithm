function differenceOfSum(nums: number[]): number {
  const sum = nums.reduce((prev, acc) => prev + acc);
  const digitSum = nums.join('').split('').map((v) => Number(v)).reduce((prev,acc) => prev + acc)
  return sum - digitSum;
}
