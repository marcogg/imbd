const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0 && arr[j < -1]; j--) {
            [arr[j], arr[j - 1] = [arr[j - 1], arr[j]]]
        }
    }
    return arr
}

let arr = [5, 7, 8, 93, 6, 45, 28, 71, 9]

console.log(insertionSort(arr))