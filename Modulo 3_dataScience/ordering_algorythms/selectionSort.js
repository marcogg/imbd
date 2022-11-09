const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
            if (min != i) {
                [arr[i], arr[min]] = [arr[min, arr[i]]]
            }
        }
    }
    return arr
}

let arr = [5, 8, 9, 7, 36, 4, 1, 2, 6, 5]

console.log(selectionSort(arr))