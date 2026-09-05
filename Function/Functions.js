// function - A reusable block of code that performs a specific task.

// Function without parameter - 
function hello(){
    console.log("Hello, World!");
}
hello();

// Function with parameter -
function greet(name){
    console.log(`Hello, ${name}!`);
}
greet("Faisal");

// function with multiple parameters - 
function sum(a,...b){
    console.log(b.reduce((sum,n) => sum + n, a));
}
sum(1,2,3,4,5,6,7);

// function with 'return' statement - 
function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3));

// Note - If a function does not explicitly return a value, JS returns 'undefined'.

// Default Parameter - We can give a default value for a pararmeter.
function welcome(name = "Guest"){
    // When no argument is provided, 'Guest' is used.
    console.log(`Welcome ${name}`);
}
welcome();              // Welcome Guest
welcome("Shahil");      // Welcome Shahil

// Function Expression - A function can also be stored in a variable.
//                       This is called function expression.
const sqr = function(n){
    return n**2;
}
console.log(sqr(3));

// Arrow function - Arrow function provides shorter syntax to write functions.
const add1 = (a,b) => {
    return a + b;
}
// More Shorter Syntax: When there is only one line code in function body.
const add2 = (a,b) => a + b;

console.log(add1(4,5));
console.log(add2(4,5));

// One Parameter - with one parameter, paranthesis can be omitted(ignored).
const sayHello = name => console.log(`Hello ${name}`);
sayHello("Shahil");

// Multiple Statements in arrow functions - 
// Use {} and return if needed.
perimeterOfRectangle = (l,b) => {
    let temp = l + b;
    let ans = 2 * temp;
    return ans;
}
console.log(perimeterOfRectangle(4,5));


//----------------Functions are First-class values in JS-------------------// 
 
// It means, we can store functions in variables.
const myFun = function(){
    console.log("Hello, World!");
}
myFun();

// Put Function in Object - 
const myObj = {
    name : "Jarvis",
    greet(){
        console.log(`Hello ${this.name}`);
    }
}
myObj.greet();

// Put function in array -
const arr = [
    function(){
        console.log("Hello");
    },
    function(){
        console.log("Bye");
    }
]
arr[0]();
arr[1]();

// Pass functions to other function -
const execute = (f,x) => f(x);
function fun(name){
    console.log(`I am ${name}`);
}
execute(fun,"Shahil");


//--------------------Summary--------------------//
// Normal function = Function Declaration
function func1(){
    console.log("I am function 1.");
}

// Function Expression = Function stored in a variable
const func2 = function(){
    console.log("I am function 2.");
}

// Arrow Function = Shorter syntax to write function 
const func3 = () => {
    console.log("I am function 3.");
}

func1();
func2();
func3();
