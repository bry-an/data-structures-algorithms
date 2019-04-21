
function isSparse(num) { // O(log N) runtime
    let lastNumberOne = false
    let isSparse = true
    function recurse(num) {
        if (num < 1) {
            return // base case
        }
        if (num % 2 === 1 && lastNumberOne) {
            isSparse = false // last number was 1 and current number is 1 i.e. number is not sparse
            return
        }
        if (num % 2 === 1) {
            lastNumberOne = true // encountered 1
        } else lastNumberOne = false // if 0, reset boolean
        recurse(Math.floor(num / 2))  // calculate next binary digit
    }
    recurse(num)
    return isSparse
}
function nextSparseNumber(num) {
    let result = ""
    function recurse(num) {
        if (num < 1) {
            return result
        }
        result += num % 2
        recurse(Math.floor(num / 2))
    }
    recurse(num)

}

function flipBit(binaryString, i) {
    const start = i
    while (binaryString[i] === "1") {
        i++
    }
    const editedString = binaryString


}
console.log(nextSparseNumber())
