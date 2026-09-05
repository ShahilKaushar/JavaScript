// Loops allows to run same block of code multiple times.

// 1. Classic for loop -
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Iterating an array -
let arr = [1,2,3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// 2. for-each loop for array -
arr.forEach((e,i,A) => {        // e = element at index
    console.log(e,i,A);         // i = index of current element
});                             // A = arr

// 3. for...of loop - (works on Array, String, Iterable)
for(ch of "Shahil"){
    console.log(ch);
}

// Iterating an Object - 
const person = {
    name : "Shahil",
    age : 17,
    isEmployeed : true
}

// 4. for...in loop - (Object keys)
for (const key in person) {
    const value = person[key];
    console.log(key,":",value);
}
