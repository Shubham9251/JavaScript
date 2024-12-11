// how to select and access document

// 1.   getElementsBy....      --> this method return HTMLCollection 

// access by className...
// const first = document.getElementsByClassName('container');
const first = document.getElementsByClassName('list-items');

// console.log(first);
// console.log(first[3]);

// access by IdName...
const second = document.getElementById('heading');

// console.log(second);

// access by TagName...
const thired = document.getElementsByTagName('ul');

// console.log(thired);





// 2. using queryselectr...     --> this method return NodeList

// access by className...
const forth = document.querySelectorAll('.list-items')

// console.log(forth);
// console.log(forth[0]);

const fifth = document.querySelector('#heading')

// console.log(fifth);

// const sixth = document.querySelectorAll('ul')
const sixth = document.querySelectorAll('li')
// console.log(sixth);
// console.log(sixth[0]);





// how to modify inner content of an elements or tegs of document

// there are 3 way...

const li = document.querySelectorAll('li');

// console.log(
//     li[0].innerText
// );
// console.log(
//     li[0].textContent
// );
// console.log(
//     li[0].innerHTML
// );
