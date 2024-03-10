function bubbleSort(nums) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return nums;
}
console.log(bubbleSort([10, 2, 3, 5, 6, 1, 4, 7, 8, 9]));
