const express = require('express');
const router = express.Router();


// conversion function
const processConversion = require('../../src/Scripts/processConversion.js');
const validateInputs = require('../../src/Scripts/validateInputs.js');

// THIS IS YOUR MASTER FUNCTOIN NOW
router.post('/', (req, res) => {
    console.log('This is the Conversion!');
    const { unit, startValue, startUnit, targetUnit } = req.body;
    console.log('values', startValue, startUnit, targetUnit);

    // todo validate inputs
    if (!validateInputs(startValue, startUnit, targetUnit)) {
        res.send('input validation failed');
        // ? send something you can use to alert the user - nah.
        return;
    }

    // determine unit to process
    // get correct answer
    const targetValue = processConversion(unit, startValue, startUnit, targetUnit);

    // todo validate unit parameter


    // const targetValue = 55
    console.log('targetValue', targetValue);

    // res.send('Booyah');
    return res.status(201).send(targetValue.toFixed(4));
})

module.exports = router;