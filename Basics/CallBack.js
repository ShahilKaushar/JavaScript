// Callback - A callback is a function passed to another function as an argument,
//            so it can be used later.

function run(callback){
    console.log("Calling callback function...");
    callback("Faisal");
}
function greet(name){
    console.log(`Hello, I'm ${name}`);
}

run(greet);         // greet is passed as callback.

// Another example -
const numbers = [1,2,3];
numbers.forEach(function(n){
    console.log(n);
})


//-------------Higher Order Function-------------//

// A higher order function : 
//      1. Takes another function as argument.
//      2. Returns a function.
//      3. Both

//=========1. Takes another function as argument.=========//
const arr = [1,2,3,4];

// map(): higher order function. Because it takes function as argument. 
const doubled = arr.map(function(n){ return 2*n ;})
console.log(doubled);

// Another example -
const f1 = function(callback){
    console.log("I am higher order function.");
    callback();
}
const f2 = () => console.log("I am callback function.")

f1(f2);     // f1: Higher Order Function

// ========2. Returns a function=========//

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}
const add5 = makeAdder(5);
console.log(add5(3));       // 8


//------------------------Closure------------------------//
// A closure happens when an inner function remembers and can access variables
// from its outer function, even after the outer function has finished executing.

function fun1(a){
    return function fun2(b){    // fun2() remembers and uses 'a' from fun1.
        return a + b;
    }
}
let add_4_with = fun1(4);
console.log(add_4_with(5));

// Another example -
function createBankAccount(initialBalance){
    let balance = initialBalance;
    return {
        checkBalance : function(){
            console.log(`Current Balance: ${balance}`);
        },
        deposit : function(amount){
            console.log(`Depositing ${amount}`);
            balance += amount;
            console.log(`Current Balance: ${balance}`);
        },
        withdraw : function(amount){
            console.log(`Withdrawing ${amount}`);
            balance -= amount;
            console.log(`Current Balance: ${balance}`);
        }
    };
}

const acc = createBankAccount(10000);
acc.checkBalance();      // 10000
acc.deposit(5000);       // 15000
acc.withdraw(3000);      // 12000
acc.withdraw(1000);      // 11000
acc.deposit(2000);       // 13000
acc.checkBalance();      // 13000

// In above example, 'balance' is accessed multiple times.