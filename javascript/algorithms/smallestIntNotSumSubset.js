function smallestInt(arr) {
    if (arr[0] !== 1) {
        return 1
    }
    if (arr[1] !== 2) {
        return 2
    }
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === result) {
            result = 0
        }
        if (arr[i] !== i + 1) {
            console.log("boom", i)
            result = (arr[i - 1] * (arr[i - 1] + 1)) / 2
        }
        if (result) {
            return result
        }
        return (arr[arr.length - 1] * (arr[arr.length - 1] + 1)) / 2
    }
}
console.log(smallestInt([1, 2, 3, 10]))