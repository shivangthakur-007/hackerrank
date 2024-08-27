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
let arr = [8, 20, -2, 4, -6];
BubbleSort(arr);
// console.log(arr);

// Insertion Sort

function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToinsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToinsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToinsert;
  }
}
InsertionSort(arr);
// console.log(arr)

function QuickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [],
    right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...QuickSort(left), pivot, ...QuickSort(right)];
}
// console.log(QuickSort(arr));

function MergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  // console.log(rightArr, leftArr)
  return merge(MergeSort(leftArr), MergeSort(rightArr));
}
function merge(leftArr, rightArr) {
  let sortArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortArr.push(leftArr.shift());
    } else {
      sortArr.push(rightArr.shift());
    }
  }
  return [...sortArr, ...leftArr, ...rightArr];
}
// let arr1 = [9, 21, -3, 5, -7];
// console.log(MergeSort(arr1))
// MergeSort(arr1)

function Cartiesan(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}

let arr1 = [1, 2];
let arr2 = [3, 4, 5];
// console.log(Cartiesan(arr1, arr2))

function ClimbingStairCase(n) {
  let noOfways = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfways[i] = noOfways[i - 1] + noOfways[i - 2];
  }
  return noOfways[n - 1];
}

// console.log(ClimbingStairCase(5));

function TowerofHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  TowerofHanoi(n-1, fromRod, usingRod, toRod)
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  TowerofHanoi(n-1, usingRod, toRod, fromRod)
}

TowerofHanoi(5, 'A', 'C', 'B')


//using fuction reduce array without using Array.reduce
var reduce = function (nums, fn, init) {
  let val = init;
  if (nums.length < 1) {
    return init;
  }
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};