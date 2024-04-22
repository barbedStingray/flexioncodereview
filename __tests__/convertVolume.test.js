
const convertVolume = require('../__modules__/convertVolumes')

// See validateInput.js for details on validating number types

test('convert 23 cups to gallons, gives "1.5"', () => {
    expect(convertVolume('23', 'Cups', 'Gallons')).toBe('1.5');
});

test('convert 11.3 cubic inches to tablespoons, gives "12.5"', () => {
    expect(convertVolume('11.3', 'CubicInches', 'Tablespoons')).toBe('12.5');
});


