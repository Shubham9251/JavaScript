//Q 1.
// function abc(){
    //     console.log(abc);
//     console.log(abc.xyz);
//     console.log(typeof(abc.xyz));

// }
// abc();
// abc.xyz = 400;
// abc.xyz =222;
// abc();

//Q 2.
// event propogation

//Q 3.
// const numbers = [1,2,3,4];
// numbers[100] = 100;
// console.log(numbers);

//Q 4.
// console.log(typeof typeof 100);  ---> string

//Q 5.
// const arr = [...'shubham', 'vedansh']   //--> converting it into char arr
// console.log(arr);


//Q 6.
// console.log(parseInt('12222222f'));      //--> if there are numbers present before any character in the given string then all the numbers present before character are returned
// console.log(parseInt('f'));              //  else if first index of string is characte then output that will be return is NaN
// console.log(parseInt('10+2'));
// console.log(parseInt('7FM'));
// console.log(parseInt('F7M'));

//Q 7.
// console.log(isNaN(3));
// console.log(isNaN('shubham'));
// console.log(isNaN(parseInt('shubham')));
// console.log(isNaN(parseInt(5783)));
// console.log(isNaN(typeof('shubham')));
// console.log(isNaN(typeof(3487839)));
// console.log(typeof(NaN));
// console.log(isNaN(NaN));
// console.log(isNaN(isNaN));


//Q 7.
// console.log([1,2].map(num=> {
//         if (num > 0) return;    //  if this condition is true then it will return undefined but here condition is true for two time for array so it will return [undefined, undefined]
//         return num * 2          // if abouv condition is failed then this line run and return otherwise not exeacute
// }))
    

//Q 8.
// function abc() {
    //     return 
    // }
    // console.log(abc());     // --> it will print undefined
   
    
//Q 9. function scope
{
    function abd() {
        console.log('shubham');
        
    }
}
abd()