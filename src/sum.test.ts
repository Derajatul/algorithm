import { expect, test } from "vitest";

test("sum", () => {
  // arrange
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const expected = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  // act & assert
  a.forEach((x, i) => {
    expect(x + b[i]).toBe(expected[i]);
  });
});
