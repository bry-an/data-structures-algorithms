function minElement(arr) {
    if (arr.length === 2 && arr[0] > arr[1]) {
        return arr[1]
    }
    const mid = Math.ceil(arr.length/2) // must be O(log N) so need to divide N in half on each iteration of recursion
    const arr1 = arr.slice(0, mid)
    const arr2 = arr.slice(mid)

    if (arr1[0] > arr1[arr1.length-1]) { // we know pivot happens in this half
        return minElement(arr1)
    }
    else if (arr2[0] > arr2[arr2.length-1]) { // we know pivot happens in this half
        return minElement(arr2)
    }
    return arr2[0]
}

console.log(minElement([16, 17, 18, 19, 11])) // 11