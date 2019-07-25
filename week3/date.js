/*
If you add (date1 + date2) or subtract (date1 - date2) two dates in Javascript, it returns the time difference in milliseconds. Can you write a function to subtract two dates but return the time difference in minutes? What about as a date object?
*/

let date1 = new Date(1991, 02, 20);
let date2 = new Date();

const returnMilliseconds = (d1, d2) => {
  let d1_ms = d1.getTime();
  let d2_ms = d2.getTime();
  let difference = d2_ms - d1_ms;

  console.log(`The time difference is ${difference} milliseconds.`);
  console.log(`Date object: ${new Date(difference)}`)
};