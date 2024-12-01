// this, arrow function and exprection


// we can define function also like this in a variable which is called Expression
const addTwo = function name(num) {
    return num+2
}
// addTwo(5)


// this ---> So, this will refere the courent context in scope of object

// here a function inside an object
const user = {
    name: "shubham",
    age: 22,

    welcomeMessage: function (params) {
        console.log(`${this.name} , welcome to javascript`);
        // here this keyword has user object 
        console.log(this);  // here scope of this keyword is inside user object so that it's return object but if we try to console 'this' outside thanit will give empty object -->{}
    }
}

// console.log(this);   //  and in browser console it will return window{} object

// console.log(user.welcomeMessage);  // return --> [Function: welcomeMessage]
// console.log(user.welcomeMessage()); // this console print undefine but function's console will run

// user.welcomeMessage() //    shubham , welcome to javascript
// if changing context of user object 
user.name = "vedansh"
// user.welcomeMessage() //    vedansh , welcome to javascript


const user1 = {
    name: "shubham"
}
function message(newUser) {
    return `hello! ${this.name}, welcome to javascript`
}
// console.log(message(user));


// decelare function

//  #1
// this in function
// function chai() {
//     let name = "shubham"
//     console.log(this); 
//     console.log(this.name); // give undefined
       
// }

// chai()

//  #2
// const chai1 = function () {
//     let name = "shubham"
//     console.log(this); 
//     console.log(this.name); // give undefined
// }
// chai1()

//  #3
// using arrow
// const chai2 = () => {
//     let name = "shubham"
//     console.log(this); // {}
//     console.log(this.name); // give undefined
// }

// chai2()

// explict return
// const chai2 = () => {
//     return `shubham`
// }

//implict return
const chai2 = () => `shubham`
    
console.log(chai2());

// const addNum = (num1, num2) => num1 + num2
const addNum = (num1, num2) => (num1 + num2)  // use this insted of upper line
console.log(addNum(3, 4));

const myObject = () => ({name: "shubham"})  // here return an object 
console.log(myObject());
console.log(myObject().name);


//  #4

//Immediately Invoked Function Expressions (IIFE)
// use for prevention from globle scope polution 

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();

( (name) => {
    // simple IIFE
    console.log(`DB CONNECTED, ${name}`);
    
})('shubham');