// for loops in js 

//  loops on arrays
const arr = [1,2,3,4,"shubham", [5,6]]

//  1.
// simple
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);
}

//  2.
// foreach
arr.forEach ( function (item) {
    // console.log(item)
})

// or using arrow function inside forEach loop
arr.forEach ( (items) => {
    // console.log(items);
})

// also can define function outside loop


//  3.
// forOf loop
for (const element of arr) {
    // console.log(element);
}


//  4.
// forin loop
for (const key in arr) {
    // here, this 'key' return the index os array
    // console.log(key);

    // here, print actual values
    // console.log(arr[key]);
        
}



// loops on Objects

const MyObject = {
    name : "Vedansh",
    age : 22,
    email : "vc@google.com" ,
    isLoggedIn : false,
    lastLgDays : ["Monday", "Saturday"]
}

//  1.
for (const key in MyObject) {
    console.log();
}
