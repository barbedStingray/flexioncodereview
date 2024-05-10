
const convertVolume = require('../../src/Scripts/Conversions/convertVolume.js');
const convertTemperature = require('../../src/Scripts/Conversions/convertTemperature.js');


const processConversion = (unit, startValue, startUnit, targetUnit) => {
    console.log('determining which unit to calculate');
    let targetValue;

    switch (unit) {
        case ('Temperature'):
            console.log('temp calculation');
            return targetValue = convertTemperature(unit, startValue, startUnit, targetUnit);
        case ('Volume'):
            console.log('volume calculation');
            return targetValue = convertVolume(unit, startValue, startUnit, targetUnit);
        default:
            console.log('Error, no matching units');
            return;
    }

}
module.exports = processConversion;