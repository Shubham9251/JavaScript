// reduce
/*
    syntax

    const initialvalue = 0;
    const sumWithInitial = array.reduce(
        (accumulator, currentvalue) => (accumulator + currentvalue), initialvalue
    );
*/


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//now i want to sum of all element os array

const initialvalue = 0;

// simple function
const sumWithInitial = myNums.reduce(
    function (accumulator, currentvalue) {
        return accumulator + currentvalue
    }, initialvalue
);

// arrow function
const sumWithInitial1 = myNums.reduce(
    (accumulator, currentvalue) => (accumulator + currentvalue), initialvalue
);

// console.log(sumWithInitial);


// example

const shoppingCart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "java development",
        price: 3999
    },
    {
        itemname: "mobile dev course",
        price: 999
    },
    {
        itemname: "Data science course",
        price: 1999
    }
]

// now i want to total price of all course

const totalPrice = shoppingCart.reduce( (accumulator, item) => (accumulator + item.price), 0)
console.log(totalPrice);
