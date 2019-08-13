const calculate = (input1, operator, input2) => {
  let num1;
  let num2;
   if (typeof(input1) === 'number' && typeof(input2) === 'number') {
     num1 = input1;
     num2 = input2;
   } else {
     console.log(`${input1} and/or ${input2} was not passed to the function as a number-type. Please try again.`);
   }

  switch(operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        console.log(`Is ${num2} 0? Please don't divide by 0.`)
        break;
      }

    case '%':
      if (num2 !== 0) {
        return num1 % num2;
      } else {
        console.log(`Is ${num2} 0? Please don't divide by 0.`);
        break;
      }
      
    case 'Math.hypot()':
      return Math.hypot(num1, num2);
    case 'Math.imul()':
      return Math.imul(num1, num2);
    case 'Math.min()':
      return Math.min(num1, num2);
    case 'Math.max()':
      return Math.max(num1, num2);
    case 'Math.pow()':
      return Math.pow(num1, num2);
    default:
      console.log(`${operator} was not passed to the function as a string and/or a valid mathematical operator or method. Please try again.`);
  }
};
  