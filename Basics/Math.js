// Math - Math is a built-in JavaScript object that provides 
//        properties and methods for performing mathematical operations.
//        It is globally available (no need to import).

// Math Methods - 
console.log(Math.round(12.345));        // 12; Rounds a number to the nearest integer.
console.log(Math.floor(12.345));        // 12; Rounds down to nearest integer 
console.log(Math.ceil(12.345));         // 13; Rounds up to nearest integer
console.log(Math.trunc(12.345));        // 12; Removes all digits after decimal without rounding.

console.log(Math.abs(-12));             // 12; returns nagnitude.
console.log(Math.sqrt(25));             // 5
console.log(Math.cbrt(125));            // 5
console.log(Math.pow(5,3));             // 125
console.log(Math.min(25, 12, 34));      // 12
console.log(Math.max(25, 12, 34));      // 34

// random() - generates a random number between 0(inclusive) & 1(exclusive).
//            It can give 0 but never 1.
console.log(Math.random());             

// Que - Generate a random integer between 100 and 200.
let min = 100;
let max = 200;
let rand = Math.floor(Math.random() * (max-min+1)) + min;
console.log(`Random value between ${min} & ${max} : ${rand}`);

// Important Math Properties - 
console.log(Math.PI);               // PI (3.14.......)
console.log(Math.SQRT2);            // Square root of 2
console.log(Math.LN2);              // log base e 2
console.log(Math.LN10);             // log base e 10
