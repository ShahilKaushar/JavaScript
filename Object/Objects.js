// Object - Collection of named properties. It stores data in key-value pairs.
//        It Can have values of different datatypes including even array & object.
//        It can have functions(methods) too.

// Creation
const person = {
    name : "Shahil",
    age : 21,
    "SGPA" : 9.31,
    course : "BCA",
    skills : ["C","Java","JavaScript"],
    address : {
        vill : "Mithwar",
        city : "Ballia",
        state : "Uttar-Pradesh",
        country : "India" 
    }
}

// Accessing Object's Properties - 2
// 1. Using dot (.) -
console.log(person.name);

// 2. Using Square brackets - 
console.log(person["course"]);
console.log(person["SGPA"]);
let myAge = "age";
console.log(person[myAge]);

// Adding Prperties -
person.hobbies = ["Singing", "Playing FF", "Reading Books"];
// key -> hobbies 
// value -> ["Singing", "Playing FF", "Reading Books"]
person["gender"] = "male";
person["weight"] = 56;

// Modifying Properties - 
person.age = 20;
person["age"] = 21;

// Deleting Object Properties - 
delete person.weight;

// Checking if a Property exist -
console.log("name" in person);                  // true
// or
console.log(Object.hasOwn(person,"name"));      // true
console.log(Object.hasOwn(person,"city"));      // false 

// Methods in Object -
// An object can also contain methods.
// A method can access,modify,add and delete object's properties using `this`.

const thor = {
    name : "Thor",
    father : "Odin",
    age : 5000,
    intro : function(){
        console.log(`I am ${this.name}, Son of ${this.father}.`);
    },
    birthday(){
        this.age++;
        console.log(`Today is my birthday. I'm now ${this.age} years old.`);
    },
    addHome(){
        this.home = "ASGAURD";
    },
    deleteAge(){
        delete this.age;
    }
}
thor.intro();
thor.birthday();                // age incremented
console.log(thor.age);          // 5001
thor.addHome();                 // home added
console.log(thor.home);         // ASGUARD
thor.deleteAge();               // age deleted
console.log(thor.age);          // undefined 

// Nested Objects - 
const employee = {
    id : 101,
    age : 27,
    contact : {
        phone : "213427122",
        email : "emp101@gmail.com",
        address : {
            city : "NYC",
            country : "USA"
        }
    }
}

// Accessing nested values: 
console.log(employee.contact.phone);
console.log(employee["contact"]["address"]["city"]);

// Object with Arrays - 
const bike = {
    bikeName : "RE Hunter 350",
    color : "Matt Black",
    price : 200000,
    driving_modes : ["Rain","Road","Sport","Enduro"] 
}

// Accesing array elements - 
console.log(bike["driving_modes"][1]);        // Road

// const and Objects - 
// We can modify the content of a const object.
// But we can not reassign another object to it. 
// const prevents the variable from being reassigned. 
// It doesn't make the object itself immutable.

const obj = {
    name : "Alice",
}
obj.name = "Bob";          // Allowed

// obj = {                 // Not allowed (error)
//     name : "Bob"
// }

// Object Construtor - creates a singleton object.
const p = new Object();
p.name = "Shahil";
p.age = 21;
console.log(p);

//-----------------Useful Objects Methods-------------------// 

// 1. Object.keys() - returns an array containing all the keys of an array.
const keys = Object.keys(person);
console.log(keys);

// 2. Object.values() - returns an array containing all associated value of keys of an object.
const values = Object.values(person);
console.log(values);

// 3. Object.entries() - Returns an array of key-values of of an object.
const entries = Object.entries(person);
console.log(entries);

// 4. Object.hasOwn() - Checks if a property exists in an object.
console.log(Object.hasOwn(person,"name"));

// 5. Object.assign() - Copies properties from one or more objects into another object.
const student = {
    name : "Shahil"
}
const info = {
    age : 21,
    roll : 42,
}
const studentInfo = Object.assign({},student,info);
console.log(studentInfo);

// 6. Object.create() - Creates a new object using another object as its prototype.
const dog = {
    eat(){
        console.log("Eating...");
    },
    sleep(){
        console.log("Sleeping...");
    }
}
const puppy = Object.create(dog);
puppy.eat();
puppy.sleep();

// 7. Object.freeze() - Prevent an object from being modified.
// Object.freeze(person);
console.log(person.age);    // 21
person.name = "asdf";       // name remains unchanged.
console.log(person.age);    // 21

// 8. Object.seal() - Prevents adding/deleteing properties, but existing properties can be modified.
// Object.seal(person);
person.asdf = "asdf";       // not allowed 
console.log(person.asdf);

// freeze() → can't add, delete, or modify
// seal() → can't add or delete, but can modify

// 9. Object.fromEntries() - Converts an array of [key, value] pairs into an object.
const rows = [
  ["name", "Tony"],
  ["age", 21],
  ["city", "Ballia"]
];

const insaan = Object.fromEntries(rows);
console.log(insaan);

//---------------------Practice---------------------//

// Que - Create a symbol and add it to an Object as key.
const sym = Symbol("myKey");

const object = {
    [sym] : "A symbol",
}

console.log(object[sym]);

// Que - Add a function in the object.
object.greet = function(){
    console.log("Hello, World!");
}
object.greet();


// Point to remember - 
const o1 = new Object();     // creates a singleton object.
const o2 = {};              // creates a non-singleton object.
