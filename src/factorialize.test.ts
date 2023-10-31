import { expect, test } from "vitest";
import { factorialize } from "./factorialize";

test("Factorial operation", () => {
  // arrange
  const num = [5, 10];
  const expectedNum = [120, 3628800];

  // act & arrange
  num.forEach((x, i) => {
    const actualValue = factorialize(x);
    expect(actualValue).toBe(expectedNum[i]);
  });
});
