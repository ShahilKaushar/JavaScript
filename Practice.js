// const nums = [10, 20, 30, 40];
// // nums.forEach(num => console.log(num));
// nums.forEach(function(n){
//     console.log(n);
// })


// const colors = ["red", "green", "blue"];
// let i = 0;
// colors.forEach(function(color, i,j,k,l){
//     console.log(`${i}: ${color}: ${j}: ${k}: ${l}`)
// })

// const nums = [5, 10, 15];
// let sum = 0;
// nums.forEach(function(n){
//     sum += n;
// })
// console.log(sum)

// const nums = [1, 2, 3, 4];
// const nums2 = [];
// nums.forEach(function(n){
//     nums2.push(2*n)
// })
// console.log(nums2)

// const nums = [1, 2, 3, 4, 5, 6];
// const evens = [];
// nums.forEach(function(n){
//     if(n%2==0){
//         evens.push(n)
//     }
// })
// console.log(evens)

// const nums = [7, 2, 9, 4];
// let max = Number.MIN_SAFE_INTEGER;
// nums.forEach(function(n){
//     if(n > max){
//         max = n
//     }
// })
// console.log(max)

// const users = [
//   { name: "Ali", age: 18 },
//   { name: "Sara", age: 22 },
//   { name: "Zoya", age: 19 }
// ];
// let totalAge = 0
// users.forEach(function(user){
//     console.log(user.name);
//     if(user.age >= 18){
//         user.isAdult = true
//     }
//     else{
//         user.isAdult = false
//     }
//     totalAge += user.age
// })
// console.log(totalAge);
// console.log(users)

// const words = ["I", "love", "coding"];
// let str = ""
// words.forEach(word => str += word + " ")
// console.log(str)


// let arr = [10,20,30,40,50,60,70]

// for (const e of arr) {          // actual value 
//     console.log(e)
// }

// for (const i in arr) {          // index
//     console.log(i)
// }

// o = {1:10,2:20,3:30}
// for (const key in o) {          // keys
//     console.log(key,o[key])
// }

// a = [                           // array of key-value pairs
//     [1,"a"],
//     [2,"b"],
//     [3,"c"]
// ]

// m = new Map(a)                  // map initialization

// for(const k of m){
//     console.log(k)              // [1,"a"],[2,"b"],[3,"c"]
// }

// for(const [k,v] of m){
//     console.log(k,v)            // array detructuring -> print key value pairs
// }


// const books = [
//   {
//     bookname: "To Kill a Mockingbird",
//     genre: "Fiction",
//     publication_year: 1960,
//     edition_year: 2010
//   },
//   {
//     bookname: "1984",
//     genre: "Dystopian",
//     publication_year: 1949,
//     edition_year: 2008
//   },
//   {
//     bookname: "Pride and Prejudice",
//     genre: "Romance",
//     publication_year: 1813,
//     edition_year: 2015
//   },
//   {
//     bookname: "The Great Gatsby",
//     genre: "Fiction",
//     publication_year: 1925,
//     edition_year: 2012
//   },
//   {
//     bookname: "Moby Dick",
//     genre: "Adventure",
//     publication_year: 1851,
//     edition_year: 2009
//   },
//   {
//     bookname: "War and Peace",
//     genre: "Historical Fiction",
//     publication_year: 1869,
//     edition_year: 2014
//   },
//   {
//     bookname: "The Catcher in the Rye",
//     genre: "Fiction",
//     publication_year: 1951,
//     edition_year: 2011
//   },
//   {
//     bookname: "The Hobbit",
//     genre: "Fantasy",
//     publication_year: 1937,
//     edition_year: 2013
//   },
//   {
//     bookname: "Brave New World",
//     genre: "Dystopian",
//     publication_year: 1932,
//     edition_year: 2016
//   },
//   {
//     bookname: "The Lord of the Rings",
//     genre: "Fantasy",
//     publication_year: 1954,
//     edition_year: 2017
//   }
// ];

// Books with genre is Fiction
// const fictionBooks = books.filter((bk) => bk.genre === "Fiction") 
// console.log(fictionBooks)

// // Books with publication_year >= 1950
// const _1970books = books.filter(function(book){
//     return book.publication_year >= 1950
// })
// console.log(_1970books)

// Chaining -
// const A = [1,2,3,4,5];
// const B = A.map((n) => n * 10)
//          .map((n) => n + 5)
//          .filter((n) => n <= 55)
// console.log(B);
