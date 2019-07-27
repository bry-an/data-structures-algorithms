function largestPossibleInteger(arr) {
    const arrOfStrings = arr.map(num => num.toString())

    console.log(typeof arrOfStrings[0])
    const sorted = arrOfStrings.sort((a, b) => {
        console.log(b, a)
        return b - a
    })
    return sorted
}
console.log(largestPossibleInteger([1, 2, 3, 4]))
console.log(largestPossibleInteger([10, 7, 76, 415]))