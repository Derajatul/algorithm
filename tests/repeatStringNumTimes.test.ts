const repeatStringNumTimes = require('../src/repeatStringNumTimes')

test('repeat a given string to num times', () => {
  // arrange
  const stringValue = 'test'
  const numValue = 3
  const expectedValue = 'testtesttest'

  // act
  const actualValue = repeatStringNumTimes(stringValue, numValue)

  // assert
  expect(actualValue).toBe(expectedValue)
})