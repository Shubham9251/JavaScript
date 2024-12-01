// string

console.log("hello !!");

let name = "mohit"
let surName = "rana"

// don't use this type of syntex please vedansh chasta ji
// console.log("hello my name is " + name +" "+ surName + "and i am learning js.");
// string interpolation
console.log(`hello my name is ${name} ${surName} and i am learning js.`);

let id = new String("#51162651")

const gameName = new String("VxKing")

console.log(gameName[5]);
console.log(gameName[6]);

console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.toString());

console.log(gameName.split('x'));  // return an array
console.log(gameName.substring(2, 4));
console.log(gameName.slice(-10, 5));

console.log(gameName.search('i'));  // return index  
console.log(gameName.indexOf('n'));

console.log(gameName.replace('g', 'm'));
console.log(gameName.charAt(4));
console.log(gameName.includes("ing"));

console.log(gameName.length);

const mood = "happy!"
console.log(`I feal ${mood.repeat(2)}`);

console.log(gameName.valueOf());





