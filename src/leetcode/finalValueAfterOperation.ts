function finalValueAfterOperations(operations: string[]): number {
  let output: number = 0;
  operations.forEach((i) => {
    if (i === "X++" || i === "++X") {
      output += 1;
    } else if (i === "X--" || i === "--X") {
      output -= 1;
    }
  });
  return output;
}
