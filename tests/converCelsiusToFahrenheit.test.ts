const convertCelsiusToFahrenheit = require('../src/convertCelsiusToFahrenheit');

test('Celsius to fahrenheit conversion', () => {
  // arrange
  const celsiusValue = [0,-30,30];
  const expectedFahrenheitValue = [32,-22,86]; 

  // act
  celsiusValue.forEach((celsius,index) => {
    const expectedFahrenheit = expectedFahrenheitValue[index]
    const actualFahrenheit = convertCelsiusToFahrenheit(celsius)

    expect(typeof actualFahrenheit).toBe('number')
    expect(actualFahrenheit).toBe(expectedFahrenheit)
  })
  
})