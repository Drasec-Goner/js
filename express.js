const express = require('express');
// Express is a Node.js framework
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Hello, World!');
});

app.get('/nig', (req,res) => {
    res.send('Hello, Nigga!');
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});