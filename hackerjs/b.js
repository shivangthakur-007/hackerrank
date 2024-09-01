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
  console.log(min, max)
}
minmax([4, 3, 1, 2, 5]);
