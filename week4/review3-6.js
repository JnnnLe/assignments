// Challenge 1: Define a function called metersToInches that takes an input of the number of meters and outputs the result of the number of inches.
// 1 meter equals 39.3701 inches.

// Time Complexity: O(1) Constant 

const metersToInches = m => {
  return `${m} meters is equal to ${m * 39.3701} inches`;
};


/* 
[Challenge 2] - Loop n Times
Write a function named loopThrough that takes an argument that is a number and loops through and displays a message “Hello World” that number of times.
*/

// Time Complexity: O(n) Linear 

const loopThrough = n => {
  for (let i = 0; i < n; i++) {
    console.log(`Hello World`);
  }
};


/*
[Challenge 3] - Number sum
Define a method called calculateSum to calculate the sum all the digits from 0 to an input number.
*/

// Time Complexity: O(n) Linear

const calculateSum = n => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
};


/*
[Challenge 4] - FizzBuzz
Write a function called fizzbuzz that prints each number from 1 to the input on a new line.

For each multiple of 3, print "Fizz" instead of the number.
For each multiple of 5, print "Buzz" instead of the number.
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/

// Time Complexity: O(n) Linear

const fizzBuzz = n => {
  if (n === 0) return;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i}: FizzBuzz!`);
    } else if (i % 3 === 0) {
      console.log(`${i}: Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i}: Buzz`);
    } else {
      console.log(i);
    } 
  }
};


/*
[Challenge 5] Calculate Factorial Number
A factorial number is the concept in math by value of multiplying numbers by each consecutively smaller number.
*/

// Time Complexity: O(n)

const factorial = n => {
  let sum = 1;
  if (n <= 2) {
    return sum = sum * n;
  }

  return sum = n * factorial(n - 1);  
};


/*
[Challenge 6] Switch Statements
Using a switch statement, write a function called sleep_in(weekday, vacation) with these criteria: The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.
*/

// Time Complexity: (0)1 Constant Time?

const sleep_in = (day, vacation) => {

  switch (day) {
    case `False`:
      switch (vacation) {
        case `False`:
          console.log(`True`);
          break;

        case `True`:
          console.log(`True`);
          break;
      }
    
      break;
      
    default:
      console.log(`False`);
      break;
  }
};


/*
[Challenge 7] Accessing Arrays
Write a function called common(a, b) with these criteria: Given 2 arrays of ints, a and b, return True if they have the same first element or they have the same last element. Both arrays will be length 1 or more.
*/

// Time Complexity: O(1) Constant

const common = (a, b) => {
  if (a[0] === b[0]) return `True`;
  else if (a[a.length - 1] === b[b.length - 1]) return `True`;
  return `False`;
};


/*
[Challenge 9] Object Keys and Values
Create an object with two key-value pairs.

Log that object to the console.

Delete the first key-value pair in the object.

Log that object to the console again. The first key-value pair should be gone.
*/

let leJowett = {
  firstName: `Jennifer`,
  pets: true
};

delete leJowett.firstName;

console.log(leJowett);


/*
[Challenge 9] Mutating Objects
Create an array of objects with at least 2 key value pairs. The objects should all have the same keys, and the array should contain at least 3 objects.

Create a function that accepts the array of objects as an argument.

Print the value of the second key in each object to the console. Use dot-notation to access the values.

After printing the values in step 3, change the values of the second key in every object to something new.

Prove the change worked by printing the second key in each object to the console, which should show the new value. Use bracket-notation to access the values this time.
*/

let family = [
  {
    firstName: `Jennifer`,
    pets: true
  },

  {
    firstName: `Max`,
    pets: true
  },

  {
    firstName: `Good Vibes`,
    pets: true
  }
];

// Time Complexity: O(n) Linear

const print2ndValue = arrOfObjs => {
  for (let i = 0; i < arrOfObjs.length; i++) {
    console.log(arrOfObjs[i].pets = `something new`);
  }
};