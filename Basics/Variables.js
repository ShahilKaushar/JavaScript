var name = "Shahil";    // not recommended, Prefer not to use var
                        // because of issue in block scope and functional scope
const id = 101;
let age = 21;
vill = "Mithwar";       // not recommended

console.log(id,name,age,vill);

// Updating Values:
// id = 122;            -> not allowed(const can't be updated)
name = "Faisal";
age = 22;
vill = "Phephana";

console.table([id,name,age,vill]);

let dist;
console.log(dist);      // undefined
