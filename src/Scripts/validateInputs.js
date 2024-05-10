
const validateInputs = (startValue, startUnit, targetUnit) => {

    const firstInput = !isNaN(startValue);
    // const secondInput = !isNaN(studentString);

    if (startValue.length < 1) {
        // setScreenDisplay('initialNeeded');
        return false;

    // } else if (firstInput === false || targetUnit === false) {
    } else if (firstInput === false) {
        // setScreenDisplay('invalid');
        return false;

    } else if (startUnit.length < 1 || targetUnit.length < 1) {
        // setScreenDisplay('units');
        return false;
    } else {
        return true;
    }
}

module.exports = validateInputs;
