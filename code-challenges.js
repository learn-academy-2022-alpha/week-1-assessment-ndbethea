// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

const longerString = (stringOne, stringTwo) => {
  if(stringOne.length > stringTwo.length) {
    return stringOne
  } else {
    return stringTwo
  }
}

console.log(longerString(fruit1, fruit2))
console.log(longerString(fruit3, fruit4))

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// const temp1 = 42
// const temp2 = 350
// const temp3 = 212
 
// Psuedo Code
// a function that takes x and y and gives value of below, at, or above boiling point
// will need an if/let statement
// looking for 3 different outputs from given data


// if(temp1 < 212) {
//   console.log(`${temp1} is below boiling point`)
// } else if(temp2 > 349) {
//   console.log(`${temp2} is above boiling point`)
// } else if(temp3 > 42 && temp3 < 349){
//   console.log(`${temp3} is at boiling point`)
// } else {
//   console.log("please enter a number from 0 to 100")
// }


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// const myNumbers1 = [3, 7, 0, 36, -9]
// const myNumbers2 = [8, -7, 42, 9, 13]

// Pseudo Code
// need to use an accesor to combine the two constants
// need to use .length in order to then get the length of the array

// if(myNumbers1 + myNumbers2 == true) {
//   console.log(myNumbers1.length(myNumbers2))
// } else {
//   console.log(myNumbers1.concat(myNumbers2))
// }

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ahplA"

// const currentCohort = "Alpha 2022"

// Pseudo Code
// declare a variable
// reverse the code using an accessor
// console log the variable

// var longerAlpha =["A", "l", "p", "h", "a", "2", "0", "2", "2"]
// console.log(longerAlpha.reverse())


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// const myArray = [13, 34, 5, 10, 27, 42]

// Psuedo Code
// create a for statement to return 6 responses
// use modulo to differ bettween odd vs even
// use if/else statement to be able to conole log both results

// for (let i = 1; i < 7; i++) {
//     if (i % 2 === 1 ) {
//       console.log ("odd")
//     } else {
//       console.log("even")
//     }
//   }

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
// const number1 = 58
// const number2 = 100

// Set two:
// const number3 = 27
// const number4 = 24

// Psuedo Code
// set a parameter
// will need an if/if else statment
// will need to log 100-58
// needs to log 27-23

// const longerNumb = (number1, number2, number3, number4) => {
//   return number1 - number2
// } 

// console.log(longerNumb(number2, number1))
// console.log(longerNumb(number3, number4))