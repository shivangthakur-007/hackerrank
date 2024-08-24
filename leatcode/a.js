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
    let filteredArr = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}
