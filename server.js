const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello, World!');
    
    // if(req.url=="/"){
    //     fs.readFile('a.txt','utf8',(err,data) =>{
    //         if(err) {
    //             console.error(err);
    //             return;
    //         }
    //         res.writeHead(200, {'Content-Type': 'text/plain'});
    //         res.write('File Content:'+data);
    //     })
    // }
    // else if(req.url=="/shubham"){
    //     res.end("shubham is the leader of MAJAKIYA CULT")
    // }
    if(req.url==='/')
    {
        const message = "Hello, this is your Node.js server!";

    fs.writeFile('output.txt', message, 'utf8', (err) => {
        if(err) {
            console.error(err);
            res.writeHead(500, { 'Content-Type' : 'text/plain'});
            res.end('Internal Server Error');
            return;
        } 
            res.writeHead(200, {'Content-Type' : 'text/plain'});
            res.end('File Context: '+ message);
        })
    }
});

const port = 4040;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})