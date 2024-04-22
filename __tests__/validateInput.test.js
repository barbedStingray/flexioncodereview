
const validateInput = require('../__modules__/validateInputs');

// inputs are submitted as strings within UnitConverter.jsx

test('Check to see if "null, undefined a boolean", or an object is a number', () => {
    expect(validateInput('null')).toBe(false);
    expect(validateInput('undefined')).toBe(false);
    expect(validateInput('true')).toBe(false);
    expect(validateInput({ number: 76 })).toBe(false);
});

test('Check strings,floating pionts and exponentials for numbers', () => {
    expect(validateInput('76')).toBe(true);
    expect(validateInput('7.76')).toBe(true);
    expect(validateInput('3.76e4')).toBe(true);
    expect(validateInput('3.76e-4')).toBe(true);
    expect(validateInput(3.76e-4)).toBe(true);
    expect(validateInput('3.76e+4')).toBe(true);
});

// Symbols
const falseSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
const trueSymbols = ['+', '-'];
// symbols - FALSE
test('Check to see if a symbol combination with 76 is a number', () => {
    for (let i = 0; i < falseSymbols.length; i++) {
        expect(validateInput(`${falseSymbols[i]}76`)).toBe(false);
        expect(validateInput(`7${falseSymbols[i]}6`)).toBe(false);
        expect(validateInput(`76${falseSymbols[i]}`)).toBe(false);
    }
});
// symbols - TRUE
test('Check to see if a symbol combination with 76 is a number', () => {
    for (let i = 0; i < trueSymbols.length; i++) {
        expect(validateInput(`${trueSymbols[i]}76`)).toBe(true);
    }
});



