import { expect, test } from "vitest";
import { findLongestWordLength } from "./findLongestWordLength";

test("find Longest Word Length", () => {
  // arrange
  const str = [
    "The quick brown fox jumped over the lazy dog",
    "May the force be with you",
    "Google do a barrel roll",
  ];
  const expectedStr = [6, 5, 6];

  // act & assert
  str.forEach((x, i) => {
    const actualValue = findLongestWordLength(x);
    expect(actualValue).toBe(expectedStr[i]);
  });
});
