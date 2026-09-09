// Map - A data structure that stores key-value pairs. 

// Map vs Object -
// * Map - 
           // 1. Any datatype of keys or values.
           // 2. Maintains insertion order.
// * Object -
           // 1. Keys only String/Symbol.
           // 2. Easy with JSON.


const map = new Map();              // Creation

map.set("name","shahil");           // Insertion
map.set("id",101);

console.log(map);                   // Print whole map

console.log(map.get("name"));       // Retrieve value of a key            

console.log(map.has("id"))          // true; Check if key present
console.log(map.has("age"))         // false

console.log(map.size);              // number of pairs    

map.delete("id");                   // delete pairs
console.log(map.has("id"));         // false

map.clear()                         // delete all pairs
console.log(map.size)               // 0
console.log(map)                    // Map(0) {}

// Object only accepts String or Symbol as key.
// Map accepts any type of key or value including key as Object, Array, function.

let name = "Shahil";
let flag = true
let num = 1.1;
let arr = [1,2,3]
let func = () => {
    console.log("Hello, I'm a function.")
}
let obj = {
    id : 1
}

let newMap = new Map();
newMap.set(name,"String")
newMap.set(flag,"Boolean")
newMap.set(num,"Number")
newMap.set(arr,"Array")
newMap.set(func,"Function")
newMap.set(obj,"Object")

console.log(newMap)


// Initializing Map with Data -
let data = [
    ["name","Shahil"],
    ["age",21],
    ["city","NYC"]
]

let anotherMap = new Map(data);
console.log(anotherMap)

// Iterating the Map -

// 1. for...of loop - 
for (const [key,value] of anotherMap){
    console.log(key,":",value);
} 

// 2. forEach -
anotherMap.forEach((value,key) => console.log(key,":",value));
