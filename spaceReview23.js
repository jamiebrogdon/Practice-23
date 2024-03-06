//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let allTheNums = [ 30, 50, 70, 20 ];
let sumOfNums = allTheNums.reduce( (acc, c) => acc + c, 0 )
alert(sumOfNums)
//using the reduce method to add each number together, starting at 0 for current number
// acc stands for accumulation & c stands for current value

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let newArr = allTheNums.map( allTheNums => allTheNums**2)

//using the map method, we are able to take each element and create a new array from it
//within parenthese, we are squaring the elements within the array named "allTheNums"

//Create a function that takes string
//Print the reverse of that string to the console
let unoReverse = str => console.log( str.split('').reverse().join('') )


//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindromeCheck = string => alert( string === string.split('').reverse().join('') )

//using split, reverse, join we can check if the word within the functions argument is the same backwards or forwards

palindromeCheck("mom")
