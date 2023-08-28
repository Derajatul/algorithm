const truncateString = require('../src/truncateString')

test("Return truncated string with ...", () => {
  // arrange 
  const stringValue = "test"
  const numValues = [2,5]
  const expectedValues = ["te...","test"]

  expectedValues.forEach((expectedValue, index) => {
  // act  
    const actualValue = truncateString(stringValue, numValues[index])
  //assert
    expect(actualValue).toBe(expectedValue)
  })
})