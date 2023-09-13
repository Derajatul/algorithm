const spinalCase = require('../src/spinalCase')

test('convert a string to spinal case', ()=>{
  // arrange
  const strValues = ["This Is Spinal Tap", "thisIsSpinalTap"]
  const expectedValue = "this-is-spinal-tap"

  strValues.forEach(strValue => {
    // act
    const actualValue = spinalCase(strValue)

    // assert
    expect(actualValue).toBe(expectedValue)
  })
})