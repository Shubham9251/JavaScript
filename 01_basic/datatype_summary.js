// javascrept --> is a dynamicaly typed language because we can't define data type during declaretion of a variable.

// there are wo type of data type in javascrept

// 1. Primitive 

// 7 type : String, number, Boolean, Null, Undefined, Symbol, bigInt

// 2. Reference(non-primitive)

// Array, Objects, Functions

// let newId = Symbol("87899")
// let newId2 = Symbol("87899")
// console.log(newId)
// console.log(newId2)

// let largeInteger = 376423647236957462756782n
// console.log(typeof largeInteger);

// let arr = [12,453,6457,234123,"dsdfc",false]

// console.log(arr);
//  let myObj = {
//     name: "Shubham",
//     age: 22
//  }
// console.log(myObj);

// let myFnc = function(){
//     console.log("hey world");
    
// }


// Memory manaagement in Javascript

// two types of memory - Stack(primitive datatype) and Heap (Non-primitive datatype)

// let str1 =  "hello"
// let str2 = str1
// str2 = "slight"

// console.log(str1);
// console.log(str2);

let my = {
    home: "vila28"
}

console.log(my.home);

let papa = my

console.log(papa.home);

papa.home = "vila98"

console.log(my.home);


