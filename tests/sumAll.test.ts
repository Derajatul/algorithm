const sumAll = require('../src/sumAll')

test('sum all array from smallest num to largest num', ()=> {
  // arrange
  const arrValues = [[1,4],[10,5]]
  const expectedValues = [10,45]

  expectedValues.forEach((expectedValue,index) => {
    // act
    const actualValue = sumAll(arrValues[index])

    // assert
    expect(actualValue).toBe(expectedValue)
  })
})