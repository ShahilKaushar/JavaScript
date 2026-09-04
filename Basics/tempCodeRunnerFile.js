// Prevents global namespace pollution.
let p = "Global var";

(() => {
    // let p = "IIFE var";
    console.log(p);             // IIFE var
})();

console.log(p);  