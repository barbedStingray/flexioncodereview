
const convertTemp = require('../__modules__/convertTemp')

// promptNum, startUnit, targetUnit, unitConversions, setCorrectAnswer

test('convert 32 degrees fahrenheit to celsius, gives "0.0"', () => {
    expect(convertTemp(32, 'Fahrenheit', 'Celsius')).toBe('0.0');
});

