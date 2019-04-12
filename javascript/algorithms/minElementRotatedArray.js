function minElement(arr) {
    if (arr.length === 2 && arr[0] > arr[1]) {
        return arr[1] // we know this array contains the pivot point and since it only has two out-of-order elements, the second (smaller) must be the smallest
    }
    const mid = Math.ceil(arr.length/2) // must be O(log N) so need to divide N in half on each iteration of recursion
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    if (left[0] > left[left.length-1]) { // we know pivot (thus the smallest #) happens in this half
        return minElement(left)
    }
    else if (right[0] > right[right.length-1]) { // we know pivot (thus the smallest #) happens in this half
        return minElement(right)
    }
    return right[0]
}

console.log(minElement([5, 7, 10, 3, 4])) // 3