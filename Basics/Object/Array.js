// Array - A data structure that stores multiple values under a single name.
// 0 based indexing.
// Elements can be of different types.

// Creating an array - 
let emptyArr = [];                                            // empty array
let students = ["Peter Parker", "Tony Stark", "Natasha"];     // non-empty array
let a = new Array(1,2,3,4,5,6,7);                           // using Array() constructor
const data = ["Tony", 21, true, null, { city: "Ballia" }];    // array with different datatype 

// Accessing values - 
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[5]);           // undefined
console.log(students[-5]);          // undefined

// Changing an Array Element - 
students[0] = "Spiderman";              // "Peter Parker" -> "Spiderman"

// Arrays created with const can still have their elements changed because const
// prevents reassignment of the variable, not modification of the array's contents.
const fruits1 = ["Apple", "Mango", "Banana"];
fruits1[1] = "Orange";
console.log(fruits1);                // ["Apple", "Orange", "Banana"]

const fruits2 = ["Apple", "Mango"];
// fruits2 = ["Banana", "Orange"];      // Error

// length Property - 
console.log(students.length);

// Array Methods - 
let arr = [1,2,3,4,5,6,7];

// Adding & Deleting array elements -
arr.push(8);            // Adds an element at the end of the array.
arr.pop();              // Removes & Returns the last element.
arr.unshift(0);         // Adds elements at the beginning.
arr.shift();            // Removes 1st element.

// Searching array element -
console.log(arr.includes(7));           // Checks if element is present.

console.log(arr.indexOf(7));            // Returns the index of the first matching element. -1 if not found.
console.log(arr.find(n => n < 5));      // Finds the first element that satisfies a condition.
console.log(arr.findIndex(n => n===4)); // Finds the index of first element that satisfies the condition in an array.

// slice(start, end) - Returns a portion of an array without modifying the original array.
console.log(arr.slice(1,5));        // [2,3,4,5];   index 5 in not included.

// splice(start, deleteCount) - Used to add, remove, or replace elements in the original array.
const myArr = ["Apple", "Cat", "Dog"];
myArr.splice(1,0,"Boy");            // inserts "Boy" at index 1.
myArr.splice(4,0,"Egg");            // inserts "Egg" at index 4.
myArr.splice(4,1,"Elephant");       // removes "Egg" & inserts "Elephant" at index 4.
console.log(myArr);                 // ["Apple","Boy","Cat","Dog","Elephant"]
console.log(myArr.splice(2,2));     // Removes & Returns ["Cat","Dog"]
// Here , 2 -> starting index 
//        2 -> number of elements to delete.
console.log(myArr);                 // ["Apple","Boy","Elephant"]

// Joining Arrays -
const arr1 = [1,2,3,4];
const arr2 = [5,6,7];
const arr1_arr2 = arr1.concat(arr2);
console.log(arr1_arr2);         
// or
const Arr1_Arr2 = [...arr1,...arr2];        // Spread operator
console.log(Arr1_Arr2);

// join() - converts an array to string.
let arrStr = arr.join(", ");
console.log(arrStr);

// reverse() - reverses the array. It modifies the original array.
console.log(arr.reverse());
console.log(arr);

// sort() - sorts the array lexicographically. It modifies the original array.
/*
lexicographically sorting:
[1,2,10] -> [1,10,2]
*/
let numbers = [1,2,10,19,3,25,2];
console.log(numbers.sort());        // [1,10,19,2,2,25,3]
console.log(numbers);               // [1,10,19,2,2,25,3]

// For numeric sorting - 
// Acsending order - 
numbers.sort((a,b) => a-b);
console.log(numbers);               // [1,2,2,3,10,19,25]

// Descending order - 
numbers.sort((a,b) => b-a);
console.log(numbers);               // [25,19,10,3,2,2,1]

// forEach() - allows to perform some operations with the elements of the array.
//             It does not create new array.
let names = ["Shahil", "Raj", "Sangharsh"];
names.forEach(name => {
    console.log(`Hello, ${name}!`);
})

// map() - Transform every element and create a new array.
let greetings = names.map(name => "Hello, "+name);
console.log(greetings);

// filter() - Select all elements that satisfies a condition. It returns an array.
let setOfNumbers = [0,1,2,3,4,5,6,7,8,9];
let evenNumbers = setOfNumbers.filter(n => n%2 === 0);
console.log(evenNumbers);

// some() - Check if at least one element of the array satisfies a condition.
console.log(setOfNumbers.some(n => n===5));     // true

// every() - Check if all elements of the array satisfy a condition.
console.log(setOfNumbers.every(n => n >= 0));   // true

// reduce() - Reduse an array to a single value.
let sum = setOfNumbers.reduce((total,num) => {return total + num;},0);
console.log(sum);       // 45

// flat() - spreads all the elements of subarrays of an array upto specified depth.
const p = [12,3,4,[2,2,[3,5]],[2],[[[[[[34]]]]]]];
console.log(p.flat(Infinity));      // [12,3,4,2,2,3,5,2,34]

// of() - returns a new array from set of elements.
a = 1; b = 2; c = 3;    
console.log(Array.of(a,b,c));           // [1,2,3]

// from() - Creates an array from an iterable object.
console.log(Array.from("Shahil"));     // ['S','h','a','h','i','l']


// --------------------------Practice----------------------------
let collection = [];

collection.push(10,20,30,40,50,60);
console.log(collection);

collection.unshift(10);
console.log(collection);

collection.shift();
console.log(collection);

collection.pop();
console.log(collection);

console.log(collection.slice(2,4));
console.log(collection);

console.log(collection.splice(2,3,1,2,3,4,5));
console.log(collection);

console.log(collection.splice(0,0,"Shahil"));
console.log(collection);

let nums = [1,2,3,[4,5]];
collection = collection.concat(nums);
console.log(collection);

collection = [...collection,...nums];
console.log(collection);

console.log(collection.includes(30));

console.log(collection.indexOf(50));                // gives index of first occurance.
console.log(collection.find(n => n > 25));          // gives 1st number > 25.
console.log(collection.findIndex(n => n > 25));     // gives index of 1st number > 25.

console.log(collection.join(", "));

collection.reverse();
console.log(collection);

let alnum = [1,2,3];
alnum.sort((a,b) => b-a);
console.log(alnum);

alnum.sort((a,b) => a-b);
console.log(alnum);

let studentNames = ["Alice","Bob","Jhon"];
console.log(studentNames.forEach(student => {
    console.log(`Hello, ${student}`);
}));

let i = 101;
console.log(studentNames.map(student => student+",Roll no.: "+i++));

console.log(studentNames.filter(student => student.startsWith("A")));

console.log(studentNames.some(student => student.includes("Bob")));

console.log(studentNames.every(student => student.includes("Bob")));

console.log(studentNames.reduce((result,student) => {
    return result + student +" ";
},""));
