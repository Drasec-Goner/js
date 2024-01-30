//setTimeout Function

console.log('Normal function executed!');
const delayedFunction = () => {
    console.log('Delayed function executed!');
};

setTimeout(delayedFunction, 2000); // Executes after 2 seconds

// setInterval Function

const repeatedFunction = () => {
    console.log('Repeated function executed!');
};

const intervalId = setInterval(repeatedFunction, 1000); // Executes every 1 second

// clearInterval using setTimeout function

setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped.');
}, 5000);

//Callback Function

// Synchronous Callback function executes instantly while Asynchronous Callback Function execute at a later time

//Synchronous Callback Function

function parentFunction(name, callback) {
    callback();
    console.log("Hey "+name);
}

function randomFunction(){
    console.log("Hey I am synchronous callback Function");
}

parentFunction("Random String", randomFunction); //Higher order function

//Asynchronous Callback Function

const parentFunction1 = (name, callback) => {
    setTimeout(callback, 3000);
    console.log("Hey "+name);
};

parentFunction1("Random String", () => {
    console.log("Hey I am asynchronous callback Function");
});