function differenceOfSums(n: number, m: number): number {
  let numBetweenN: number[] = [];

  for (let i = 1; i <= n; i++) {
    numBetweenN.push(i);
  }
  let nums1: number = numBetweenN
    .filter((v: number) => v % m !== 0)
    .reduce((p, c) => p + c, 0);
  let nums2: number = numBetweenN
    .filter((v: number) => v % m === 0)
    .reduce((p, c) => p + c, 0);
  return nums1 - nums2;
}
