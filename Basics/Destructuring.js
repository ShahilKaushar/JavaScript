// Destructuring - Destructuring lets us extract values from an object or an array & 
//                 store them in different variables.
// Note - Property name matters: Use same variable_name as object.

//-------------Object Destructuring--------------//

const villian = {
    age : 56,
    gender : "male",
    fullName : {
        firstname : "Dr.",
        middleName : "Victor",
        lastName : "Doom"
    }
}

// Extracting object values -  
let {gender,age} = villian;
console.log(`${gender}, ${age}`);

// Rename variables while destructuring - 
const {age : villianAge, gender : villianGender} = villian;
console.log(`${villianGender}, ${villianAge}`);

//Extracting nested object values - 
const {fullName : {firstname, middleName, lastName}} = villian;
console.log(`Name: ${firstname} ${middleName} ${lastName}`);

// Default values - 
const {name = "Anonymous", age : Age} = villian;
console.log(`Name: ${name}, Age: ${Age}`);

//-------------Array Destructuring--------------//

const arr = [1,2,3,4,5,6,7];

// Extracting each value -
const [a,b,c,d,e,f,g] = arr;
console.log(a,b,c,d,e,f,g);         // 1,2,3,4,5,6,7

// Skip Array values -
const [p,q,,r] = arr;
console.log(p,q,r);                 // 1,2,4

// Destructuring in function parameters - 
const person = {
    name : "Rahul",
    age : 23,
}

function introduction({name,age}){
    console.log(`Hello, My name is ${name}, and I'm ${age} years old.`);
}
introduction(person);
