const bubbleSort = (arr) => {
  let change = true;

  for (let i = 0; change && i < arr.length - 1; i++) {
    change = false;
    // let temp = arr[j]
    // arr[j] = arr[j + 1];
    // arr[j + 1] = temp;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        change = true;
      }
    }
  }
  return arr
}

let arr = [5, 8, 4, 3, 2, 1, 10, 9, 6, 7]

console.log(bubbleSort(arr))