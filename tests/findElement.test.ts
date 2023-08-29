const findElement = require('../src/findElement');

test('return the first element that passes a truth test', ()=>{
  // arrange
  const arrValue = [1,2,3,4,5];
  const funcValue = num => num % 2 === 0;
  const expectedValue = 2;

  // act
  const actualValue = findElement(arrValue,funcValue);

  // assert
  expect(actualValue).toBe(expectedValue);
  
})