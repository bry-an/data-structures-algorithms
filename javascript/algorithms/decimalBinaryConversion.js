function decimalToBinary(num) {
    let result = ""
    function recurse(num) {
        if (num < 1) {
            return result // base case to terminate recursive function
        }
        result += num % 2 // append our result with the appropriate binary digit (note that this will need to be reversed below)
        recurse(Math.floor(num / 2)) // recurse the function with the result of the num / 2 minus the remainder (Math.floor())
    }
    recurse(num)
    let resultReversed = ""
    for (let i = result.length - 1; i >= 0; i--) { // since the original result appended to the end, we need to reverse the result (per the method of manually calculating a binary number)
        resultReversed += result[i]
    }
    return resultReversed
}
function binaryToDecimal(num) {
    let result = 0
    if (typeof num === "number") {
        num = num.toString()
    }
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] === "1") {
            result += 2 ** (num.length - 1 - i)
        }
    }
    return result
}
console.log(binaryToDecimal("101101000001000"))

module.exports = { decimalToBinary, binaryToDecimal }