// Challenge 1: Define a function called metersToInches that takes an input of the number of meters and outputs the result of the number of inches.
// 1 meter equals 39.3701 inches.

const metersToInches = m => {
  return `${m} meters is equal to ${m * 39.3701} inches`;
};


/* 
[Challenge 2] - Loop n Times
Write a function named loopThrough that takes an argument that is a number and loops through and displays a message “Hello World” that number of times.
*/

const loopThrough = n => {
  for (let i = 0; i < n; i++) {
    console.log(`Hello World`);
  }
};


/*
[Challenge 3] - Number sum
Define a method called calculateSum to calculate the sum all the digits from 0 to an input number.
*/

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

const factorial = n => {
  let sum = 1;
  if (n <= 2) {
    return sum = sum * n;
  }

  return sum = n * factorial(n - 1);  
};
