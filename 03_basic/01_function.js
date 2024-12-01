// Function
// defining function

function greate() {

    console.log(`hello !! Welcome to javascrept`);
}

// calling function
// greate()
//type of function
// console.log(greate());  // return undefine

// passing argument to function and it return answer
function addingTwoNumber(number1, number2) {
    // let sum = number1 + number2
    // return sum

    //or 

    return number1 + number2
}

// console.log(addingTwoNumber());     //return NAN
// console.log(addingTwoNumber(2, 4));     //return 6
// console.log(addingTwoNumber(2, "4"));   //return 24 is string
// console.log(addingTwoNumber(2, "a"));   //return 2a
// console.log(addingTwoNumber(2, null));  // return 2
// console.log(addingTwoNumber(2));        // return NaN


// also we can provide more then one arguments using rest operater like
function moreThanOne(...number) {
    return number
}
function moreThanOne2(num1, num2, ...number) {
    return number
}

// console.log(moreThanOne(2, 3, 5, 6, "66")); // this will return an array of these arguments
// console.log(moreThanOne2(2, 3, 5, 6, "66")); // so, first two arguments are stored is num1 and num2 then rest of all store in number

function addingNumbers(...numbers) {
    let sum = 0
    for (let index = 0; index < numbers.length; index++) {
        sum = sum + numbers[index];
    }

    return sum
}

const Ans = addingNumbers(2, 3, 432, 234, 324, 567)
// console.log("sum is: " + Ans);



// we can also return string
function greate2(userName) {
    return `Hello! ${userName} Welcome to Javascript`
}
let message = greate2("shubham")
// console.log(message);

// providing an objects and arrays to function
const user = {
    name: "shubham",
    age: 22
}

function object1(user) {
    return `user name is ${user.name} and age is ${user.age}`
}

console.log(object1(user));
// directly providing object to function
console.log(object1({
    name: "vedansh",
    age: 55
}));

// arrays to function
function handleArrays(newArr) {
    return newArr[3]
}
console.log(handleArrays([1, 2, 3, 4]));
