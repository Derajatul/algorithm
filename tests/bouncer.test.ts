const bouncer = require('../src/bouncer')

test('remove all falsy value', ()=> {
  // arrange
  const arrValue = [7, "ate", "", false, 9]
  const expectedValue = [7, "ate", 9]

  // act
  const actualValue = bouncer(arrValue)

  // assert
  expect(actualValue).toEqual(expectedValue)
})