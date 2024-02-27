//Design a Node.js server using the HTTP and FS modules to efficiently read the contents of a file('esxample.txt) and stream it to another file ('example2.txt') when a client accesses the server's root URL ('/')?

const http = require('http');
const fs = require('fs');

const writableStream = fs.createWriteStream('example2.txt');
const server = http.createServer((req,res)=> {
    if(req.url==='/')
    {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        const readableStream = fs.createReadStream('example.txt', {encoding : 'utf8', highWaterMark: 8});

        readableStream.on('data', (chunk) => {
            writableStream.write(chunk);
        });
        // writableStream.end();
        
        readableStream.on('error', (err) => {
            console.error("Error found when reading the file: ",err);
        });
        res.end("File has been copied");
    }
    else
    {
        res.writeHead(500,{'Content-Type' : 'text/plain'});
        res.end("URL Not Found");
    }
});

const port = 8080;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});