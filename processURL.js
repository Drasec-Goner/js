const url = require('url');

const urlString =  'http://example.com/path?foo=bar&baz=qux';
const parsedUrl = url.parse(urlString,true);
//true is used for - to decode the queryString into object type
//using false - results in not decoding the queryString and returning as it is
console.log(parsedUrl);
console.log(parsedUrl.pathname); // Output: '/path
console.log(parsedUrl.query); // Output: { foo: 'bar', baz: 'qux'};


//Processing QueryString

const querystring = require('querystring');

const queryString = 'foo=bar&baz=qux';
const parsedQuery = querystring.parse(queryString);

console.log(parsedQuery);