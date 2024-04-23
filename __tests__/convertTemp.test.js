
const convertTemperature = require('../__modules__/convertTemp')

// See validateInput.js for details on validating number types

test('convert 84.2 fahrenheit to rankine, gives "543.9"', () => {
    expect(convertTemperature(84.2, 'Fahrenheit', 'Rankine')).toBe('543.9');
});

test('convert 23 fahrenheit to celsius, gives "-5.0"', () => {
    expect(convertTemperature(23, 'Fahrenheit', 'Celsius')).toBe('-5.0');
});

test('convert 90.2 Kelvin to celsius, gives "-152.1"', () => {
    expect(convertTemperature(90.2, 'Kelvin', 'Celsius')).toBe('-182.9');
});



