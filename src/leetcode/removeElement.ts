function removeElement(nums: any, val: number): number {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) nums[i] = null;
    else {
      if (nums[j] === null) {
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
      }

      j += 1;
    }
  }

  return j;
}
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
