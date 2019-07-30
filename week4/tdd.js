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


// Challenge: Ping Pong Pairing
