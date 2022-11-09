const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    let pivot = arr[0]
    let left = []
    let right = []

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return left.concat(pivot, right)
}

let arr = [3, 6, 9, 2, 4, 6, 5, 1, 7, 8, 10]


console.log(quickSort(arr))