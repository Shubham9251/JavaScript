// var c =300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log(" inner : " + a)
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Shubham"

    function two() {
        const website = " youtube"
        console.log(username);
        
    }
    
    // console.log(website);
    
    two()
}

one()

if (true) {
    const username = "Shubham"
    if(username=="Shubham"){
        const website = "youtube"
        console.log(username+website);
        
    }

}
// console.log(username);


// +++++++++++++++++++++intresting++++++++++++++++++++

// if function is declared this way it can be initialized anywhere
addone(5)
function addone(num) {
    return num+1
    
}
console.log(addone(5));

//if function is declared this way it can not initialized before

const addTwo = function name(num) {
    return num+2
}
addTwo(5)