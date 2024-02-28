//Write a code demonstrating how Express.js sets up a server to handle GET requests at 'readfile', read the content of 'example.txt' and send it as a response to browser


const express = require('express');
const fs = require('fs');
const app = express();
const port = 4200;

app.get('/readfile', (req, res) => {
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading file');
        } else {
            res.send(data);
        }
    });
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});