function isPowerOfTwo(n: number): boolean {
  const powerTwo: number[] = [];
  for (let i = 0; i < 32; i++) {
    powerTwo.push(2 ** i);
  }
  return powerTwo.includes(n);
}
const result = isPowerOfTwo(3);
result;
