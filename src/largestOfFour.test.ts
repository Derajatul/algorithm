import { expect, test } from "vitest";
import { largestOfFour } from "./largestOfFour";

test("largest of four", () => {
  // arrange
  const arr = [
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ];
  const expectedValue = [27, 5, 39, 1001];

  // act
  const actualValue = largestOfFour(arr);

  // assert
  expect(actualValue).toEqual(expectedValue);
});
