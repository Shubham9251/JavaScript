const userEmail = ""

if (userEmail) {
    console.log("Got user email");
    
}
else{
    console.log("Don't have user email");

}


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefine, Nan

// truthy values

// "0", 'false', " ", [], {}, function(){}


// check an empty array in if

const users = []
if (users.length === 0) {
    console.log("users is empty");
    
}
else {
    console.log("users is not empty");
    
}


// check an empty object in if

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("emptyObj is empty");
    
}
else {
    console.log("emptyObj is noot empty");
    
}


// Nullish Coalescing Operater (??): Null  Undefine

let val;

// val = 5 ?? 10
// val = null ?? 10
// val = undefine ?? 10
val = null ?? 10 ?? 20

console.log(val);


// Terniary Operater
//syntex  -->   condition ? true : false

const iceTeaPrice = 50

iceTeaPrice <=50 ? console.log("purchage") : console.log("Not purchage");

