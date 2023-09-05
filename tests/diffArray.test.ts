const diffArray = require('../src/diffArray')

test('return items only found in one array', ()=> {
  // arrange
  const arr1Values = [[1, 2, 3, 5],[1, "calf", 3, "piglet"]]
  const arr2Values = [[1, 2, 3, 4, 5],[1, "calf", 3, 4]]
  const expectedValues = [[4],["piglet",4]]

  expectedValues.forEach((expectedValue,index) => {
    // act
    const actualValue = diffArray(arr1Values[index],arr2Values[index])

    // assert
    expect(actualValue).toEqual(expectedValue)
  })
})