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
    let j = i;
    while (j <= nums.length) {
      slate.push(nums[j]);
      dfs(j + 1, nums, k, n - nums[j], slate);
      slate.pop();
      // console.log(slate.pop())
      j++;
    }
  };
  dfs(0, nums, k, n, []);
  // console.log(result);
}

Combinations(3, 7);

// leatcode 40 combinations sum II

function Combinations_II(candidates, target) {
  // global result
  const result = [];

  //sort
  candidates.sort((a, b) => a - b);

  //dfs recursive helper
  const dfs = (i, candidates, target, slate) => {
    // backtracking case
    if (target < 0) return;

    //base case
    if (target === 0) {
      result.push(slate.slice());
      return;
    }

    // dfs recurive case
    for (let j = i; j < candidates.length; j++) {
      if (i !== j && candidates[j] === candidates[j - 1]) continue;
      slate.push(candidates[j]);
      dfs(j + 1, candidates, target - candidates[j], slate);
      slate.pop();
    }
  };
  dfs(0, candidates, target, []);
  // console.log(result);
}

Combinations_II([10, 1, 2, 7, 6, 1, 5], 8);

function Combinations_I(candidates, target) {
  // global result
  const result = [];
  candidates.sort((a, b) => a - b);
  // dfs recursive helper
  const dfs = (i, candidates, target, slate) => {
    if (target < 0) return;

    // base case
    if (target === 0) {
      result.push(slate.slice());
      return;
    }

    // dfs recusrive case
    for (let j = i; j < candidates.length; j++) {
      slate.push(candidates[j]);
      dfs(j, candidates, target - candidates[j], slate);
      slate.pop();
    }
  };
  dfs(0, candidates, target, []);
  // console.log(result)
}
Combinations_I([2, 3, 6, 7], 7);
Combinations_I([2, 3, 5], 8);

// leatcode 131 palindrome

function isPalindrome(s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) return false;
    start++;
    end--;
  }
  return true;
}

function Palindrome(s) {
  // global result
  const result = [];

  // dfs recursive helper
  const dfs = (i, s, slate) => {
    // base case
    if (i === s.length) {
      result.push(slate.slice());
      return;
    }

    // dfs recursive case
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        slate.push(s.slice(i, j + 1));
        dfs(j + 1, s, slate);
        slate.pop();
      }
    }
  };
  dfs(0, s, []);
  // console.log(result)
}

Palindrome("aab");

function isvalid(str) {
  const stack = [];
  let i = 0;
  let len = str.length;
  while (i < len) {
    let curstr = str[i];
    stack.push(curstr);

    const open = stack[stack.length - 2];
    const close = stack[stack.length - 1];

    if (open + close === "()") {
      stack.pop();
      stack.pop();
    }
    i++;
  }
  return stack.length === 0;
}
function Parenthesis_1(n) {
  // global result
  const result = [];

  // dfs recursive helper
  const dfs = (i, n, slate) => {
    // base case
    if (i === n * 2) {
      if (isvalid(slate.join(""))) {
        result.push(slate.join(""));
      }
      return;
    }
    // dfs recursive case

    //add open paren
    slate.push("(");
    dfs(i + 1, n, slate);
    slate.pop();

    //add close paren
    slate.push(")");
    dfs(i + 1, n, slate);
    slate.pop();
  };
  dfs(0, n, []);
  // console.log(result);
}
Parenthesis_1(3);

function FindtargetSum(nums, target) {
  // global result
  let result = 0;

  // dfs recursive case
  const dfs = (i, nums, target, slate) => {
    // base case
    if (i === nums.length) {
      if (slate === target) {
        result++;
      }
      return;
    }
    // dfs recrusive helper
    slate += nums[i];
    dfs(i + 1, nums, target, slate);
    slate -= nums[i];

    slate -= nums[i];
    dfs(i + 1, nums, target, slate);
    slate += nums[i];
  };
  dfs(0, nums, target, 0);
  // console.log(result);
}
FindtargetSum([1, 1, 1, 1, 1], 3);

function lettercombinations(digits) {
  //global result
  const result = [];

  let alpha = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const dfs = (i, digits, slate) => {
    // base case
    if (i === digits.length) {
      result.push(slate.join(""));
      return;
    }

    // dfs recursive case
    let chars = alpha[digits[i]];

    for (let char of chars) {
      slate.push(char);
      dfs(i + 1, digits, slate);
      slate.pop();
    }
    // console.log(slate)
  };
  dfs(0, digits, []);
  // console.log(result);
}
lettercombinations("23");

function fibonacciNumber(nums) {
  if (nums === 0) {
    return 0;
  } else if (nums === 1) {
    return 1;
  } else {
    return fibonacciNumber(nums - 1) + fibonacciNumber(nums - 2);
  }
}

// console.log(fibonacciNumber(4));

// n - queens

const formatBoard = (board) => {
  // console.log(board)
  const result = [];

  for (let col = 0; col < board.length; col++) {
    let newRow = new Array(board.length).fill(".");
    newRow[board[col]] = "Q";
    result.push(newRow.join(''))
  }
  console.dir(result)
};

function solveQueens(n) {
  // global result
  const result = [];

  const dfs = (i, n, slate) => {
    let lastQ = i - 1;

    for (let prevQ = 0; prevQ < lastQ; prevQ++) {
      // col conflict
      if ((slate[prevQ] === slate[lastQ])) return;

      // diagonal conflict
      let rowDiff = Math.abs(prevQ - lastQ);
      let coldiff = Math.abs(slate[prevQ] - slate[lastQ]);

      if (rowDiff === coldiff) return;
    }
    // base cas
    if (i === n) {
      result.push(slate.slice());
      return;
    }

    // dfs recursive case
    for (let col = 0; col < n; col++) {
      slate.push(col);
      dfs(i + 1, n, slate);
      slate.pop();
    }
  };
  dfs(0, n, []);
  // console.log(result)
  return result.map((board) => formatBoard(board));
}

solveQueens(4);
