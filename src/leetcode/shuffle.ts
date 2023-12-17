function shuffle(nums: number[], n: number): number[] {
  const x = nums.slice(0, n);
  const y = nums.slice(n);
  let shuffle: number[] = [];
  for (let i = 0; i < n; i++) {
    shuffle.push(x[i]);
    shuffle.push(y[i]);
  }
  return shuffle;
}

