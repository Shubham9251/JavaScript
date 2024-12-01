// singleton
// Object.create

// Object Literals

// creating the object 

mySys = Symbol("key1")

const jsUser = {
    name : "Vedansh",
    "full name" : "Vedansh Chasta",
    [mySys] : "key1",
    age : 22,
    email : "vc@google.com" ,
    isLoggedIn : false,
    lastLgDays : ["Monday", "Saturday"]
    
}

console.log(jsUser.age);
console.log(jsUser["name"]);
console.log(jsUser["full name"])
console.log(jsUser[mySys]);

jsUser.email = "jbk@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "dvsd@gmail.com"
console.log(jsUser);

jsUser.greeting  = function(){
    console.log("Hello Js User");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User - ${this["full name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




