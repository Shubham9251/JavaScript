// dom style 

// const head = document.getElementById('heading')  // HTMLCollection

const head = document.querySelector('#heading')     // Nodelist

// head.style.color = 'red'
// console.log(head);


const listIttems = document.querySelectorAll('li')

// for (let index = 0; index < listIttems.length; index++) {
    // listIttems[index].style.backgroundColor = 'magenta'
// }

// document.getElementsByClassName('container')[0].style.height = 'auto';



// Creating new Element

let ul = document.querySelector('ul');
const li = document.createElement('li');
const a = document.createElement('a')

// // Adding element

li.append(a)
ul.append(li)

//modifying the text

a.href = 'https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe'
a.innerText = 'Marvals';
// a.style.textDecoration = 'none'

// modifying attribbutes & Classes and also remove it's

// we can set new attributes like...
// li.setAttribute('id', 'main-heading')
// console.log(document.querySelector('#main-heading'));

// li.removeAttribute('id');


// class
li.classList.add('list-items')
// li.classList.remove('list-items')
console.log(li.classList.contains('list-items'));



// creating new unorder list
// const div = document.querySelector('.container')
// const ul2 = document.createElement('ul')

// const movieName = ["GOT", "IT", "ET", "Back to future", "Gangubai"]

// for (let index = 0; index < 5; index++) {
//     const li = document.createElement('li')
//     ul2.append(li)
//     li.innerText = movieName[index];   
//     li.style.color = 'black'
//     li.classList.add('list-items')
// }

// div.append(ul2)
