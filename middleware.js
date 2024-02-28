//Middleware Functions are functions that have access to the request object(req), the response object(res), and the next middleware function in the application's request-response cycle.

//Serves as a bridge between a client request and server response in web applications

//Request Processing
//Authenication and Authorization
//Logging and Debugging


const express = require('express');
const app = express();

//Middleware function
app.use((req, res, next) => {
    console.log('This is a middleware function!');
    next(); // Call the next middleware function in the stack
});

//Route Handler
app.get('/', (req,res) =>{
    res.send('Hello, World');
});

//This wont work as the response has been sent already as the route handler sends the response back to the client
app.use((req, res, next) => {
    console.log('I am the second MIDDLEWARE EHEHEHE');
    next();
});


app.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
});