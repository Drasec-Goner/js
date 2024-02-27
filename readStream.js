//Reading Data

const fs = require('fs');

//Create a readable stream with a smaller chunk size (e.g 64 bytes)
const readableStream = fs.createReadStream('example.txt', { encoding: 'utf8' , highWaterMark: 64 });

//Listen for the 'data' event, which indicates that a chunk of data is available
readableStream.on('data', (chunk) => {
    console.log('Received chunk of data:');
    console.log(chunk);
});

//Listen for the 'end' event, which indicates that all data has been read
readableStream.on('end', () => {
    console.log('Finished reading data from the file.');
});

//Listen for the 'error' event, in case of any errors during reading
readableStream.on('error', (err) => {
    console.error('Error reading data:', err);
});

//Writing Data

//Create a writable stream to write data to a file
const writableStream = fs.createWriteStream('output.txt');

// Data to be written
const data = ['hello, world!\n', 'THis is a test.\n'];

//Write data in chunks
data.forEach(chunk => {
    writableStream.write(chunk);
});

// End the writable stream to indicate that no more data will be written
writableStream.end();

//Listen for the 'finish' event, which indicates that all data has been written
writableStream.on('finish', () => {
    
})