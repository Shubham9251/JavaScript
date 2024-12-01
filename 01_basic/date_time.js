// Date

const date = new Date()
console.log(date);  
console.log(typeof date);  


//converting into string
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toISOString());

console.log("\n");

let myCreateDate = new Date(2024, 3, 23) 
// constractor-->  Date(year, month, date, time, etc...), here month is start with 0, so here 3 is april
console.log(myCreateDate)
console.log(myCreateDate.toDateString())

console.log();

// also we provide different formate in date constrctor like
// let myCreateDate1 = new Date("2024-11-19")
let myCreateDate1 = new Date("01-19-2024") // indian standard
console.log(myCreateDate1.toDateString())

console.log();

// Time

let myTimeStamp = Date.now()

console.log(myTimeStamp);

console.log(myCreateDate1.getTime());

console.log(Math.floor(Date.now()/1000)); // convert into seconds

console.log();

// new Date() provide full date month and year or time but we can access indivisul 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getTime());
console.log(newDate.getHours());
console.log(newDate.getSeconds());

console.log();

newDate.toLocaleString('default', {
    weekday: "long"
})
