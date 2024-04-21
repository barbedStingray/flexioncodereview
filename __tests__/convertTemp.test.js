
const convertTemperature = require('../__modules__/convertTemp')

// all inputs will be given as strings 
// See validateInput.js for details on validating number types

test('convert 32 degrees fahrenheit to celsius, gives "0.0"', () => {
    expect(convertTemperature(32, 'Fahrenheit', 'Celsius')).toBe('0.0');
});

