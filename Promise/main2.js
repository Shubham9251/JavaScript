// Async and Await

/*
*Asynchronous code can become difficult to follow when it has a lot of things going on.
 async and await are two keywords that can help make asynchronous code read more like synchronous code.
  This can help code look cleaner while keeping the benefits of asynchronous code.

 For example, the two code blocks below do the exact same thing. They both get information from a server, process it, 
 and return a promise. 
*/

//following code block representing a server 
const server = {
    people: [
      {
        name: "Odin",
        age: 20,
      },
      {
        name: "Thor",
        age: 35,
      },
      {
        name: "Freyja",
        age: 29,
      },
    ],
  
    getPeople() {
      return new Promise((resolve, reject) => {
        // Simulating a delayed network call to the server
        setTimeout(() => {
          resolve(this.people);
        }, 2000);
      });
    },
};
  


// getting data from server

function getPersonsInfo(name) {
  return server.getPeople().then(people => {
    return people.find(person => { return person.name === name });
  });
}

console.log(getPersonsInfo());

 

// async function getPersonsInfo(name) {
//     const people = await server.getPeople();
//     const person = people.find(person => { return person.name === name });
//     return person;
// }
  