function sumOfMultiples(n: number): number {
  let number: number[] = [];
  Array.from({ length: n }).forEach((v, i) => {
    number.push(i + 1);
  });

  const divisible = number.filter(
    (v, i) => v % 3 === 0 || v % 5 === 0 || v % 7 === 0
  );
  if (divisible.length > 0) {
    return divisible.reduce((acc, curr) => acc + curr);
  } else {
    return 0;
  }
}

