// Number - a primitive data type. Represents Integer + Decimal values.
// Posible values of number :
            // Integer (+ve, 0, -ve)
            // Decimal
            // Infinity
            // -Infinity
            // NaN (Not-a-Number)

let n1 = 123;                           // Primitive number
let n2 = new Number(123);               // Object of Number type

// Basic Operations -
const a = 10;
const b = 3;
console.log(a + b);                     // 13
console.log(a - b);                     // 7
console.log(a * b);                     // 30
console.log(a / b);                     // 3.333...
console.log(a % b);                     // 1
console.log(a ** b);                    // 1000

// Special Number Values - 
console.log(3/0);                       // Infinity
console.log(-1/0);                      // -Infinity
console.log("Hello" * 5);               // NaN

// Note - NaN stands for Not-a-Number, but
console.log(typeof NaN);                // number

// Number Conversion - 
console.log(Number("100"));             // 100
console.log(Number("10.5"));            // 10.5
console.log(Number(true));              // 1
console.log(Number(false));             // 0
console.log(Number(null));              // 0
console.log(Number("Hello"));           // NaN

// Number Methods - 

// 1. Number.isInteger(number) - Checks if a value is an integer
console.log(Number.isInteger(10));      // true
console.log(Number.isInteger(10.5));    // false

// 2. Number.isNaN(number) - Checks if a value is an NaN
console.log(Number.isNaN(NaN));         // true
console.log(Number.isNaN(100));         // false

// 3. Number.isFinite(number) - Checks whether a value is a finite number
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(10));       // true

// 4. Number.parseInt(string) - Converts a string into an integer.
//          It can also handle a string containing extra text after a valid Integer.
console.log(Number.parseInt("100"));        // 100
console.log(Number.parseInt("100.99"));     // 100
console.log(Number.parseInt("100abc"));     // 100
console.log(Number.parseInt("abc123"));     // NaN

// 5. Number.parseFloat(string) - Converts a string into an decimal.
//             It also handle a string containing extra text after a valid Decimal. 
console.log(Number.parseFloat("10.2"));     // 10.2
console.log(Number.parseFloat("10.2abc"));  // 10.2
console.log(Number.parseFloat("abc10.2"));  // NaN

// 6. Number() [Constructor] - Converts a numeric string into a number.
//                It does not handle extra text after a valid number in a string.
//                In this case, it returns NaN.
console.log(Number("12"));           // 12
console.log(Number("12.4"));         // 12.4
console.log(Number("abc12"));        // NaN
console.log(Number("12abc"));        // NaN

// 7. toFixed(n) - Rounds & Formats a number with a fixed number of digits after
//                 the decimal point. It returns a string.
console.log(123.456.toFixed(2));        // "123.46"

// 8. toPrecision(n) - Formats a number to a specified number of significant digits.
//                 It returns a string.
console.log(123.456.toPrecision(5));    // "123.46"

// 9. toString() - returns a string representation of a object.
console.log(123.456.toString());        // "123.456"

// 10. valueOf() - returns the primitive value of the specified object.
console.log(123.456.valueOf());         // 123.456

// Number Constants - 
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
