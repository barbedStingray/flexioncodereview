
const convertTemperature = require('../__modules__/convertTemp')

// See validateInput.js for details on validating number types

test('convert 54.3 fahrenheit to celsius, gives "12.4"', () => {
    expect(convertTemperature(54.3, 'Fahrenheit', 'Celsius')).toBe('12.4');
});

test('convert 23 fahrenheit to celsius, gives "-5.0"', () => {
    expect(convertTemperature(23, 'Fahrenheit', 'Celsius')).toBe('-5.0');
});

test('convert 90.2 Kelvin to celsius, gives "-152.1"', () => {
    expect(convertTemperature(90.2, 'Kelvin', 'Celsius')).toBe('-182.9');
});



