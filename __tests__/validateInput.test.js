
const validateInput = require('../__modules__/validateInputs');

const falseSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
const trueSymbols = ['+', '-'];

// null
test('Check to see if "null" is a number', () => {
    expect(validateInput('null')).toBe(false);
});
// undefined
test('Check to see if "undefined" is a number', () => {
    expect(validateInput('undefined')).toBe(false);
});
// non-string
test('Check to see if non-string 34 is a number', () => {
    expect(validateInput(34)).toBe(true);
});
// string value
test('Check to see if "76" is a number', () => {
    expect(validateInput('76')).toBe(true);
});
// floating point string value
test('Check to see if "7.76" is a number', () => {
    expect(validateInput('7.76')).toBe(true);
});
// floating point number value
test('Check to see if 7.76 is a number', () => {
    expect(validateInput(7.76)).toBe(true);
});
// boolean
test('Check to see if "true" is a number', () => {
    expect(validateInput('true')).toBe(false);
});



// scientific notation and bigInts
test('Check to see if "3.14e4" is a number', () => {
    expect(validateInput('3.14e4')).toBe(true);
});
test('Check to see if "3.76e-4" is a number', () => {
    expect(validateInput('3.76e-4')).toBe(true);
});



// symbols - FALSE
for (let i = 0; i < falseSymbols.length; i++) {
    console.log('THIS IS I', `${falseSymbols[i]}76`);
    test('Check to see if a symbol combination with 76 is a number', () => {
        expect(validateInput(`${falseSymbols[i]}76`)).toBe(false);
    });
}
// symbols - TRUE
for (let i = 0; i < trueSymbols.length; i++) {
    console.log('THIS IS I', `${trueSymbols[i]}76`);
    test('Check to see if a symbol combination with 76 is a number', () => {
        expect(validateInput(`${trueSymbols[i]}76`)).toBe(true);
    });
}


