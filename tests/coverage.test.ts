const destroyer = require('../src/coverage')

test('Remove element from initial element', ()=>{
  // arrange
  const arrValue = [1, 2, 3, 1, 2, 3]
  const initialValue = 2
  const initial2Value = 3
  const expectedValue = [1,1]

  // act
  const actualValue = destroyer(arrValue,initialValue,initial2Value)

  // assert 
  expect(actualValue).toEqual(expectedValue)
  
})