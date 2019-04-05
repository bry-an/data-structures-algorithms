// instantiate a new set
// instantiate a counter
// iterate through the array
    // push the element to the set 
    // increment counter
    // if counter !== set.length
        // set.clear()
        // counter = 0


function longestUniqueSubarray(array) {
    const uniqueArray = new Set()
    let counter = 0
    let max = 0

    for (let i = 0; i < array.length; i++) {
        if (uniqueArray.has(array[i])) {
            uniqueArray.clear()
            counter = 0
        }
        uniqueArray.add(array[i])
        counter++
        if (counter > max) {
            max = counter
        }
    }
    return max
}

console.log(longestUniqueSubarray([5, 1, 3, 5, 2, 3, 4, 6]))