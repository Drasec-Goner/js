
// Example 1: Function scope and variable redeclaration------------------------------------------------------------------------------------------------
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

// Example 2: Block scope with let------------------------------------------------------------------------------------------------
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


// Example 3: Block scope with const------------------------------------------------------------------------------------------------
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




// Example 4: Shadowing with var------------------------------------------------------------------------------------------------

var shadowedVar = "I am global";

function exampleFunction3()
{
    var shadowedVar = "I am local";
    console.log(shadowedVar); // "I am local" (Local variable takes precedence over global variable in the scope)
}

exampleFunction3();
console.log(shadowedVar); // "I am global"



// Example 5: Shadowing with let------------------------------------------------------------------------------------------------
let shadowedVar1 = "I am global";

function exampleFunction4()
{
    let shadowedVar1 = "I am local";
    console.log(shadowedVar); // "I am global" (Local variable doesnt take precedence over global variable in the scope)
}

exampleFunction4();
console.log(shadowedVar1); // "I am global"



// Example 6: Hoisting------------------------------------------------------------------------------------------------------------
console.log(x); //undefined
var x=5;
console.log(x); // 5

// console.log(y); //Error: Cannot access before initialization
let y=7;
console.log(y);

//same for const - doesnt have any default intialization unlike var 

//Hoisting with functions
hello(); // "Hello, World!"

function hello() {
    console.log("Hello, World!");
}


// Example 7: Data Types --------------------------------------------------------------------------------------------------------------
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


// Example 8: Function ------------------------------------------------------------------------------------------------------------------
function add(a,b) { //Function with parameters
    return a + b;
}

var a =add(2,3);
console.log(a);


// Example 9: typeof------------------------------------------------------------------------------------------------------------------------
//typeof() - says the data type of the variable
console.log(typeof(str)); 

// Example 10: Type Coercion----------------------------------------------------------------------------------------------------------------
let result = 5 + "5"; // Result is the string "55" 
console.log(result);
result = 5 + 5; // Result = 10
console.log(result);
result = "5" + "5"; // Result = "55"
console.log(result);
result = 2 + 2 - 2; // Result = 2
console.log(result);
result = "2" + "2" - "2";
console.log(result); // Result = 20
result = "5" * "5" / 5;
console.log(result); // Result = 5

//Version Control: A system that records chnages to a file or set of files over time, so you can 