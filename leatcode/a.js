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
  TowerofHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  TowerofHanoi(n - 1, usingRod, toRod, fromRod);
}

// TowerofHanoi(5, 'A', 'C', 'B')

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

// let obj = {
//   0: [1, 2, 3],
//   1: [4, 5, 6],
//   2: [7, 8, 9],
// };
// console.log(Object.keys(obj));

// matrix diagonal question

function diagonalDifference(arr) {
  // Write your code here
  let n = 3;
  let d1 = 0,
    d2 = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        d1 += arr[i][j];
      }
      if (i == n - j - 1) d2 += arr[i][j];
    }
  }
  return Math.abs(d1 - d2);
}

//function composition

let compose = function (functions) {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  } else {
    return function (x) {
      let result = x;
      for (let i = functions.length; i >= 0; i--) {
        result = functions[i](result);
      }
      return result;
    };
  }
};

// Implicit Binding
// const person={
//   name: 'Adarsh',
//   sayMyname(){
//     console.log(`My Name is ${this.name}`)
//   }
// }

//explicit binding
// const person={
//   name: 'Adarsh',
// }
// function sayMyname(){
//   console.log(`My Name is ${this.name}`)
// }

// sayMyname.call(person)
// say=sayMyname.bind(person)
// say()
// sayMyname.apply(person)

//New Binding

// function person(name){
//   this.name= name
// }
// let p1= new person('Adarsh')
// console.log(p1)

//default binding

// globalThis.name= 'Adarsh'
// function saymyname(){
//   console.log(`My name is ${this.name}`)
// }
// saymyname()

const person = {
  firstName: "Vishwas",
  lastName: "Batman",
  saymyname() {
    const fullName = () => {
      return `${this.firstName} ${this.lastName}`;
    };
    // console.log(`Full Name is ${fullName()}`)
  },
};

person.saymyname();

// return length argument passed

var argumentsLength = function (...args) {
  let count = 0;
  for (let i = 0; i < args.length; i++) {
    count += 1;
  }
  return count;
};

// allow one function call
var once = function (fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return undefined;
  };
};
// leatcode 78 subset
function Subset(nums) {
  let result = [];
  const dfs = (i, nums, slate) => {
    // base case
    if (i === nums.length) {
      result.push(slate.slice());
      return;
    }
    // recursive code
    // exclude
    dfs(i + 1, nums, slate);

    //include
    slate.push(nums[i]);
    dfs(i + 1, nums, slate);
    slate.pop();
  };
  dfs(0, nums, []);
  // console.log(result);
}

Subset([1, 2, 3]);

// subset duplicate

function DuplicateSubset(nums) {
  // global scope
  const result = [];

  const dfs = (i, nums, slate) => {
    if (i === nums.length) {
      result.push(slate.slice());
      return;
    }
    //exclude
    dfs(i + 1, nums, slate);

    // include
    slate.push(nums[i]);
    dfs(i + 1, nums, slate);
    slate.pop();
  };
  dfs(0, nums, []);

  const hash = {};
  for (const el of result) {
    if (hash[el]) {
      continue;
    }
    hash[el] = el;
  }
  // console.log(Object.values(hash))
}

DuplicateSubset([1, 2, 2]);

// permutation leatcode subset 46
function permutation(nums) {
  const result = [];
  const dfs = (i, nums) => {
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }
    // dfs recursive
    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };
  dfs(0, nums);
  // console.log(result)
}
permutation([1, 2, 3]);

function Permutationduplicate(nums) {
  // global result
  const result = [];

  const dfs = (i, nums) => {
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }
    // dfs recursive helper
    const hash = {};
    for (let j = i; j < nums.length; j++) {
      if (hash[nums[j]]) {
        continue;
      }
      hash[nums[j]] = true;
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };
  dfs(0, nums);
  // console.log(result);
}

Permutationduplicate([1, 1, 2]);

// leatcode 211 combinations
function Combinations(k, n) {
  const result = [];
  const nums = [];

  for (let i = 1; i <= 9; i++) {
    nums.push(i);
  }
  // dfs
  const dfs = (i, nums, k, n, slate) => {
    //backtracking case
    // i=0;
    if (n < 0) return;

    //base case
    if (slate.length === k) {
      if (n === 0) {
        result.push(slate.slice());
      }
    }
    // dfs recursive case
    let j=i;
    while(j<=nums.length){
      slate.push(nums[j]);
      dfs(j + 1, nums, k, n - nums[j], slate);
      slate.pop();
      j++
    }
  };
  dfs(0, nums, k, n, []);
  console.log(result);
}

Combinations(3, 7);
