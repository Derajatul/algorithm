const titleCase = require('../src/titleCase')

test('first each of letter should be capitalized', ()=> {
  // arrange
  const strValue = "hello world"
  const expectedValue = "Hello World"

  // act
  const actualValue = titleCase(strValue)

  // assert
  expect(actualValue).toBe(expectedValue)
})