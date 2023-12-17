function expressionMatter(a: number, b: number, c: number) {
  const expression = [
    a + b + c,
    a * b * c,
    a + b * c,
    a * (b + c),
    (a + b) * c,
    a * c + b,
  ];
  return Math.max(...expression);
}
