// String - Sequence of characters, used to represent Text.
// Strings in JS are immutable.

// Creating a String -
let s0 = "Jhon";                        // Double quotes
let s1 = 'Alice';                       // Single quotes
let s2 = `Doe`;                         // Backticks
let s3 = new String("Mohan");           // String object

// Use different type of quotes when String Containes quotes inside. or backslash.
let s4 = 'Tony said "Hello Jarvis"';
let s5 = "Tony said \"Hello Jarvis\"";
console.log(s4);
console.log(s5);

// Concatenation
console.log("Hello "+"Jarvis");

// Priniting a String -
let name = "Shahil";
let age = 21;
console.log("Hello, My name is "+name+", and I'm "+age+" years old.");
console.log("Hello, My name is",name,", and I'm",age,"years old.");

// Template literals -
// ${...} is called interpolation.
console.log(`Hello, My name is ${name.toUpperCase()}, and I'm ${age} years old.`);

// Accessing individual characters using index -
let s6 = "Apple";
console.log(s6[0]);             // A
console.log(s6[3]);             // l

console.log(s6.charAt(4));      // e
console.log(s6.charAt(-1));     // no error (returns "").
console.log(s6.charAt(0));      // A
console.log(s6.charAt(5));      // no error (returns "").

// Important String methods -

// Removing White-Spaces -
let str = "     Anonymous    ";
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

// String()[Constructor] - Returns a string object of primitive values.
//                         Accepts null/undefined too. 
str = new String("The quick brown fox jumps over the lazy dog");
console.log(typeof(str));                   // object(not primitive string)
console.log(String(null));                  // "null"
console.log(String(undefined));             // "undefined"
console.log(String(123));                   // "123"

// toString() - returns a string representation of a value. 
//              Error if used on null/undefined.
//              It gives primitive string not object.              
console.log((123.35).toString());           // "123.35"
console.log(true.toString());               // "true"
console.log([1,2,3].toString());            // "1,2,3"

console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.at(-1));                    // supports -ve index too (Preferred)
console.log(str.charAt(2));                 // does not support -ve index 
console.log(str.startsWith("The"));
console.log(str.endsWith("The"));
console.log(str.includes("brown"));         // checks if substring present in the string 
console.log(str.indexOf("o"));              // gives first index
console.log(str.lastIndexOf("o"));          // gives last index
console.log(str.search("fox"));             // returns the index of specified substring in the string
console.log(str.replace(" ","-"));          // replaces first occurance of old substring with new substring. 
console.log(str.replaceAll(" ","-"));       // replaces all occurances of old substring with new substring.
console.log(str.slice(4,-19));              // Extracts part of a string and returns it as a new string. Accepts -ve indices
console.log(str.substring(4,19));           // Extracts part of a string and returns it as a new string. -ve index is treated as 0.
console.log(str.substr(4,5));               // Extracts 5 characters of string starting from index 4 and returns it as a new string. -ve index is accepted.
console.log(str.split(" "));                // splits a string based on specified separator & returns an array.

let s = str.valueOf();                      // Returns the primitive value of an object.
console.log(typeof s+":"+s);

console.log("Shahil ".concat("Kaushar"," & ","Shah"," Faisal"));
console.log("Nitu ".repeat(3));             // Repeats the string 3 times
