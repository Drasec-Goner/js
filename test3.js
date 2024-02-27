//Create a node.js server that serves a specific text file, compresses it with gzip encoding and dynamically responds to HTTP requests? Provide a detailed code solution.
const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream('example.txt');
    // if (req.url === '/') {
    //     res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Encoding': 'gzip' });

    //     const readableStream = fs.createReadStream('file.txt', { encoding: 'utf8' });

    //     readableStream.on('data', (chunk) => {
    //         readableStream.pipe(zlib.gzip(chunk)).pipe(res);
    //     });

    //     readableStream.on('end', () => {
    //         res.end();
    //     });
    // }
    res.writeHead(200, {'Content-Type':'text/plain', 'Content-Encoding':'gzip'});
    readStream.pipe(zlib.Gzip()).pipe(res);

    readStream.on('error', (err) => {
        console.error('Erorr reading file:',err);
        res.statusCode = 500;
        res.end('Internal Server Error');
    });
});

const port = 8900;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});