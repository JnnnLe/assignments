const factorial = num => {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(5), // -> 120
  factorial(10), // -> 3628800
  factorial(11) // -> 39916800
);