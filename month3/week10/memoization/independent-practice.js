// 1.) Pure functions: are functions that will not produce side effects SVGZoomAndPan/or change data outside of the scope of itself. Also, gives the same output that it is given.

// 2.) Write fib (without recursion)
const fib = num => {
  let first = 0;
  let second = 1;
  let temp;
  if (num < 2) return num;
  while (num >= 2) {
    temp = second;
    second = first + second;
    first = temp;
    num--;
  }

  return second;
};

console.log(fib(9));

// 2b.) Write fib using recursion
const fib_recursion = n => {
  if (n <= 1) return n;
 
  return fib_recursion(n - 1) + fib_recursion(n - 2); 
};

console.log(fib_recursion(6));


// 2c.) Write fib using memoization
const fib_num = num => {
  let memorize = {};
  if (num == 0) return 0;
  if (num <= 2)  return 1;
  if (memorize[num]) return memorize[num];
  else {
    return memorize[num] = fib_num(num - 1) + fib_num(num - 2);
  }
};

console.log(fib_num(4));
console.log(fib_num(5));
console.log(fib_num(6));
console.log(fib_num(7));