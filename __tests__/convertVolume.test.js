
const convertVolume = require('../__modules__/convertVolumes')

// all inputs will be given as strings 
// See validateInput.js for details on validating number types


const volumeLibrary = {
    title: 'Volume',
    units: [
        'CubicFeet',
        'CubicInches',
        'Cups',
        'Gallons',
        'Liters',
        'Tablespoons'
    ],
    conversions: {
        CubicFeet: {
            CubicFeet: 1.0,
            CubicInches: 1728,
            Cups: 117.987,
            Gallons: 7.48052,
            Liters: 28.3168,
            Tablespoons: 1915.01,
        },
        CubicInches: {
            CubicFeet: 0.000578704,
            CubicInches: 1.0,
            Cups: 0.0682794,
            Gallons: 0.004329,
            Liters: 0.0163871,
            Tablespoons: 1.10823
        },
        Cups: {
            CubicFeet: 0.00847552,
            CubicInches: 14.6457,
            Cups: 1.0,
            Gallons: 0.0634013,
            Liters: 0.24,
            Tablespoons: 16.2307
        },
        Gallons: {
            CubicFeet: 0.133681,
            CubicInches: 231.0,
            Cups: 15.7725,
            Gallons: 1.0,
            Liters: 3.78541,
            Tablespoons: 256.0
        },
        Liters: {
            CubicFeet: 0.0353147,
            CubicInches: 61.0237,
            Cups: 4.16667,
            Gallons: 0.264172,
            Liters: 1.0,
            Tablespoons: 67.628
        },
        Tablespoons: {
            CubicFeet: 0.00052219,
            CubicInches: 0.902344,
            Cups: 0.0616115,
            Gallons: 0.00390625,
            Liters: 0.0147868,
            Tablespoons: 1.0,
        },
    },
    minimums: {
        CubicFeet: 0,
        CubicInches: 0,
        Cups: 0,
        Gallons: 0,
        Liters: 0,
        Tablespoons: 0,
    }
};
const { units, conversions } = volumeLibrary;

test('test conversions with base values against the library', () => {
    const varNum = 1; // change here to check different volume inputs
    for (let i = 0; i < units.length; i++) {
        for (let x = 0; x < units.length; x++) {
            expect(convertVolume(varNum, `${units[i]}`, `${units[x]}`)).toBe((varNum * Number(`${conversions[units[i]][units[x]]}`)).toFixed(1));
        }
    }
});

