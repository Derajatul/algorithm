function romanToInt(s: string): number {
  let output: number = 0;
  const value = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < s.length; i++) {
    if (value[s[i]] < value[s[i + 1]]) {
      output += value[s[i + 1]] - value[s[i]];
      i++;
    } else {
      output += value[s[i]];
    }
  }
  return output;
}
