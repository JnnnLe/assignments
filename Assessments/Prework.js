// Welcome to the prework assessment!

// Exercise 1. Declare a variable called animal and give it a value of your choice
let animal = `Jennifer`;

// Exercise 2. Write a conditional that does the following:
// If the value of animal is "lion", print to the console "I'm scared!"
// If the value of animal is "dog", print to the console "So cute"
// If the value of animal is "frog", print to the console "Ribbit ribbit"
// For any other value, print "Just another animal"
if (animal ===`lion`) console.log(`I'm scared!`);
if (animal ===`dog`) console.log(`So cute`);
if (animal ===`frog`) console.log(`Ribbit ribbit!`);
else { console.log(`Just another animal!`)};

// Exercise 3. Declare 2 variables called person1Age and person2Age and give them values of your choice.
// Write a conditional that does the following:
// If both ages are less than 18, print "You are both children"
// Otherwise, print "At least one adult here" 
let person1Age = `22`;
let person2Age = `99`;

if (person1Age < 18 && person2Age < 18) console.log(`You are bot children!`);
else {
  `At least one adult here.`
}

// Exercise 4. Write a for loop that prints the integers starting 
// at 20, and counts down to 10. (Include 20 and 10)
for (let i = 20; i >= 10; i--) {
  console.log(i);
}

// Exercise 5. Write a while loop that prints the multiples of 5 from 5 to 50 inclusive 
// (i.e. 5, 10, 15, 20 ...)
let count = 0;

while (count < 50) {
  count+=5;
  console.log(count);
}

// Exercise 6. Declare a variable called 'flavors' that is an array of 3 ice cream flavors
let flavors = [`peanutButterChocolate`, `vanilla`, `cookiesAndCream`];

// Exercise 7. Update the second element of the array to be a different value
flavors[1] = 'heyHeyHey';

// Exercise 8. Add 2 more items to the array
flavors.push(`strawberry`, `mint`);

// Exercise 9. Write a function called multiply that takes in 3 numbers, and returns
// the product of the 3 numbers multiplied together
const mult3 = (a, b, c) => {
  return a * b * c;
};

// Exercise 10. Write a function that takes in an integer. The function should print all
// integers from 1 to that number. Next to each one it should print whether 
// it is even or odd. For example, if the number is 4, print:
// 1 odd
// 2 even
// 3 odd
// 4 even
const print = num => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) console.log(i, `even`);
    else {
      console.log(i, `odd`);
    }
  }
};


// Exercise 11. Make an object called pet that contains 2 properties:
// animal (representing what type of animal the pet is)
// age (representing the age of the pet)
let pet = {
  name: 'Sheldon',
  age: 8
}


// Exercise 12. Print the pet's age
console.log(pet.name);

// Exercise 13. Update pet's age to be a different value
pet.age = 8.5;

// Exercise 14. In the comments below, write a sentence explaining what each of the following data types are.
// String: ''
// Number: 9
// Boolean: True False
// Array: [3, 6, 9]
// Object: let pets = {name: 'Sheldon'}
// undefined: not defined and will throw error when called upon

//Exercise 15 Add. a new file to the $PATH environmental variable
/usr/local/bin /usr/bin /bin /usr/sbin /sbin /Users/jenn/scripts

//Exercise 16. Please explain how the internet works. Your answer should include answers to the following questions: 
// How are the devices on the internet physically connected to each other?
// How is information physically transmitted from device to device?
// How does one device find another it’s trying to communicate with?
// What methods do devices on the internet use to communicate?

    //They are physically connect to one another, from server to server and the websites that we see are files on server's hard drive. Each server has a unique IP address and your closet router works with your closest server, to serve me - the client - my request(s). Devices will look into it's memory and/or cache before it will do extra work to find/process data. Each layer of sent data is called a packet and at each stage of the journey it gets encoded to proceed to the next step. Once it makes it to it's final location, it well get decoded on the way back to maket to it's IP address.

// The following questions are bonus questions! Only work on them once you’ve finished all other questions.


// Bonus 1. Write a function that takes in a string and returns the number of times the 
// character "a" appears in the string.
const countAs = str => {
  let count = 0;
  let splitStr = str.split('');

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === 'a' || splitStr[i] === 'A') count += 1;
  }

  return count;
}

// Bonus 2. Write a function that takes a string and returns which character appears the 
// most times in the string.
const highestFrequencyChar = str => {
  let splitStr = str.split(' ');
  let count = 0;
  let returnedLetter;
  let letterDictionary = {};

  for (let i = 0; i < splitStr.length; i++) {
    (!letterDictionary[splitStr[i]]) ? letterDictionary[splitStr[i]] = 1 : letterDictionary[splitStr[i]]++;
  }

  for (let letter in letterDictionary) {
    if (letterDictionary[letter] > count) {
      count = letterDictionary[letter];
      returnedLetter = letter;
    }
  }

  return returnedLetter;
};



