// filter

// In forEach loop, it will not return anything
// const myArr = ["java", "python", "javascript"]

// const items = myArr.forEach ( (item) => item )
// console.log(items);

// use filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (item) => (item > 5) )
// also write like this
const newNums = myNums.filter( (item) => {
    return item > 5
} )

// console.log(newNums);

// can be done this thing using forEach loop also like
const newNums2 = []

myNums.forEach( (num) => {
    if (num > 5) {
        newNums2.push(num)
    }
} )

// console.log(newNums2);

// so, in filter where condition is true it will return and false it will not return

// example

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1982, edition: 2002},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2005},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1951, edition: 2008},
    {title: 'Book Five', genre: 'Science', publish: 2001, edition: 2010},
    {title: 'Book Six', genre: 'History', publish: 1997, edition: 2007},
    {title: 'Book Seven', genre: 'Fiction', publish: 1980, edition: 2004},
    {title: 'Book Seven', genre: 'Drama', publish: 2005, edition: 2014},
]

let newbooks = books.filter( (bk) => ( bk.genre == 'Fiction' && bk.edition > 2000 ) )

console.log(newbooks);
