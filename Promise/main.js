//  prromises

//here creating promises using new 
const promiseOne = new Promise(function(resolve, reject) {
    
    setTimeout(function(){
        console.log("Promise one");
        resolve();
    },1000);
})

// here consumed promiseOne by resolve()
promiseOne.then(function(){
    console.log("Promise one consumed");
})


// 2
new Promise(function(resolve, reject) {
    
    setTimeout(function(){
        console.log("Promise Two");
        resolve();
    },1000);

}).then(function(){
    // here consumed promiseOne by resolve()
    console.log("Promise Two consumed");
})


// 3
const promiseThree = new Promise(function(resolve, reject) {
    
    setTimeout(function(){
        console.log("Promise Three");
        
        resolve({user: "Chai", email: "chai@gmail.com"});
    },1000);
})

// here consumed promiseOne by resolve()
promiseThree.then(function(user){
    console.log(user);
})


// 4 chenning
const promiseFour = new Promise(function(resolve, reject) {
    
    setTimeout(function(){
        console.log("Promise four");

        let error = false;

        if (error) {
            resolve({username: "Chai", email: "chai@gmail.com"});
        }
        else{
            reject("Error: Data not found!");
        }    

    },1000);
})

// here consumed promiseOne by resolve()
promiseFour.then(function(user){
    console.log(user);
    return user.username;
    
}).then((name) => {
    console.log(name);
    
}).catch((error) => {
    console.log(error);
    
}).finally(() => {
    console.log("The promise is either resolved or rejected");
    
})



// 5 async function consumePromiseFive
const promiseFive = new Promise(function(resolve, reject) {
    
    setTimeout(function(){
        console.log("Promise five");

        let error = false;

        if (error) {
            resolve({username: "Chai", password: "123"});
        }
        else{
            reject("Error: Data not found!");
        }    

    },1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }  
}

consumePromiseFive();


// example

async function getAllUsers() {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log("E: " , error);
        
    }
}
// getAllUsers();

// using thenable
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(
        data
    ); 
})
.catch((error)=> "Erroe"+ error);