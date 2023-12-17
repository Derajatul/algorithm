export const largestOfFour = (arr: number[][]) => {
  const result: number[] = [];
  arr.forEach((x, i) => {
    let largest = x[0];
    x.forEach((y) => {
      if (y > largest) {
        largest = y;
      }
    });
    result.push(largest);
  });
  return result;
};
