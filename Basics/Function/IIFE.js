// IIFE - Immidiately Invoked Function Expression
        // It is a function that is created and executed immidiately.
        // Used in older JS code before let & const introduced block scope.
        // Why Used - 
            // Creates a private scope for variables.
            // Prevents global namespace pollution.

// Un-named IIFE -
(function (){
    console.log(`Hello Jarvis.`);
})();


// Named IIFE -
(function greet(){
    console.log("Hello Boss.");
})();


// With Array function - 
(() => console.log(`No Caraxes`))();


// IIFE with parameter - 
((a,b) => {
    console.log(`${a} + ${b} = ${a+b}`);
})(2,3);


// Creates Private scope for variables - 
(() => {
    let message = "Private var";
    console.log(message);
})();

// console.log(message);       // Error: message is only accessible in IIFE.


// Prevents global namespace pollution.
let p = "Global var";

(() => {
    let p = "IIFE var";
    console.log(p);             // IIFE var
})();

console.log(p);                 // Global var

// Instead we can use - 
var name = "Shahil";
{
    const name = "Faisal";
    console.log(name);     // Faisal
}
console.log(name);         // Shahil
