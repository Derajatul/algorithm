const findLongestWordLength = require('../src/findLongestWordLength')

test('Find longest word length', ()=> {
  // arrange
  const word = "The quick brown fox jumped over the lazy dog";
  const expectedLength = 6;

  // act
  const actualLength = findLongestWordLength(word)

  // assert
  expect(typeof actualLength).toBe('number')
  expect(actualLength).toBe(expectedLength)
})