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