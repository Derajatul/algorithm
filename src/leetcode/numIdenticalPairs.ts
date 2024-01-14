function numIdenticalPairs(nums: number[]): number {
  let identical: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j] && i !== j) {
        identical.push([i, j]);
      }
    }
  }
  return identical.length / 2;
}

