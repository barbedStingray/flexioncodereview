
const validateInput = require('../__modules__/validateInputs');


test('Check to see if "null, undefined or a boolean" is a number', () => {
    expect(validateInput('null')).toBe(false);
    expect(validateInput('undefined')).toBe(false);
    expect(validateInput('true')).toBe(false);
});
// object
test('Check to see if { number: 76 } is a number', () => {
    expect(validateInput({ number: 76 })).toBe(false);
});
// string value
test('Check to see if a string and floating point string is a number', () => {
    expect(validateInput('76')).toBe(true);    
    expect(validateInput('7.76')).toBe(true);
});

// scientific notation 
test('Check to see if "3.14e4" is a number', () => {
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



