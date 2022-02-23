// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: When using .push you are able to add a value to the original array which when console logged gives you the length of the array.


// --------------------1) What will this log?

const cohort = "Alpha 2022"
console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: 10, use of .length when console logging returns the length of array INCLUDING SPACES.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: The number [4] in the greeting is singling out the forth character in the array.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: The index being = 1 and index being in brackets means the second character of the array and singles out "Ruby"


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY", "SUNDAY"
// b) Verify and explain: "TypeError", on top of the concole logging of the constant you must also individually console log the upper casing of saturday and sunday.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: 3
// b) Verify and explain: "number", the use of typeof returns a string of what not able to be evaluated 
