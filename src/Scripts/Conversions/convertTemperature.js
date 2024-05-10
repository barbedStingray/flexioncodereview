
const unitLibrary = require('../unitLibrary');

const convertTemperature = (unit, startValue, startUnit, targetUnit) => {
    console.log('converting temps...', unit, startValue, startUnit, targetUnit);

    const conversions = unitLibrary[unit].conversions;
    // console.log('conversions', conversions);
    const stringEquation = conversions[`${startUnit}`][`${targetUnit}`]; // get string equation
    const equationFunction = new Function('x', `return ${stringEquation}`); // function constructor
    const correctTemp = equationFunction(Number(startValue)); // run function
    console.log('correct temp', correctTemp);
    return correctTemp;
}

module.exports = convertTemperature;