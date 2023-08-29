const frankenSplice = require('../src/frankenSplice')

test('insert first element to second element, begin inserting element at index n', ()=> {
  // arrange 
  const arr1Value = [1,2,3]
  const arr2Value = [4,5,6]
  const nValue = 1
  const expectedValue = [4,1,2,3,5,6]

  // act 
  const actualValue = frankenSplice(arr1Value,arr2Value,nValue)

  // assert
  expect(actualValue).toEqual(expectedValue)
})