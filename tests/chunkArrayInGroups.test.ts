const chunkArrayInGroups = require('../src/chunkArrayInGroups')

test('split the array into group length of size', () => {
  // arrange
  const arrValue = ["a", "b", "c", "d"]
  const sizeValue = 2
  const expectedValue = [["a","b"],["c","d"]]

  // act
  const actualValue = chunkArrayInGroups(arrValue,sizeValue)

  // assert
  expect(actualValue).toEqual(expectedValue)
})