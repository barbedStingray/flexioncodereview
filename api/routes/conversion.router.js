const express = require('express');
const router = express.Router();



// ? app calculations
router.get('/', (req, res) => {
    console.log('This is the Conversion!');


    res.send('Booyah');
})

module.exports = router;