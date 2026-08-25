"use strict"                        // treat all JS code as newer version of JS.

let name = "Tony Stark";            // string

let num = 15                        // number
let decimal = 13.3                  // number
let bigNum = 16534125657245653671n  // BigInt

let isAbove18 = true                // boolean

let she;                            // Undefined

// null - null is an object, it represents an intentional absence of a value.
let user = null;                    // null(Object)

const id = Symbol("id");            // Symbol

const person = {                    // Object- stores collection of related data.
    name : "Ramesh",
    age  :  35,
    city : "Banaras"
};

// DataTypes in JS = 7+1 = 8

// Non-Primitive DataTypes (Call by Reference) - Object, Array, Function...etc
console.log(typeof(person));        // object

// Primitive DataTypes (Call by Value) -
console.log(typeof(id));            // symbol
console.log(typeof(she));           // undefined
console.log(typeof(isAbove18));     // boolean
console.log(typeof(bigNum));        // bigint
console.log(typeof(decimal));       // number
console.log(typeof(num));           // number
console.log(typeof(name));          // string
