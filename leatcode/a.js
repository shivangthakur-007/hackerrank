// 2635
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

var map = function (arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i], i));
  }
  return newArray;
};

//2634 Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// The fn function takes one or two arguments:

var filter = function (arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

function f(x) {
  x = "x-" + x;
  return function (y) {
    y = "y-" + x;
    return function (z) {
      return "z-" + y;
    };
  };
}

let g = f("a")("b")("c");
// console.log(g);

function BinarySearch(arr, target) {
  let leftindex = 0;
  let rightindex = arr.length - 1;
  while (leftindex <= rightindex) {
    let middleindex = Math.floor((leftindex + rightindex) / 2);
    if (target === arr[middleindex]) {
      return middleindex;
    }
    if (target < arr[middleindex]) {
      rightindex = middleindex - 1;
    } else {
      leftindex = middleindex + 1;
    }
  }
  return -1;
}

// console.log(BinarySearch([10, 20, 21, 30, 40], 40));

function RecursiveBinarySearch(arr, target) {
  return Search(arr, target, 0, arr.length - 1);
}

function Search(arr, target, leftindex, rightindex) {
  if (leftindex > rightindex) {
    return -1;
  }
  let middleindex = Math.floor((leftindex + rightindex) / 2);
  if (target === arr[middleindex]) {
    return middleindex;
  }
  if (target < arr[middleindex]) {
    return Search(arr, target, leftindex, middleindex - 1);
  } else {
    return Search(arr, target, middleindex + 1, rightindex);
  }
}

// console.log(RecursiveBinarySearch([10, 20, 21, 30, 40], 40));

function BubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let element = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = element;
        swapped = true;
      }
    }
  } while (swapped);
}
let arr = [1, -6, 2, -10];
BubbleSort(arr);
// console.log(arr);

// Insertion Sort

function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToinsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToinsert) {
      arr[j+1]= arr[j]
      j= j-1
    }
    arr[j+1] = numberToinsert
  }
}
InsertionSort(arr)
console.log(arr)
