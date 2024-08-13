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
let r = new Square(4, 5);

// r.area()

let a = document.getElementById("btn");

const Increbtn = () => {
  const count = Number(a.innerHTML) + 1;
  a.innerHTML = count;
  
};
a.addEventListener("click", Increbtn);

console.log("object", Increbtn());
