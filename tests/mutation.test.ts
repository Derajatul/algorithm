const mutation = require('../src/mutation')

test('return true if the first element contain all letters of second element', ()=> {
  // arrange
  const arrValues = [['hello','hey'],['alien','lien']]
  const expectedValues = [false,true]

  expectedValues.forEach((expectedValue,index) => {
    // act
    const actualValue = mutation(arrValues[index])

    // assert
    expect(actualValue).toBe(expectedValue)
  })
})