
const unitLibrary = require('../unitLibrary');

const convertVolume = (unit, startValue, startUnit, targetUnit) => {
    console.log('converting Volume...', unit, startValue, startUnit, targetUnit);
    const conversions = unitLibrary[unit].conversions;
    // console.log('conversions', conversions);
    const correctVolume = Number(startValue) * conversions[`${startUnit}`][`${targetUnit}`];
    // console.log('correctVolume', correctVolume);
    return correctVolume;
}

module.exports = convertVolume;