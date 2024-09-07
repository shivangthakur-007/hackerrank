function minmax(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  let min = 0,
    max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
  }
  for (let i = 1; i < arr.length; i++) {
    max += arr[i];
  }
  // console.log(min, max)
}
// minmax([4, 3, 1, 2, 5]);

var bar = function FOO() {
  return 11;
};
// console.log(typeof FOO())

let a = ((5000 / 5) * 9 - 200 * 6 + 15 * 15) / 3 + 75 * 8;

// console.log(a);

function letterpermutation(S) {
  // var letterpermutation = function (S) {
  const result = [];
  const dfs = (i, S, slate) => {
    // base case
    if (i === S.length) {
      result.push(slate.join(""));
      return;
    }
    //dfs recursive case
    let char = S[i];

    if (!Number.isInteger(parseInt(char))) {
      //UpperCase
      slate.push(char.toUpperCase());
      dfs(i + 1, S, slate);
      slate.pop();

      //lowercase
      slate.push(char.toLowerCase());
      dfs(i + 1, S, slate);
      slate.pop();
    } else {
      slate.push(char);
      dfs(i + 1, S, slate);
      slate.pop();
    }
  };
  dfs(0, S, []);
  return result;
}

// console.log(letterpermutation("a1b2"));

// leatcode 78,
function Subset(nums) {
  let result=[];
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
  console.log(result);
}

Subset([1,2,3])