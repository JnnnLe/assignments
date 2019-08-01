// =========================================PART ONE=========================================
/* 
Read the following functions. For each one, figure out:
- What does the function do? 
- Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), or O(2^n)
- Run the function with a few different input sizes and see how long it takes
- When the input size doubles, what happens to the time it takes to run?
*/

// Time Complexity: O(n)
const mysteryFunction0 = function(array) {
  const myFavoriteNum = 7;
  for (i = 0; i < array.length; i++) {
    if (array[i] === myFavoriteNum) {
      return true;
    }
  }
  return false;
};


// Time Complexity: O(1)
const mysteryFunction1 = function(array) {
  index = 4;
  return array[index];
};


// Time Complexity: O(n^2)
var mysteryFunction2 = function(n) {
  let primes = []
  for (i = 2; i < n; i++) {
    let factorFound = false;
    for (j = 2; j < n; j++) {
      if (i % j == 0) {
        factorFound = true;
      }
    }
    if (factorFound === false) {
      primes.push(i);
    }
  }
  return primes.length;
};

// Time Complexity: O(1)
const mysteryFunction3 = function(array) {
  myLength = array.length;
  if (myLength % 2 == 0) {
    return "even length";
  } else {
    return "odd length";
  }
};


// Time Complexity: O(n)
var mysteryFunction4 = function(string) {
  let eCount = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === 'e') {
      eCount++;
    }
  }
  return eCount;
};


// Time Complexity: depends on how .sort sorts the input array
var mysteryFunction5 = function(array) {
  array.sort();
};


// Time Complexity: O(1)
const mysteryFunction6 = function(dict, key) {
  var value = dict[key];
  return value;
};


// Time Complexity: O(n)
// Math.floor runtime? I am guessing it is O(n)
const mysteryFunction7 = function(array) { // eg. [3, 6, 9];
  // Assume `array` is an array of ints sorted from smallest to biggest
  const lookingFor = 9;
  let lowerBound = 0;
  let upperBound = array.length - 1;
  let guessIndex = Math.floor(upperBound / 2);
  while (lowerBound <= upperBound) {
    if (array[guessIndex] === lookingFor) {
      return true;
    } else if (lookingFor < array[guessIndex]) {
      upperBound = guessIndex - 1;
    } else {
      lowerBound = guessIndex + 1;
    }
    guessIndex = Math.floor((lowerBound + upperBound) / 2);
  }
  return false;
}

// Time Complexity: O(1)
// objects are unsorted and look up time is constant
const mysteryFunction8 = function(dictionary) {
  for(var key in dictionary) {
    var value = dictionary[key];
    if (key == value) {
      return true;
    }
    return false;
  }
}


//=========================================PART TWO=========================================
/*
Compare the following pieces of code that have the same functionality.
For each function:
- How does it work?
- What is the runtime complexity of the function?
Which solution would be fastest for large input sizes?
*/


// The following 4 functions all look for duplicated elements in an array.
// For example, if the input is [5,2,4,5,4], the function should return [5,4] 
// because those elements are in the array twice.

// Time Complexity: O(n^2)
const findDuplicatesA = (array) => {
  const duplicated = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] === array[j]) {
        duplicated.push(array[j]);
      }
    }
  }
  return duplicated;
};

// Time Complexity: O(n)
const findDuplicatesB = (array) => {
  const seen = new Set();
  const duplicates = new Set();
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (seen.has(value)) {
      duplicates.add(value);
    }
    seen.add(value);
  }
  return duplicates;
};

// Time Complexity: O(n)
const findDuplicatesC = (array) => {
  array.sort(); // assume O(n)
  const duplicates = [];
  for (let i = 0; i < array.length - 1; i++) {
    const item = array[i];
    const nextItem = array[i + 1];
    if (item === nextItem) {
      duplicates.push(item);
    }
  }
  return duplicates;
};

// Time Complexity: O(n)
const findDuplicatesD = (array) => {
  const duplicated = [];
  const seen = [];
  for (let search = 0; search < array.length; search++) {
    const item = array[search];
    if (seen.indexOf(item) !== -1) { // assume O(n)
      duplicated.push(item);
    }
    seen.push(item); // O(1)
  }
  return duplicated;
};


// The following 3 functions all count how many times an item is in an array 
// and return a dictionary of the counts
// For example, if the input is [5,2,4,5,4,5], the function should return {5:3, 4:2, 2:1} 

// Time Complexity: O(n) * O(n) = O(n^2)
const countOccurencesA = (array) => {
  const counts = {};
  for (let i = 0; i < array.length; i++) { // O(n)
    const item = array[i];
    if (counts[item] === undefined) {
      let countForI = 0;
      for (let j = 0; j < array.length; j++) { // O(n)
        if (array[j] === item) {
          countForI++;
        }
      }
      counts[item] = countForI;
    }
  }
  return counts;
};

// Time Complexity: O(n)
const countOccurencesB = (array) => {
  const counts = {};
  array.sort(); // O(n)
  let previousItem = undefined;
  let itemCount = 0;
  let currentItem;
  for (let i = 0; i < array.length; i++) { // O(n)
    currentItem = array[i];
    if (currentItem === previousItem) {
      itemCount++;
    } else {
      counts[currentItem] = itemCount;
      previousItem = currentItem;
      itemCount = 1;
    }
  }
  counts[currentItem] = itemCount;
};

// Time Complexity: O(n)
const countOccurencesC = (array) => {
  const counts = {};
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (counts[item] === undefined) {
      counts[item] = 0;
    }
    counts[item] += 1;
  }
  return counts;
}