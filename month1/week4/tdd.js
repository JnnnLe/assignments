// Independent Practice
var countWords = function(sentence) {
  return sentence.split(" ").length;
};

describe("countWords", function() {
  it("should count a single letter", function() {
    expect(countWords("a")).toBe(1);
  });

  it("it should count words", function() {
    expect(countWords("Hi Leah, thanks for your feedback!")).toBe(6);
  });

  // challenge: Try to find some input where the fn gives the wrong result
  it("it should ignore punctuations", function() {
    expect(countWords("!!#$%%$#.")).toBe(0); 
    // now the programmar must go back to modify their function to filter out punctuations because puncutations !== words
  })
});

// CodeWars: First non-repeating character
const firstNonRepeatingLetter = str => {
  let obj = {};

	for (let i = 0; i < str.length; i++) {
		obj[str[i].toLowerCase()] = obj[str[i].toLowerCase()] +1 || 1;
  }
  
	for (let k in obj) {
		if (obj[k] === 1) {
		  // console.log(str[str.toLowerCase().indexOf(k)]);
      return str[str.toLowerCase().indexOf(k)];
		}
  }
  
	return `No orignal letters`;
};


// Checking for understanding:
// What is an automated test?
  // Automated testing differs from manual testing where a human being is responsible for single-handedly testing the functionality of the software in the way a user would. Because automated testing is done through an automation tool, less time is needed in exploratory tests and more time is needed in maintaining test scripts while increasing overall test coverage.


// What is TDD?
  // A software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved so that the tests pass. This is opposed to software development that allows software to be added that is not proven to meet requirements.

// What are some advantages of TDD?
  // Ensures your code works as expected. It protects against future problems, it helps developers foresee the ways the a user will use or abuse their product.

// What are some disadvantages of TDD?
  // Time consuming, often tests will exceed the lines of code written for the function/component/feature
  // Users don't care for testing unless a feature is seriously broken

// Where should your tests live in your project?
  // In it's own directory along with all it's other test friends

// How do you run your tests?
  // One must write them.