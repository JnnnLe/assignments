// INDEPENDENT PRACTICE:
// #1. https://regexone.com/

/*
a. ([a-z]+):([a-z]+)|([a-z]+)
b. SKIPPED all after this point.
*/

// #2. Write a function that takes a word and returns true if the word ends with tonica.
const tonica = str => {
  let match = /tonica$/;
  return match.test(str);
};
// tonica(`Tech tech techtonica`);


// #3. Write a function expression that takes a string replaces all instances of symantec with semantic?
const replaceSem = str => {
  let match = /symantec/i;
  str.replace(str, `semantic`);
  return str;
};
// replaceSem(`things symantec`);


// #4. Write a function that takes a string and deletes all words that end in ing?
const delString = str => {
  let match = /bad/g;
  return str.replace(match, ' ');
};
// delString(`I am having abadgreat day!`);


// #5. Write a function that takes a string and returns true if it is an email address? Compare your answer with your neighbor.
const validEmail = str => {
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str))
};
// validEmail(`JenniferNotRealEmail@gmail.com`);
// validEmail(`ShouldNotWork@fake@gmail.com`);


// #6. Write a function that takes a string containing names separated by commas like "Leah, Russell, Michelle" and returns an array of names, ["Leah", "Russell", "Michelle"]

  const stringToArray = str => {
    console.log(str.split(','));
  };
  // stringToArray('Max,Baby,Sheldon');