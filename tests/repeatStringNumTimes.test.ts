const repeatStringNumTimes = require('../src/repeatStringNumTimes')

test('repeat a given string to num times', () => {
  // arrange
  const stringValue = 'test'
  const numValues = [3, -2]
  const expectedValues = ['testtesttest', '']

  expectedValues.forEach((expectedValue, index) => {
    // act
    const actualValue = repeatStringNumTimes(stringValue, numValues[index])

    // assert
    expect(actualValue).toBe(expectedValue)
  })
})