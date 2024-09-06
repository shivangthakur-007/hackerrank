function sum() {
  let n = 0,
    j = 0,
    l = 0,
    k = 10;

  for (let i = 0; i < k; i++) {
    j = 3 * i + 2;
    // return j;
    l = 5 * i + 3;
  }
  if (j === l) {
    n = j;
    console.log(n, "helo");
  } else {
    console.log("hel");
  }
}
// sum();
function findNumber() {
  let number = 0;

  // Loop through possible numbers starting from 0
  while (true) {
    // Check if number satisfies both conditions
    if (number % 3 === 2 && number % 5 === 3) {
      return number;
    }
    number++;
  }
}

const result = findNumber();
console.log(result);