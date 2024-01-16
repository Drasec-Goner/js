function exampleFunction()
{
    if(true)
    {
        var functionScopedVar = "I am function-scoped";
    }
    console.log(functionScopedVar); // "I am function-scoped"
    var functionScopedVar = "I am changed"; //No Error(Can be redeclared) = Bad thing
    console.log(functionScopedVar);
}

exampleFunction();

//console.log(functionScopedVar); // Error: functionScopedVar

// var  = function-level scope
// let / const = block - level scope

function exampleFunction1()
{
    if(true)
    {
        let blockScopedVar = "I am block-scoped";
        console.log(blockScopedVar); // "I am block-scoped"
        // let blockScopedVar = 3; // Error: Cannot be Redeclared
        // console.log(blockScopedVar);
    }
    //console.log(blockScopedVar); // Error: blockScopedVar
}

exampleFunction1();

function exampleFunction2()
{
    if(true)
    {
        const blockScopedVar = "I am block-scoped";
        console.log(blockScopedVar); // "I am block-scoped"
        // blockScopedVar = "I have changed"; // Error: Assignment to constant variable
        // console.log(blockScopedVar);
    }
    //console.log(blockScopedVar); // Error: blockScopedVar
}

exampleFunction2();



//Shadowing

var shadowedVar = "I am global";

function exampleFunction3()
{
    var shadowedVar = "I am local";
    console.log(shadowedVar); // "I am local" (Local variable takes precedence over global variable in the scope)
}

exampleFunction3();
console.log(shadowedVar); // "I am global"


let shadowedVar1 = "I am global";

function exampleFunction4()
{
    let shadowedVar1 = "I am local";
    console.log(shadowedVar); // "I am global" (Local variable doesnt take precedence over global variable in the scope)
}

exampleFunction4();
console.log(shadowedVar1); // "I am global"

// Hoisting

console.log(x); //undefined
var x=5;
console.log(x); // 5

// console.log(y); //Error: Cannot access before initialization
let y=7;
console.log(y);

//same for const - doesnt have any default intialization unlike var 


//Primitive Data Types:
//Note: Js is a loosely typed language - Doesnt need to say the data type of variable when declaring

let str = "YOOO" //String - '' / ""
console.log(str);

let age = 25; //Number

let isStudent = true; //Boolean

let undefinedVar; //absense of a value

let nullVar = null; //intentional absense of a value

//Object Data Types:

let person = {
    name: "Soumya", //key : value pair
    age: 19,
    isStudent: true
}; // Object

console.log(person.name); //Soumya


let fruits = [1, "banana", "orange"]; // Array
console.log(fruits[0]);

function add(a,b) { //Function with parameters
    return a + b;
}

var a =add(2,3);
console.log(a);

//typeof() - says the data type of the variable
console.log(typeof(str)); 

