export const factorialize = (num: number) => {
  if (num === 0) return 1;
  let result: number[] = [];
  for (let index = 1; index <= num; index++) {
    result.push(index);
  }
  return result.reduce((c, i) => c * i);
};
