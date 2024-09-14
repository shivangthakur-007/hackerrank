function birthdayCakeCandles(candles) {
  // Write your code here
  // let;
}
birthdayCakeCandles([3, 3, 1, 2]);

function MergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(MergeSort(left), MergeSort(right));
}

function merge(left, right) {
  const sortarr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortarr.push(left.shift());
    } else {
      sortarr.push(right.shift());
    }
  }
  return [...sortarr, ...left, ...right];
}
const arr = [8, 20, -2, -6, 4];

console.log(MergeSort(arr));


