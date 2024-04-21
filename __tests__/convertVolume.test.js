
const convertVolume = require('../__modules__/convertVolumes')


test('convert 1 liters to 1 gallons, gives "0.3"', () => {
    expect(convertVolume(1, 'Liters', 'Gallons')).toBe('0.3');
});

