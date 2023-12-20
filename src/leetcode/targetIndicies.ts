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

