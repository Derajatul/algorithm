function countPairs(nums: number[], target: number): number {
  let ans: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] < target && i !== j && i < j) {
        ans.push([i, j]);
      }
    }
  }
  return ans.length;
}

