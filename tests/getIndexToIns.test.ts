const getIndexToIns = require('../src/getIndexToIns')

test('filter lowest arr element than num', ()=> {
  // arrange
  const arrValue = [40,60];
  const numValue = 50;
  const expectedValue = 1;

  // act 
  const actualValue = getIndexToIns(arrValue,numValue);

  // assert
  expect(actualValue).toBe(expectedValue)
})