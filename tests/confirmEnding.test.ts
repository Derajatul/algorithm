const confirmEnding = require('../src/confirmEnding')

test("check if a string end with given target", ()=> {
  // arrange
  const strValue = 'Open sesame'
  const targetValue = 'same'
  const expectedValue = true

  // act
  const actualValue = confirmEnding(strValue,targetValue)

  // assert
  expect(actualValue).toBe(expectedValue)
})