// JavaScript provides the built-in Date object for working with dates and times.

const now = new Date();     // creates a data object that represents current date and time.
console.log(now);           // 2026-08-26T11:58:44.807Z   

// Note - month range (0-11);    1 = February, 4 = May

// Creating a date - 
    // a. Current date and time - 
    const currDate = new Date();
    console.log(currDate);

    // b. Specific date -
    const birthDate = new Date("2005-04-13");
    console.log(birthDate);

    // c. Specific date and time -
    const date = new Date("2019-11-30T06:23:15Z");  // ISO 8601 format
    console.log(date);

    myCreatedDate = new Date(2023, 0, 23);              // only date
    console.log(myCreatedDate.toString());
    myCreatedDate = new Date(2023, 0, 23, 5, 3, 45);    // date & time
    console.log(myCreatedDate.toString());
    myCreatedDate = new Date("2023-01-14");             // yy-mm-dd format
    console.log(myCreatedDate.toString());
    myCreatedDate = new Date("01-09-2023");             // dd-mm-yy format
    console.log(myCreatedDate.toString());

// Formating Dates - 
let d1 = new Date();
console.log(d1.toString());             // Wed Aug 26 2026 17:55:00 GMT+0530 (India Standard Time)
console.log(d1.toDateString());         // Returns only date portion
console.log(d1.toTimeString());         // Returns only time portion
console.log(d1.toLocaleString());       // 26/8/2026, 5:51:18 pm;   Returns date & time.
console.log(d1.toLocaleDateString());   // 26/8/2026;   Returns only date.
console.log(d1.toLocaleTimeString());   // 5:51:18 pm;   Returns only time.
console.log(d1.toISOString());          // 2026-08-26T12:29:02.368Z;  Returns date & time in ISO format

// Internally, JavaScript represents a time using timestamp.
// Timestamp: no. of milliseconds after 1 Jan 1970 00:00:00 UTC

    // Both Return a large number that represents current timestamp.
    console.log(Date.now());
    // or
const d2 = new Date();
console.log(d2.getTime());
console.log(Math.floor(d2.getTime()/1000));      // to seconds
    
// Getting Date and Time Components - 

let day = new Date("2020-08-23T03:24:56");

console.log(day.getDay());                 // 0 = Monday
console.log(day.getFullYear());            // 2020
console.log(day.getMonth());               // 7
console.log(day.getDate());                // 23
console.log(day.getHours());               // 3
console.log(day.getMinutes());             // 24
console.log(day.getSeconds());             // 56
console.log(day.getMilliseconds());        // 0

// UTC Version of Get methods -
console.log(day.getUTCFullYear());            // 2020
console.log(day.getUTCMonth());               // 7
console.log(day.getUTCDate());                // 22
console.log(day.getUTCHours());               // 21
console.log(day.getUTCMinutes());             // 54
console.log(day.getUTCSeconds());             // 56
console.log(day.getUTCMilliseconds());        // 0

// Setting Date and Time Components - 
day.setFullYear(2006);
day.setMonth(7);
day.setDate(29);
day.setHours(20);
day.setMinutes(30);
day.setSeconds(15);
day.setMilliseconds(450);

console.log(day.toString());
