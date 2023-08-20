const factorialize = require('../src/factorialize')

test('factorial number', ()=> {
  // arrange
  const factorialNumValue = [0,5,10]
  const expectedNumValue = [1,120,3628800]

  // act and assert
  factorialNumValue.forEach((num, index) => {
    const expectedNum = expectedNumValue[index]
    const actualNum = factorialize(num)

    expect(typeof actualNum).toBe('number')
    expect(actualNum).toBe(expectedNum)
    
  })  
})