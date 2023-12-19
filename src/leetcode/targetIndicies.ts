function targetIndices(nums: number[], target: number): number[] {
  let result: number[] = [];
  nums
    .sort((a, b) => a - b)
    .forEach((v, i) => {
      if (v === target) {
        result.push(i);
      }
    });
  return result;
}
const result = targetIndices(
  [
    48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62,
    77, 15, 38,
  ],
  6
);
result;
