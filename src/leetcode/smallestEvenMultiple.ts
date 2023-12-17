function smallestEvenMultiple(n: number): number {
  let kelipatan2: number[] = [];
  let kelipatanN: number[] = [];
  for (let i = 1; i <= 150; i++) {
    kelipatanN.push(i * n);
  }
  for (let i = 1; i <= 150; i++) {
    kelipatan2.push(i * 2);
  }
  return kelipatanN.filter((v) => kelipatan2.includes(v))[0];
}

