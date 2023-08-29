const booWho = require('../src/booWho');

test('return true if argument typeof is boolean', ()=> {
  // arrange
  const boolValues = [true,false,null,123,'test'];
  const expectedValues = [true,true,false,false,false]

  boolValues.forEach((boolValue,index) => {
    // act
    const actualValue = booWho(boolValue)

    // assert
    expect(actualValue).toBe(expectedValues[index])
  })
})