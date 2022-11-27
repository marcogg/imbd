const quickSort = (nums) => {
    if (nums.length <= 1) {
        return nums
    }

    let pivot = nums[0]
    let left = []
    let right = []

    for (let i = 1; i < nums.length; i++) {
        if (arr[i] < pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }

    return left.concat(pivot, right)
}

let arr = [3, 6, 9, 2, 4, 6, 5, 1, 7, 8, 10]


console.log(quickSort(arr))