function decimalToBinary(num) {
    let result = ""
    function recurse(num) {
        if (num < 1) {
            return result // base case to terminate recursive function
        }
        result += num % 2 // append our result with the appropriate binary digit (note that this will need to be reversed below)
        recurse(Math.floor(num / 2)) // recurse the function with the result of the num / 2 minus the remainder
    }
    recurse(num)
    let resultReversed = ""
    for (let i = result.length - 1; i >= 0; i--) { // since the original result appended to the end, we need to reverse the result (per the method of manually calculating a binary number)
        resultReversed += result[i]
    }
    return resultReversed
}

function countConsecutiveOnes(num) {
    const binary = decimalToBinary(num) // convert to binary
    const binaryArray = binary.split("")
    let largest = 0
    let count = 0

    for (let i = 0; i < binaryArray.length; i++) {
        if (binaryArray[i] === "1") {
            count++
            if (count > largest) { // find the largest amount of 1's
                largest = count
            }
        } else { // reset counter to 0 if not 1 since problem requires consecutive 1's
            count = 0
        }
    }
    return largest
}
console.log(countConsecutiveOnes(156)) // 3

