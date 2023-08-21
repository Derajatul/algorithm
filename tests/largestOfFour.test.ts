const largestOfFour = require('../src/largestOfFour')

test('return laargest number from each array', () => {
  // arrange
  const arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
  const expectedArr = [5, 27, 39, 1001]

  // act
  const actualArr = largestOfFour(arr)

  // assert
  expect(actualArr).toEqual(expectedArr)
})