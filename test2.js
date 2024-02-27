
const http = require('http');
const fs = require('fs');
const url = require('url'); // Add the missing import statement for the 'url' module

const server = http.createServer((req,res)=>{
    let path = url.parse(req.url,true);
    consoe.log(path);
    if(req.url=='/')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        const readableStream = fs.createReadStream('test2.html', {encoding:'utf8'});
        readableStream.pipe(res);
    }
    else if(path.pathname=='/submit')
    {
        req.on('end', () => {
            const query = path.query;
            const formData = Object.entries(query).map(([key, value]) => `${key}: ${value}`).join('\n');
            const writeStream = fs.createWriteStream('form_data.txt');
            writeStream.write(formData, 'utf8', (err) => {
                if (err)
                    throw err;
                console.log('Form data saved!');
            });
            writeStream.end();
            res.end('Form data submitted successfully!');
        });
    }
});

const port = 5900;
server.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});

