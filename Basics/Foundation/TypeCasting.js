// Type Conversion - 2
// 1. Explicit conversion — you manually convert the type.
// 2. Implicit conversion — JavaScript automatically converts the type.

// 1. Explicit conversion -

let num1 = Number("12.5");
console.log(typeof(num1)," : ",num1);       

let num2 = Number("123abc");
console.log(typeof(num2)," : ",num2);       // NaN - Not a Number

let str1 = String(123.4);
console.log(typeof(str1)," : ",str1);       // 123.4 : string

const str2 = toString(12);
console.log(typeof(str2)," : ",str2);       // 12 : object undefined

console.log(Boolean("hello"));              // true
console.log(Boolean(""));                   // false

console.log(Boolean(0));                    // false
console.log(Boolean(1));                    // true
console.log(Boolean(100));                  // true
console.log(Boolean(NaN))                   // false

console.log(Number(true));                  // 1
console.log(Number(false));                 // 0

console.log(Number(null))                      // 0
console.log(Boolean(null))                     // false

console.log(Number(undefined))                 // NaN

// 2. Implicit conversion - 

console.log("10" + 5);                      // 105
console.log("10" - 5);                      // 5

console.log(5 + "10");                      // 510
console.log(5 - "10");                      // -5
console.log(6 + 5 + "10");                  // 1110
console.log(6 + 5 - "10");                  // 1

console.log(+true);                         // 1
console.log(+false);                        // 0

// Note - Comparision operators changes value to number than compares.
//        While Assignment operator behaves special with null & undefined.

console.log(null < 0);                       // false
console.log(null > 0);                       // false
console.log(null == 0);                      // false
console.log(null <= 0);                      // true
console.log(null >= 0);                      // true

// == → compare after conversion
// === → compare value + type

console.log(12 == "12");                    // true
console.log(12 != "12");                    // false
console.log(12 === "12");                   // false
console.log(12 !== "12");                   // true

// Note -    null == undefined              // true
//           null == anything else          // false
