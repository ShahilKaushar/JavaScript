//********************** if - else if - else *************************// 

let a = 11;
let b = 10;

if (a < b){
    console.log(`${b} is greater than ${a}`);
}
else if (a > b){
    console.log(`${a} is greater than ${b}`);
}
else {
    console.log(`${a} and ${b} are equal.`);
}


//****************** Switch-case *******************//

let day = 5;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tueday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


// Nullish Coalescing Operator (??) - works on null, undefined only.
    /* 
    The nullish coalescing operator is used to provide a default value to a variable 
    when left side is null or undefined.
    */

    // Syntax:
        // const result = value ?? defaultValue;
        // if value is null/undefined then defaultValue is used.

const user = {
    name : "Shahil",
    age : null,
    city : undefined
}

let user_name = user.name ?? "Anonymous";
let user_age = user.age ?? 18;
let user_city = user.city ?? "NYC";

console.log(user_name);     // Shahil
console.log(user_age);      // 18
console.log(user_city);     // NYC

//------------------Important points to keep in mind------------------//

// false == 0      -> true
// false == ""     -> true
// 0 == ""         -> true

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// Check if an array is empty.
let arr = [];
if(arr.length == 0){
    console.log("Array is empty");
}

// Check if an object is empty.
let emptyObj = {};
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
