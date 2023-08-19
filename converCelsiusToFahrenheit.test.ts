const convertCelsiusToFahrenheit = require('./convertCelsiusToFahrenheit');

test('Celsius to fahrenheit conversion', () => {
  
  expect(typeof convertCelsiusToFahrenheit(0)).toBe('number');
  
  expect(convertCelsiusToFahrenheit(0)).toBe(32);

  expect(convertCelsiusToFahrenheit(-30)).toBe(-22);

  expect(convertCelsiusToFahrenheit(30)).toBe(86);
  
})