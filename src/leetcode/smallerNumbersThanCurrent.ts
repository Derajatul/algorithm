function smallerNumbersThanCurrent(nums: number[]): number[] {
  let newArr: number[] = [];
  nums.forEach((v, i) => {
    newArr.push(nums.filter((a) => v > a).length);
  });
  return newArr;
}
