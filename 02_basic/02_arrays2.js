// arrays
let hello = ['a', 'b', 'c']

//There are two way to create an array 
//  1. using litrils
//  2. using new Array()
// but difference is that we can't keep one value in second way, it will give undefind/ empty items

// const myArr = [1, 2, 3, 4, 5]
// const myArr1 = new Array(1, 2, 3, 4, 5)

const myArr = [40]
const myArr1 = new Array(40)

// console.log(myArr);
// console.log(myArr1);


const marvel_heros = ["Ironman", "Spiderman", "Thor"]
const DC_heros = ["Superman", "Flash", "Batman"]

// console.log(marvel_heros);
// console.log(DC_heros);

// marvel_heros.push(DC_heros) // array in array
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// now we want to mearge these two arrays in one then

// first --> using concat(), it will return new array
// let new_heros = marvel_heros.concat(DC_heros)
// console.log(new_heros);

// second --> using sprade operter -- means it will sprade all elements of both arrays indivisul

const all_new_heros = [...marvel_heros, ...DC_heros] // one extra features is that we can provide more than two arrays at a time for mearge

console.log(all_new_heros);

// flat method --> it will mearge all inner arrays in outer one array
const another_array = [1, 2, 3, [4, 5], [7, 9, [2, 4]]] // it is array in array in array...
const real_another_array = another_array.flat(3)
console.log(real_another_array);


// one thing to know that --> how are you know that an variable is array or not 
// for example in this file i decelar a variable which is 'hello' 
// now to know this variable is array or not without seeing it, so
// in js here is an in-built method it is 
// Arrays.isArray(array_name) ---> it will return true os false

console.log(Array.isArray(hello));

// convert a string into an array using Array.from(str) 
console.log(Array.from("shubham"));
console.log(Array.from({name: "shubham"})) // return {empty arr} 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
