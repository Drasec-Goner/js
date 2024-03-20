// Write a middleware function in express.js that logs the timestamp, HTTP method, and URL of every incoming request to a file named 'request.log'. Ensure that the log file is created if it doesn't exist and that new log entries are appended to it.

const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.use((req,res,next) => {
    const data = `Date: ${new Date().toISOString()} ; Method: ${req.method} ; URL: ${req.url} \n`;
    fs.appendFile('request.log', data, 'utf8', (err) => {
        if (err)
            throw err;
    });
    next();
});

app.get('/', (req,res) => {
    res.send('Time saved!');
})

app.listen(port, () => {
    console.log(`Server is listening to http://localhost:${port}`);
});