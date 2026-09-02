// Spread operator(...) - unpacks elements of an array or properties of an object.

//----------------Spread with Array-------------------//
const arr = [2,3,4];
console.log(...arr);

// Copying elements from an array to another array.
let newArr1 = [...arr];
console.log(newArr1);

// Adding more values while coping elements from an array to another array.
let newArr2 = [0,1,...arr,5];
console.log(newArr2);

// Combining Arrays - 
let a = [1,2,3];
let b = [4,5,6];
let c = [...a,...b];
console.log(c);

//------------------Spread with Object-------------------//
const person = {
    name : "Shahil",
    age : 21
}

// Copying an Object -
const newPerson1 = {
    ...person
}
console.log(newPerson1);
 
// Adding new properties to a new object while copying from another object -
const newPerson2 = {
    ...person,
    gender : "male"
}
console.log(newPerson2);

// Updating properties of an object while copying from another object -
const newPerson3 = {
    ...person,
    age : 23                // age = 21 -> 23
}
console.log(newPerson3.age);

const newPerson4 = {
    age : 24,
    ...person               // age = 24 -> 21
}
console.log(newPerson4.age);

//----------------Spread in Function Calls------------------//
let myArr = [12,3,45,7,3,5];
console.log(Math.max(...myArr));



// Rest Operator (...) - rest collects multiple values into a single array.
//                       Also uses three dots (...).

//-----------------Rest in Function Parameters--------------------//

// Used when a function can accept any Node. of arguments.
function sum(...nums){
    return nums.reduce((sum,num) => sum + num, 0);
}
console.log(sum(1,2,3,4,5));


// Normal Parameter with Rest - Rest parameter must be last.
function sum2(a,b,...nums){
    let sum = a+b;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}
console.log(sum2(1,2,3,4,5,6,7,8,9));

// Rest with Array Destructuring - 
let thatArr = [1,2,3,4,5,6,7,8,9];
let [first,...other] = thatArr;
console.log(first);         // first = 1
console.log(other);         // other = [2,3,4,5,6,7,8,9]

//--------------Rest with Object Destructuring---------------//
const obj = {
    name : "Shahil",
    age : 21,
    city : "Ballia"
}

const {name,...details} = obj;
console.log(name);
console.log(details);
