
const unitLibrary = {
    Temperature: {
        title: 'Temperature',
        units: [
            'Celsius',
            'Fahrenheit',
            'Kelvin',
            'Rankine'
        ],
        conversions: {
            Celsius: {
                Celsius: 'x',
                Fahrenheit: '(x * 9/5) + 32',
                Kelvin: 'x + 273.15',
                Rankine: 'x * 9/5 + 491.67'
            },
            Fahrenheit: {
                Celsius: '(x - 32) * 5/9',
                Fahrenheit: 'x',
                Kelvin: '(x - 32) * 5/9 + 273.15',
                Rankine: 'x + 459.67'
            },
            Kelvin: {
                Celsius: 'x - 273.15',
                Fahrenheit: '(x - 273.15) * 9/5 + 32',
                Kelvin: 'x',
                Rankine: 'x * 1.8'
            },
            Rankine: {
                Celsius: '(x - 491.67) * 5/9',
                Fahrenheit: 'x - 459.67',
                Kelvin: 'x * 5/9',
                Rankine: 'x'
            },
        },
        minimums: {
            Fahrenheit: -459.67,
            Celsius: -273.15,
            Kelvin: 0,
            Rankine: 0,
        }
    },
    Volume: {
        title: 'Volume',
        units: [
            'CubicFeet',
            'CubicInches',
            'Cups',
            'Gallons',
            'Quarts',
            'Liters',
            'Tablespoons'
            // teaspoons
        ],
        conversions: {
            CubicFeet: {
                CubicFeet: 1.0,
                CubicInches: 1728.0,
                Cups: 117.987,
                Gallons: 7.48052,
                Quarts: 29.9221,
                Liters: 28.3168,
                Tablespoons: 1915.01,
            },
            CubicInches: {
                CubicFeet: 0.000578704,
                CubicInches: 1.0,
                Cups: 0.0682794,
                Gallons: 0.004329,
                Quarts: 0.017316,
                Liters: 0.0163871,
                Tablespoons: 1.10823
            },
            Cups: {
                CubicFeet: 0.00847552,
                CubicInches: 14.6457,
                Cups: 1.0,
                Gallons: 0.0634013,
                Quarts: 0.25360491666,
                Liters: 0.24,
                Tablespoons: 16.2307
            },
            Gallons: {
                CubicFeet: 0.133681,
                CubicInches: 231.0,
                Cups: 15.7725,
                Gallons: 1.0,
                Quarts: 4.0,
                Liters: 3.78541,
                Tablespoons: 256.0
            },
            Quarts: {
                CubicFeet: 0.0334201,
                CubicInches: 57.75,
                Cups: 3.94314,
                Gallons: 0.25,
                Quarts: 1.0,
                Liters: 0.946353,
                Tablespoons: 64.0
            },
            Liters: {
                CubicFeet: 0.0353147,
                CubicInches: 61.0237,
                Cups: 4.16667,
                Gallons: 0.264172,
                Quarts: 1.05669,
                Liters: 1.0,
                Tablespoons: 67.628
            },
            Tablespoons: {
                CubicFeet: 0.00052219,
                CubicInches: 0.902344,
                Cups: 0.0616115,
                Gallons: 0.00390625,
                Quarts: 0.015625,
                Liters: 0.0147868,
                Tablespoons: 1.0,
            },
        },
        minimums: {
            CubicFeet: 0,
            CubicInches: 0,
            Cups: 0,
            Gallons: 0,
            Quarts: 0,
            Liters: 0,
            Tablespoons: 0,
        }
    }
}

module.exports = unitLibrary;
