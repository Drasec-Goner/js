const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}));

app.get('/',(req,res) => {
    const readStream = fs.createReadStream('form1.html');
    readStream.pipe(res);
});

app.post('/submit', (req,res) => {
    const formData = req.body;
    console.log("Form Data: ", formData);
    let data = JSON.stringify(formData);
    const writeStream = fs.createWriteStream('body.json');
    writeStream.write(data);
    writeStream.end();
    res.send('Form submisssion sucessfull');
});

const port =8000;

app.listen(port, () =>{
    console.log(`Server is listening on http://localhost:${port}`);
})