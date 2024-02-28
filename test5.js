//Build a simple Express.js server that accepts GET requests containing query parameters representing user information. Your server should extract these query parameters, saved them to a file, and respond with a success message

const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req,res) =>{
    fs.readFile('form.html', 'utf8', (err,data) => {
        if(err){
            console.error(err);
            res.status(500).send('Error reading file');
        } else {
            res.send(data);
        }
    });
});

app.get('/submit', (req, res) => {
    const query = req.query;
    const formData = `Name: ${query.username},\n Gender: ${query.gender},\n Age: ${query.age},\n Email: ${query.email},\n Password: ${querpassword}\n`;
    fs.appendFile('form_details.txt', formData, 'utf8', (err) => {
            if (err)
                throw err;
            console.log('Form data saved!');
        }
    );
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});

