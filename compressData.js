const zlib = require('zlib');

//Example data
const input = 'Hello, World!';

//Compress data
zlib.gzip(input, (err,compressedData) => {
    if(err) {
        console.error('Error compressing data:', err);

        return;
    }
    console.log("Compressed Data: ",compressedData.toString());

    //Decompress the data
    zlib.gunzip(compressedData, (err,decompressedData) => {
        if(err)
        {
            console.error('Error decompressing data:', err);
            return;
        }
        console.log('Decompressed Data: ',decompressedData.toString());
});
});