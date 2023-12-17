import { expect, test } from "vitest";
import { convertCtoF } from "./convertCtoF";

test("convertCtoF", () => {
  // arrange
  const c = [0, 10, 20, 30, 40, 50];
  const expected = [32, 50, 68, 86, 104, 122];
  // act & assert
  c.forEach((x, i) => {
    const actualValue = convertCtoF(x)
    expect(actualValue).toBe(expected[i]);
  });
});
