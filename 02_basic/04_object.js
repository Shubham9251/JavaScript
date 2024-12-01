//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "ash667t"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularuser = {
    email : "basu@hbaj.com",
    fullname :{
        userfullname : {
            firstname : "Vedansh",
            lastname : "Chasta"
        }
    }

}
console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj3 = {5 : "a" , 6 : "b"}

//const obj4 = {obj1,obj2}

//const obj4 = Object.assign({}, obj1,obj2)

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

const users = [
    {
        id : 1,
        email : "Vgbjh@gamil.com"
    },
   {

   },
   {

   },
]
users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

console.log(tinderUser.hasOwnProperty("isLogged"));




