function reversestring(a) {
  (a = "hEllo"), (b = a.split("").reverse().join(""));
  console.log(b);
}

// reversestring()

function findlargestnumber(a = []) {
  let b = a.sort();
  // let c=b.reverse()
  let c = a.pop();
  console.log(c);
}

function findlargest(n) {
  let largest = n[0];

  // for (let i = 1; i < n.length; i++) {
  //   if (n[i] > largest) {
  //     largest = n[i];
  //   }
  // }
  console.log(largest);
}

// const arr = [10, 20, 3, 0, 32, 23, 84, 48];

// findlargest(arr)

// findlargestnumber([9,2,1,3])

function findlargestone(arr) {
  return Math.max(...arr);
}

findlargestone([9, 2, 1, 3]);

function isPalindrome(str) {
  console.log(str === str.split("").reverse().join(""));
}
// isPalindrome("bdhoi");

function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n === 1 ? 1 : n * factorial(n - 1);
}

// console.log(factorial(5))

function firstNonRepeatingCharacter(str) {
  const charCount = {};
  for (let char of str) {
    const lowerchar = char.toLowerCase();
    charCount[lowerchar] = (charCount[lowerchar] || 0) + 1;
  }
  for (let char of str) {
    const lowerchar = char.toLowerCase();
    if (charCount[lowerchar] === 1) {
      return lowerchar;
    }
  }
  return null;
}

const str = "Adarsh";
// const result = firstNonRepeatingCharacter(str);
// console.log(result);

const func = (s) => {
  const vowel = "aeiou";
  var a = " ";
  for (var index = 0; index < s.length; index++) {
    if (vowel.includes(s[index])) {
      console.log(s[index]);
    } else {
      a += s[index] + "\n";
      // console.log(s[index])
    }
  }
  console.log(a.trim());
};

function vowelandconsonant(s) {
  let vowel = "aeiou";
  let a = " ";
  for (let index = 0; index < s.length; index++) {
    if (vowel.includes(s[index])) {
      console.log(s[index]);
    } else {
      a += s[index] + "\n";
    }
  }
  console.log(a.trim());
}
// vowelandconsonant('javascriptloops')
// func("javascriptloops")

var createHelloWorld = function () {
  return function (...args) {
    [...args] = ["Hello World"];
    console.log(args.toLocaleString());
  };
};
const f = createHelloWorld();
// f();

var createCounter = function (n) {
  i = -1;
  return function () {
    i++;
    return n + i;
  };
};
// const counter = createCounter(10);
// console.log(counter())
// console.log(counter())
// console.log(counter())

let api = {
  success: true,
  message: "all news",
  news: [
    {
      thumbnail: {
        public_id: "newsapsite/uxp9dltweithithgxke4",
        secure_url:
          "https://res.cloudinary.com/dvhcu6di8/image/upload/v1720379144/newsapsite/uxp9dltweithithgxke4.png",
      },
      numberofTitle: 0,
      _id: "668ae70508fc5733dc5f3196",
      title: "computers",
      description: "basic needs of human now-a-days",
      category: "technolgoy",
      numberofthumbnail: 0,
      createdby: "Adarsh",
      createdAt: "2024-07-07T19:05:41.710Z",
      updatedAt: "2024-07-07T19:05:45.075Z",
      __v: 0,
    },
  ],
};

// console.log(api["news"]?category)

function reverseString(s) {
  try {
    let s1 = s.split("").reverse().join("");
    console.log(s1);
  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
}

// reverseString(1234)

function isPositive(a) {
  let result = "YES";
  if (a < 0) {
    throw { message: "Negative Error" };
  } else if (a === 0) {
    throw { message: "Zero Error" };
  }
  return result;
}

class Rectangle {
  constructor(a, b) {
    (this.a = a), (this.b = b);
  }
  area() {
    if (this.a !== this.b) {
      console.log(this.a * this.b, "Rectangle");
    } else if (this.a === this.b) {
      console.log(this.a * this.b, "Square");
    }
  }
}
class Square extends Rectangle {
  constructor(s) {
    super(s, s);
  }
}
let r1 = new Square(4, 5);

// r.area()

// let a = document.getElementById("btn");

// const Increbtn = () => {
//   const count = Number(a.textContent) + 1;
//   a.innerHTML = count;

// };
// a.addEventListener("click", Increbtn);

// console.log("object", Increbtn());
//  let PI = 0;
let area = 0,
  r = 2,
  perimeter = 0;
let pi = Math.PI;
// Print the area of the circle:
area = 2 * pi * Math.pow(r, 2);
// Print the perimeter of the circle:
perimeter = 2 * pi * r;
// console.log(area);
// console.log(perimeter);

function getGrade(score) {
  let grade;
  score = 0;
  if (25 < score && score <= 30) {
    console.log("I am less than and equal to 30");
  } else {
    console.log("I am greater than score");
  }
}

// getGrade(24);

// switch (expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//   // code block
// }

("use strict");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});
//if else
function readLine() {
  return inputString[currentLine++];
}
//switch

function getLetter(s) {
  let letter;
  // Write your code here
  switch (s[0]) {
    case "a" || "e" || "i" || "o" || "u":
      letter = "A";
      break;
    case "b" || "c" || "d" || "f" || "g":
      letter = "B";
      break;
    case "h" || "j" || "k" || "l" || "m":
      letter = "C";
      break;
    default:
      "n" || "p" || "q" || "r" || "s" || "t" || "v" || "w" || "x" || "y" || "z";
      letter = "D";
      break;
  }
  return letter;
}

// function getSecondLargest(nums) {
//   // Complete the function
//   let c = nums.sort((a, b) => a - b);
//   let b = c.reverse();
//   if (b.length = 1) {
//     return b[0];
//   }
//   // else {
//   //   return b[1];
//   // }
// }
function getSecondLargest(nums) {
  // Complete the function
  let largest = nums[0];
  let secondLargest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
      continue;
    }

    if (nums[i] > secondLargest && nums[i] < largest) {
      secondLargest = nums[i];
    }
  }

  return secondLargest;
}
// console.log(getSecondLargest([2,3,6,6,5]))
// console.log(getSecondLargest([5]))
// console.log(getSecondLargest([10,5,12]))

function getCount(objects) {
  for (const i in objects) {
    if (objects.x == objects.y) {
      let a = i;
      return a;
    }
  }
}

const o = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

// console.log("property: value");
// 'p' is the property
// for (p in o) {
//   console.log(p);
// }

function countObjects(objects) {
  let a = 0;
  for (let index = 0; index < objects.length; index++) {
    if (objects[index].x == objects[index].y) {
      a += 1;
    }
  }
  return a;
}

// console.log(countObjects({x:1, y:1}))

var expect = function (v) {
  return {
    toBe(val) {
      if (v === val) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe(val) {
      if (v !== val) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};
// console.log(expect(5).toBe(null));

class Polygon {
  constructor(inarr = []) {
    this.arr = inarr;
  }
  perimeter() {
    let sum = 0;
    for (let index = 0; index < this.arr.length; index++) {
      sum += this.arr[index];
    }
    return sum;
  }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);
// console.log(rectangle.perimeter())
// console.log(square.perimeter())

var createCounter = function (init) {
  let initialInit = init;
  return {
    increment() {
      return (initialInit += 1);
    },
    decrement() {
      // let initialInit=0;
      // initialInit=init;
      return (initialInit -= 1);
    },
    reset() {
      // let initialInit = 0;
      // initialInit = init;
      return (initialInit = init);
    },
  };
};

const counter = createCounter(0);
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.reset());
// console.log(counter.reset());

function sides(literals, ...expressions) {
  const [a, p] = expressions;
  const value = Math.sqrt(p ** 2 - 16 * a);

  return [(p - value) / 4, (p + value) / 4];
}

function evenodd(a) {
  let eveodd = a.map(function (a) {
    if (a % 2 === 0) {
      return a * 2;
    } else {
      return a * 3;
    }
  });
  return eveodd;
}

let a = [1, 2, 3, 4, 5];
console.log(evenodd(a));

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', /^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/)
   * followed by one or more letters.
   */
  let re = /^(Mr|Mrs|Ms|Dr|Er)\.\s?[a-z|A-Z]+$/;
  /*
   * Do not remove the return statement
   */
  return re;
}

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */
  let re = /[0-9]+/gm;

  /*
   * Do not remove the return statement
   */
  return re;
}

function getMaxLessThanK(n, k) {
  let max = 0;

  for (let a = 1; a <= n; a++) {
    for (let b = a + 1; b <= n; b++) {
      let bw = a & b;

      bw < k && bw > max && (max = bw);
    }
  }

  return max;
}

// hackerrank questions

function plusMinus(arr) {
  // Write your code here
  let positivecount = 0;
  let negativecount = 0;
  let zerocount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativecount++;
    } else if (arr[i] > 0) {
      positivecount++;
    } else {
      zerocount++;
    }
  }
  positivecount = (positivecount /= arr.length).toFixed(6);
  negativecount = (negativecount /= arr.length).toFixed(6);
  zerocount = (zerocount /= arr.length).toFixed(6);
  // console.log(positivecount);
  // console.log(negativecount);
  // console.log(zerocount);
}

//making staircase with repeat and primary method

function staircase(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n - 1; j >= i; j--) {
      output += " ";
    }
    for (let k = 1; k <= i; k++) {
      output += "#";
    }
    output += "\n";
  }
  console.log(output);
}
// staircase(6)

function staircase1(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
  console.log(output)
}
staircase1(5)

