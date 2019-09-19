let arr = [91,3,2,6,9];

// first


const quicksort = arr => {
  // base case
  if (arr.length <= 1) return arr;

  // swap
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  // partition
  // important: note i stops iterating before the last item
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] <= pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  // return the values
  return [...quicksort(left), pivot, ...quicksort(right)];
};


//second
// swaps the values in place
const arr = [6, 2, 5, 3, 8, 7, 1, 4]

const quickSort = (arr, start, end) => {

  if(start < end) {

    // You can learn about how the pivot value is derived in the comments below
    let pivot = partition(arr, start, end)

    // Make sure to read the below comments to understand why pivot - 1 and pivot + 1 are used
    // These are the recursive calls to quickSort
    quickSort(arr, start, pivot - 1)
    quickSort(arr, pivot + 1, end)
  } 
// 1.) OG quicksort - the most common implementation 
const quickSort1 = (arr, start, end) => {

  if(start < end) {

    // You can learn about how the pivot value is derived in the comments below
    let pivot = partition(arr, start, end)

    // Make sure to read the below comments to understand why pivot - 1 and pivot + 1 are used
    // These are the recursive calls to quickSort
    quickSort1(arr, start, pivot - 1)
    quickSort1(arr, pivot + 1, end)
  } 

}

const partition = (arr, start, end) => { 
  let pivot = end
  // Set i to start - 1 so that it can access the first index in the event that the value at arr[0] is greater than arr[pivot]
  // Succeeding comments will expound upon the above comment
  let i = start - 1
  let j = start

  // Increment j up to the index preceding the pivot
  while (j < pivot) {

    // If the value is greater than the pivot increment j
    if (arr[j] > arr[pivot]) {
      j++
    }

    // When the value at arr[j] is less than the pivot:
    // increment i (arr[i] will be a value greater than arr[pivot]) and swap the value at arr[i] and arr[j]
    else {
      i++
      swap(arr, j, i)
      j++
    }

  }

  //The value at arr[i + 1] will be greater than the value of arr[pivot]
  swap(arr, i + 1, pivot)

  //You return i + 1, as the values to the left of it are less than arr[i+1], and values to the right are greater than arr[i + 1]
  // As such, when the recursive quicksorts are called, the new sub arrays will not include this the previously used pivot value
  return i + 1
}

const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[firstIndex]
  arr[firstIndex] = arr[secondIndex]
  arr[secondIndex] = temp
};

const arr = [6, 2, 5, 3, 8, 7, 1, 4];
quickSort1(arr, 0, arr.length - 1)
console.log(arr);

///////////////////////////////////////////////////////////////////////

// 2.) Easiest read, takes advantage of spread operator and ternary operator
const quicksort2 = arr => {
  // base case
  if (arr.length <= 1) return arr;

  // swap
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  // partition
    // important: note i stops iterating before the last item
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] <= pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  // return the values
  return [...quickSort2(left), pivot, ...quickSort2(right)];
};

quickSort2([9,3,24,45,7,2,56,9]);

///////////////////////////////////////////////////////////////////////

// 3.) Similar to the first but using native methods of js
const quickSort3 = origArray => {
	if (origArray.length <= 1) { 
		return origArray;
	} else {
		let left = [];
		let right = [];
		let newArray = [];
		let pivot = origArray.pop();
		let length = origArray.length;

		for (let i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quickSort3(left), pivot, quickSort3(right));
	}
};

let arr = [91,3,2,6,9];
console.log(quickSort3(arr));
}

const partition = (arr, start, end) => { 
  let pivot = end
  // Set i to start - 1 so that it can access the first index in the event that the value at arr[0] is greater than arr[pivot]
  // Succeeding comments will expound upon the above comment
  let i = start - 1
  let j = start

  // Increment j up to the index preceding the pivot
  while (j < pivot) {

    // If the value is greater than the pivot increment j
    if (arr[j] > arr[pivot]) {
      j++
    }

    // When the value at arr[j] is less than the pivot:
    // increment i (arr[i] will be a value greater than arr[pivot]) and swap the value at arr[i] and arr[j]
    else {
      i++
      swap(arr, j, i)
      j++
    }

  }

  //The value at arr[i + 1] will be greater than the value of arr[pivot]
  swap(arr, i + 1, pivot)

  //You return i + 1, as the values to the left of it are less than arr[i+1], and values to the right are greater than arr[i + 1]
  // As such, when the recursive quicksorts are called, the new sub arrays will not include this the previously used pivot value
  return i + 1
}

const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[firstIndex]
  arr[firstIndex] = arr[secondIndex]
  arr[secondIndex] = temp
}

quickSort(arr, 0, arr.length - 1)
console.log(arr)

// third
const quicksort = origArray => {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quicksort(left), pivot, quicksort(right));
	}
}


console.log(quicksort(arr));