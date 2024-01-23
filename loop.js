// for loop - when no. of iterations is known

for(let i=0;i<5;i++)
{
    console.log(i);
}

// while loop - when no. of iterations is not known

let count = 0;
while(count < 5){
    console.log(count);
    count++;
}

// do-while loop - similar to a while loop but code is executed at least once

let count1 = 0;
do {
    console.log(count1);
    count1++;
} while (count1 < 5);

// for-in loop - iterates over the properties of an object

let person = { name: "John", age: 30, occupation: "Developer"};
for(let key in person) {
    console.log(key + ": " + person[key]);
}

//Objects 

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    isElectric: false,
    start: function() {
        console.log("Engine started!");
    }
};

//Accessing Properties
console.log(car.make);
// Calling a method
car.start();

//Object Constructor
//Note - Constructor is written with Capital first letter as standards

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

//Creating instances of the object
let book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
let book2 = new Book("To Kill a MockingBird", "Harper Lee", 1960);

//Accessing elements through object instances
console.log(book1.title);
console.log(book1.author);
console.log(book1.year);

//Arrays

let fruits = ["apple", "banana", "orange", "grape"];

//Accessing elements
console.log(fruits[0]);
console.log(fruits[2]);

//Adding elements to the end
fruits.push("kiwi");
console.log(fruits);

//Adding elements to the beginning
fruits.unshift("mango");
console.log(fruits);

//Removing the last element
let removedLast = fruits.pop();

//Removing the first element
let removedFirst = fruits.shift();

//Finding index of an element
let indexOfOrange = fruits.indexOf("orange");

//Iterating using a for loop
for(let  i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

//Slicing an array
let citrus = fruits.slice(1,3);
console.log(citrus);

//Splicing an array (Modifying original array)
let removed = fruits.splice(1,2,"pear", "melon");

//Concatenating arrays
let moreFruits = ["grapefruit", "pineapple"];
let allFruits = fruits.concat(moreFruits);

//Anonymous Function
const multiply = function(a,b) {
    return a * b;
};

//Invocation
const product = multiply(4,6);
console.log('Function Expression - Product: ', product);

//Arrow Function

const subtract = (a,b) => a-b;

//Inovation
const difference = subtract(8,3);
console.log('Arrow Function - Difference: ', difference);

//Error Handling
try {
    //Code that may throw an error
    throw new Error("An error");
} catch (error) {
    //Code to handle the error
    console.error(error.message);
} finally {
    //Code that will run regardless of whether there was an error
    console.log("Cleanup code");
}

//Errors and Exception are not the same