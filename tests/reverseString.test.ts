const reverseString = require('../src/reverseString')

test('should reverse a string', () => {
  // arrange
  const string = 'hello'
  const expectedString = 'olleh'

  // act
  const actualString = reverseString(string)

  // assert
  expect(typeof actualString).toBe('string')
  expect(actualString).toBe(expectedString)
})