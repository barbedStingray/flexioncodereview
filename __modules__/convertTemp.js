

function calculateTemperature(promptNum, startUnit, targetUnit) {

    const unitConversions = {
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
    };

    const stringEquation = unitConversions[startUnit][targetUnit]; // identify string equation
    const equationFunction = new Function('x', `return ${stringEquation}`); // implement function constructor
    const correctTemp = equationFunction(Number(promptNum)); // run string function
    return correctTemp.toFixed(1);
}


module.exports = calculateTemperature