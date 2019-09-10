const palindrome = initialStr => {
  let str = initialStr.split(``);
  // console.log(str)
  let isPalindrome = true;
  while (isPalindrome == true && str.length > 1) {
    let firstLetter = str.shift(); 
    let lastLetter = str.pop();
    if (firstLetter == lastLetter) {
      str = str.join(``);
      return palindrome(str);
    } else {
      return isPalindrome = false;
    }
  }

  return isPalindrome;
};

console.log(
  palindrome('racecar'), // -> true
  palindrome('step on no pets'), // -> true
  palindrome('a'), // -> true
  palindrome('goat') // -> false
);