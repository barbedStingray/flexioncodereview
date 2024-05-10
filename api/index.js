const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');


// router variables
const conversionRouter = require('./routes/conversion.router.js');

// Middleware
app.use(express.json()); // axios requests

// Express Routes  
app.use('/api/conversion', conversionRouter);

console.log('the server is running!');


// Serve the static files
app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5076;

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});


module.exports = app;