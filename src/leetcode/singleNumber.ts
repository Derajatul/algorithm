function singleNumber(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let isSingle = true;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j] && i !== j) {
        isSingle = false;
        break;
      }
    }
    if (isSingle) {
      return nums[i];
    }
  }
  return -1;
}
console.log(singleNumber([2, 2, 1])); // 1
