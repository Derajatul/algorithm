import { expect, test } from "vitest";
import { reverseString } from "./reverseString";

test("reverse string", () => {
  // arrange
  const str = ["hello", "dera", "hehe"];
  const expectedStr = ["olleh", "ared", "eheh"];
  // act & assert
  str.forEach((x, i) => {
    const actualValue = reverseString(x);
    expect(actualValue).toBe(expectedStr[i]);
  });
});
