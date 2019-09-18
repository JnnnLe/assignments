const quicksort = arr => {
  // base case
  if (arr.length <= 1) return arr;

  let right = [];
  let left = [];
  let pivot = arr[arr.length - 1];

  // using pivot push data in the right array
  for (let num of arr) {
    num <= pivot ? right.push(num) : left.push(num);
  }

  return [ ...quicksort(right), pivot, ...quicksort(left)]
};

quicksort([7,1,0,9,4,5,8,3,256,7,81])